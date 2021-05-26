<template>
  <section id="messageBox">
    <div class="message-container">

      <div class="list-container-left">




        <div class="chat-list">
          <div class="header-chat-list">
            <h5>Chats</h5>
            <input type="text" placeholder="Search Messages">


          </div>

          <div>


          </div>

          <div v-for="user in chattedUsersList" :key="chattedUsersInfo[user.userName].userName"
            @click="showMessage(user.userName, 'Read')" :style="activeChattedUser(user.showMessage)">

            <div class="user-MessageDetails-container">

              <div class="notice-image-container">

                <img :src="handleImages(user.userName)" alt="">
                <div class="new-message-alert"
                  v-if="userData.messageStatus[user.userName].messageViewStatus === 'unRead'">

                </div>
              </div>

              <div class="userName-data-container">

                <div class="side-userName">
                  <span class="username-header">{{user.userName}}</span>
                  <span>{{showDateInWords(chattedUsersInfo[user.userName].messageDate)}}</span>

                </div>


                <div class="side-user-message">
                  <span v-if="chattedUsersInfo[user.userName].userName === userData.userName"
                    class="shortMessage">You:&nbsp<span
                      class="message-ellipsis">{{handleMessageSlice(chattedUsersInfo[user.userName].message)}}</span>

                    <span class="sideMessageCheck">
                      <font-awesome-icon :icon="['fas', 'check']" class="check-side"
                        v-if="handleMessageStatus(chattedUsersInfo[user.userName].messageStatus, chattedUsersInfo[user.userName].messageId)" />
                      <font-awesome-icon :icon="['fas', 'check-double']" class="check-double-side"
                        v-if="!handleMessageStatus(chattedUsersInfo[user.userName].messageStatus, chattedUsersInfo[user.userName].messageId)"
                        :class="statusClass" />
                    </span>
                  </span>



                  <span v-if="chattedUsersInfo[user.userName].userName !== userData.userName" class="message-ellipsis2">
                    {{chattedUsersInfo[user.userName].message}}
                  </span>
                </div>
              </div>




            </div>




          </div>


          <!-- <ul
        v-for="userName in chattedUsersInfo"
        :key="userName"
        @click="showMessage(userName, 'Read', 'Read')"
      >
        <li>


          {{ userName }}
         
        </li>
      </ul> -->
        </div>
      </div>
      <div class="container-message">
        <div class="fill-up-container"></div>
        <div class="messager-Header" :style="handleNavCollapse()">
          <img :src="userProfilePicture" alt="">


          <h5>{{friendMessaged}}</h5>
        </div>
        <div class="trysrcoll" id="messageBody">
          <div v-for="message in showingMessages" :key="message.messageId" class="message-body"
            :class="handleUserChatBoxStyle(message.userName)">
            <img :src="handleImages(message.userName)" v-if="message.messageStatus.length" alt="">
            <div class="message-Box" v-if="message.messageStatus.length">
              <font-awesome-icon :icon="['fas', 'caret-right']" class="caret-right" />
              <font-awesome-icon :icon="['fas', 'caret-left']" class="caret-left" />
              <div>

                <h6 class="username-header">{{ message.userName }}</h6>

                <span>{{ showDate(message.messageDate) }}

                </span>

              </div>
              <hr>
              <span class="message-background">
                {{ message.message }}

              </span>



              <span class="message-status">
                <font-awesome-icon :icon="['fas', 'check']" class="check"
                  v-if="handleMessageStatus(message.messageStatus, message.messageId)" />
                <font-awesome-icon :icon="['fas', 'check-double']" class="check-double"
                  v-if="!handleMessageStatus(message.messageStatus, message.messageId)" :class="statusClass" />
              </span>
            </div>
            <!-- <p>  {{moment().format('LT')}} </p> -->

            <!-- 
        <input type="text" value="delete message" class="btn btn-danger" @click="
            handleDeleteMessage(
              userData.userName,
              friendMessaged,
              message.messageId
            )
          " /> -->
          </div>
        </div>
        <form @submit.prevent="handleSubmitMessage" class="message-input-field">
          <input type="text" v-model="message" placeholder=" Type your message" />
          <img :src="userData.userProfileImage" alt="">
          <!-- <button type="submit" class="btn btn-success">send</button> -->
        </form>
      </div>

      <div class="list-container-right ">

      
        <div class="friends-list-container">
  <div class="friends-listHeader">
          <h5>Friends</h5>
        </div>
          <div v-for="friend in userData.friends" :key="friend.userName">
            <div @click='showMessage(friend.userName,"newMessage")' class="friendLists">
              <img :src="handleImages(friend.userName)" alt=""> <span class="username-header">{{ friend.userName
                }}</span>
              <button class="btn btn-success message-friend">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { uuid } from "vue-uuid";
  import moment from "moment";

  export default {
    name: "Messages",
    props: ["userName"],

    data() {
      return {
        userData: {
          messageStatus: {}
        },
        showingMessage: [],
        friendMessaged: "",
        chattedUsersInfo: [],
        message: "",
        showingMessageStatus: [],
        chattedUsersList: [],
        messageUserProfilePicture: '',

        userProfilePicture: '',
        messageUserName: '',
        statusClass: "check-double"
      };
    },

    mounted() {
      this.loadData("on");
      // document.addEventListener('scroll', () => this.onScroll(document.getElementById("messageBox")));

    },
    beforeUnmount() {
      this.loadData("off");
      // document.removeEventListener('scroll', () => this.onScroll(document.getElementById("messageBox")));

    },
    methods: {
      loadData(messageOnScreen) {
        this.userData = this.$store.state.users[this.userName];

        messageOnScreen === "on" ? this.$store.dispatch("handleDisplayFunctions", {
          activeLink: "Messages",
          params: "activeLink"
        }) : this.$store.dispatch("handleDisplayFunctions", {
          activeLink: "",
          params: "activeLink"
        })
        // document.getElementById('messageBody').scrollTo=document.getElementById('messageBody').scrollHeight 


        // setTimeout(() => {
        // document.getElementById('messageBody').scrollTo=document.getElementById('messageBody').scrollHeight  
        // }, 100);
        let messageStatus = [];

        for (const message in this.userData.messageStatus) {
          messageStatus.push(this.userData.messageStatus[message]);
        }

        this.showingMessageStatus = messageStatus.filter((message) => message.showMessage === 'on');

        this.showingMessage = this.userData.messages[this.showingMessageStatus[0].friendMessaged];

        this.friendMessaged = this.showingMessageStatus[0].friendMessaged
        let messagedUserName = this.$store.state.displayFunctions.displayMessage.userName


        if (messagedUserName.length) {

          this.showMessage(messagedUserName, "newMessage");
        } else {
          this.showMessage(this.friendMessaged, "Read", messageOnScreen);
        }
        this.$store.dispatch("handleNotificationUpdate", {
          userName: this.userData.userName,
          notificationStatus: "Read",
          notificationType: 'message'
        });



      },




      scrollToBottom() {
        const messageBox = document.getElementsByClassName('message-body')[document.getElementsByClassName('message-body').length - 1];

        setTimeout(() => {
          if (messageBox) {

            messageBox.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);


      },

      activeChattedUser(show) {
        if (show === "on") {

          return "background-color:rgba(232, 62, 140, 0.52)"
        }

        return "background-color:white"
      },




      handleMessageSlice(message) {







        if (message.length > 20) {

          let slicedMessage = message.slice(0, 19) + "...."
          return slicedMessage
        }

        return message

      },


      handleUserChatBoxStyle(userName) {
        if (userName === this.userName) {
          return "this-user"
        }
        return "other-user";

      },




      handleImages(userName) {


        if (this.$store.state.users[userName].userProfileImage.length) {
          return this.$store.state.users[userName].userProfileImage

        }

        return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
      },

      handleSubmitMessage() {

        const messageId = uuid.v1();
        if (this.message && this.friendMessaged) {
          this.$store.dispatch("handleSubmitMessage", {
            [messageId]: {
              userName: this.userData.userName,
              friendMessaged: this.friendMessaged,
              userId: this.userData.userId,
              message: this.message,
              messageId,
              messageDate: Date.now(),
              messageStatus: "sent",
            },
          });
          this.showMessage(this.friendMessaged, "unRead");



          this.$store.dispatch("handleNotifications", {
            userName: this.userData.userName,
            friendUserName: this.friendMessaged,
            notificationId: uuid.v1(),
            notificationType: 'message',
            notificationStatus: "unRead",
            notificationDate: Date.now()
          });

          this.message = "";
          this.showingMessage = this.userData.messages[this.friendMessaged];
        }
        this.scrollToBottom()

      },

      showMessage(userName, status, messageOnScreen) {


        this.userProfilePicture = this.handleImages(userName);
        this.friendMessaged = userName;
        let chattedUsersList = this.chattedUsersList.map((user) => user.userName)

        console.log(chattedUsersList);
        console.log(userName);
        if (!chattedUsersList.includes(userName) && status === "newMessage") {
          this.showingMessage = {
            'none': {
              messageId: "none",
              messageDate: '',
              userName: this.userName,
              message: '',
              messageStatus: '',
            }
          }
          this.$store.dispatch("handleDisplayFunctions", {
            userName: '',
            params: "displayMessage"
          })




        }
        else {
          this.$store.dispatch("handleMessageViewStatus", {
            friendMessaged: userName,
            messageOnScreen,
            userName: this.userName,
            messageViewStatus: status,
            showMessage: "on",

          });
          this.showingMessage = this.userData.messages[userName];
        }
      },


      handleMessageStatus(messageStatus, messageId) {

        this.$store.dispatch("handleMessageStatus", {
          friendMessaged: this.friendMessaged,
          userName: this.userData.userName,
        });

        if (messageStatus === "sent") {
          return true;
        } else if (messageStatus === "received") {

          this.statusClass = "check-double"

          return false;
        } else if (messageStatus === "Read") {


          this.statusClass = "check-double-read"
          return false;
        }
      },

      showDateInWords(date) {
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
          return months === 1 ? "1 month ago" : months + " mouths ago";
        } else {
          return years === 1 ? "1 year ago" : years + " years ago";
        }
      },




      showDate(messageDate) {
        let currentDate = Date.now();
        let dateStatus = currentDate - messageDate;
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
          return moment(messageDate).format(" h:mm :ss a L");
        } else if (days >= 1) {
          return moment(messageDate).format(" h:mm:ss a L");
        } else if (weeks < 59) {
          return moment(messageDate).format(" h:mm :ss a L");
        } else if (months < 59) {
          return moment(messageDate).format(" h:mm :SS a L");
        } else {
          return moment(messageDate).format(" h:mm a  L");
        }
      },

      handleDeleteMessage(userName, friendMessaged, messageId) {
        this.$store.dispatch("handleDeleteMessage", {
          userName,
          friendMessaged,
          messageId,
        });
      },
      handleNavCollapse() {
        if (this.$store.state.displayFunctions.navCollapsed) {


          return "margin-top:-90px"

        }


        return "margin-top:0"




      }







    },
    computed: {
      showingMessages() {

        this.userData = this.$store.state.users[this.userName];

        let messageStatusList = []
        for (let userName in this.userData.messageStatus) {
          messageStatusList = [...messageStatusList, { userName, showMessage: this.userData.messageStatus[userName].showMessage }]


        }


        let chattedUsersList = []

        // let userMessageName = Object.keys(this.userData.messages)
        for (let userName in this.userData.messageStatus) {

          if (this.userData.messageStatus[userName].showMessage === "on") {
            let filteredUserList = messageStatusList.filter((user) => user.userName === userName)
            chattedUsersList = messageStatusList.filter((user) => user.userName !== userName)
            chattedUsersList.splice(0, 0, ...filteredUserList)

          }
        }

        this.chattedUsersList = chattedUsersList;





        let chattedUsersInfo = {};


        for (const chatUserName in this.userData.messageStatus) {
          // console.log('chatUserName ', chatUserName );

          let messageObjects = []
          for (const messageId in this.userData.messages[chatUserName]) {
            messageObjects = [...messageObjects, this.userData.messages[chatUserName][messageId]]
              .sort((a, b) => a.messageDate - b.messageDate)
            // console.log(' messageObjects ', messageObjects );

          }
          chattedUsersInfo = { ...chattedUsersInfo, [chatUserName]: messageObjects[messageObjects.length - 1] }

        }

        this.chattedUsersInfo = chattedUsersInfo;














        let showingMessages = [];

        for (const message in this.showingMessage) {
          showingMessages.push(this.showingMessage[message]);
        }
        return showingMessages.sort((a, b) => a.messageDate - b.messageDate);
      },
    },
  };
</script>

<style scoped>

</style>
