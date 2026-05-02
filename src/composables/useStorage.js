import { ref } from 'vue'
import { projectStorage } from '@/firebase/config'

const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  const uploadImage = async (file) => {
    error.value = null
    filePath.value = `review-images/${Date.now()}-${file.name}`

    const storageRef = projectStorage.ref(filePath.value)

    try {
      const response = await storageRef.put(file)
      url.value = await response.ref.getDownloadURL()
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return { error, filePath, url, uploadImage }
}

export default useStorage
