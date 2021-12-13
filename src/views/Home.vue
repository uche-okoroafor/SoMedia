<template>
  <div class="newsfeed-container" id="newsfeed-container">
    <div class="container-sidebar-one">
      <div
        class="sidebar-list"
        :style="handleDisplayFunctions()"
        v-if="handleFooterOnScreen"
      >
        <ul>
          <li @click="handleClickedLinks('Messages')">
            <span> Messages </span>
            <font-awesome-icon class="ml-2" :icon="['fas', 'envelope']" />
          </li>

          <li @click="handleClickedLinks('Friends')">
            <span>Friends </span>
            <font-awesome-icon class="ml-2" :icon="['fas', 'user-friends']" />
          </li>

          <li @click="handleClickedLinks('Friends')">
            <span> Following </span>
            <font-awesome-icon class="ml-2" :icon="['fas', 'users']" />
          </li>

          <li @click="handleClickedLinks('Friends')">
            <span>Followers </span>
            <font-awesome-icon class="ml-2" :icon="['fas', 'users']" />
          </li>
        </ul>
      </div>
    </div>

    <div class="posts-container">
      <div class="form-field mb-5" ref="formField">
        <span
          ><img
            :src="userData.userProfileImage"
            class="user-image-icon"
            alt=""
          />
          <span v-if="showUserName" class="username-header">
            &nbsp; {{ userData.userName }}</span
          >
        </span>
        <form @submit.prevent="handlePublishPost()" ref="form">
          <textarea
            name="posttextarea"
            v-model="postTextArea"
            cols="30"
            rows="3"
            :style="textAreaStyle"
            :class="postStyle"
            placeholder=" Make a post"
            @click="handleMakePost('text')"
            ref="textArea"
          ></textarea>

          <br />
          <div class="filepreview" v-if="previewImage || previewVideo">
            <img :src="tempSource" alt="" v-if="previewImage" />

            <div
              class="post-Video stackItem"
              v-if="previewVideo && loadFileAddress"
            >
              <video width="500" heigth="100" controls>
                <source :src="tempSource" type="video/mp4" />
                <source :src="tempSource" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
          <input
            type="file"
            name="fileUpload"
            accept="video/mp4"
            ref="filesUploadVideo"
            @change="localFiles"
            v-show="false"
          />
          <input
            type="file"
            name="fileUpload"
            accept="image/png,image/jpeg"
            ref="filesUploadImages"
            @change="localFiles"
            v-show="false"
          />

          <div class="textarea-icons" ref="textareaIcons">
            <span class="edit-container" ref="editContainer">
              <span class="edit-icon-container">
                <font-awesome-icon
                  :icon="['fas', 'edit']"
                  ref="timelineIcon"
                  @click="handleMakePost('text')"
                />
                <span ref="chevronRight" style="display: none">
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="chevron-right"
                  />
                </span>
              </span>

              <span
                class="text-theme-container themes-icons-container"
                ref="themeContainer"
              >
                <div
                  @click="handleTheme('text-theme-default')"
                  class="text-theme text-theme-default "
                  :style="handleThemeStyle('text-theme-default')"
                ></div>
                <div
                  @click="handleTheme('text-themeOne')"
                  class="text-theme text-themeOne"
                  :style="handleThemeStyle('text-themeOne')"
                ></div>
                <div
                  @click="handleTheme('text-themeTwo')"
                  class="text-theme text-themeTwo"
                  :style="handleThemeStyle('text-themeTwo')"
                ></div>
                <div
                  @click="handleTheme('text-themeThree')"
                  class="text-theme text-themeThree"
                  :style="handleThemeStyle('text-themeThree')"
                ></div>
                <div
                  @click="handleTheme('text-themeFour')"
                  class="text-theme text-themeFour"
                  :style="handleThemeStyle('text-themeFour')"
                ></div>
                <div
                  @click="handleTheme('text-themeFive')"
                  class="text-theme text-themeFive"
                  :style="handleThemeStyle('text-themeFive')"
                ></div>
                <div
                  @click="handleTheme('text-themeSix')"
                  class="text-theme text-themeSix"
                  :style="handleThemeStyle('text-themeSix')"
                ></div>
                <div
                  @click="handleTheme('text-themeSeven')"
                  class="text-theme text-themeSeven"
                  :style="handleThemeStyle('text-themeSeven')"
                ></div>
                <div
                  @click="handleTheme('text-themeEight')"
                  class="text-theme text-themeEight"
                  :style="handleThemeStyle('text-themeEight')"
                ></div>
                <div
                  @click="handleTheme('text-themeNine')"
                  class="text-theme text-themeNine"
                  :style="handleThemeStyle('text-themeNine')"
                ></div>
                <div
                  @click="handleTheme('text-themeTen')"
                  class="text-theme text-themeTen"
                  :style="handleThemeStyle('text-themeTen')"
                ></div>
              </span>
            </span>
            <span>
              <font-awesome-icon
                :icon="['fas', 'image']"
                @click="handleMakePost('image')"
              />
            </span>
            <span>
              <font-awesome-icon
                :icon="['fas', 'video']"
                ref="timelineIcon"
                @click="handleMakePost('video')"
              />
            </span>
          </div>

          <button type="submit" class="btn ">Post</button>
        </form>
      </div>

      <div
        class="post-container"
        v-for="post in newsFeeds"
        :key="post.postId + 'key'"
      >
        <div
          class="userImage"
          @click="showUserTimeline(post.userName, post.userId)"
          :ref="post.postId"
        >
          <img
            :src="
              handleUserIcon($store.state.users[post.userName].userProfileImage)
            "
            class="user-image-icon"
            alt=""
          />
          <span class="userName-Timeposted"
            ><span class="username-header">{{ post.userName }}</span
            ><span class="comment">
              Posted {{ showDate(post.datePosted) }}</span
            >
          </span>
        </div>

        <div
          class="post rounded"
          :class="post.postStyle"
          v-if="post.posts.length"
          :style="handlePostThemes(post.postStyle)"
          ref="post"
        >
          <span> {{ post.posts }}</span>
        </div>
        <div
          v-for="image in post.postImages"
          class="post-images"
          :key="post.postImages"
          v-if="post.postImages.length"
        >
          <img :src="image.imageUrl" alt="" />
        </div>
        <div
          class="post-Video"
          v-if="post.postVideos.videoId"
          :ref="post.postVideos.videoId"
        >
          <video
            width="500"
            class="video-desktopView"
            max-height="300"
            :controls="controlsState"
            :autoplay="post.postVideos.videoAutoplay"
            :id="post.postVideos.videoId"
            @click="pauseVideo(post.postVideos.videoId)"
          >
            <source :src="post.postVideos.videoUrl" type="video/mp4" />
            <source :src="post.postVideos.videoUrl" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="post-comments">
          <span
            @click="
              handleLikes(
                'postLikes',
                'incrementPostLikes',
                post.postId,
                userData.userId,
                post.userName,
                post.postId
              )
            "
            class="m-2  comment-like font-weight-bold"
            :class="handleLikeStyle(post.likes, 'likes')"
            ><span class="text-success ">Likes</span>
            &nbsp;
            <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            {{ post.likes.length }}
          </span>
          <span
            @click="
              handleLikes(
                'postLikes',
                'decrementPostLikes',
                post.postId,
                userData.userId,
                post.userName,
                post.postId
              )
            "
            class="m-2  comment-unlike  font-weight-bold"
            :class="handleLikeStyle(post.unLikes, 'unlikes')"
          >
            <span class="text-danger font-weight-bold"> unlikes</span> &nbsp;
            <font-awesome-icon :icon="['fas', 'thumbs-down']" />
            {{ post.unLikes.length }}
          </span>
          <div class="m-2  post-views">
            Views &nbsp; <font-awesome-icon :icon="['fas', 'eye']" /> &nbsp;
            {{ post.views.length }}
          </div>
          <div class="m-2  post-comments-num">
            {{ Object.keys(post.comments).length }} comments
          </div>
        </div>
        <hr />
        <h6 class="m-3 ml-5 font-weight-bold ">Comments</h6>

        <div
          class="comments"
          v-for="comment in post.comments"
          :key="comment.commentId"
        >
          <div
            class="userImage ml-5"
            @click="showUserTimeline(comment.userName, comment.userId)"
          >
            <img
              :src="
                handleUserIcon(
                  $store.state.users[comment.userName].userProfileImage
                )
              "
              class="user-image-icon"
              alt=""
            />
            <span class="userName-Timeposted"
              ><span class="username-header">{{ comment.userName }}</span
              ><span class="comment">
                commented {{ showDate(comment.dateCommented) }}</span
              >
            </span>
          </div>

          <p class="ml-5 comments-text">{{ comment.comment }}</p>
          <div class="comment-like-container">
            <span
              @click="
                handleLikes(
                  'commentLikes',
                  'incrementCommentLikes',
                  post.postId,
                  userData.userId,
                  post.userName,
                  comment
                )
              "
              class="comment-mobile-view comment-like  font-weight-bold"
              :class="handleLikeStyle(comment.likes, 'likes')"
              ><span class="text-success ">Likes</span>
              &nbsp;
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              {{ comment.likes.length }}
            </span>
            <span
              @click="
                handleLikes(
                  'commentLikes',
                  'decrementCommentLikes',
                  post.postId,
                  userData.userId,
                  post.userName,
                  comment
                )
              "
              class="comment-mobile-view  comment-unlike font-weight-bold"
              :class="handleLikeStyle(comment.unLikes, 'unlikes')"
            >
              <span class="text-danger">Unikes</span>
              &nbsp;
              <font-awesome-icon :icon="['fas', 'thumbs-down']" />
              {{ comment.unLikes.length }}
            </span>
          </div>
        </div>
        <div class="comment-input-field">
          <span
            ><img
              :src="handleUserIcon(userData.userProfileImage)"
              class="user-image-icon"
              alt=""
          /></span>
          <form
            @submit.prevent="
              handlePosterComment(
                post.posterComment,
                post.postId,
                post.userName
              )
            "
          >
            <input
              type="text"
              class="input"
              placeholder=" Post a comment"
              v-model="post.posterComment"
            />

            <button type="submit" class="btn btn-info">Comment</button>
          </form>
        </div>
        <hr />
      </div>
    </div>
    <div class="container-sidebar-two">
      <div class="sidebar-list">
        <div class="sidebar-list-header">
          <h5>Online</h5>
        </div>
        <ul>
          <div v-for="user in allUsers" :key="user.userName">
            <li
              @click="showMessage(user.userName)"
              v-if="user.userName !== $store.state.userData.userName"
            >
              <img
                :src="$store.state.users[user.userName].userProfileImage"
                class="user-image-icon"
                alt=""
              />
              <span class="username-header"> {{ user.userName }}</span>
              <button class="btn btn-success">Chat</button>
            </li>
          </div>
        </ul>
      </div>
    </div>

    <div
      class="restrict-Guest"
      v-if="restrictGuest"
      @click="closeRestrictMessage"
    >
      <div class="restrict-Guest-contents">
        <div class="close-restrict-message " @click="closeRestrictMessage">
          <font-awesome-icon
            :icon="['fas', 'times-circle']"
            class="color-danger"
          />
        </div>
        <span class="mt-3"
          >Login Or Create an Account to Have Access to this
          <span style="white-space:nowrap;">Link !</span>
          <br />
          <br />
          <span
            class="signin-button btn btn-success h-1 mb-1"
            @click="handleLogin('login')"
            >Sign In
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
          </span>
        </span>
      </div>
    </div>
  </div>
  <div
    class="post-back-drop"
    v-if="PostBackDrop"
    :style="PostBackDropZIndex"
    @click="handleCloseTextarea"
  ></div>
