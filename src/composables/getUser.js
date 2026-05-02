import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged((firebaseUser) => {
  user.value = firebaseUser
})

const getUser = () => {
  return { user }
}

export default getUser
