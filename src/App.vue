<template>

  <nav>
    <div class="nav-container-one">
      <div class="logo-container">
        <h3>SoMedia</h3>


        <span class="search-icon">{{''}}
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>

        <input type="text" placeholder=" Search for Friends..." v-model="searchInput">


      </div>

      <ul class="website-info">
        <li> <a href="#about">About</a> <font-awesome-icon 
:icon="['fas', 'info']" />
        </li>
        <li> <a href="#contact">Contact</a> <font-awesome-icon 
:icon="['fas', 'phone-square-alt']" />
        </li>
        <li>
          <!-- <button class="log-out">Logout <font-awesome-icon :icon="['fas', 'sign-out-alt']" v-if="true"  />
</button> -->
          <button @click="handleLogin('')" class="btn btn-danger m-1" v-if="logout">LogOut
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
          </button>
          <button @click="handleLogin('login')" class="btn btn-success m-1" v-if="updateUserData">LogIn
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
          </button>
        </li>
      </ul>


      <div class="user-icon">


        <span ref="userImage" class="userImage" @click="handleUserOwnMenu"> <img :src="handleUserIcon()" alt="">
          {{userData.userName}}
          <font-awesome-icon :icon="['fas', 'sort-down']" v-if="dropIconDisplay" ref="sortDown" />
          <font-awesome-icon :icon="['fas', 'sort-up']" v-if="!dropIconDisplay" ref="sortUp" />
          <div class="dropdown-OwnMenu" ref="userOwnMenu">
            <ul>
              <li @click="showFriends()">Your Friends</li>
              <li @click="showFriends()">Your Followers</li>
              <li @click="showFriends()"> Following</li>
              <li @click="'chats'">Chats</li>

            </ul>
          </div>

        </span>

      </div>

    </div>


    <div class="nav-container-two">

      <ul class="home-list">
        <li ref="home" @click="handleActiveLink('home')" class="active-link  lists">
          <router-link :to="{ name: 'Home' }">Home</router-link> <font-awesome-icon
 :icon="['fas', 'home']" ref="homeIcon" />
        </li>
        <li class="lists" ref="newsFeed" @click="handleActiveLink('newsFeed')"><router-link :to="{ name: 'Home' }">Newsfeed </router-link>
          <font-awesome-icon :icon="['fas', 'newspaper']" ref="newsFeedIcon" /><span class="show-counter" v-if="timelineCount? true:false">{{timelineCount}}</span>
        </li>

        <li class="lists" ref="timeline" @click="handleActiveLink('timeline')">
          <router-link :to="{name:'Timeline',params:{userName:$store.state.userData.userName,Timeline:'Timeline'}}">
            Timeline</router-link> <font-awesome-icon 
:icon="['fas', 'user-clock']" ref="timelineIcon" />
        </li>
        <li class="lists" ref="profile" @click="handleActiveLink('profile')">
          <router-link :to="{
                name: 'userProfile',
                params: { userName: userData.userName },
              }">
            Profile
          </router-link>
          <font-awesome-icon :icon="['fas', 'user']" ref="profileIcon" />
        </li>
        <li class="lists" ref="messages" @click="()=>{handleActiveLink('messages')
showMessages()}">Messages
          <font-awesome-icon :icon="['fas', 'envelope']" ref="messageIcon" /><span
            class="show-counter-messages" v-if="newMessageCount? true:false">{{newMessageCount}}</span>
        </li>
        <li class="lists" ref="notifications" @click="handleNotifications('notifications')">
          Notifications
          <font-awesome-icon :icon="['fas', 'bell']" ref="notificationIcon"  />
          <span class="show-counter-notification" v-if="notificationCount? true:false" >{{notificationCount}}</span>

          <div class="dropdown-notifications" ref="notificationMenu">
            <font-awesome-icon :icon="['fas', 'sort-up']" class="pointer-part" />
            <ul v-for="notification in notifications">
              <li ref="lists"
                @click="showNotificationDetails('friend request',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'friend request' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
               <span   class="names-Bold" >{{notification.userName}}</span> sent you a {{notification.notificationType}} <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
              <li ref="lists"
                @click="showNotificationDetails('message',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'message' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                You have a new {{notification.notificationType}} from <span  class="names-Bold" >{{notification.userName}}</span> <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
              <li ref="lists" @click="showNotificationDetails('post',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'post' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                Your friend <span  class="names-Bold" >{{notification.userName}}</span> just made a new {{notification.notificationType}} <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.posterUserName === userData.userName">
                <span  class="names-Bold" >{{notification.userName}}</span> likes your post <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
          <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                Your friend <span  class="names-Bold" >{{notification.userName}}</span> likes <span  class="names-Bold" >{{notification.posterUserName}}</span>'s post <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
              <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.userName === userData.userName">
                <span  class="names-Bold" >{{notification.userName}}</span> likes your comment on <span  class="names-Bold" >{{notification.posterUserName}}</span>'s post <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
              <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.posterUserName === userData.userName">
                <span  class="names-Bold" >{{notification.userName}}</span> commented on your post <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
              <li ref="lists"  
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName,notification.posterUserName)" 
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">Your friend 
                <span  class="names-Bold" >{{notification.userName}}</span> commented on <span class="names-Bold" >{{notification.posterUserName}}</span>'s post <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>

              <li ref="lists"
                @click="showNotificationDetails('follow',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'follow' && notification.notificationStatus === 'unRead' && notification.userName !== userData.userName">
                <span  class="names-Bold" >{{notification.userName}}</span> started following you <br> <span>{{showDate(notification.notificationDate)}}</span> <hr></li>
            </ul>