</template>

<script>
import LogInPage from "./LogInPage";
import { uuid } from "vue-uuid";
import moment from "moment";

export default {
  name: "Home",
  components: { LogInPage },
  props: ["comments"],
  data() {
    return {
      userData: {
        userName: "Guest",
        userId: "419",
        emailAddress: "419",
        firstName: "",
        lastName: "",
        address: "",
        emailAddress: "",
        postCode: "",
        country: "",
        city: "",
        aboutMe: "",
        password: "",
        messages: [],
        posts: [],
        followers: [],
        following: [],
        friends: [],
        likes: [],
        unLikes: [],
        posterComment: "",
        comments: {
          likes: [],
          unLikes: [],
        },
      },
      sidebarListOneMargin: "margin-top:2rem",
      newsFeed: {},
      postTextArea: "",
      displayFriends: false,
      displayFollowers: false,
      displayFollowing: false,
      notifications: [],
      showUserName: false,
      postStyle: "text-theme-default",
      tempSource: "",
      previewVideo: false,
      previewImage: false,
      loadFileAddress: false,
      textAreaStyle: "",
      PostBackDrop: false,
      PostBackDropZIndex: "z-index:600",
      restrictGuest: false,
      videoAutoplay: false,
      newsFeeds: [],
      controlsState: true,
      videoPlay: true,
    };
  },

  mounted() {
    this.loadData();
    window.scrollTo(0, 0);
    document.addEventListener("scroll", () => this.onScroll(this.$refs));
  },
  beforeUnmount() {
    this.loadData();
    window.scrollTo(0, 0);
    document.removeEventListener("scroll", () => this.onScroll(this.$refs));
  },

  methods: {
    loadData() {
      this.newsFeed = this.$store.state.newsFeed;
      this.userData = this.$store.state.userData;

      if (
        (this.previewVideo && this.tempSource.length) ||
        (this.previewImage && this.tempSource.length)
      ) {
        this.loadFileAddress = true;
      }

      let newsFeeds = [];

      for (const newsFeedId in this.newsFeed) {
        newsFeeds.push(this.newsFeed[newsFeedId]);
      }

      let viewed = [...newsFeeds].filter((posts) =>
        posts.views.includes(this.userData.userName)
      );
      let unViewed = [...newsFeeds].filter(
        (posts) => !posts.views.includes(this.userData.userName)
      );
      let newsFeedsList = unViewed.concat(viewed);

      if (!unViewed.length) {
        return (this.newsFeeds = newsFeedsList.reverse());
      } else if (!viewed.length) {
        return (this.newsFeeds = newsFeedsList.reverse());
      } else {
        return (this.newsFeeds = newsFeedsList);
      }
    },

    handlePostThemes(theme) {
      if (theme !== "text-theme-default") {
        return "min-height:200px";
      }

      return "heigth:auto";
    },

    handleLikeStyle(likes, params) {
      switch (params) {
        case "likes":
          if (likes.includes(this.userData.userName)) {
            return "text-success";
          }
          return "comment-like";
          break;

        case "unlikes":
          if (likes.includes(this.userData.userName)) {
            return "text-danger";
          }

          return "comment-like";
          break;

        default:
          break;
      }
    },

    localFiles(e) {
      this.tempSource = URL.createObjectURL(e.target.files[0]);
    },

    handleTheme(theme) {
      this.postStyle = theme;
      this.textAreaStyle = "height:15rem;border-radius:2px;width:100%;";
    },

    handleThemeStyle(theme) {
      if (theme === this.postStyle) {
        return "padding:0px;border:2px solid #e83e8c";
      } else if (this.previewImage || this.previewVideo) {
        return "padding:0px;visibility:hidden";
      }

      return "padding:0px";
    },

    handleMakePost(params) {
      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }
      this.PostBackDrop = true;

      if (params !== "text") {
        if (params === "video") {
          this.previewVideo = true;
          this.previewImage = false;
          this.loadFileAddress = false;
          this.tempSource = "";
          this.$refs.filesUploadVideo.click();
        } else {
          this.previewImage = true;
          this.previewVideo = false;
          this.$refs.filesUploadImages.click();
        }
      }

      this.$refs.formField.style =
        "flex-flow:column;transition:all 0.4s;z-index:650";
      this.$refs.textArea.classList.add("textarea-input");
      this.$refs.textareaIcons.style =
        "flex-flow:column;font-size:1.5rem;transition:all 0.4s";
      this.$refs.themeContainer.style =
        "display:flex;width:auto;transition:all 0.4s";
      this.$refs.editContainer.style = "display:flex";
      this.$refs.chevronRight.style = "display:inline";
      this.showUserName = true;
    },

    handleCloseTextarea() {
      this.PostBackDrop = false;

      this.$refs.textArea.classList.remove("textarea-input");
      this.textAreaStyle = "";
      this.$refs.formField.style =
        "flex-flow:row;height:auto;transition:all 0.4s";
      this.$refs.textareaIcons.style = "flex-flow:row;";
      this.$refs.themeContainer.style = "display:none;";
      this.$refs.editContainer.style = "display:inline";
      this.$refs.chevronRight.style = "display:none";
      this.postStyle = "text-theme-default";
      this.showUserName = false;
      this.previewVideo = false;
      this.previewImage = false;
      this.tempSource = "";
    },

    handleUserIcon(userProfileImage) {
      if (userProfileImage === undefined) {
        return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
      }
      return userProfileImage;
    },
    showUserTimeline(userName) {
      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }

      this.$router.push({
        name: "Timeline",
        params: { userName: userName, Timeline: "Timeline" },
      });
    },

    handleClickedLinks(link) {
      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }

      if (link === "Friends") {
        return this.$router.push({
          name: "Friends",
          params: { userName: this.userData.userName, Timeline: "friends" },
        });
      }

      this.$router.push({
        name: "Messages",
        params: { userName: this.userData.userName },
      });
    },

    handlePublishPost() {
      this.$store.dispatch("handleDisplayFunctions", {
        suspendMessageUpdate: true,
        params: "suspendMessageUpdate",
      });

      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }

      let postId = uuid.v1();
      let videoId = "";
      let imageId = "";
      let videoSrc = this.tempSource;
      let imageSrc = this.tempSource;
      if (this.previewVideo && this.tempSource) {
        videoId = uuid.v1();
        imageSrc = "";
      } else {
        videoSrc = "";
        imageId = uuid.v1();
      }

      if (this.postTextArea.length || this.tempSource.length) {
        this.$store.dispatch("handlePublishPost", {
          [postId]: {
            userName: this.userData.userName,
            userId: this.userData.userId,
            views: [],
            postId,
            datePosted: Date.now(),
            posts: this.postTextArea,
            likes: [],
            unLikes: [],
            posterComment: "",
            comments: [],
            postStyle: this.postStyle,
            postImages: [{ imageUrl: imageSrc, imageId }],
            postVideos: { videoUrl: videoSrc, videoId, videoAutoplay: false },
          },
        });

        if (this.tempSource.length && this.previewVideo) {
          this.$store.dispatch("handleAddImageVideo", {
            userName: this.userData.userName,
            videoUrl: this.tempSource,
            videoId: uuid.v1(),
            fileType: "video",
          });
        } else if (this.tempSource.length && this.previewImage) {
          this.$store.dispatch("handleAddImageVideo", {
            userName: this.userData.userName,
            imageUrl: this.tempSource,
            imageId: uuid.v1(),
            fileType: "image",
          });
        }

        this.postTextArea = "";
        this.handleCloseTextarea();
        this.loadData();
        this.tempSource = "";
      }

      this.$store.dispatch("handleNotifications", {
        userName: this.userData.userName,
        notificationId: uuid.v1(),
        notificationType: "post",
        notificationStatus: "unRead",
        notificationDate: Date.now(),
      });

      this.$store.dispatch("handleActivities", {
        userName: this.userData.userName,
        activity: "posted",
        activityDate: Date.now(),
        activityId: uuid.v1(),
      });
    },

    handleLikes(condition, params, postId, userId, posterUserName, comment) {
      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }

      this.$store.dispatch("handleLikes", {
        condition,
        params,
        postId,
        userId,
        userName: this.userData.userName,
        commentId: comment.commentId,
        dateLiked: Date.now(),
      });

      this.$store.dispatch("handleNotifications", {
        userName: this.userData.userName,
        posterUserName,
        notificationId: uuid.v1(),
        notificationType: "likes",
        notificationStatus: "unRead",
        notificationDate: Date.now(),
      });

      if (condition === "postLikes" && params === "incrementPostLikes") {
        this.$store.dispatch("handleNotifications", {
          userName: this.userData.userName,
          posterUserName,
          notificationId: uuid.v1(),
          notificationType: "likes",
          notificationStatus: "unRead",
          notificationDate: Date.now(),
        });

        this.$store.dispatch("handleActivities", {
          userName: this.userData.userName,
          posterUserName,
          activity: "liked",
          activityDate: Date.now(),
          activityId: uuid.v1(),
        });
      } else {
        if (params === "incrementCommentLikes") {
          this.$store.dispatch("handleActivities", {
            userName: this.userData.userName,
            posterUserName,
            commenterUserName: comment.userName,
            activity: "likedComment",
            activityDate: Date.now(),
            activityId: uuid.v1(),
          });

          this.$store.dispatch("handleNotifications", {
            userName: this.userData.userName,
            posterUserName,
            commenterUserName: comment.userName,
            notificationId: uuid.v1(),
            notificationType: "likedComment",
            notificationStatus: "unRead",
            notificationDate: Date.now(),
          });
        }
      }
    },

    handleLogin(params) {
      this.$router.push({ name: "Login" });
    },

    closeRestrictMessage() {
      this.restrictGuest = false;
    },

    showMessage(userName, status) {
      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }
      this.$store.dispatch("handleDisplayFunctions", {
        userName,
        params: "displayMessage",
      });
      this.$router.push({
        name: "Messages",
        params: { userName: this.userData.userName },
      });
    },

    handlePostViews(postId) {
      if (this.userData.userName !== this.newsFeed[postId].userName) {
        this.$store.dispatch("handlePostViews", {
          userName: this.userData.userName,
          postId,
        });
      }
    },

    onScroll(ref) {
      let refObject = Object.keys(ref);

      for (let newsFeedId in this.newsFeed) {
        if (refObject.includes(newsFeedId)) {
          if (ref[newsFeedId] !== null) {
            if (this.isElementInViewport(ref[newsFeedId])) {
              this.handlePostViews(newsFeedId);
            }
          }
        }

        if (refObject.includes(this.newsFeed[newsFeedId].postVideos.videoId)) {
          if (ref[this.newsFeed[newsFeedId].postVideos.videoId] !== null) {
            if (
              this.isElementInViewport(
                ref[this.newsFeed[newsFeedId].postVideos.videoId]
              )
            ) {
              document
                .getElementById(this.newsFeed[newsFeedId].postVideos.videoId)
                .play()
                .catch((e) => {});
            } else {
              document
                .getElementById(this.newsFeed[newsFeedId].postVideos.videoId)
                .pause();
            }
          }
        }
      }

      if (document.body.scrollWidth <= 530) {
        this.controlsState = false;
      } else {
        this.controlsState = true;
      }
    },

    pauseVideo(videoId) {
      if (document.body.scrollWidth) {
        if (this.videoPlay) {
          document.getElementById(videoId).pause();
          this.videoPlay = !this.videoPlay;
        } else {
          document.getElementById(videoId).play();
          this.videoPlay = !this.videoPlay;
        }
      }
    },

    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    handlePosterComment(comment, postId, posterUserName) {
      if (this.userData.userName === "Guest") {
        return (this.restrictGuest = true);
      }
      let commentId = uuid.v1();
      if (comment.length) {
        this.$store.dispatch("handlePosterComment", {
          [commentId]: {
            userName: this.userData.userName,
            userId: this.userData.userId,
            comment,
            dateCommented: Date.now(),
            commentId,
            likes: [],
            postId,
            unLikes: [],
          },
        });

        this.$store.dispatch("handleNotifications", {
          userName: this.userData.userName,
          posterUserName,
          notificationId: uuid.v1(),
          notificationType: "comment",
          notificationStatus: "unRead",
          notificationDate: Date.now(),
        });

        this.$store.dispatch("handleActivities", {
          userName: this.userData.userName,
          posterUserName,
          activity: "commented",
          activityDate: Date.now(),
          activityId: uuid.v1(),
        });
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
      } else if (minutes < 60) {
        return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
      } else if (hours < 24) {
        return hours === 1 ? "1 hour ago" : hours + " hours ago";
      } else if (days < 7) {
        return days === 1 ? "1 day ago" : days + " days ago";
      } else if (weeks < 4) {
        return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
      } else if (months < 12) {
        return months === 1 ? "1 month ago" : months + " mouths ago";
      } else {
        return years === 1 ? "1 year ago" : years + " years ago";
      }
    },

    handleDisplayFunctions() {
      if (this.$store.state.displayFunctions.navCollapsed) {
        this.sidebarListOneMargin = "margin-top:-3rem";
        return this.sidebarListOneMargin;
      } else {
        this.sidebarListOneMargin = "margin-top:2rem";
        return this.sidebarListOneMargin;
      }
    },
  },

  computed: {
    handleFooterOnScreen() {
      if (this.$store.state.displayFunctions.footerOnScreen) {
        return false;
      }

      return true;
    },

    allUsers() {
      let allUsers = [];
      for (const user in this.$store.state.allUsers) {
        allUsers = [...allUsers, this.$store.state.allUsers[user]];
      }

      const randomUsers = allUsers
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

      return randomUsers;
    },
  },
};
</script>

<style scoped></style>
