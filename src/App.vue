<template>

  <nav ref="nav" v-if="$store.state.displayFunctions.loginPageUnmounted">
    <div class="nav-container-one">
      <div class="logo-container">
        <h3>SoMedia</h3>


        <span class="search-icon  search-items">{{''}}
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>

        <input type="text" placeholder=" Search for Friends..." v-model="searchInput" class="search-items">


      </div>

      <ul class="website-info">
        <li> <a href="#about">About</a>&nbsp;
          <font-awesome-icon :icon="['fas', 'info']" />
        </li>
        <li> <a href="#contact">Contact</a>&nbsp;
          <font-awesome-icon :icon="['fas', 'phone-square-alt']" />
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


        <span ref="userImageMobileView" class="userImage  username-header"
          @click="handleUserOwnMenu('userImageMobileView')"> <img :src="userData.userProfileImage" alt="">
          {{userData.userName}}
          <font-awesome-icon :icon="['fas', 'sort-down']" v-if="dropIconDisplay" ref="sortDown" />
          <font-awesome-icon :icon="['fas', 'sort-up']" v-if="!dropIconDisplay" ref="sortUp" />
          <div class="dropdown-OwnMenu" ref="userOwnMenuMobileView">
            <font-awesome-icon :icon="['fas', 'sort-up']" class="pointer-part" />

            <ul>
              <li @click="showFriends()">Your Friends</li>
              <li @click="showFriends()">Your Followers</li>
              <li @click="showFriends()"> Following</li>
              <li @click="'chats'">Chats</li>
              <li class=" own-profile" ref="profile" @click="handlePushRoutes('userProfile')">

                My Profile

                &nbsp;
                <font-awesome-icon :icon="['fas', 'user']" ref="profileIcon" />
              </li>
              <li class="login-btns">
                <button @click="handleLogin('')" class="btn btn-danger m-1" v-if="logout">LogOut
                  <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                </button>
                <button @click="handleLogin('login')" class="btn btn-success m-1" v-if="updateUserData">LogIn
                  <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
                </button>
              </li>
            </ul>
          </div>

        </span>

      </div>

    </div>


    <div class="nav-container-two">

      <ul class="home-list">
        <li ref="home" @click="()=>{handlePushRoutes('Home'); handleActiveLink('Home')}" :style="homeLink"
          class="lists">Home&nbsp;
          <font-awesome-icon :icon="['fas', 'home']" ref="homeIcon" />
        </li>
        <li class="lists nav-newsFeed" :style="newsFeedLink" ref="newsFeed"
          @click="()=>{handlePushRoutes('Newsfeed');handleActiveLink('Newsfeed')}">Newsfeed&nbsp;
          <font-awesome-icon :icon="['fas', 'newspaper']" ref="newsFeedIcon" /><span class="show-counter"
            v-if="timelineCount? true:false">{{timelineCount}}</span>
        </li>

        <li class="lists" :style="timelineLink" ref="timeline" @click="handlePushRoutes('Timeline')">Timeline&nbsp;
          <font-awesome-icon :icon="['fas', 'user-clock']" ref="timelineIcon" />
        </li>
        <li class="lists nav-profile" :style="profileLink" ref="profile" @click="handlePushRoutes('userProfile')">

          Profile

          &nbsp;
          <font-awesome-icon :icon="['fas', 'user']" ref="profileIcon" />
        </li>
        <li class="lists" :style="messageLink" ref="messages" @click="handlePushRoutes('Messages')">Messages
          <font-awesome-icon :icon="['fas', 'envelope']" ref="messageIcon" /><span class="show-counter-messages"
            v-if="newMessageCount? true:false">{{newMessageCount}}</span>
        </li>
        <li class="lists collapsed-nav-notification" ref="notificationsFullNav"
          @click="handleNotifications('notificationsFullNav')">
          Notifications
          <font-awesome-icon :icon="['fas', 'bell']" ref="notificationIcon" />
          <span class="show-counter-notification" v-if="notificationCount? true:false">{{notificationCount}}</span>

          <div class="dropdown-notifications" ref="notificationMenuFullNav">
            <font-awesome-icon :icon="['fas', 'sort-up']" class="pointer-part" />
            <ul v-for="notification in notifications">

              <li ref="lists" @click="showNotificationDetails('post',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'post' && notification.notificationStatus === 'unRead'">
                Your friend <span class="names-Bold">{{notification.userName}}</span> just made a new
                {{notification.notificationType}} <br> <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('friend request',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'friend request' && notification.notificationStatus === 'unRead'">
                <span class="names-Bold">{{notification.userName}}</span> sent you a {{notification.notificationType}}
                <br> <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('Accepted Friend Request',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'Accepted Friend Request' && notification.notificationStatus === 'unRead'">
                <span class="names-Bold">{{notification.userName}}</span> accpted Your Friend request
                <br> <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('message',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'message' && notification.notificationStatus === 'unRead'">
                You have a new {{notification.notificationType}} from <span
                  class="names-Bold">{{notification.userName}}</span> <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.posterUserName === userData.userName ">
                <span class="names-Bold">{{notification.userName}}</span> likes your post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>


              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName !== notification.posterUserName && notification.posterUserName !== userData.userName">
                Your friend <span class="names-Bold">{{notification.userName}}</span> likes <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <!-- <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName !== notification.posterUserName && notification.posterUserName !== userData.userName
&& !friendsList.includes(notification.userName)">
<span class="names-Bold">{{notification.userName}}</span> likes <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li> -->

              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName === notification.posterUserName && notification.posterUserName !== userData.userName">
                Your friend <span class="names-Bold">{{notification.userName}}</span> likes <span
                  class="names-Bold">{{handleGender(notification.userName)}}</span> post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.commenterUserName === userData.userName && notification.posterUserName !== userData.userName && notification.posterUserName !== notification.userName && notification.commenterUserName !== notification.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes your comment on <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>


  <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.commenterUserName === userData.userName && notification.posterUserName !== userData.userName && notification.posterUserName !== notification.userName && notification.commenterUserName === notification.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes {{handleGender(notification.userName)}} comment on <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>


              <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.commenterUserName === userData.userName && notification.posterUserName === userData.userName && notification.posterUserName !== notification.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes your comment on Your post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>


              <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.commenterUserName !== userData.userName && notification.posterUserName === userData.userName && notification.posterUserName !== notification.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes {{notification.commenterUserName}}
                comment on Your post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.commenterUserName === userData.userName && notification.posterUserName !== userData.userName && notification.posterUserName === notification.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes {{handleGender(notification.userName)}}
                comment on {{handleGender(notification.userName)}} post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>




 <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.posterUserName === userData.userName && notification.userName !== userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> commented on your post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>


  <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName && notification.userName !== notification.posterUserName">
                Your friend
                <span class="names-Bold">{{notification.userName}}</span> commented on <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

  <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName && notification.userName !== notification.posterUserName">
                Your friend
                <span class="names-Bold">{{notification.userName}}</span> commented on {{handleGender(notification.userName)}} post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

<li ref="lists"
                @click="showNotificationDetails('follow',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'follow' && notification.notificationStatus === 'unRead' && notification.userName !== userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> started following you <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

  <!-- <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName && notification.userName !== notification.posterUserName">
                Your friend
                <span class="names-Bold">{{notification.userName}}</span> commented on {{handleGender(notification.userName)}} post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li> -->
              <!-- 
           
   


 <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                Your friend <span class="names-Bold">{{notification.userName}}</span> likes <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
            
             
            

              <li ref="lists"
                @click="showNotificationDetails('follow',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'follow' && notification.notificationStatus === 'unRead' && notification.userName !== userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> started following you <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li> -->
            </ul>
            <span v-if="!notificationCount? true:false">You have no new Notification</span>

          </div>
        </li>





      </ul>

      <div class="user-icon">


        <span ref="userImageFullNav" class="userImage" @click="handleUserOwnMenu('userImageFullNav')"> <img
            :src="userData.userProfileImage" alt=""> <span>
            {{userData.userName}}</span>
          <font-awesome-icon :icon="['fas', 'sort-down']" v-if="dropIconDisplay" ref="sortDown" />
          <!-- @click="showUserTimeline(userData.userName, userData.userId)" -->
          <font-awesome-icon :icon="['fas', 'sort-up']" v-if="!dropIconDisplay" ref="sortUp" />

          <div class="dropdown-OwnMenu" ref="userOwnMenuFullNav">
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



  <div class="collapsed-nav" ref="collapsedNav" style="display: none;"
    v-if="$store.state.displayFunctions.loginPageUnmounted">
    <div class="logo-container">
      <h3>SoMedia</h3>


      <span class="search-icon search-items">{{''}}
        <font-awesome-icon :icon="['fas', 'search']" />
      </span>

      <input type="text" placeholder=" Search for Friends..." v-model="searchInput" class="search-items">


    </div>

    <div class="nav-container-two">
      <ul class="home-list">
        <li ref="home" :style="homeLink" @click="()=>{handlePushRoutes('Home'); handleActiveLink('Home')}"
          class="lists">
          <span class="collapsed-nav-text">Home </span>
          <font-awesome-icon :icon="['fas', 'home']" ref="homeIcon" />
        </li>
        <li class="lists list-mobile-view" :style="newsFeedLink" ref="newsFeed"
          @click="()=>{handlePushRoutes('Newsfeed');handleActiveLink('Newsfeed')}">
          <!-- <router-link  :style="newsFeedLink"  :to="{ name: 'Home' }">  -->
          <span class="collapsed-nav-text list-mobile-view">Newsfeed </span>
          <font-awesome-icon :icon="['fas', 'newspaper']" ref="newsFeedIcon" />
          <!-- </router-link> -->
          <span class="show-counter" v-if="timelineCount? true:false">{{timelineCount}}</span>
        </li>

        <li class="lists  list-mobile-view" :style="timelineLink" ref="timeline" @click="handlePushRoutes('Timeline')">
          <span class="collapsed-nav-text">Timeline </span>
          <font-awesome-icon :icon="['fas', 'user-clock']" ref="timelineIcon" />
        </li>
        <li class="lists   list-mobile-view" :style="profileLink" ref="profile"
          @click="handlePushRoutes('userProfile')">
          <!-- <router-link :style="profileLink" :to="{
                name: 'userProfile',
                params: { userName: userData.userName },
              }"> -->

          <span class="collapsed-nav-text nav-profile"> Profile </span>
          <font-awesome-icon :icon="['fas', 'user']" ref="profileIcon" />
          <!-- </router-link> -->
        </li>
        <li class="lists" :style="messageLink" ref="messages" @click="handlePushRoutes('Messages')"> <span
            class="collapsed-nav-text"> Messages </span>
          <font-awesome-icon :icon="['fas', 'envelope']" ref="messageIcon" /><span class="show-counter-messages  "
            v-if="newMessageCount? true:false">{{newMessageCount}}</span>
        </li>
        <li class="lists  collapsed-nav-notification" ref="notifications" @click="handleNotifications('notifications')">
          <span class="collapsed-nav-text"> Notifications </span>

          <font-awesome-icon :icon="['fas', 'bell']" ref="notificationIcon" />
          <span class="show-counter-notification" v-if="notificationCount? true:false">{{notificationCount}}</span>

          <div class="dropdown-notifications" ref="notificationMenu">
            <font-awesome-icon :icon="['fas', 'sort-up']" class="pointer-part" />
            <ul v-for="notification in notifications">
              <li ref="lists"
                @click="showNotificationDetails('friend request',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'friend request' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> sent you a {{notification.notificationType}}
                <br> <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('message',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'message' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                You have a new {{notification.notificationType}} from <span
                  class="names-Bold">{{notification.userName}}</span> <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists" @click="showNotificationDetails('post',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'post' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                Your friend <span class="names-Bold">{{notification.userName}}</span> just made a new
                {{notification.notificationType}} <br> <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.posterUserName === userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes your post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName !== notification.posterUserName">
                Your friend <span class="names-Bold">{{notification.userName}}</span> likes <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('likes',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'likes' && notification.notificationStatus === 'unRead'&& notification.userName === notification.posterUserName">
                Your friend <span class="names-Bold">{{notification.userName}}</span> likes <span
                  class="names-Bold">{{handleGender(notification.userName)}}</span> post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('likedComment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'likedComment' && notification.notificationStatus === 'unRead'&& notification.userName === userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> likes your comment on <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.posterUserName === userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> commented on your post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
              <li ref="lists"
                @click="showNotificationDetails('comment',notification.notificationId,notification.userName,notification.posterUserName)"
                v-if="notification.notificationType === 'comment' && notification.notificationStatus === 'unRead'&& notification.userName !== userData.userName">
                Your friend
                <span class="names-Bold">{{notification.userName}}</span> commented on <span
                  class="names-Bold">{{notification.posterUserName}}</span>'s post <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>

              <li ref="lists"
                @click="showNotificationDetails('follow',notification.notificationId,notification.userName)"
                v-if="notification.notificationType === 'follow' && notification.notificationStatus === 'unRead' && notification.userName !== userData.userName">
                <span class="names-Bold">{{notification.userName}}</span> started following you <br>
                <span>{{showDate(notification.notificationDate)}}</span>
                <hr>
              </li>
            </ul>
            <span v-if="!notificationCount? true:false">You have no new Notification</span>

          </div>
        </li>

      </ul>
    </div>

    <div class="user-icon">


      <span ref="userImage" class="userImage" @click="handleUserOwnMenu"> <img :src="userData.userProfileImage" alt=""> <span>
          {{userData.userName}}</span>
        <font-awesome-icon :icon="['fas', 'sort-down']" v-if="dropIconDisplay" ref="sortDown" />
        <!-- @click="showUserTimeline(userData.userName, userData.userId)" -->
        <font-awesome-icon :icon="['fas', 'sort-up']" v-if="!dropIconDisplay" ref="sortUp" />


        <div class="dropdown-OwnMenu" ref="userOwnMenu">
          <font-awesome-icon :icon="['fas', 'sort-up']" class="pointer-part" />

          <ul>
            <li @click="showFriends">Your Friends</li>
            <li @click="showFriends">Your Followers</li>
            <li @click="showFriends"> Following</li>
            <li @click="'chats'">Chats</li>
            <li class=" own-profile" ref="profile" @click="handlePushRoutes('userProfile')">

              My Profile

              &nbsp;
              <font-awesome-icon :icon="['fas', 'user']" ref="profileIcon" />
            </li>

            <li class="list-MV" @click="()=>{handlePushRoutes('Newsfeed');handleActiveLink('Newsfeed')}">
              <!-- <router-link  :style="newsFeedLink"  :to="{ name: 'Home' }">  -->
              <span>Newsfeed </span>
              <font-awesome-icon :icon="['fas', 'newspaper']" />
              <!-- </router-link> -->
              <span class="show-counter" v-if="timelineCount? true:false">{{timelineCount}}</span>
            </li>

            <li class="list-MV" @click="handlePushRoutes('Timeline')">
              <span>Timeline </span>
              <font-awesome-icon :icon="['fas', 'user-clock']" />
            </li>
            <li class="login-btns">
              <button @click="handleLogin('')" class="btn btn-danger " v-if="logout">LogOut
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
              </button>
              <button @click="handleLogin('login')" class="btn btn-success " v-if="updateUserData">LogIn
                <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
              </button>
            </li>


          </ul>
        </div>

      </span>

    </div>




  </div>





































  <router-view />
</template>

<script>
  import moment from "moment"

  export default {
    name: "App",
    data() {
      return {

        userData: {
          userName: "Guest"
        },
        login: true,
        logout: false,
        notificationState: false,
        notificationStateFullNav: false,
        userOwnMenu: false,
        userOwnMenuFullNav: false,
        userOwnMenuMobileView: false,
        searchInput: '',
        dropIconDisplay: true,
        friendsList: [],
        notifications: [],
        notificationCount: '',
        newMessageCount: 0,
        timelineCount: 0,
        homeLink: 'Home',
        profileLink: '',
        timelineLink: '',
        messageLink: '',
        newsFeedLink: '',
        notificationLink: '',
        activeLink: "background-color: var(--pink);color:var(--nave-blue)!important;font-weight: 600;",
        inActiveLink: "background-color: var(--nave-blue);color:#3aa1dd;font-weight: 600;",
      }
    },
    created() {
      // window.addEventListener('click', (event) => this.handleCloseDropDown(event))
      window.addEventListener('resize', this.$store.commit('setWindowWidth'))

    },


    unmounted() {

      window.removeEventListener('click', (event) => this.handleCloseDropDown(event))
    },

    mounted() {

      window.addEventListener('scroll', () => this.handleCollapseNav());
       window.addEventListener('scroll',this.$store.commit('setWindowWidth'))
    },
    beforeUnmount() {

      window.removeEventListener('scroll', () => this.handleCollapseNav());
    },
    

    methods: {

      handleCollapseNav() {
        // console.log(this.$router.currentRoute._rawValue.name);

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

          this.$store.dispatch("handleDisplayFunctions", {
            navCollapsed: true,
            params: "collapseNav"
          });

          this.$refs.nav.style = "display:none"
          this.$refs.collapsedNav.style = "display:flex"
        } else {



          this.$store.dispatch("handleDisplayFunctions", {
            navCollapsed: false,
            params: "collapseNav"
          });

          this.$refs.nav.style = "display:block"
          this.$refs.collapsedNav.style = "display:none"

        }

      },

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



      handleCloseDropDown(e) {

        let ownMenuMobileView = this.$refs.userImageMobileView
        let noticeMenuFullNav = this.$refs.notificationsFullNav
        let ownMenuFullNav = this.$refs.userImageFullNav
        let noticeMenu = this.$refs.notifications
        let ownMenu = this.$refs.userImage
        let target = e.target
        if (ownMenu !== undefined && ownMenu !== target && !ownMenu.contains(target) && this.userOwnMenu === true) {
          this.handleUserOwnMenu()

        }


        if (ownMenuMobileView !== undefined && ownMenuMobileView !== target && !ownMenuMobileView.contains(target) && this.userOwnMenuMobileView === true) {
          this.handleUserOwnMenu('userImageMobileView')


        }



        if (ownMenu !== undefined && ownMenuFullNav !== target && !ownMenuFullNav.contains(target) && this.userOwnMenuFullNav === true) {
          this.handleUserOwnMenu('userImageFullNav')


        }



        if (noticeMenu !== target && !noticeMenu.contains(target) && this.notificationState === true) {
          this.handleNotifications()

        }

        if (noticeMenuFullNav !== target && !noticeMenuFullNav.contains(target) && this.notificationStateFullNav === true) {
          this.handleNotifications("notificationsFullNav")
        }



      },

      handleUserOwnMenu(params) {
        if (params === 'userImageFullNav') {
          this.userOwnMenuFullNav ? this.$refs.userOwnMenuFullNav.style = "display:none;height:0;transition:all 1s" : this.$refs.userOwnMenuFullNav.style = "display:flex;height:auto;transition:all 1s";

          this.dropIconDisplay = !this.dropIconDisplay
          this.userOwnMenuFullNav = !this.userOwnMenuFullNav
        }
        else if (params === "userImageMobileView") {

          this.userOwnMenuMobileView ? this.$refs.userOwnMenuMobileView.style = "display:none;height:0;transition:all 1s" : this.$refs.userOwnMenuMobileView.style = "display:flex;height:auto;transition:all 1s";


          this.dropIconDisplay = !this.dropIconDisplay
          this.userOwnMenuMobileView = !this.userOwnMenuMobileView

        }

        else {
          this.userOwnMenu ? this.$refs.userOwnMenu.style = "display:none;height:0;transition:all 1s" : this.$refs.userOwnMenu.style = "display:flex;height:auto;transition:all 1s";


          this.dropIconDisplay = !this.dropIconDisplay
          this.userOwnMenu = !this.userOwnMenu
        }




      },
      handleActiveLink(activeLink) {

        switch (activeLink) {
          case "Home":
            this.homeLink = this.activeLink
            this.profileLink = this.inActiveLink
            this.timelineLink = this.inActiveLink
            this.messageLink = this.inActiveLink
            this.newsFeedLink = this.inActiveLink
            this.notificationLink = this.inActiveLink
            // this.$router.push({
            //   name: "Home",
            //   params: { userName: this.userData.userName },
            // });

            break;

          case "userProfile":
            this.homeLink = this.inActiveLink
            this.profileLink = this.activeLink
            this.timelineLink = this.inActiveLink
            this.messageLink = this.inActiveLink
            this.newsFeedLink = this.inActiveLink
            this.notificationLink = this.inActiveLink
            // this.$router.push({
            //   name: "userProfile",
            //   params: { userName: this.userData.userName },
            // });

            break;
          case "Messages":
            this.homeLink = this.inActiveLink
            this.profileLink = this.inActiveLink
            this.timelineLink = this.inActiveLink
            this.messageLink = this.activeLink
            this.newsFeedLink = this.inActiveLink
            this.notificationLink = this.inActiveLink
            // this.$router.push({
            //   name: "Messages",
            //   params: { userName: this.userData.userName },
            // });
            break;

          case "Timeline":
            this.homeLink = this.inActiveLink
            this.profileLink = this.inActiveLink
            this.timelineLink = this.activeLink
            this.messageLink = this.inActiveLink
            this.newsFeedLink = this.inActiveLink
            this.notificationLink = this.inActiveLink
            // this.$router.push({
            //   name: "Timeline",
            //   params: { userName: this.userData.userName },
            // });
            break;
          case "Newsfeed":
            this.homeLink = this.inActiveLink
            this.profileLink = this.inActiveLink
            this.timelineLink = this.inActiveLink
            this.messageLink = this.inActiveLink
            this.newsFeedLink = this.activeLink
            this.notificationLink = this.inActiveLink
            // this.$router.push({
            //   name: "Home",
            //   params: { userName: this.userData.userName },
            // });
            break;

          default:
            break;
        }


      },


      handlePushRoutes(linkName) {

        this.$router.push({
          name: linkName,
          params: { userName: this.userData.userName },
        });


      },



      handleNotifications(params) {
        if (params === "notificationsFullNav") {
          this.notificationStateFullNav ? this.$refs.notificationMenuFullNav.style = "display:none;height:0;transition:all 1s" : this.$refs.notificationMenuFullNav.style = "display:flex;height:auto;transition:all 1s"

          this.notificationStateFullNav = !this.notificationStateFullNav
        }
        else {
          this.notificationState ? this.$refs.notificationMenu.style = "display:none;height:0;transition:all 1s" : this.$refs.notificationMenu.style = "display:flex;height:auto;transition:all 1s"
          this.notificationState = !this.notificationState
        }

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
      handleGender(userName) {

        for (const user in this.$store.state.users)
          if (this.$store.state.users[userName].gender === "male") {
            return "his"

          }

        return "her"
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
          return months === 1 ? "1 month ago" : months + " mouths ago";
        } else {
          return years === 1 ? "1 year ago" : years + " years ago";
        }
      },


    },
    computed: {

      updateUserData() {
        const userData = this.$store.state.userData
        this.userData = this.$store.state.userData
        let notifications = []
        let counter = 0;
        let unDubilcatedNotifications = this.userData.notifications
        for (const notificationId in this.userData.notifications) {
          for (const noticeId in unDubilcatedNotifications) {
            if (this.userData.notifications[notificationId].notificationType === unDubilcatedNotifications[noticeId].notificationType &&
              this.userData.notifications[notificationId].posterUserName === unDubilcatedNotifications[noticeId].posterUserName &&
              this.userData.notifications[notificationId].userName === unDubilcatedNotifications[noticeId].userName
            ) {
              counter++
              if (counter > 1) {


                delete unDubilcatedNotifications[noticeId]
              }

            }
          }

          counter = 0
        }


        for (const notificationId in unDubilcatedNotifications) {


          notifications = [...notifications, this.userData.notifications[notificationId]]

          this.notifications = notifications
        }


        this.notifications = this.notifications.filter((user) => user.userName !== this.userData.userName)

        this.$store.dispatch("handleMessageStatus", {
          userName: this.userData.userName,
        });



        let messageStatus = {}
        for (let messageUserName in this.userData.messageStatus) {
          if (this.userData.messageStatus[messageUserName].messageViewStatus === "unRead") {
            for (let messageId in this.userData.messages[messageUserName]) {
              if (this.userData.messages[messageUserName][messageId].messageStatus === "received") {


                messageStatus = { ...messageStatus, [messageId]: { friendMessaged: this.userData.messages[messageUserName][messageId].userName } }


              }



            }

          }


        }
console.log(1,this.$store.state);
console.log(2,this.$store.state.userData);

        this.newMessageCount = Object.keys(messageStatus).length


        if (this.$store.state.displayFunctions.activeLink.length) {
          this.handleActiveLink(this.$store.state.displayFunctions.activeLink)

        }

        let timelineCounter = {};

        for (const userKey in this.$store.state.newsFeed) {
          if (!this.$store.state.newsFeed[userKey].views.includes(this.userData.userName)) {
            timelineCounter = { ...timelineCounter, [userKey]: { userName: this.$store.state.newsFeed[userKey].userName } }

          }
        }

        this.timelineCount = Object.keys(timelineCounter).length


        const notificationCount = this.notifications.filter((noticeStatus) => noticeStatus.notificationStatus === "unRead")

        this.notificationCount = notificationCount.length


        this.friendsList = this.userData.friends.map((user) => user.userName)



        let login = true
        if (this.$store.state.userData.userName !== "Guest") {
          login = false
          this.logout = true
        } else { login = true }
        return login
      }

    }




  }
</script>



<style>



</style>
