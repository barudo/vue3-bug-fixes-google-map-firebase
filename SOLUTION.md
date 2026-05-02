# Solution

This project is doable with the provided files. The required fixes are contained in `CreateReview.vue` and do not require Vuetify, Axios, or another major framework.

## What Changed

- Google Places Autocomplete now copies the selected `formatted_address` back into Vue state so the displayed address does not disappear and the submitted Firestore document receives the full address.
- Address data is parsed into structured fields for `street`, `city`, `state`, `zip`, and `subpremise`.
- A separate optional `address2` field was added for apartment, unit, suite, building, or floor details.
- The image input now accepts multiple PNG/JPG/JPEG files.
- Selected image file names are shown before upload.
- Images are optional. The submit handler now creates the Firestore document whether or not files were selected.
- Uploaded image metadata is saved as an `images` array, while `coverUrl` and `filePath` are preserved for compatibility with existing single-image code.

## Files

- `CreateReview.vue`: root-level corrected component.
- `src/views/CreateReview.vue`: corrected component used by the runnable Vue app.
- `src/composables`: Firebase Storage, Firestore, and current-user helper functions.
- `src/firebase/config.js`: Firebase v8 setup using Vite environment variables.
- `src/router/index.js`: simple route for creating a review and a placeholder saved-review page.
- `attachments/CreateReview.vue`: original attached component updated with the same fix.

## Running the App

1. Copy `.env.example` to `.env`.
2. Fill in the Google Maps and Firebase values.
3. Run `npm install`.
4. Run `npm run dev`.
