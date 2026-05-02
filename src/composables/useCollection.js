import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const useCollection = (collection) => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null

    try {
      return await projectFirestore.collection(collection).add(doc)
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return { error, addDoc }
}

export default useCollection
