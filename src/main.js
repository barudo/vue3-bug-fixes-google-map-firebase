import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCameraRetro,
  faCloudUploadAlt,
  faGhost,
  faPencilAlt,
  faUser,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  faGrin,
  faMeh,
  faMehBlank,
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import router from './router'
import './style.css'

library.add(
  faCameraRetro,
  faCloudUploadAlt,
  faGhost,
  faGrin,
  faMeh,
  faMehBlank,
  faPencilAlt,
  faQuestionCircle,
  faUser,
  faUserSecret
)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .mount('#app')