<span v-if="!notificationCount? true:false">You have no new Notification</span>

          </div>
        </li>

      </ul>

      <div class="user-icon">


        <span ref="userImage" class="userImage" @click="handleUserOwnMenu"> <img :src="handleUserIcon()" alt=""> <span>
            {{userData.userName}}</span> <font-awesome-icon 
:icon="['fas', 'sort-down']" v-if="dropIconDisplay" ref="sortDown" />
          <!-- @click="showUserTimeline(userData.userName, userData.userId)" -->
          <font-awesome-icon :icon="['fas', 'sort-up']" v-if="!dropIconDisplay" ref="sortUp" />

          <div class="dropdown-OwnMenu" ref="userOwnMenu">
            <font-awesome-icon :icon="['fas', 'sort-up']" class="pointer-part" />

            <ul>
              <li @click="showFriends">Your Friends</li>
              <li @click="showFriends">Your Followers</li>
              <li @click="showFriends"> Following</li>
              <li @click="'chats'">Chats</li>
            </ul>
          </div>

        </span>

      </div>

    </div>


  </nav>









































  <router-view />
</template>

<script>
import moment from "moment"

  export default {
    name: "App",
    data() {
      return {
 
        userData: {},
        login: true,
        logout: false,
        notificationState: false,
        userOwnMenu: false,
        activeLink: "home",
        searchInput: '',
        dropIconDisplay: true,
        notifications: [],
        notificationCount: '',
newMessageCount:0,
timelineCount:0,
      }
    },
    created() {
      window.addEventListener('click', (event) => this.handleCloseDropDown(event))
    },
    unmounted() {

      window.removeEventListener('click', (event) => this.handleCloseDropDown(event))
    },


  // mounted() {
  //   this.loadData();
  // },
  // beforeUnmount() {
  //   this.loadData();
  // },

    methods: {



      handleLogin(params) {
        if (params) {


          return this.$router.push({ name: "Login" });
        }

        this.login = true
        this.logout = false
        this.$router.push({ name: "Login" });
        this.$store.dispatch("updateUserData", {
          Guest: {
            userName: "Guest",
            emailAddress: "",
            password: "",
            emailAddress: "419",
            firstName: "",
            lastName: "",
            address: "",
            emailAddress: "",
            postCode: "",
            country: "",
            city: "",
            aboutMe: "",
            messages: [],
            posts: [],
            followers: [],
            following: [],
            friends: [],
          },
        });



      },

      handleUserIcon() {
        if (this.userData.userThumbnail === undefined || !this.userData.userThumbnail) {

          return " https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
          // require('./assets/userThumbnail/original1.jpg')

        }

        return this.userData.userThumbnail

      },


      handleCloseDropDown(e) {

        let noticeMenu = this.$refs.notifications
        let ownMenu = this.$refs.userImage
        let target = e.target
        if (ownMenu !== target && !ownMenu.contains(target) && this.userOwnMenu === true) {

          this.handleUserOwnMenu()
        }

        if (noticeMenu !== target && !noticeMenu.contains(target) && this.notificationState === true) {
          this.handleNotifications()

        }

      },
      handleUserOwnMenu() {
        if (this.userOwnMenu) {
          this.$refs.userOwnMenu.style = "display:none;height:0;transition:all 1s"
          this.dropIconDisplay = !this.dropIconDisplay
        }
        else {
          this.$refs.userOwnMenu.style = "display:flex;height:auto;transition:all 1s";
          this.dropIconDisplay = !this.dropIconDisplay
        }
        this.userOwnMenu = !this.userOwnMenu

      },
      handleActiveLink(activeLink) {
        this.$refs.[this.activeLink].classList.remove("active-link")
        this.$refs.[activeLink].classList.add("active-link")
        this.activeLink = activeLink

      },

      handleNotifications() {
        this.notificationState ? this.$refs.notificationMenu.style = "display:none;height:0;transition:all 1s" : this.$refs.notificationMenu.style = "display:flex;height:auto;transition:all 1s"

        this.notificationState = !this.notificationState
      },
      showMessages() {
        if (this.userData.userName !== "Guest") {
          this.$router.push({
            name: "Messages",
            params: { userName: this.userData.userName },
          });
        }
      },
      showFriends() {
        if (this.userData.userName !== "Guest") {
          this.$router.push({
            name: "Friends",
            params: { userName: this.userData.userName },
          });
        }
      },




      showUserTimeline(userName) {
        this.$router.push({
          name: "Timeline",
          params: { userName: userName, Timeline: "Timeline" },
        });

      },

      showNotificationDetails(notificationType, notificationId, userName, posterUserName) {

        switch (notificationType) {

          case 'friend request':
            this.$router.push({
              name: "Friends",
              params: { userName: this.userData.userName },
            })
            break;


          case 'message':
            this.$store.dispatch("handleMessageViewStatus", {
              friendMessaged: userName,
              userName: this.userData.userName,
              messageViewStatus: "Read",
              showMessage: "on"
            });


            this.$router.push({
              name: "Messages",
              params: { userName: this.userData.userName },
            })
            break;

          case 'post':
            this.$router.push({
              name: "Timeline",
              params: { userName, Timeline: "Timeline" },
            })



            break;

          case 'likes':
            this.$router.push({
              name: "Timeline",
              params: { userName: posterUserName, Timeline: "Timeline" },
            })


            this.$store.dispatch("handleNotificationUpdate", {
              userName: this.userData.userName,
              notificationStatus: "Read",
              notificationType: 'likes'
            });
            break;

          case 'comment':
            this.$router.push({
              name: "Timeline",
              params: { userName: posterUserName, Timeline: "Timeline" },
            })

            this.$store.dispatch("handleNotificationUpdate", {
              userName: this.userData.userName,
              notificationStatus: "Read",
              notificationType: 'comment'
            });
            break;

          default:
            break;
        }



      },


 showDate(date) {
    const currentDate = Date.now();
    const dateStatus = currentDate - date;
    const minutes = Math.round(dateStatus / (1000 * 60));
    const hours = Math.round(dateStatus / (1000 * 60 * 60));
    const days = Math.round(dateStatus / (1000 * 60 * 60 * 24));
    const weeks = Math.round(dateStatus / (1000 * 60 * 60 * 24 * 7));
    const months = Math.round(dateStatus / (1000 * 60 * 60 * 24 * 7 * 12));
    const years = Math.round(dateStatus / (1000 * 60 * 60 * 365));

    if (minutes <= 0) {
      return "Just now";
    } else if (minutes < 59) {
      return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
    } else if (hours < 11) {
      return hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else if (days >= 1) {
      return days === 1 ? "1 day ago" : days + " days ago";
    } else if (weeks < 59) {
     return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
    } else if (months < 59) {
       return    months === 1 ? "1 month ago" : months + " mouths ago";
    } else {
      return   years === 1 ? "1 year ago" : years + " years ago";
    }
  },


    },
    computed: {

      updateUserData() {
        const userData = this.$store.state.userData
        this.userData = this.$store.state.userData

        let notifications = []
        for (const notificationId in this.userData.notifications) {
          notifications = [...notifications, this.userData.notifications[notificationId]]
        
          this.notifications = notifications
        }


  this.$store.dispatch("handleMessageStatus", {
        userName: this.userData.userName,
      });



let messageStatus ={}
for(let messageUserName in this.userData.messageStatus){
if(this.userData.messageStatus[messageUserName].messageViewStatus === "unRead"){
for(let messageId in this.userData.messages[messageUserName]){
if(this.userData.messages[messageUserName][messageId].messageStatus === "received")
{


messageStatus = {...messageStatus,[messageId]:{friendMessaged:this.userData.messages[messageUserName][messageId].userName}}


}



}

}


}

this.newMessageCount =  Object.keys(messageStatus).length 

// if(this.userName !== "Guest"){
// console.log(1,this.$store.state.users["bose"].messages);
// console.log(2,this.$store.state.users["uche"].messages["bose"]);
// console.log(3,this.$store.state.users["chigo"].messages["bose"]);
// }

let timelineCounter ={};

for(const userKey in this.$store.state.newsFeed ){
if(!this.$store.state.newsFeed[userKey].views.includes(this.userData.userName))
{
timelineCounter={...timelineCounter,[userKey]:{userName:this.$store.state.newsFeed[userKey].userName}}

}
}

this.timelineCount = Object.keys(timelineCounter).length


        const notificationCount = this.notifications.filter((noticeStatus) => noticeStatus.notificationStatus === "unRead")

        this.notificationCount = notificationCount.length



        let login = true
        if (this.$store.state.userData.userName !== "Guest") {
          login = false
          this.logout = true
        } else { login = true }
        return login
      }

    }




  };
</script>



<style>



</style>