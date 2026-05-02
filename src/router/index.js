import { createRouter, createWebHistory } from 'vue-router'
import CreateReview from '@/views/CreateReview.vue'

const routes = [
  {
    path: '/',
    name: 'CreateReview',
    component: CreateReview
  },
  {
    path: '/reviews/:id',
    name: 'ReviewDetails',
    props: true,
    component: {
      props: ['id'],
      template: `
        <main class="max-w-screen-md mx-auto p-6">
          <h1 class="text-2xl font-bold text-zaggray">Review saved</h1>
          <p class="mt-2 text-gray-600">Firestore document ID: {{ id }}</p>
          <router-link class="inline-block mt-6 text-zagblue underline" to="/">Create another review</router-link>
        </main>
      `
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
