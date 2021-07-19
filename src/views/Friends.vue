<template>
  <div class="friends-main-container">
    <div class="side-links">
      <div class="list-group-button">


        <div @click="showFriends">
          Friends

          <span>{{ userData.friends.length }}</span>
          <font-awesome-icon class="ml-2" :icon="['fas', 'user-friends']" />
        </div>

        <div @click="showFollowing">
          Following
          <span>{{ userData.following.length }}</span>
          <font-awesome-icon class="ml-2" :icon="['fas', 'users']" />

        </div>
        <div @click="showFollowers">
          Followers

          <span>{{ userData.followers.length }}</span>
          <font-awesome-icon class="ml-2" :icon="['fas', 'users']" />

        </div>

      </div>
    </div>






    <div class="friends-container">

      <div class="friends-inner-container">

        <div class="friends-container-header">
          <div class="menu-bar-backdrop" v-if="showBackDrop" @click="handleBackDrop">

          </div>
          <h5>{{displayHeaderTitle}}</h5>


          <span class="friends-container-Menu-bar" @click="handleMenuBar">
            <font-awesome-icon :icon="['fas', 'bars']" />

            <div class="list-group-button" v-if="displayMenuBar">


              <div @click="showFriends">
                Friends
                <span>{{ userData.friends.length }}</span>
              </div>

              <div @click="showFollowing">
                Following <span>{{ userData.following.length }}</span>
              </div>
              <div @click="showFollowers">
                Followers
                <span>{{ userData.followers.length }}</span>
              </div>

            </div>
          </span>
        </div>
        <div v-if="handleEmptyList()" class="photo-empty"><span class="comment" style="margin-bottom: 5rem;"> Add
            Friends </span> </div>

        <div class="friends-list" v-if="!handleEmptyList()">
          <div v-show="displayFriends" v-for="user in userData.friends" :key="user.userName" class="friend-content">
            <div class="friend-main-content">
              <div class="user-images" >
                <img src="https://themified.com/friend-finder/images/covers/1.jpg" alt="" @click="showUserProfile(user.userName, user.userId)" class="cover-image">

                <span class="userIcon-image"> <img :src="handleImages(user.userName)" class="profile-picture" alt="">
                  <h5 @click="showUserProfile(user.userName, user.userId)">{{user.userName}}</h5>
                  <button class="btn btn-danger" @click="handleUnfriend(user.userName)">Unfriend</button>

                </span>
              </div>


              <div class="user-name-details" @click="showUserProfile(user.userName, user.userId)">
                <div>
                  <font-awesome-icon :icon="['fas', 'user-friends']" />
                </div>
              </div>
            </div>
          </div>








          <div v-show="displayFollowers" v-for="user in $store.state.userData.followers" :key="user.userName"
            class="friend-content">
            <div class="friend-main-content">
              <div class="user-images" >
                <img src="https://themified.com/friend-finder/images/covers/1.jpg" @click="showUserProfile(user.userName, user.userId)" alt="" class="cover-image">

                <span class="userIcon-image"> <img :src="handleImages(user.userName)" class="profile-picture" alt="">
                  <h5 @click="showUserProfile(user.userName, user.userId)">{{user.userName}}</h5>
                  <button class="btn btn-success unfriend-btn" v-if="followingList.includes(user.userName)" disabled> Following</button>
                  <button class="btn btn-danger unfriend-btn"  v-else  @click="handleFollow(user.userName,'follow')">Follow Back</button>

                </span>
              </div>


              <div class="user-name-details" @click="showUserProfile(user.userName, user.userId)">
                <div>
                  <font-awesome-icon :icon="['fas', 'user-friends']" />
                </div>
              </div>
            </div>
          </div>








          <div v-show="displayFollowing" v-for="user in $store.state.userData.following" :key="user.userName"
            class="friend-content">
            <div class="friend-main-content">
              <div class="user-images">
                <img src="https://themified.com/friend-finder/images/covers/1.jpg" alt="" class="cover-image"  @click="showUserProfile(user.userName, user.userId)">

                <span class="userIcon-image"> <img :src="handleImages(user.userName)" class="profile-picture" alt="">
                  <h5  @click="showUserProfile(user.userName, user.userId)">{{user.userName}}</h5>
                  <button class="btn btn-danger unfriend-btn" @click="handleFollow(user.userName,'unfollow')">unfollow</button>
                </span>
              </div>


              <div class="user-name-details" @click="showUserProfile(user.userName, user.userId)">
                <div>
                  <font-awesome-icon :icon="['fas', 'user-friends']" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


































    <div class="people-container">



      <div class="people-main-container">
        <div class="people-header">
          <h5>People you May know</h5>
        </div>

        <div v-for="user in randomUsers" :key="user.userName" class="friends-contents">
          <div class="friends-contents-list">
            <div class="userName-image" @click="showUserProfile(user.userName)">
              <img :src="handleImages(user.userName)" alt="">
              <span>
                <h5>{{ user.userName }}</h5>
              </span>

            </div>
            <div class="request-buttons">
              <button class="btn btn-info" v-if="user.requestStatus !== 'Request Sent'"
                @click="handleFriendRequest(user,user.requestStatus)">
                {{ user.requestStatus }}
              </button>

              <button class="btn btn-info" v-if="user.requestStatus === 'Request Sent'"
                @click="handleCancelFriendRequest(user, user.userName )">
                Cancel request
              </button>
              <button class="btn btn-info" v-if="!followingList.includes(user.userName)"
                @click="handleFollow(user.userName,'follow')">follow</button>
              <button class="btn btn-info" v-if="followingList.includes(user.userName)"
                @click="handleFollow(user.userName,'unfollow')">unfollow</button>
            </div>

          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid';



  export default {
    name: "Friends",
    props: ["userName"],

    data() {
      return {
        userData: {
          userName: "Guest",
          userId: "419",
          emailAddress: "419",
          firstName: "Guest",
          lastName: "Guest",
          address: "Guest",
          emailAddress: "Guest@gmail.com",
          postCode: "Guest",
          country: "Guest",
          city: "Guest",
          aboutMe: "Guest",
          password: "Guest",
          occupation: "Guest",
          education: "Guest",
          age: "27",
          messages: [],
          posts: {
            Guest: { likes: ["Guest"], unLikes: ["Guest"] },
          },
          followers: ["Guest"],
          following: ["Guest"],
          friends: ["Guest"],

          posterComment: "",
          comments: {
            likes: [],
            unLikes: [],
          },
        },
userFriendsList:[],
userFollowersList:[],
userFollowingList:[],
        allUsers: {},
        displayFriends: true,
        displayFollowers: false,
        displayFollowing: false,
        followingList: [],
        displayMenuBar: false,
        displayHeaderTitle: "Your Friends",
        friendsListEmpty: false,
        showBackDrop: false,
      };
    },
    mounted() {
      this.loadData();
    },
    beforeUnmount() {
      this.loadData();
    },
    methods: {
      loadData() {


        if (this.$store.state.userData.userName === "Guest") {
          this.$router.push({
            name: 'Login',
          });



        }

        this.userData = this.$store.state.users[this.userName];
        const followingList = this.userData.following
        this.followingList = followingList.map((userName) => userName.userName)


        this.$store.dispatch("handleNotificationUpdate", {
          userName: this.userData.userName,
          notificationStatus: "Read",
          notificationType: 'friend request'
        });



        const users = Object.keys(this.$store.state.allUsers);
        const allUsers = this.$store.state.allUsers;
        const friendsList = this.userData.friends.map((user) => user.userName)
        const randomUsers = users.filter((userName) => ![...friendsList, this.userData.userName].includes(userName))

        for (const userName in allUsers) {
          for (let index in allUsers[userName].requests) {
            if (allUsers[userName].requests[index].userName === this.userData.userName) {
              allUsers[userName].requestStatus = "Request Sent";
            }
            else {
              allUsers[userName].requestStatus = "Add Friend";

            }

          }
        }
        if (allUsers[this.userData.userName].requests.length) {
          for (let index in allUsers[this.userData.userName].requests) {

            allUsers[allUsers[this.userData.userName].requests[index].userName].requestStatus = "Accept Request"
          }


        }

        this.allUsers = allUsers;

      },






      handleEmptyList() {

        if (this.$store.state.userData.friends.length) {
          return false

        }
        {
          return true

        }


      },




      toggleDisplay(display) {
        switch (display) {
          case "displayFriends":
            this.displayFriends = true;
            this.displayFollowers = false;
            this.displayFollowing = false;
            this.displayHeaderTitle = "Your Friends"

            break;

          case "displayFollowers":
            this.displayFriends = false;
            this.displayFollowers = true;
            this.displayFollowing = false;
            this.displayHeaderTitle = "Your Followers"
            break;

          case "displayFollowing":
            this.displayFriends = false;
            this.displayFollowers = false;
            this.displayFollowing = true;
            this.displayHeaderTitle = "People You are Following "
            break;

          default:
            break;
        }
      },

      handleImages(userName) {
        if (this.$store.state.users[userName] === undefined) {
          return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"

        } else {
          if (this.$store.state.users[userName].userProfileImage.length) {
            return this.$store.state.users[userName].userProfileImage
          }
        }

      },

      handleMenuBar() {
        this.displayMenuBar = !this.displayMenuBar
        this.showBackDrop = !this.showBackDrop

      },

      handleBackDrop() {
        this.displayMenuBar = false
        this.showBackDrop = false

      },
      showFriends() {
        if (this.userData.userName !== "Guest") {
          this.toggleDisplay("displayFriends");
          this.$router.push({
            name: "Friends",
            params: { userName: this.userData.userName },
          });
        }
      },
      showFollowers() {
        if (this.userData.userName !== "Guest") {
          this.toggleDisplay("displayFollowers");
        }
      },
      showFollowing() {
        if (this.userData.userName !== "Guest") {
          this.toggleDisplay("displayFollowing");
        }
      },


      showUserProfile(userName) {
        if (this.userData.userName !== "Guest") {
          this.$router.push({
            name: "Timeline",
            params: { userName, },
          });
        }

      },


      handleFollow(userName, followState) {
        this.$store.dispatch("handleFollow", {
          friendUserName: userName,
          userName: this.userData.userName,
          followState
        });

        let followingList = this.userData.following

        this.followingList = followingList.map((userName) => userName.userName)

        this.$store.dispatch("handleNotifications", {
          userName: this.userData.userName,
          friendUserName: userName,
          notificationId: uuid.v1(),
          notificationType: 'follow',
          notificationStatus: "unRead",
          notificationDate: Date.now(),

        });
        if (followState === "follow") {
          this.$store.dispatch("handleActivities", {
            friendUserName: userName,
            userName: this.userData.userName,
            activity: "followed",
            activityDate: Date.now(),
            activityId: uuid.v1()
          });



        }

      },



      handleFriendRequest(user, requestStatus) {
        switch (requestStatus) {
          case "Add Friend":

            user.requestStatus = "Request Sent";
            this.$store.dispatch("handleFriendRequest", {
              friendUserName: user.userName,
              userName: this.userData.userName,
              requestStatus: "Request Sent",
            });

            this.$store.dispatch("handleNotifications", {
              userName: this.userData.userName,
              friendUserName: user.userName,
              notificationId: uuid.v1(),
              notificationType: 'friend request',
              notificationStatus: "unRead",
              notificationDate: Date.now(),

            });

            this.$store.dispatch("handleActivities", {
              userName: this.userData.userName,
              friendUserName: user.userName,
              activity: "Friend request",
              activityDate: Date.now(),
              activityId: uuid.v1()
            });


            break;

          case "Accept Request":
            this.$store.dispatch("handleFriendRequest", {
              friendUserName: user.userName,
              userName: this.userData.userName,
              requestStatus: "Accept Request",
            });

            this.$store.dispatch("handleActivities", {
              friendUserName: user.userName,
              userName: this.userData.userName,
              activity: "Accepted Friend Request",
              activityDate: Date.now(),
              activityId: uuid.v1()
            });

            this.$store.dispatch("handleNotifications", {
              userName: this.userData.userName,
              friendUserName: user.userName,
              notificationId: uuid.v1(),
              notificationType: "Accepted Friend Request",
              notificationStatus: "unRead",
              notificationDate: Date.now(),

            });

            break;

          default:
            break;
        }


      },

      handleCancelFriendRequest(user, friendUserName) {


        this.$store.dispatch("handleCancelFriendRequest", {
          userName: friendUserName,
          friendUserName: this.userData.userName,
          params:"cancelFriendRequest"
        }
        )
        this.loadData()

      },

handleUnfriend(userName){

 this.$store.dispatch("handleCancelFriendRequest", {
          userName,
          friendUserName: this.userData.userName,
          params:"unFriend"
        }
 )


},

handleUnfollow(userName){

 this.$store.dispatch("handleCancelFriendRequest", {
          userName,
          friendUserName: this.userData.userName,
          params:"unFollow"
        }
 )
console.log("foll");

},

    },

    computed: {
      randomUsers() {

this.userFriendsList=this.userData.friends.reverse()
this.userFollowersList=this.userData.followers.reverse()
this.userFollowingList=this.userData.following.reverse()

        const friends = this.userData.friends.map((friend) => friend.userName);
        let allUsers = []
        for (const user in this.$store.state.allUsers) {
          allUsers = [...allUsers, this.$store.state.allUsers[user]]

        }



        const randomUsers = allUsers
          .filter(
            (user) =>
              ![this.userData.userName, ...friends].includes(user.userName)
          )
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);

let usersArray = [...randomUsers]


let usersList1= []
let usersList2= []
let usersList3= []
let usersList = []

usersArray.forEach(user=> {
if(user.requestStatus === "Accept Request"){

usersList1= [...usersList1,user]


} else if(user.requestStatus === "Cancel Request"){

usersList2= [...usersList2,user]


}
else{

usersList3= [...usersList3,user]

}

usersList =[...usersList1,...usersList2,...usersList3]

});



// console.log(111,randomUsers.sort((a, b) => a.requestStatus - b.requestStatus));
//           // .map((a) => ({ sort: Math.random(), value: a }))
//           // .sort((a, b) => a.sort - b.sort)
//           // .map((a) => a.value);


        return usersList
      },
    },
  };
</script>




















<style scoped>

</style>
