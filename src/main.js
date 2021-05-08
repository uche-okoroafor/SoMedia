import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './assets/styles.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faBars,faEnvelope,faPhone, faSortUp, faSortDown, faBell,
 faUser, faUserClock, faNewspaper, faHome, faSignOutAlt, faSignInAlt, 
faPhoneSquareAlt, faInfo, faSearch, faEdit,
 faImage, faVideo, faThumbsUp, faThumbsDown, faChevronRight, faCaretLeft, faCaretRight, faCheckDouble, faCheck, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/vue-fontawesome";
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

library.add(faBars,faPhone,faSortDown,faSortUp,faEnvelope,faBell,faUser,
faUserClock,faHome,faNewspaper,faSignOutAlt,faSignInAlt,
faPhoneSquareAlt,faInfo,faSearch,faEdit,faImage,faVideo,faThumbsUp,faThumbsDown,faChevronRight,faCaretLeft,faCaretRight,
faCheckDouble,faCheck,faUserFriends
);



createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(store).use(router).mount('#app')
