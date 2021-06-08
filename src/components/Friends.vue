<template>


  <div class="timeline-friends-container">
    <div class="timeline-friends-container-header">
      <h5>{{userName}}'s Friends</h5>
    </div>
<div class="empty-friens-list" v-if="!emptyFriendsList"
><span class="names-bold">{{userName}} Does not Have Friends</span></div>
    <div v-if="emptyFriendsList" class="friends-content-grid">

      <div  v-for="friend in allUsers" :key="friend.userName" class="friend-content">
        <div  class="friend-main-content">
          <img @click="showUserProfile(friend.userName)" :src="handleCoverImage(friend.userName)" alt="" class="cover-image">
          <img @click="showUserProfile(friend.userName)" :src="handleUserProfilePic(friend.userName)" alt="" class="userIcon-image">

          <div class="user-name-details" >
            <div>
              <h5 class="names-Bold" @click="showUserProfile(friend.userName)">{{friend.userName }}</h5>
              <font-awesome-icon :icon="['fas', 'user-friends']" v-if="friend.requestStatus === 'friends' " />
              <button v-if="friend.requestStatus !== 'friends' && friend.requestStatus !== 'you'" class="btn btn-info"
                @click="handleFriendRequest(friend,friend.requestStatus)">{{ friend.requestStatus }}</button>

            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- <ul v-for="friend in allUsers" :key="friend.userName">

<li @click="showUserProfile(friend.userName)">
<router-link :to="{name:'Timeline',params:{userName:friend.userName,Timeline:'profile'}}">{{friend.userName}}</router-link>
</li>
<button v-if="friend.requestStatus !== 'friends' && friend.requestStatus !== 'you'" class="btn btn-info" @click="handleFriendRequest(friend,friend.requestStatus)">{{ friend.requestStatus }}</button> 
<span v-if="friend.requestStatus === 'friends' ">Friends</span>                     

<hr>
</ul>  -->



    <!-- <div  v-for="friend in allUsers" :key="friend.userName"
          class="friend-content">

          <div class="user-images" @click="showUserProfile(friend.userName, user.userId)">
            <img src="https://themified.com/friend-finder/images/covers/1.jpg" alt="" class="cover-image">

            <img :src="handleUserProfilePic(friend.userName)" alt="" class="userIcon-image">

          </div>


          <div class="user-name-details" @click="showUserProfile(friend.userName,friend.userName)">
            <div>serId
              <h5>{{friend.userName }}</h5>
              <font-awesome-icon :icon="['fas', 'user-friends']" />
            </div>
          </div>
          <button class="btn btn-danger">Unfriend</button>
        </div> -->



  </div>
</template>
<script>
  export default {
    name: "Friends",
    props: ["userName"],

    data() {
      return {
        userData: {},
        allUsers: [],
emptyFriendsList:true,
      }
    },
    mounted() {
      this.loadData()
    },
    beforeUnmount() {
      this.loadData()
    },

    methods: {
      loadData() {
        this.userData = this.$store.state.users[this.userName]

        let friendsList = {}

        for (const friend of this.userData.friends) {
          friendsList = { ...friendsList, [friend.userName]: { ...this.$store.state.allUsers[friend.userName] } }

        }

        this.allUsers = friendsList
Object.keys(this.allUsers).length > 0? this.emptyFriendsList = true:this.emptyFriendsList = false;

        let userfriendsList = this.$store.state.userData.friends.map((user) => user.userName)


        let userRequestList = this.$store.state.allUsers[this.$store.state.userData.userName].requests.map((userRequest) => userRequest.userName)

        for (let userName in friendsList) {

  let  friendRequestList = this.$store.state.allUsers[userName].requests.map((userRequest) => userRequest.userName)

          


          if (userfriendsList.includes(userName)) {
            this.allUsers[userName].requestStatus = "friends"
          }
          else if
            (userName === this.$store.state.userData.userName) {
            this.allUsers[userName].requestStatus = "you"
          }
          else if (userRequestList.length) {
            if (userRequestList.includes(userName)) {
              this.allUsers[userName].requestStatus = "Accept Request"
            }
          }
          else if (friendRequestList.length) {
            if (friendRequestList.includes(this.$store.state.userData.userName)) {
              this.allUsers[userName].requestStatus = "Request sent"
            }
          }
          else {
            this.allUsers[userName].requestStatus = "Add Friend"

          }
        }




      },


      handleUserProfilePic(userName) {
        if (this.$store.state.users[userName].userProfileImage !== undefined && this.$store.state.users[userName].userProfileImage.length) {
          return this.$store.state.users[userName].userProfileImage

        }

        return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"

      },

handleCoverImage(userName){
if(this.$store.state.users[userName].userCoverImage !== undefined){
return this.$store.state.users[userName].userCoverImage

}
return "https://themified.com/friend-finder/images/covers/1.jpg"

},

      showUserProfile(userName) {
         this.$router.push({
              name: "Timeline",
              params: { userName, Timeline: "Timeline" },
            })
        this.$emit('toggleView', 'displayPosts')

        this.loadData()

      },



      handleFriendRequest(user, requestStatus) {

        switch (requestStatus) {
          case "Add Friend":

            user.requestStatus = "Request Sent";

            this.$store.dispatch("handleFriendRequest", {
              friendUserName: user.userName,
              userName: this.$store.state.userData.userName,
              requestStatus: "Request Sent",
            });
            break;

          case "Accept Request":
            this.$store.dispatch("handleFriendRequest", {
              friendUserName: user.userName,
              userName:this.$store.state.userData.userName,
              requestStatus: "Accept Request",
            });

            user.requestStatus = "Friends";

            break;

          default:
            break;
        }
console.log(this.$store.state.allUsers);
      },


    },




    computed: {


    }
  }
</script>
