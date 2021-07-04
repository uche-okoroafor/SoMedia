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
          }" :style="displayPosts && activeLink">Posts</router-link>
          </li>
          <li @click="toggleDisplay('displayProfile')">
            <router-link :to="{
            name: 'Timeline',
            params: { userName: userData.userName, Timeline: 'Profile' },
          }" :style="displayProfile && activeLink">Profile</router-link>
          </li>
          <li @click="toggleDisplay('displayPhotos')">
            <router-link :to="{
            name: 'Timeline',
            params: { userName: userData.userName, Timeline: 'Photos' },
          }" :style="displayPhotos && activeLink">Photos</router-link>
          </li>
          <li @click="handleShowFriends( userData.userName)">
            <a :style="displayFriends && activeLink" ref="timelineFriendsLink">
              Friends</a>
          </li>
        </ul>
      </div>




      <div class="user-profile-pic">

        <img :src="handleUserProfilePic(userName)" alt="">
        <span class="username-header">{{userData.userName}}</span>
      </div>
    </div>
    <div class="timeline-container">





      <div class="sideBar" v-if="displayPhotosContainer">
        <div class="timeline-user-photos">
          <div class="user-photos-header">

            <h5 v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}'s Photos
            </h5>
            <h5 v-else>Your Photos</h5>
            <!-- if="this.userData.userName === this.$store.state.userData.userName" -->
          </div>
          <div v-if="photoEmpty && userData.userName === $store.state.userData.userName" class="photo-empty"><span
              class="comment"> Add Your Photos </span> </div>
          <div v-if="photoEmpty && userData.userName !== $store.state.userData.userName" class="photo-empty"><span
              class="comment"> {{handleUserNames}} has no Photos </span> </div>

          <div v-else class="userPhotos">
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







      <div class="activities-container" :class="activitiesDisplay">

        <div class="active-container">
          <div class="active-header">
            <h5 v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}'s Activities
            </h5>
            <h5 v-if="this.userData.userName === this.$store.state.userData.userName">Your Activities</h5>
          </div>


          <ul v-for="activity in activities">
            <li v-if="activity.activity === 'Created account'"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span> Created a
              <br> SoMedia Account
              <br> {{ showDate(activity.activityDate) }}
              <hr>
            </li>
            <li v-if="activity.activity === 'followed'"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span> started
              <br> following {{activity.friendUserName}} <br> {{ showDate(activity.activityDate) }}
              <hr>
            </li>
            <li v-if="activity.activity === 'posted'"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span> made <br> a
              post <br>{{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'commented' && activity.posterUserName !== this.userData.userName "><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span>
              commented on a <br> post by {{activity.posterUserName}} <br> {{showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'commented' && activity.posterUserName === this.userData.userName "><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span>
              commented on a <br> post <span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span> Made<br> {{ showDate(activity.activityDate)}}
              <hr>
            </li>

            <li v-if="activity.activity === 'liked' && activity.posterUserName !== userData.userName"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span> liked a <br>
              post by
              {{activity.posterUserName}} <br> {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li
              v-if="activity.activity === 'likedComment' && activity.posterUserName !== activity.commenterUserName && activity.posterUserName !== this.userData.userName ">
              <span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span>
              liked a <br> comment by {{activity.commenterUserName}} on {{activity.posterUserName}}'s Post <br>
              {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'likedComment'&& activity.posterUserName === activity.commenterUserName"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span>
              liked a <br> comment by {{activity.commenterUserName}} on {{handleGender(activity.posterUserName)}}
              Post<br>
              {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'likedComment'&& activity.posterUserName === this.userData.userName"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span>
              liked a <br> comment by {{activity.commenterUserName}} on  <span
                v-if="this.userData.userName === this.$store.state.userData.userName">Your</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleGender(this.userData.userName)}}</span> Post<br>
              {{ showDate(activity.activityDate)}}
              <hr>
            </li>
            <li v-if="activity.activity === 'liked' && activity.posterUserName === userData.userName"><span
                v-if="this.userData.userName === this.$store.state.userData.userName">You</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}</span> liked <br>
              <span
                v-if="this.userData.userName === this.$store.state.userData.userName">Your</span>
              <span v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleGender(this.userData.userName)}}</span> own
              post<br> {{ showDate(activity.activityDate)}}
              <hr>
            </li>

          </ul>

        </div>
      </div>




    </div>

  </div>




  <div>
  </div>

  <Footer v-if="false" />
</template>
<script>
  import Posts from "../components/Posts"
  import Photos from "../components/Photos.vue"
  import Friends from "../components/Friends.vue"
  import Profiles from "../components/Profiles.vue"
  import Footer from "../components/Footer.vue"
  import moment from 'moment'


  export default {
    name: "About",
    props: ["Timeline", "userName"],
    components: { Posts, Friends, Photos, Profiles, Footer },
    data() {
      return {
        userData: {
          photos: [],
        },
        displayPosts: true,
        displayFriends: false,
        displayPhotos: false,
        displayProfile: false,
        activePosition: false,
        activeLink: "background-color: var(--pink);color: var(--navy-blue) !important;font-weight: bold;border-radius:5px;border-bottom-left-radius: 0;border-bottom-right-radius:0 ;",
        activitiesDisplay: '',
        photoEmpty: false,
        displayPhotosContainer: true,

      };
    },

    mounted() {
      this.loadData(this.userName, "load");
      // window.scrollTo(0, 0)
    },
    beforeUnmount() {
      this.loadData(this.userName, "unLoad");
      // window.scrollTo(0, 0)
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
        if (this.$store.state.users[userName].userProfileImage !== undefined && this.$store.state.users[userName].userProfileImage.length) {
          return this.$store.state.users[userName].userProfileImage

        }

        return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"

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
            this.activitiesDisplay = ""

            break;



          case "displayFriends":
            this.displayPosts = false
            this.displayFriends = true
            this.displayPhotos = false
            this.displayProfile = false
            this.$router.push({ name: "Timeline", params: { userName: this.userData.userName, Timeline: 'Friends' } })
            this.activitiesDisplay = ""
            this.displayPhotosContainer = true

            break;

          case "displayPhotos":
            this.displayPosts = false
            this.displayFriends = false
            this.displayPhotos = true
            this.displayProfile = false
            this.activitiesDisplay = "activities-display"
            break;

          case "displayProfile":
            this.displayPosts = false
            this.displayFriends = false
            this.displayPhotos = false
            this.displayProfile = true
            this.activitiesDisplay = "activities-display"
            this.displayPhotosContainer = true

            break;


          default:
            break;
        }
      },


      handleEmptyPhotos() {
        if (!this.userData.photos.length) {
          this.photoEmpty = true;

        }
        else {
          this.photoEmpty = false;

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
      activities() {

        let activities = []
        let counter = 0;
        let unDuplicatedactivities = this.userData.activities
        for (const activitiesId in this.userData.activities) {
          for (const activityId in unDuplicatedactivities) {
            if (this.userData.activities[activitiesId].activity === unDuplicatedactivities[activityId].activity
              && this.userData.activities[activitiesId].posterUserName === unDuplicatedactivities[activityId].posterUserName
              && this.userData.activities[activitiesId].userName === unDuplicatedactivities[activityId].userName
              && this.userData.activities[activitiesId].commenterUserName === unDuplicatedactivities[activityId].commenterUserName
              && this.userData.activities[activitiesId].friendUserName === unDuplicatedactivities[activityId].friendUserName

            ) {


              counter++
              if (counter > 1) {


                delete unDuplicatedactivities[activityId]
              }

            }

          }

          counter = 0
        }
        for (let activity in unDuplicatedactivities) {

          activities = [...activities, unDuplicatedactivities[activity]]
        }



        return activities.sort((a, b) => a.activityDate - b.activityDate).reverse()

      },

      userCoverImage() {
        this.handleEmptyPhotos()
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
