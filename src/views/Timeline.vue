<template>
  <div class="timeline-layout">

    <div class="profile-cover-container" :style="userCoverImage">
      <!-- 
    <h2>{{ userData.userName }}</h2>
  <h2>{{handleUserNames}}</h2> -->
      <div class="cover-Links">
        <ul>
          <li @click="toggleDisplay('displayPosts')">
            <router-link :to="{
            name: 'Timeline',
            params: { userName: userData.userName, Timeline: 'Timeline' },
          }">Timeline</router-link>
          </li>
          <li @click="toggleDisplay('displayProfile')">
            <router-link :to="{
            name: 'Timeline',
            params: { userName: userData.userName, Timeline: 'Profile' },
          }">Profile</router-link>
          </li>
          <li @click="toggleDisplay('displayPhotos')">
            <router-link :to="{
            name: 'Timeline',
            params: { userName: userData.userName, Timeline: 'Photos' },
          }">Photos</router-link>
          </li>
          <li @click="handleShowFriends( userData.userName)">
            Friends
          </li>
          <li>
            <router-link :to="{
            name: 'userProfile',
            params: { userName: $store.state.userData.userName },
          }">
              My Profile
            </router-link>
          </li>
        </ul>
      </div>




      <div class="user-profile-pic">

        <img :src="handleUserProfilePic(userName)" alt="">
        <span class="username-header">{{userData.userName}}</span>
      </div>
    </div>
    <div class="timeline-container">





      <div class="sideBar">
        <div class="timeline-user-photos">
          <div class="user-photos-header">

            <h5 v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}'s Photos
            </h5>
            <h5 v-else>Your Photos</h5>
            <!-- if="this.userData.userName === this.$store.state.userData.userName" -->
          </div>
          <div class="userPhotos">
            <div v-for="photo in userData.photos" :key="photo.imageId" class="image-photos">
              <img :src="photo.imageUrl" alt="" @click="displayPhotosComp(photo)">


            </div>
          </div>

        </div>

      </div>
      <div class="components-container">

        <Posts :userName="handleUserNames" v-if="displayPosts" :loadData="loadData" />
        <Photos :userName="handleUserNames" v-show="displayPhotos" />
        <Friends :userName="handleUserNames" v-show="displayFriends" @toggleView="toggleDisplay" />
        <Profiles :userName="handleUserNames" v-show="displayProfile" @toggleView="toggleDisplay" />

      </div>







      <div class="activities-container">
        <div class="active-header" :style="positioning">
          <h5 v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}'s Activities
          </h5>
          <h5 v-if="this.userData.userName === this.$store.state.userData.userName">Your Activities</h5>
        </div>
        <div class="active-container" :style="positioning">



          <ul v-for="activity in userData.activities" @click="showActivityDetails(activity.posterUserName)">
            <li v-if="activity.activity === 'followed'">You started
              <br> following {{activity.friendUserName}} <br> {{ showDate(activity.activityDate) }}
              <hr>
            </li>
            <li v-if="activity.activity === 'posted'">You made <br> a
              post <br>{{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'commented' && activity.posterUserName !== this.userData.userName ">You
              commented on a <br> post by {{activity.posterUserName}} <br> {{showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'commented' && activity.posterUserName === this.userData.userName ">You
              commented on a <br> post You Made<br> {{ showDate(activity.activityDate)}}
              <hr>
            </li>

            <li v-if="activity.activity === 'liked' && activity.posterUserName !== userData.userName">You liked a <br>
              post by
              {{activity.posterUserName}} <br> {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li
              v-if="activity.activity === 'likedComment' && activity.posterUserName !== activity.commenterUserName && activity.posterUserName !== this.userData.userName ">
              You
              liked a <br> comment by {{activity.commenterUserName}} on {{activity.posterUserName}}'s Post <br>
              {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'likedComment'&& activity.posterUserName === activity.commenterUserName">You
              liked a <br> comment by {{activity.commenterUserName}} on {{handleGender(activity.posterUserName)}}
              Post<br>
              {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'likedComment'&& activity.posterUserName === this.userData.userName">You
              liked a <br> comment by {{activity.commenterUserName}} on Your Post<br>
              {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'liked' && activity.posterUserName === userData.userName">You liked <br>
              Your own
              post<br> {{ showDate(activity.activityDate)}}
              <hr>
            </li>

            <!-- <li   @click="showActivityDetails('message',notification.notificationId,notification.userName)" v-if="notification.notificationType === 'message' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">You have a new {{notification.notificationType}} from {{notification.userName}}<hr></li>
<h6   @click="showActivityDetails('post',notification.notificationId,notification.userName)" v-if="notification.notificationType === 'post' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">Your friend {{notification.userName}} just made a new {{notification.notificationType}}</h6>
<h6   @click="showActivityDetails('likes',notification.notificationId,notification.userName)" v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName === userData.userName">{{notification.userName}} likes your post</h6>
<h6   @click="showActivityDetails('comment',notification.notificationId,notification.userName)" v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName === userData.userName">{{notification.userName}} commented on your post</h6>
<h6   @click="showActivityDetails('comment',notification.notificationId,notification.userName,notification.posterUserName)" v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">Your friend {{notification.userName}} commented on {{notification.posterUserName}}'s post</h6>
<h6   @click="showActivityDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)" v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">Your friend {{notification.userName}} likes {{notification.posterUserName}}'s post</h6>
<h6   @click="showActivityDetails('follow',notification.notificationId,notification.userName)" v-if="notification.notificationType === 'follow' && notification.notificationStatus === 'unRead' && notification.userName !== userData.userName">{{notification.userName}} started following you</h6> -->

          </ul>

        </div>
      </div>




    </div>

  </div>




  <div>
  </div>


</template>
<script>
  import Posts from "../components/Posts"
  import Photos from "../components/Photos.vue"
  import Friends from "../components/Friends.vue"
  import Profiles from "../components/Profiles.vue"
  import moment from 'moment'


  export default {
    name: "About",
    props: ["Timeline", "userName"],
    components: { Posts, Friends, Photos, Profiles },
    data() {
      return {
        userData: {},
        displayPosts: true,
        displayFriends: false,
        displayPhotos: false,
        displayProfile: false,
        activePosition: false,

      };
    },

    mounted() {
      this.loadData(this.userName, "load");
    },
    beforeUnmount() {
      this.loadData(this.userName, "unLoad");
    },
    methods: {
      loadData(userName, params) {
        this.userData = this.$store.state.users[userName];


        params === "load" ? this.$store.dispatch("handleDisplayFunctions", {
          activeLink: "Timeline",
          params: "activeLink"
        }) : this.$store.dispatch("handleDisplayFunctions", {
          activeLink: "",
          params: "activeLink"
        })





        if (this.$store.state.userData.userName === "Guest") {
          this.$router.push({
            name: 'Login',
          });



        }

      },

      displayPhotosComp(photo) {
        this.$store.dispatch("handleDisplayFunctions", {
          displayClickedImage: photo,
          params: "displayClickedImage"
        });
        this.toggleDisplay("displayPhotos")


      },

      handleShowFriends(userName) {
        userName === this.$store.state.userData.userName && this.$router.push({ name: "Friends", params: { userName: userName } })
        userName !== this.$store.state.userData.userName && this.toggleDisplay("displayFriends")

      },


      handleUserProfilePic(userName) {
        if (this.$store.state.users[userName].userThumbnail !== undefined && this.$store.state.users[userName].userThumbnail.length) {
          return this.$store.state.users[userName].userThumbnail

        }

        return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"

      },


      showActivityDetails(userName) {

        // console.log(userName);



      },

      showDate(date) {
        let currentDate = Date.now();
        let dateStatus = currentDate - date;
        const minutes = Math.round(dateStatus / (1000 * 60));
        const hours = Math.round(dateStatus / (1000 * 60 * 60));
        const days = Math.round(dateStatus / (1000 * 60 * 60 * 24));
        const weeks = Math.round(dateStatus / (1000 * 60 * 60 * 24 * 7));
        const months = Math.round(dateStatus / (1000 * 60 * 60 * 24 * 7 * 12));
        const years = Math.round(dateStatus / (1000 * 60 * 60 * 365));

        if (minutes <= 0) {
          return "Just now";
        } else if (minutes < 59) {
          return minutes === 1 ? "1 minute ago" : minutes + "minutes ago";
        } else if (hours < 11) {
          return moment(date).format("L, h:mm :ss a");
        } else if (days >= 1) {
          return moment(date).format("L, h:mm:ss a");
        } else if (weeks < 59) {
          return moment(date).format("L, h:mm :ss a");
        } else if (months < 59) {
          return moment(date).format("L, h:mm :SS a");
        } else {
          return moment(date).format("L, h:mm a");
        }
      },




      toggleDisplay(params) {
        switch (params) {
          case "displayPosts":
            this.displayPosts = true
            this.displayFriends = false
            this.displayPhotos = false
            this.displayProfile = false
            break;



          case "displayFriends":
            this.displayPosts = false
            this.displayFriends = true
            this.displayPhotos = false
            this.displayProfile = false
            this.$router.push({ name: "Timeline", params: { userName: this.userData.userName, Timeline: 'Friends' } })
            break;

          case "displayPhotos":
            this.displayPosts = false
            this.displayFriends = false
            this.displayPhotos = true
            this.displayProfile = false

            break;

          case "displayProfile":
            this.displayPosts = false
            this.displayFriends = false
            this.displayPhotos = false
            this.displayProfile = true
            break;


          default:
            break;
        }
      },

      handleGender(userName) {

        for (const user in this.$store.state.users)
          if (this.$store.state.users[userName].gender === "male") {
            return "his"

          }

        return "her"
      },




    },
    computed: {
      positioning() {
        if (this.$store.state.displayFunctions.navCollapsed) {
          this.activePosition = "position:fixed;top:15%;margin:0 20px;transition: cubic-bezier(0.39, 0.575, 0.565, 1);"
          return this.activePosition

        }
        else {
          this.activePosition = "position:relative"

          return this.activePosition

        }



      },

      userCoverImage() {

        return `background-image:url(${this.userData.userCoverImage})`

      },

      handleUserNames() {

        const userName = this.userName

        this.loadData(this.userName)

        return userName

      }


    }
  };
</script>
<style>

</style>
