import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
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
      render() {
        return h('main', { class: 'max-w-screen-md mx-auto p-6' }, [
          h('h1', { class: 'text-2xl font-bold text-zaggray' }, 'Review saved'),
          h('p', { class: 'mt-2 text-gray-600' }, `Firestore document ID: ${this.id}`),
          h(
            'a',
            {
              class: 'inline-block mt-6 text-zagblue underline',
              href: '/'
            },
            'Create another review'
          )
        ])
      }
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
