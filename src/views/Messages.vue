<template>
  <section id="messageBox">
    <div class="message-container">
      <div class="list-container-left container-mobile-view" ref="chatList">
        <div class="chat-list">
          <div class="header-chat-list">
            <h5>Chats</h5>
            <div class="search-chat-list">
              <input
                type="text"
                placeholder="Search Chats..."
                v-model="searchInput"
                @click="handleSearchBackDrop('open')"
              />
              <div class="search-contents" v-if="displaySearchContents">
                <ul v-for="user in filteredSearchList" :key="user.userName">
                  <li @click="showMessage(user.userName, 'Read')">
                    <img
                      :src="$store.state.users[user.userName].userProfileImage"
                      alt=""
                    />
                    <span class="names-Bold"> {{ user.userName }}</span>
                  </li>
                </ul>
                <div v-if="searchNotFound" style="text-align: center">
                  User Not Found
                </div>
              </div>
            </div>

            <div
              class="chat-list-backDrop"
              v-if="chatListBackDrop"
              @click="handleSearchBackDrop('close')"
            ></div>
          </div>

          <div
            v-for="user in chattedUsersList"
            :key="user.userName"
            @click="showMessage(user.userName, 'Read')"
            :style="activeChattedUser(user.showMessage)"
            v-if="messagesEmpty"
          >
            <div class="user-MessageDetails-container">
              <div class="notice-image-container">
                <img :src="handleImages(user.userName)" alt="" />
                <div
                  class="new-message-alert"
                  v-if="
                    userData.messageStatus[user.userName].messageViewStatus ===
                      'unRead'
                  "
                ></div>
              </div>

              <div class="userName-data-container">
                <div class="side-userName">
                  <span class="username-header">{{ user.userName }}</span>
                  <PostTime
                    :date="chattedUsersInfo[user.userName].messageDate"
                  />
                </div>

                <div class="side-user-message">
                  <span
                    v-if="
                      chattedUsersInfo[user.userName].userName ===
                        userData.userName
                    "
                    class="shortMessage"
                  >
                    <span style="font-weight: 600">You:&nbsp</span>
                    <span class="message-ellipsis">{{
                      handleMessageSlice(
                        chattedUsersInfo[user.userName].message
                      )
                    }}</span>
                  </span>
                  <span v-else class="shortMessage">
                    {{
                      handleMessageSlice(
                        chattedUsersInfo[user.userName].message
                      )
                    }}</span
                  >
                  <span class="sideMessageCheck">
                    <font-awesome-icon
                      :icon="['fas', 'check']"
                      class="check-side"
                      v-if="
                        handleMessageStatus(
                          chattedUsersInfo[user.userName].messageStatus,
                          chattedUsersInfo[user.userName].messageId
                        )
                      "
                    />
                    <font-awesome-icon
                      :icon="['fas', 'check-double']"
                      class="check-double-side"
                      v-if="
                        !handleMessageStatus(
                          chattedUsersInfo[user.userName].messageStatus,
                          chattedUsersInfo[user.userName].messageId
                        )
                      "
                      :class="
                        handleCheckStyle(
                          chattedUsersInfo[user.userName].messageStatus
                        )
                      "
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="list-container-left container-desktop-view">
        <div class="chat-list">
          <div class="header-chat-list">
            <h5>Chats</h5>

            <div class="search-chat-list">
              <input
                type="text"
                placeholder="Search Chats..."
                v-model="searchInput"
                @click="handleSearchBackDrop('open')"
              />
              <div class="search-contents" v-if="displaySearchContents">
                <ul v-for="user in filteredSearchList" :key="user.userName">
                  <li @click="showMessage(user.userName, 'Read')">
                    <img
                      :src="$store.state.users[user.userName].userProfileImage"
                      alt=""
                    />
                    <span class="names-Bold"> {{ user.userName }}</span>
                  </li>
                </ul>
                <div v-if="searchNotFound" style="text-align: center">
                  User Not Found
                </div>
              </div>
            </div>

            <div
              class="chat-list-backDrop"
              v-if="chatListBackDrop"
              @click="handleSearchBackDrop('close')"
            ></div>
          </div>
          <div class="empty-chat-list" v-if="!messagesEmpty">
            <span>You Have No Chats</span>
          </div>
          <div></div>

          <div
            v-for="user in chattedUsersList"
            :key="user.userName"
            @click="showMessage(user.userName, 'Read')"
            :style="activeChattedUser(user.showMessage)"
            v-if="messagesEmpty"
          >
            <div class="user-MessageDetails-container">
              <div class="notice-image-container">
                <img :src="handleImages(user.userName)" alt="" />
                <div
                  class="new-message-alert"
                  v-if="
                    userData.messageStatus[user.userName].messageViewStatus ===
                      'unRead'
                  "
                ></div>
              </div>

              <div class="userName-data-container">
                <div class="side-userName">
                  <span class="username-header">{{ user.userName }}</span>

                  <PostTime
                    :date="chattedUsersInfo[user.userName].messageDate"
                  />
                </div>

                <div class="side-user-message">
                  <span
                    v-if="
                      chattedUsersInfo[user.userName].userName ===
                        userData.userName
                    "
                    class="shortMessage"
                  >
                    <span style="font-weight: 600">You:&nbsp</span>
                    <span class="message-ellipsis">{{
                      handleMessageSlice(
                        chattedUsersInfo[user.userName].message
                      )
                    }}</span>
                  </span>
                  <span v-else class="shortMessage">
                    {{
                      handleMessageSlice(
                        chattedUsersInfo[user.userName].message
                      )
                    }}</span
                  >
                  <span class="sideMessageCheck">
                    <font-awesome-icon
                      :icon="['fas', 'check']"
                      class="check-side"
                      v-if="
                        handleMessageStatus(
                          chattedUsersInfo[user.userName].messageStatus,
                          chattedUsersInfo[user.userName].messageId
                        )
                      "
                    />
                    <font-awesome-icon
                      :icon="['fas', 'check-double']"
                      class="check-double-side"
                      v-if="
                        !handleMessageStatus(
                          chattedUsersInfo[user.userName].messageStatus,
                          chattedUsersInfo[user.userName].messageId
                        )
                      "
                      :class="
                        handleCheckStyle(
                          chattedUsersInfo[user.userName].messageStatus
                        )
                      "
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-message container-desktop-view">
        <div class="fill-up-container" :style="filUpStyle"></div>
        <div class="messager-Header" :style="handleNavCollapse()">
          <img :src="userProfilePicture" alt="" v-if="messagesEmpty" />

          <h5>{{ friendMessaged }}</h5>
          <span @click="showChatList" class="return-chatlist-btn">
            <span>
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span>
          </span>
        </div>
        <div class="trysrcoll" id="messageBody">
          <div class="empty-chat-list" v-if="!messagesEmpty">
            <span>You Have No Messages</span>
          </div>

          <div class="pulldown"></div>

          <div
            v-for="message in showingMessages"
            :key="message.messageId"
            class="message-body message-body-disktopView"
            :class="handleUserChatBoxStyle(message.userName)"
            v-if="messagesEmpty"
          >
            <img
              :src="handleImages(message.userName)"
              v-if="message.messageStatus.length"
              alt=""
            />
            <div class="message-Box" v-if="message.messageStatus.length">
              <font-awesome-icon
                :icon="['fas', 'caret-right']"
                class="caret-right"
              />
              <font-awesome-icon
                :icon="['fas', 'caret-left']"
                class="caret-left"
              />
              <div>
                <h6 class="username-header">{{ message.userName }}</h6>
                <span>{{ showDate(message.messageDate) }} </span>
              </div>
              <hr />
              <span class="message-background">
                {{ message.message }}
              </span>

              <span class="message-status">
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  class="check"
                  v-if="
                    handleMessageStatus(
                      message.messageStatus,
                      message.messageId
                    )
                  "
                />
                <font-awesome-icon
                  :icon="['fas', 'check-double']"
                  class="check-double"
                  v-if="
                    !handleMessageStatus(
                      message.messageStatus,
                      message.messageId
                    )
                  "
                  :class="handleCheckStyle(message.messageStatus)"
                />
              </span>
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSubmitMessage" class="message-input-field">
          <input
            type="text"
            v-model="message"
            placeholder=" Type your message"
          />
          <img :src="userData.userProfileImage" alt="" />
        </form>
      </div>

      <div
        class="container-message container-mobile-view container-mobileView"
        ref="containerMessage"
      >
        <div class="fill-up-container" :style="filUpStyle"></div>
        <div class="messager-Header" :style="handleNavCollapse()">
          <img :src="userProfilePicture" alt="" v-if="messagesEmpty" />

          <h5>{{ friendMessaged }}</h5>
          <span @click="showChatList" class="return-chatlist-btn">
            <span>
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span>
          </span>
        </div>
        <div class="trysrcoll" id="messageBody">
          <div class="empty-chat-list" v-if="!messagesEmpty">
            <span>You Have No Messages</span>
          </div>
          <div
            v-for="message in showingMessages"
            :key="message.messageId"
            class="message-body"
            :class="handleUserChatBoxStyle(message.userName)"
            v-if="messagesEmpty"
          >
            <img
              :src="handleImages(message.userName)"
              v-if="message.messageStatus.length"
              alt=""
            />
            <div class="message-Box" v-if="message.messageStatus.length">
              <font-awesome-icon
                :icon="['fas', 'caret-right']"
                class="caret-right"
              />
              <font-awesome-icon
                :icon="['fas', 'caret-left']"
                class="caret-left"
              />
              <div>
                <h6 class="username-header">{{ message.userName }}</h6>

                <span>{{ showDate(message.messageDate) }} </span>
              </div>
              <hr />
              <span class="message-background">
                {{ message.message }}
              </span>

              <span class="message-status">
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  class="check"
                  v-if="
                    handleMessageStatus(
                      message.messageStatus,
                      message.messageId
                    )
                  "
                />
                <font-awesome-icon
                  :icon="['fas', 'check-double']"
                  class="check-double"
                  v-if="
                    !handleMessageStatus(
                      message.messageStatus,
                      message.messageId
                    )
                  "
                  :class="handleCheckStyle(message.messageStatus)"
                />
              </span>
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSubmitMessage" class="message-input-field">
          <input
            type="text"
            v-model="message"
            placeholder=" Type your message"
          />
          <img :src="userData.userProfileImage" alt="" />
        </form>
      </div>

      <div class="list-container-right">
        <div class="friends-list-container">
          <div class="friends-listHeader">
            <h5>Friends</h5>
          </div>
          <div class="empty-chat-list" v-if="!userData.friends.length">
            <span>You Have No Friends</span>
          </div>
          <div
            v-for="friend in userData.friends"
            :key="friend.userName"
            v-if="userData.friends.length"
          >
            <div
              @click="showMessage(friend.userName, 'newMessage')"
              class="friendLists"
            >
              <img :src="handleImages(friend.userName)" alt="" />
              <span class="username-header">{{ friend.userName }}</span>
              <div class="message-friend">
                <button class="btn btn-success">Chat</button>
              </div>
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
import PostTime from "../components/PostTime";
import Time from "../components/Time";

