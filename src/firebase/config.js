import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo-review-form.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-review-form',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo-review-form.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'demo-app-id'
}

const useFirebaseEmulator = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

if (useFirebaseEmulator) {
  const firestoreHost = import.meta.env.VITE_FIRESTORE_EMULATOR_HOST || '127.0.0.1'
  const firestorePort = Number(import.meta.env.VITE_FIRESTORE_EMULATOR_PORT || 8080)
  projectFirestore.useEmulator(firestoreHost, firestorePort)
}

const projectStorage = firebase.storage()
projectStorage.setMaxUploadRetryTime(10000)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }
