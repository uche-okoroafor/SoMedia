import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './assets/styles.css'
import {faFacebookF,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faBars,faEnvelope,faPhone, faSortUp, faSortDown, faBell,
 faUser, faUserClock, faNewspaper, faHome, faSignOutAlt, faSignInAlt, 
faPhoneSquareAlt, faInfo, faSearch, faEdit,
 faImage, faVideo, faThumbsUp, faThumbsDown, faChevronRight, faCaretLeft, faCaretRight, faCheckDouble, faCheck, faUserFriends, faUsers, faLock, faAt, faChevronLeft, faTimesCircle, faPlus, faFolderPlus, faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/vue-fontawesome";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


library.add(faBars,faPhone,faSortDown,faSortUp,faEnvelope,faBell,faUser,
faUserClock,faHome,faNewspaper,faSignOutAlt,faSignInAlt,
faPhoneSquareAlt,faInfo,faSearch,faEdit,faImage,faVideo,faThumbsUp,faThumbsDown,faChevronRight,faCaretLeft,faCaretRight,
faCheckDouble,faCheck,faUserFriends,faUsers,faLock,faAt,faChevronLeft,faTimesCircle,faFolderPlus,faBars,faFacebookF,faTwitter,faGithub,faInstagram,faLinkedinIn,faEye
);



createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(store).use(router).mount('#app')