export default {
  name: "Messages",
  props: ["userName"],
  components: {
    PostTime,
    Time,
  },

  data() {
    return {
      userData: {
        messageStatus: {},
      },
      showingMessage: [],
      friendMessaged: "",
      chattedUsersInfo: [],
      message: "",
      showingMessageStatus: [],
      chattedUsersList: [],
      messageUserProfilePicture: "",
      userProfilePicture: "",
      messageUserName: "",
      displayChatList: "",
      filUpStyle: "",
      messagesEmpty: true,
      searchInput: "",
      displaySearchContents: false,
      filteredSearchLists: [],
      chatListBackDrop: false,
      messages: {},
      watchDelay: true,
    };
  },
  watch: {
    messages: {
      handler(state) {
        setTimeout(() => {
          this.loadData("on");
          this.watchDelay = false;
        }, 2000);
      },
      deep: true,
    },
  },

  mounted() {
    this.loadData("on");
  },
  beforeUnmount() {
    this.loadData("off");
  },
  methods: {
    loadData(messageOnScreen) {
      this.userData = this.$store.state.users[this.userName];

      if (messageOnScreen === "on") {
        this.$store.dispatch("handleDisplayFunctions", {
          activeLink: "Messages",
          params: "activeLink",
        });
      } else {
        this.$store.dispatch("handleDisplayFunctions", {
          activeLink: "",
          params: "activeLink",
        });
        this.watchDelay = true;
      }

      let messageStatus = [];

      for (const message in this.userData.messageStatus) {
        messageStatus.push(this.userData.messageStatus[message]);
      }

      if (messageStatus.length) {
        this.showingMessageStatus = messageStatus.filter(
          (message) => message.showMessage
        );

        this.showingMessage = this.userData.messages[
          this.showingMessageStatus[0].friendMessaged
        ];

        this.friendMessaged = this.showingMessageStatus[0].friendMessaged;
        this.messagesEmpty = true;
      } else {
        this.messagesEmpty = false;
      }

      let messagedUserName = this.$store.state.displayFunctions.displayMessage
        .userName;

      if (messageStatus.length || messagedUserName.length) {
        if (messagedUserName.length) {
          this.showMessage(messagedUserName, "newMessage");
        } else {
          this.showMessage(this.friendMessaged, "Read", messageOnScreen);
        }
        this.$store.dispatch("handleNotificationUpdate", {
          userName: this.userData.userName,
          notificationStatus: "Read",
          notificationType: "message",
        });
      }
    },

    scrollToBottom() {
      const messageBox = document.getElementsByClassName("message-body")[
        document.getElementsByClassName("message-body").length - 1
      ];
      const messageBoxDisktopView = document.getElementsByClassName(
        "message-body-disktopView"
      )[document.getElementsByClassName("message-body-disktopView").length - 1];

      setTimeout(() => {
        if (messageBox) {
          messageBox.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      setTimeout(() => {
        if (messageBoxDisktopView) {
          messageBoxDisktopView.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    },

    activeChattedUser(show) {
      if (show) {
        return "background-color:rgba(232, 62, 140, 0.52)";
      }

      return "background-color:white";
    },

    handleSearchBackDrop(params) {
      if (params === "open") {
        return (this.chatListBackDrop = true);
      }
      this.searchInput = "";
      this.displaySearchContents = false;
      this.filteredSearchLists = [];
      return (this.chatListBackDrop = false);
    },

    handleMessageSlice(message) {
      if (message.length > 15) {
        let slicedMessage = message.slice(0, 14) + "....";
        return slicedMessage;
      }

      return message;
    },

    handleUserChatBoxStyle(userName) {
      if (userName === this.userName) {
        return "this-user";
      }
      return "other-user";
    },

    handleImages(userName) {
      if (this.$store.state.users[userName].userProfileImage.length) {
        return this.$store.state.users[userName].userProfileImage;
      }

      return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
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
          notificationType: "message",
          notificationStatus: "unRead",
          notificationDate: Date.now(),
        });

        this.message = "";
        this.showingMessage = this.userData.messages[this.friendMessaged];
      }
      this.scrollToBottom();
    },

    showMessage(userName, status, messageOnScreen) {
      this.userProfilePicture = this.handleImages(userName);
      this.friendMessaged = userName;
      let chatList = Object.keys(this.userData.messageStatus);

      if (!chatList.includes(userName) && status === "newMessage") {
        this.showingMessage = {
          none: {
            messageId: "none",
            messageDate: "",
            userName: this.userName,
            message: "",
            messageStatus: "",
          },
        };
        this.messagesEmpty = true;

        this.$store.dispatch("handleDisplayFunctions", {
          userName: "",
          params: "displayMessage",
        });
      } else {
        this.$store.dispatch("handleMessageViewStatus", {
          friendMessaged: userName,
          messageOnScreen,
          userName: this.userName,
          messageViewStatus: status,
          showMessage: false,
        });
        this.showingMessage = this.userData.messages[userName];
      }
      this.$refs.chatList.classList.add("container-mobileView");
      this.$refs.containerMessage.classList.remove("container-mobileView");
      this.handleSearchBackDrop("close");
    },

    showChatList() {
      this.$refs.containerMessage.classList.add("container-mobileView");
      this.$refs.chatList.classList.remove("container-mobileView");
    },

    handleMessageStatus(messageStatus, messageId) {
      if (messageStatus === "sent") {
        return true;
      } else if (messageStatus === "received") {
        return false;
      } else if (messageStatus === "Read") {
        return false;
      }
    },
    handleCheckStyle(messageStatus) {
      if (messageStatus === "received") {
        return "check-double";
      }
      return "check-double-read";
    },

    showDate(messageDate) {
      let currentDate = Date.now();
      let date = currentDate - messageDate;
      const minutes = Math.round(date / (1000 * 60));
      const hours = Math.round(date / (1000 * 60 * 60));
      const days = Math.round(date / (1000 * 60 * 60 * 24));
      const weeks = Math.round(date / (1000 * 60 * 60 * 24 * 7));
      const months = Math.round(date / (1000 * 60 * 60 * 24 * 7 * 12));
      const years = Math.round(date / (1000 * 60 * 60 * 365));

      if (minutes <= 0) {
        return "Just now";
      } else if (minutes < 60) {
        return minutes === 1 ? "1 minute ago" : minutes + "minutes ago";
      } else if (hours < 24) {
        return moment(date).format("L, h:mm :ss a");
      } else if (days < 7) {
        return moment(date).format("L, h:mm:ss a");
      } else if (weeks < 4) {
        return moment(date).format("L, h:mm :ss a");
      } else if (months < 12) {
        return moment(date).format("L, h:mm :SS a");
      } else {
        return moment(date).format("L, h:mm a");
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
        this.filUpStyle = "height:130px";
        return "margin-top:-90px";
      }
      this.filUpStyle = "height:160px";

      return "margin-top:0";
    },

    handleChatList() {
      let messageStatusList = Object.keys(this.userData.messageStatus);
      let messageChatList = [];
      messageStatusList.forEach((chat) => {
        messageChatList = [
          ...messageChatList,
          {
            userName: chat,
            showMessage: this.userData.messageStatus[chat].showMessage,
            messageDate: this.userData.messageStatus[chat].messageDate,
          },
        ];
      });

      this.chattedUsersList = messageChatList
        .sort((a, b) => a.messageDate - b.messageDate)
        .reverse();
    },
  },
  computed: {
    filteredSearchList() {
      let filteredSearchList = this.chattedUsersList
        .sort(function(a, b) {
          var nameA = a.userName.toUpperCase();
          var nameB = b.userName.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
        .filter((user) => {
          return (
            user.userName
              .toLowerCase()
              .indexOf(this.searchInput.toLowerCase()) !== -1
          );
        });

      this.filteredSearchLists = filteredSearchList;

      return this.filteredSearchLists;
    },

    searchNotFound() {
      if (this.filteredSearchLists.length) {
        return false;
      }
      return true;
    },

    showingMessages() {
      this.userData = this.$store.state.users[this.userName];
      this.messages = this.$store.state.users[this.userName].messages;
      this.storeData = this.$store.state;
      this.searchInput.length
        ? (this.displaySearchContents = true)
        : (this.displaySearchContents = false);

      this.handleChatList();

      let chattedUsersInfo = {};

      for (const chatUserName in this.userData.messageStatus) {
        let messageObjects = [];
        for (const messageId in this.userData.messages[chatUserName]) {
          messageObjects = [
            ...messageObjects,
            this.userData.messages[chatUserName][messageId],
          ].sort((a, b) => a.messageDate - b.messageDate);
        }
        chattedUsersInfo = {
          ...chattedUsersInfo,
          [chatUserName]: messageObjects[messageObjects.length - 1],
        };
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
