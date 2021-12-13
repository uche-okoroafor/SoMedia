<template>
  <div class="form-field mb-5" ref="formField" v-if="displayMakePost">
    <span
      ><img :src="userData.userProfileImage" class="user-image-icon" alt="" />
      &nbsp;<span v-if="showUserName" class="username-header">
        {{ userData.userName }}</span
      >
    </span>
    <form @submit.prevent="handlePublishPost()" ref="form">
      <textarea
        name="posttextarea"
        v-model="postTextArea"
        cols="30"
        rows="3"
        :class="postStyle"
        placeholder=" Make a post"
        @click="handleMakePost('text')"
        :style="textAreaStyle"
        ref="textArea"
      ></textarea>

      <br />

      <div class="filepreview" v-if="previewImage || previewVideo">
        <img :src="tempUrl" alt="" v-if="previewImage" />

        <div
          class="post-Video stackItem"
          v-if="previewVideo && loadFileAddress"
        >
          <video width="500" heigth="100" controls>
            <source :src="tempUrl" type="video/mp4" />
            <source :src="tempUrl" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>

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
              class="text-theme text-theme-default"
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
      <button type="submit" class="btn">Post</button>
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
    </form>
  </div>
  <div v-if="emptyPost" class="empty-Post">
    <span class="comment" v-if="userDatas.userName === userData.userName"
      >Make Your first Post</span
    >
    <span class="comment" v-else
      >{{ userDatas.userName }} has not made any Post</span
    >
  </div>
  <div class="post-container" v-for="post in posts" :key="post.postId">
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
          Posted <PostTime :date="post.datePosted" />
        </span>
      </span>
    </div>

    <div
      class="post rounded mt-3"
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
        class="m-2 comment-like"
        :class="handleLikeStyle(post.likes, 'likes')"
        ><span class="text-success">Likes</span>
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
        class="m-2 comment-unlike"
        :class="handleLikeStyle(post.unLikes, 'unlikes')"
      >
        <span class="text-danger"> unlikes</span> &nbsp;
        <font-awesome-icon :icon="['fas', 'thumbs-down']" />
        {{ post.unLikes.length }}
      </span>
      <div class="m-2 post-views">
        Views &nbsp; <font-awesome-icon :icon="['fas', 'eye']" /> &nbsp;{{
          post.views.length
        }}
      </div>

      <span class="m-2 post-comments-num"
        >{{ Object.keys(post.comments).length }} comments</span
      >
    </div>
    <hr />
    <h6 class="m-3 ml-5 font-weight-bold">Comments</h6>

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
            commented <PostTime :date="comment.dateCommented" />
          </span>
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
          class="comment-mobile-view comment-like"
          :class="handleLikeStyle(comment.likes, 'likes')"
          ><span class="text-success">Likes</span>
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
          class="comment-mobile-view comment-unlike"
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
          handlePosterComment(post.posterComment, post.postId, post.userName)
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
  <div
    class="post-back-drop"
    v-if="PostBackDrop"
    :style="PostBackDropZIndex"
    @click="handleCloseTextarea"
  ></div>
</template>

<script>
import { uuid } from "vue-uuid";
import PostTime from "./PostTime";

