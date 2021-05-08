<template>

<!-- <h2>{{userNames}}</h2> -->


    <div >
      <ul v-for="friend in allUsers" :key="friend.userName">

<li @click="showUserProfile(friend.userName)">
<router-link :to="{name:'Timeline',params:{userName:friend.userName,Timeline:'profile'}}">{{friend.userName}}</router-link>
</li>
<button v-if="friend.requestStatus !== 'friends' && friend.requestStatus !== 'you'" class="btn btn-info" @click="handleFriendRequest(friend,friend.requestStatus)">{{ friend.requestStatus }}</button> 
<span v-if="friend.requestStatus === 'friends' ">Friends</span>                     

<hr>
</ul> 

    </div>
</template>
<script>
export default {
    name:"Friends",
props:["userName"],

data() {
    return {
userData:{},
     allUsers:[]   
    }
},
mounted() {
    this.loadData()
},
beforeUnmount() {
    this.loadData()
},

methods: {
    loadData(){
this.userData = this.$store.state.users[this.userName]

let friendsList ={}

for(const friend of  this.userData.friends){
friendsList = {...friendsList,[friend.userName]:{...this.$store.state.allUsers[friend.userName] } }

}

this.allUsers = friendsList



let userfriendsList = this.$store.state.userData.friends.map((user)=>user.userName)
let userRequestList =this.$store.state.allUsers[this.$store.state.userData.userName].requests.map((userRequest)=>userRequest.userName)

for(let userName in friendsList){

let friendRequestList = this.$store.state.allUsers[userName].requests.map((userRequest)=>userRequest.userName)



if(userfriendsList.includes(userName) ){
this.allUsers[userName].requestStatus = "friends"
}
else if 
(userName === this.$store.state.userData.userName){
this.allUsers[userName].requestStatus = "you"
}
else if 
(userRequestList.includes(userName)){
this.allUsers[userName].requestStatus = "Accept Request"
}
else if 
(friendRequestList.includes(this.$store.state.userData.userName)){
this.allUsers[userName].requestStatus = "Request sent"

}
else{
this.allUsers[userName].requestStatus = "Add Friend"

}
}


      

},


  showUserProfile(userName) {
  this.$emit('toggleView','displayProfile')

this.loadData()

   },

  handleFriendRequest(user,requestStatus) {

switch (requestStatus) {
  case "Add Friend":
    
   user.requestStatus= "Friend Request Sent";

      this.$store.dispatch("handleFriendRequest", {
        friendUserName: user.userName,
        userName: this.userData.userName,
        requestStatus: "Friend Request Sent",
      });
    break;

  case "Accept Request":
  this.$store.dispatch("handleFriendRequest", {
        friendUserName: user.userName,
        userName: this.userData.userName,
        requestStatus: "Accept Request",
      });

 user.requestStatus= "Friends";

  break;

  default:
    break;
}

    },


},




computed:{


}
}
</script>