<template>
  <div class="newsfeed-container" id="newsfeed-container">
    <div class="container-sidebar-one">
      <div class="sidebar-list" :style="handleDisplayFunctions()">
        <ul>

          <li>
            <router-link :to="{
                name: 'Messages',
                params: { userName: userData.userName },
              }">
              <span> Messages </span>
              <font-awesome-icon class="ml-2" :icon="['fas', 'envelope']" />
            </router-link>
          </li>


          <li>
            <router-link :to="{
                name: 'Friends',
                params: { userName: userData.userName, Timeline: 'friends' },
              }">
              <span>Friends </span>
              <font-awesome-icon class="ml-2" :icon="['fas', 'user-friends']" />
            </router-link>
          </li>


          <li>
            <router-link :to="{
                name: 'Friends',
                params: { userName: userData.userName, Timeline: 'friends' },
              }">
              <span> Following </span>
              <font-awesome-icon class="ml-2" :icon="['fas', 'users']" />
            </router-link>
          </li>


          <li>
            <router-link :to="{
                name: 'Friends',
                params: { userName: userData.userName, Timeline: 'friends' },
              }">
              <span>Followers </span>
              <font-awesome-icon class="ml-2" :icon="['fas', 'users']" />
            </router-link>
          </li>

        </ul>
      </div>
    </div>

    <div class="posts-container">
      <div class="form-field mb-5" ref="formField">
        <span><img :src="userData.userProfileImage" class="user-image-icon" alt="" />
          <span v-if="showUserName" class="username-header"> &nbsp; {{ userData.userName }}</span>
        </span>
        <form @submit.prevent="handlePublishPost()" ref="form">
          <textarea name="posttextarea" v-model="postTextArea" cols="30" rows="3" :style="textAreaStyle"
            :class="postStyle" placeholder=" Make a post" @click="handleMakePost('text')" ref="textArea"></textarea>

          <br />
          <div class="filepreview" v-if="previewImage||previewVideo">

            <img :src="tempUrl" alt="" v-if="previewImage">




            <div class="post-Video" v-if="previewVideo && loadFileAddress">
              <video width="500" heigth="100" controls>
                <source :src="tempUrl" type="video/mp4">
                <source :src="tempUrl" type="video/ogg">
                Your browser does not support HTML video.
              </video>
            </div>




          </div>
          <input type="file" name="fileUpload" accept="image/png,image/jpeg,video/mp4" ref="filesUploadVideo"
            @change="localFiles" v-show="false">
          <input type="file" name="fileUpload" accept="image/png,image/jpeg" ref="filesUploadImages"
            @change="localFiles" v-show="false">





          <div class="textarea-icons" ref="textareaIcons">
            <span class="edit-container" ref="editContainer">
              <span class="edit-icon-container">
                <font-awesome-icon :icon="['fas', 'edit']" ref="timelineIcon" @click="handleMakePost('text')" />
                <span ref="chevronRight" style="display: none">
                  <font-awesome-icon :icon="['fas', 'chevron-right']" class="chevron-right" />
                </span>
              </span>

              <span class="text-theme-container themes-icons-container" ref="themeContainer">
                <div @click="handleTheme('text-theme-default')" class="text-theme text-theme-default "
                  style="padding: 0"></div>
                <div @click="handleTheme('text-themeOne')" class="text-theme text-themeOne" style="padding: 0"></div>
                <div @click="handleTheme('text-themeTwo')" class="text-theme text-themeTwo" style="padding: 0"></div>
                <div @click="handleTheme('text-themeThree')" class="text-theme text-themeThree" style="padding: 0">
                </div>
                <div @click="handleTheme('text-themeFour')" class="text-theme text-themeFour" style="padding: 0"></div>
                <div @click="handleTheme('text-themeFive')" class="text-theme text-themeFive" style="padding: 0"></div>
                <div @click="handleTheme('text-themeSix')" class="text-theme text-themeSix" style="padding: 0"></div>
                <div @click="handleTheme('text-themeSeven')" class="text-theme text-themeSeven" style="padding: 0">
                </div>
                <div @click="handleTheme('text-themeEight')" class="text-theme text-themeEight" style="padding: 0">
                </div>
                <div @click="handleTheme('text-themeNine')" class="text-theme text-themeNine" style="padding: 0"></div>
                <div @click="handleTheme('text-themeTen')" class="text-theme text-themeTen" style="padding: 0"></div>
              </span>
            </span>
            <span>
              <font-awesome-icon :icon="['fas', 'image']" @click="handleMakePost('image')" />
            </span>
            <span>
              <font-awesome-icon :icon="['fas', 'video']" ref="timelineIcon" @click="handleMakePost('video')" />
            </span>
          </div>






          <button type="submit" class="btn btn-success">Post</button>
        </form>
      </div>


      <div class="post-container" v-for="post in newsFeeds" :key="post.postId" :ref="post.postId">


        <div class="userImage" @click="showUserTimeline(post.userName, post.userId)">
          <img :src="handleUserIcon($store.state.users[post.userName].userProfileImage)" class="user-image-icon"
            alt="" />
          <span class="userName-Timeposted"><span class="username-header">{{ post.userName }}</span><span
              class="comment"> Posted {{showDate(post.datePosted)
              }}</span>
          </span>
        </div>

        <div class="post rounded" :class="post.postStyle" v-if="post.posts.length"
          :style="handlePostThemes(post.postStyle)" ref="post">
          <span> {{ post.posts }}</span>
        </div>
        <div v-for="image in post.postImages" class="post-images" :key="post.postImages" v-if="post.postImages.length">
          <img :src="image.imageUrl" alt="">
        </div>
        <div class="post-Video" v-if="post.postVideos.videoId" :ref="post.postVideos.videoId">
          <video width="500" max-height="300" controls :autoplay="post.postVideos.videoAutoplay">
            <!-- :autoplay="post.postVideos.videoAutoplay"  > -->
            <source :src="post.postVideos.videoUrl" type="video/mp4">
            <source :src="post.postVideos.videoUrl" type="video/ogg">
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="post-comments">
          <span @click="
              handleLikes(
                'postLikes',
                'incrementPostLikes',
                post.postId,
                userData.userId,
                post.userName,
                post.postId
              )
            " class="m-2  comment-like" :class="handleLikeStyle(post.likes,'likes')"><span
              class="text-success">Likes</span>
            &nbsp;
            <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            {{ post.likes.length }}
          </span>
          <span @click="
              handleLikes(
                'postLikes',
                'decrementPostLikes',
                post.postId,
                userData.userId,
                post.userName,
                post.postId
              )
            " class="m-2  comment-unlike" :class="handleLikeStyle(post.unLikes,'unlikes')"> <span class="text-danger">
              unlikes</span> &nbsp;
            <font-awesome-icon :icon="['fas', 'thumbs-down']" />
            {{ post.unLikes.length }}
          </span>

          <div class="m-2">{{ Object.keys(post.comments).length }} comments</div>
        </div>
        <hr />
        <h6 class="m-3 ml-5 font-weight-bold ">Comments</h6>

        <div class="comments" v-for="comment in post.comments" :key="comment.commentId">
          <div class="userImage ml-5" @click="showUserTimeline(comment.userName, comment.userId)">
            <img :src="handleUserIcon($store.state.users[comment.userName].userProfileImage)" class="user-image-icon"
              alt="" />
            <span class="userName-Timeposted"><span class="username-header">{{ comment.userName }}</span><span
                class="comment">
                commented {{
                showDate(comment.dateCommented) }}</span>
            </span>
          </div>

          <p class="ml-5 comments-text">{{ comment.comment }}</p>
          <div class="comment-like-container">


            <span @click="
              handleLikes(
                'commentLikes',
                'incrementCommentLikes',
                post.postId,
                userData.userId,
                post.userName,
                comment
              )
            " class="comment-mobile-view comment-like" :class="handleLikeStyle(comment.likes,'likes')"><span
                class="text-success">Likes</span>
              &nbsp;
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              {{ comment.likes.length }}
            </span>
            <span @click="
              handleLikes(
                'commentLikes',
                'decrementCommentLikes',
                post.postId,
                userData.userId,
                post.userName,
                comment
              )
            " class="comment-mobile-view  comment-unlike" :class="handleLikeStyle(comment.unLikes,'unlikes')">
              <span class="text-danger">Unikes</span>
              &nbsp;
              <font-awesome-icon :icon="['fas', 'thumbs-down']" />
              {{ comment.unLikes.length }}
            </span>


          </div>
        </div>
        <div class="comment-input-field">
          <span><img :src="handleUserIcon(userData.userProfileImage)" class="user-image-icon" alt="" /></span>
          <form @submit.prevent="
              handlePosterComment(post.posterComment, post.postId, post.userName)
            ">
            <input type="text" class="input" placeholder=" Post a comment" v-model="post.posterComment" />

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
        <ul v-for="friend in $store.state.allUsers" :key="friend.userName">
          <div>
            <li @click="showMessage(friend.userName)">
              <img :src="$store.state.users[friend.userName].userProfileImage" class="user-image-icon" alt="" />
              <span class="username-header"> {{ friend.userName }}</span>
              <button class="btn btn-success">Chat</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
  <div ref="check" style="background-color: blue;" id="checks">yesbffhhf</div>
  <div class="post-back-drop" v-if="PostBackDrop" :style="PostBackDropZIndex" @click="handleCloseTextarea"></div>
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
        tempUrl: '',
        previewVideo: false,
        previewImage: false,
        loadFileAddress: false,
        textAreaStyle: "",
        PostBackDrop: false,
        PostBackDropZIndex: "z-index:600",
        
        // videoAutoplay:{},
        videoAutoplay: false,

      };


    },

    mounted() {
      this.loadData();
      window.scrollTo(0, 0);
      document.addEventListener('scroll', () => this.onScroll(this.$refs));
    },
    beforeUnmount() {
      this.loadData();
      window.scrollTo(0, 0);
      document.removeEventListener('scroll', () => this.onScroll(this.$refs));
    },

    methods: {
      loadData() {
        this.newsFeed = this.$store.state.newsFeed;
        this.userData = this.$store.state.userData;


      },


      handlePostThemes(theme) {
        if (theme !== "text-theme-default") {

          return "min-height:200px"
        }


        return "heigth:auto"



      },

      handleLikeStyle(likes, params) {

        switch (params) {
          case "likes":
            if (likes.includes(this.userData.userName)) {



              return "text-success"

            }
            return "comment-like"
            break;

          case "unlikes":
            if (likes.includes(this.userData.userName)) {



              return "text-danger"

            }
            return "comment-like"
            break;

          default:
            break;
        }





      },



      localFiles(e) {

        this.tempUrl = URL.createObjectURL(e.target.files[0]);

      },


      handleTheme(theme) {

        this.postStyle = theme;
        this.textAreaStyle = "height:15rem;border-radius:2px;width:100%;"

      },

      handleMakePost(params) {
        this.PostBackDrop = true

        if (params !== "text") {
          if (params === "video") {
            this.previewVideo = true;
            this.previewImage = false;
            this.loadFileAddress = false;
            this.tempUrl = "";
            this.$refs.filesUploadVideo.click()
          } else {
            this.previewImage = true;
            this.previewVideo = false;
            this.$refs.filesUploadImages.click()
          }

        }

        this.$refs.formField.style = "flex-flow:column;transition:all 0.4s;z-index:650";
        this.$refs.textArea.classList.add("textarea-input")
        this.$refs.textareaIcons.style = "flex-flow:column;font-size:1.5rem;transition:all 0.4s";
        this.$refs.themeContainer.style = "display:flex;width:auto;transition:all 0.4s";
        this.$refs.editContainer.style = "display:flex";
        this.$refs.chevronRight.style = "display:inline";
        this.showUserName = true;
      },

      handleCloseTextarea() {
        this.PostBackDrop = false

        this.$refs.textArea.classList.remove("textarea-input")
        this.textAreaStyle = ""
        this.$refs.formField.style = "flex-flow:row;height:auto;transition:all 0.4s";
        this.$refs.textareaIcons.style = "flex-flow:row;";
        this.$refs.themeContainer.style = "display:none;";
        this.$refs.editContainer.style = "display:inline";
        this.$refs.chevronRight.style = "display:none";
        this.postStyle = "text-theme-default";
        this.showUserName = false;
        this.previewVideo = false;
        this.previewImage = false;
        this.tempUrl = ""
      },



      handleUserIcon(userProfileImage) {
        if (userProfileImage === undefined) {
          return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
        }
        return userProfileImage;
      },
      showUserTimeline(userName) {
        this.$router.push({
          name: "Timeline",
          params: { userName: userName, Timeline: "Timeline" },
        });
      },



      handlePublishPost() {
        let postId = uuid.v1();
        let videoId = '';
        let imageId = '';

        this.previewVideo && this.tempUrl ? videoId = uuid.v1() : imageId = uuid.v1();


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
              postVideos: { videoUrl: this.tempUrl, videoId, videoAutoplay: false },




            },

          });


          if (this.tempUrl.length && this.previewVideo) {
            this.$store.dispatch("handleAddImageVideo", {
              userName: this.userData.userName,
              videoUrl: this.tempUrl,
              videoId: uuid.v1(),
              fileType: "video",
            });
          }
          else if (this.tempUrl.length && this.previewImage) {
            this.$store.dispatch("handleAddImageVideo", {
              userName: this.userData.userName,
              imageUrl: this.tempUrl,
              imageId: uuid.v1(),
              fileType: "image",

            });


          }



          this.postTextArea = "";
          this.handleCloseTextarea();
          this.loadData();
          this.tempUrl = ""
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





      showMessage(userName, status) {


        this.$store.dispatch("handleDisplayFunctions", {
          userName,
          params: "displayMessage"
        })
        this.$router.push({
          name: "Messages",
          params: { userName: this.userData.userName },
        })

      },

      handlePostViews(postId) {
        this.$store.dispatch("handlePostViews", {
          userName: this.userData.userName,
          postId,
        });
        console.log("yes");
      },



      onScroll(ref) {
        let refObject = Object.keys(ref)

        for (let newsFeedId in this.newsFeed) {

      



          if (refObject.includes(newsFeedId)) {

console.log("yes");
console.log(newsFeedId);
            // this.isElementInViewport(ref[newsFeedId]) && this.handlePostViews(this.newsFeed[newsFeedId].userName)


            if (this.isElementInViewport(ref[newsFeedId])) {
              this.handlePostViews(newsFeedId)
              this.PostBackDrop = true
            }

          }




    if (refObject.includes(this.newsFeed[newsFeedId].postVideos.videoId)) {
            if (this.isElementInViewport(ref[this.newsFeed[newsFeedId].postVideos.videoId])) {
              this.newsFeed[newsFeedId].postVideos.videoAutoplay = true

            } else {

              this.newsFeed[newsFeedId].postVideos.videoAutoplay = false
            }


          }



        }

      },

      isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
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
        } else if (hours < 23) {
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


      handleDisplayFunctions() {
        if (this.$store.state.displayFunctions.navCollapsed) {
          this.sidebarListOneMargin = "margin-top:-3rem"
          return this.sidebarListOneMargin
        }
        else {
          this.sidebarListOneMargin = "margin-top:2rem"
          return this.sidebarListOneMargin
        }

      },




    },
    computed: {



      newsFeeds() {



        if (this.previewVideo && this.tempUrl.length || this.previewImage && this.tempUrl.length) {
          this.loadFileAddress = true


        }


        let newsFeeds = [];

        for (const newsFeedId in this.newsFeed) {
          newsFeeds.push(this.newsFeed[newsFeedId]);


        }


        return newsFeeds.sort((a, b) => a.datePosted - b.datePosted).reverse();
      },
    },
  };
</script>

<style scoped>
  /* h3 {
    text-align: left;
  }

  .container {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  .container ul li {
    list-style: none;
    padding: 10px;
    text-align: left;
    background-color: blueviolet;
    margin: 2px;
    cursor: pointer;
  }

  .container3 {
    background-color: cornflowerblue;
  }

  h5 {
    text-align: left;
  }

  .container2 {
    width: 40%;
  }

  .posted {
    width: 200px;
    height: 100px;
    border: 2px solid black;
    margin: 0 auto;
  }

  h5 {
    cursor: pointer;

  } */
</style>