export default {
  name: "Posts",
  props: ["userName", "loadData", "displayPosts"],
  components: {
    PostTime,
  },
  data() {
    return {
      userData: {},
      postTextArea: "",
      showUserName: false,
      postStyle: "text-theme-default",
      tempUrl: "",
      previewVideo: false,
      previewImage: false,
      loadFileAddress: false,
      emptyPost: true,
      displayMakePost: true,
      textAreaStyle: "",
      PostBackDrop: false,
      PostBackDropZIndex: "z-index:600",
      controlsState: true,
      videoPlay: true,
    };
  },

  mounted() {
    this.loadUserData(true);
    document.addEventListener("scroll", () => this.onScroll(this.$refs));
  },
  beforeUnmount() {
    this.loadUserData(false);
    document.addEventListener("scroll", () => this.onScroll(this.$refs));
  },

  methods: {
    loadUserData(params) {
      this.userData = this.$store.state.userData;
      this.$store.state.userData.userName !== this.userName
        ? (this.displayMakePost = false)
        : (this.displayMakePost = true);

      params
        ? this.$store.dispatch("handleDisplayFunctions", {
            componentMounted: "posts",
            params: "componentMounted",
          })
        : this.$store.dispatch("handleDisplayFunctions", {
            componentMounted: "",
            params: "componentMounted",
          });
    },

    handleTheme(theme) {
      this.postStyle = theme;
      this.textAreaStyle = "height:15rem;border-radius:2px;width:100%;";
    },

    handleThemeStyle(theme) {
      if (theme === this.postStyle) {
        return "padding:0px;border:2px solid #e83e8c";
      }

      return "padding:0px";
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
          if (likes.includes(this.$store.state.userData.userName)) {
            return "text-success";
          }
          return "comment-like";
          break;

        case "unlikes":
          if (likes.includes(this.$store.state.userData.userName)) {
            return "text-danger";
          }
          return "comment-like";
          break;

        default:
          break;
      }
    },

    localFiles(e) {
      this.tempUrl = URL.createObjectURL(e.target.files[0]);
    },

    handleMakePost(params) {
      this.PostBackDrop = true;
      if (params !== "text") {
        if (params === "video") {
          this.previewVideo = true;
          this.previewImage = false;
          this.loadFileAddress = false;
          this.tempUrl = "";
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
      this.textAreaStyleZIndex = "";
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
      this.tempUrl = "";
    },

    handleUserIcon(userProfileImage) {
      if (userProfileImage === undefined) {
        return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
      }
      return userProfileImage;
    },

    handleLikes(condition, params, postId, userId, posterUserName, comment) {
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
    handlePosterComment(comment, postId, posterUserName) {
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

    showUserTimeline(userName) {
      this.$router.push({
        name: "Timeline",
        params: { userName, Timeline: "Timeline" },
      });
      this.loadData(userName);
      this.$store.dispatch("handleActivities", {
        userName: this.userData.userName,
        activity: "commented",
        activityDate: Date.now(),
        activityId: uuid.v1(),
      });
    },

    handlePublishPost() {
      let postId = uuid.v1();
      let videoId = "";
      let imageId = "";

      this.previewVideo && this.tempUrl
        ? (videoId = uuid.v1())
        : (imageId = uuid.v1());

      if (this.postTextArea.length || this.tempUrl.length) {
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
            postImages: [{ imageUrl: this.tempUrl, imageId }],
            postVideos: {
              videoUrl: this.tempUrl,
              videoId,
              videoAutoplay: false,
            },
          },
        });
        if (this.tempUrl.length && this.previewVideo) {
          this.$store.dispatch("handleAddImageVideo", {
            userName: this.userData.userName,
            videoUrl: this.tempUrl,
            videoId: uuid.v1(),
            fileType: "video",
            videoAutoplay: false,
          });
        } else if (this.tempUrl.length && this.previewImage) {
          this.$store.dispatch("handleAddImageVideo", {
            userName: this.userData.userName,
            imageUrl: this.tempUrl,
            imageId: uuid.v1(),
            fileType: "image",
          });
        }
        this.postTextArea = "";
        this.handleCloseTextarea();
        this.tempUrl = "";
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

    handlePostViews(postId) {
      if (this.userData.userName !== this.newsFeed[postId].userName) {
        this.$store.dispatch("handlePostViews", {
          userName: this.userData.userName,
          postId,
        });
      }
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
      for (let postId in this.posts) {
        if (
          refObject.includes(
            this.posts[postId].postId && ref[this.posts[postId]] !== null
          )
        ) {
          if (this.$store.state.displayFunctions.componentMounted === "posts") {
            if (
              this.isElementInViewport(ref[this.posts[postId].postId]) &&
              ref[this.posts[postId].postVideos.videoId] !== null
            ) {
              this.handlePostViews(this.posts[postId].postId);
            }
          }
        }

        if (
          refObject.includes(this.posts[postId].postVideos.videoId) &&
          ref[this.posts[postId].postVideos.videoId] !== null
        ) {
          if (
            this.isElementInViewport(ref[this.posts[postId].postVideos.videoId])
          ) {
            document
              .getElementById(this.posts[postId].postVideos.videoId)
              .play()
              .catch((e) => {
                /* error handler */
              });
          } else {
            document
              .getElementById(this.posts[postId].postVideos.videoId)
              .pause();
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
  },
  computed: {
    userDatas() {
      if (
        (this.previewVideo && this.tempUrl.length) ||
        (this.previewImage && this.tempUrl.length)
      ) {
        this.loadFileAddress = true;
      }

      let userData = this.$store.state.users[this.userName];

      return userData;
    },

    posts() {
      let posts = [];

      for (let newsfeedId in this.$store.state.newsFeed) {
        if (this.$store.state.newsFeed[newsfeedId].userName === this.userName) {
          posts = [...posts, this.$store.state.newsFeed[newsfeedId]];
        }
      }
      !posts.length ? (this.emptyPost = true) : (this.emptyPost = false);

      posts.sort((a, b) => a.datePosted - b.datePosted).reverse();

      return posts;
    },
  },
};
</script>
