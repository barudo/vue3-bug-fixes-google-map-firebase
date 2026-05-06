import { expect, test } from '@playwright/test'
import { existsSync, readFileSync } from 'node:fs'

const tinyPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
)

const requiredFirebaseEnv = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
]

const loadEnv = () => Object.fromEntries(
  readFileSync('.env', 'utf8')
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const separator = line.indexOf('=')
      return [line.slice(0, separator), line.slice(separator + 1)]
    })
)

test.beforeAll(() => {
  if (process.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
    return
  }

  if (!existsSync('.env')) {
    throw new Error('Create .env from .env.example and add real Firebase values before running this test.')
  }

  const env = loadEnv()
  const invalidKeys = requiredFirebaseEnv.filter((key) => {
    const value = env[key]
    return !value || value.startsWith('your-') || value.includes('your-project')
  })

  if (invalidKeys.length) {
    throw new Error(`Add real Firebase values to .env before running this test: ${invalidKeys.join(', ')}`)
  }
})

const fillRequiredReviewFields = async (page) => {
  const uniqueAddress = `123 Test Street ${Date.now()}`

  await page.goto('/')

  await page.locator('#autocomplete').fill(uniqueAddress)
  await page.locator('#address2').fill('Unit 4B')
  await page.locator('#property_type').selectOption('1_family')
  await page.locator('#propPros').fill('sunny, quiet, close to transit')
  await page.locator('#propCons').fill('old roof, small closets, street noise')

  await expect(page.locator('#propPros')).toHaveValue('sunny, quiet, close to transit')
  await expect(page.locator('#propCons')).toHaveValue('old roof, small closets, street noise')

  await page.locator('input[name="whenReviewerVisitedProp"][value="30"]').check()
  await page.locator('input[name="reviewerAnyRelWithSellerOrAgent"][value="none"]').check()
  await page.locator('input[name="reviewPrivacy"][value="keepFullyPrivate"]').check()
}

const collectDiagnostics = (page) => {
  const messages = []

  page.on('pageerror', (error) => {
    throw error
  })
  page.on('console', (message) => {
    messages.push(`${message.type()}: ${message.text()}`)
  })
  page.on('requestfailed', (request) => {
    if (request.url().includes('firestore.googleapis.com') || request.url().includes('firebasestorage.googleapis.com')) {
      messages.push(`request failed: ${request.url()} ${request.failure()?.errorText}`)
    }
  })
  page.on('response', async (response) => {
    if (
      (response.url().includes('firestore.googleapis.com') || response.url().includes('firebasestorage.googleapis.com')) &&
      response.status() >= 400
    ) {
      messages.push(`response: ${response.status()} ${response.url()}`)
    }
  })

  return messages
}

const submitAndExpectSavedReview = async (page, messages) => {

  await page.getByRole('button', { name: /submit review/i }).click()

  await expect(page, messages.join('\n')).toHaveURL(/\/reviews\/[^/]+$/, {
    timeout: 45000
  })
  await expect(page.getByRole('heading', { name: 'Review saved' })).toBeVisible()
  await expect(page.getByText(/Firestore document ID:/)).toBeVisible()

  const documentId = page.url().split('/reviews/')[1]
  console.log(`Firestore document ID: ${documentId}`)
}

test('submits a review to Firestore without images', async ({ page }) => {
  const messages = collectDiagnostics(page)

  await fillRequiredReviewFields(page)
  await submitAndExpectSavedReview(page, messages)
})

test('uploads an image and submits a review to Firestore', async ({ page }) => {
  const messages = collectDiagnostics(page)

  await fillRequiredReviewFields(page)

  await page.locator('#image_uploads').setInputFiles({
    name: 'review-test.png',
    mimeType: 'image/png',
    buffer: tinyPng
  })
  await expect(page.getByText('review-test.png')).toBeVisible()
  await expect(page.getByRole('img', { name: 'review-test.png' })).toBeVisible()

  await submitAndExpectSavedReview(page, messages)
})
