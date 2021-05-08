<template>

<div class="form-field mb-5" ref="formField">
    <span><img :src="userData.userThumbnail" alt=""> <span  v-if="showUserName"> {{userData.userName}}</span> </span>  <form @submit.prevent="handlePublishPost()" ref="form">
        <textarea name="posttextarea" v-model="postTextArea" cols="30" rows="3" :class="postStyle" placeholder=" Make a post" @click="handleTextarea()" ref="textArea"></textarea>

        <br />
        <div class="textarea-icons" ref="textareaIcons">
<span class="edit-container" ref="editContainer">
    <span   class="edit-icon-container">
        <font-awesome-icon :icon="['fas', 'edit']" ref="timelineIcon"  @click="handleTextarea()" /> 
       <span ref="chevronRight" style="display: none;"><font-awesome-icon :icon="['fas', 'chevron-right']"   class="chevron-right"   /></span>
 </span> 

 <span class="text-theme-container" ref="themeContainer">
<div  @click="handleTheme('text-theme-default')"  class="text-theme text-theme-default ml-4"  style="padding: 0;" ></div>
<div  @click="handleTheme('text-themeOne')"  class="text-theme text-themeOne " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeTwo')"  class="text-theme text-themeTwo " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeThree')"  class="text-theme text-themeThree " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeFour')"  class="text-theme text-themeFour " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeFive')"  class="text-theme text-themeFive " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeSix')"  class="text-theme text-themeSix " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeSeven')"  class="text-theme text-themeSeven " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeEight')"  class="text-theme text-themeEight " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeNine')"  class="text-theme text-themeNine " style="padding: 0;"  ></div>
<div  @click="handleTheme('text-themeTen')"  class="text-theme text-themeTen " style="padding: 0;"  ></div>


</span>
</span>
          <span>
            <font-awesome-icon :icon="['fas', 'image']" @click="handleTextarea()" />
          </span> <span>
            <font-awesome-icon :icon="['fas', 'video']" ref="timelineIcon" @click="handleTextarea()" />
          </span>
        </div>
        <button type="submit" class="btn btn-success" >Post</button>
      </form>

</div>



 <section class="post-container  " v-for="post in posts" :key="post.postId"  :ref="post.userName">
        <div class="userImage " @click="showUserTimeline(post.userName, post.userId)">
          <img :src="handleUserIcon($store.state.users[post.userName].userThumbnail)" alt=""> <span class="userName-Timeposted"><span>{{ post.userName }}</span><span>
              Posted {{ showDate(post.datePosted) }}</span>
          </span>
        </div>

        <div class="post rounded mt-3 "  :class="post.postStyle">
          <span > {{ post.posts }}</span>
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
            " class="m-2 text-success">

          Likes
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
            " class="m-2   text-danger">unlikes
          <font-awesome-icon :icon="['fas', 'thumbs-down']" />
          {{ post.unLikes.length }}
        </span>

        <span class="m-2 ">{{ Object.keys(post.comments).length}} comments</span>
</div>
        <hr>
<h6  class="ml-5">Comments</h6>

        <div class="ml-5 pt-2 comments" v-for="comment in post.comments" :key="comment.commentId">
 <div class="userImage  ml-5" @click="showUserTimeline(comment.userName, comment.userId)">
          <img :src="handleUserIcon($store.state.users[comment.userName].userThumbnail)" alt=""> <span class="userName-Timeposted"><span>{{ comment.userName }}</span><span>
              commented {{ showDate(comment.dateCommented) }}</span>
          </span>
        </div>



          <p  class="ml-5  comments-text ">{{ comment.comment }}</p>
          <span @click="
                handleLikes(
                   'commentLikes',
                  'incrementCommentLikes',
                  post.postId,
                  userData.userId,
                   post.userName,
                 comment,
                )
              " class="m-2 p-5 text-success">
           Likes <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            {{ comment.likes.length }}
          </span>
          <span @click="
                handleLikes(
                 'commentLikes',
                  'decrementCommentLikes',
                  post.postId,
                  userData.userId,
                   post.userName,
                 comment,
                )
              " class="m-2 p-5 text-danger">
           Unlikes <font-awesome-icon :icon="['fas', 'thumbs-down']"  />
            {{ comment.unLikes.length }}
          </span>

        </div>
<div class="comment-input-field">
<span><img :src="handleUserIcon(userData.userThumbnail)" alt=""></span>
        <form @submit.prevent="
              handlePosterComment(post.posterComment, post.postId,post.userName)
            " >
          <input type="text" class="input" placeholder=" Post a comment" v-model="post.posterComment" />

          <button type="submit" class="btn btn-info ">Comment</button>
        </form>
</div>
        <hr>
      </section>











<!-- <div v-for="post in userDatas.posts" :key="post.id">


            <h5
              class="bg-success"
              @click="showUserTimeline(post.userName, post.userId)"
            >
              {{ post.userName }}
            </h5>
         
          <div class="posted m-5 rounded">
            {{ post.posts }}
          </div>
          <p>{{ showDate(post.datePosted) }}</p>
          <span
            @click="
              handleLikes(
                'postLikes',
                'incrementPostLikes',
                post.postId,
                userData.userId
              )
            "
            class="m-2 p-5 text-success"
            ><i class="fa fa-thumbs-up"></i>{{ post.likes.length }}</span
          >
          <span
            @click="
              handleLikes(
                'postLikes',
                'decrementPostLikes',
                post.postId,
                userData.userId
              )
            "
            class="m-2 p-5"
            ><i class="fa fa-thumbs-down text-danger"></i
            >{{ post.unLikes.length }}</span
          >






  <div v-for="comment in post.comments" :key="comment.commentId">
           
              <span
                @click="showUserTimeline(comment.userName, comment.userId)"
                >{{ comment.userName }}</span
              >
           
            <p>{{ comment.comment }}</p>
 <p>{{ showDate(comment.dateCommented) }}</p>
            <span
              @click="
                handleLikes(
                  'commentLikes',
                  'incrementCommentLikes',
                  post.postId,
                  userData.userId,
                  comment.commentId
                )
              "
              class="m-2 p-5 text-success"
              ><i class="fa fa-thumbs-up"></i>{{ comment.likes.length }}</span
            >
            <span
              @click="
                handleLikes(
                  'commentLikes',
                  'decrementCommentLikes',
                  post.postId,
                  userData.userId,
                  comment.commentId
                )
              "
              class="m-2 p-5"
              ><i class="fa fa-thumbs-down text-danger"></i
              >{{ comment.unLikes.length }}</span
            >
 
          </div>
 <form
            @submit.prevent="
              handlePosterComment(post.posterComment, post.postId)
            "
            class="m-5"
          >
            <input
              type="text"
              placeholder="Post a comment"
              v-model="post.posterComment"
            />

            <button type="submit">Comment</button>
          </form>
</div> -->
</template>

<script>
import { uuid } from "vue-uuid";



export default {
  name: 'Posts',
props:['userName','loadData'],

data() {
  return {
  userData:{},
    postTextArea: "",
showUserName:false,
postStyle:"text-theme-default"
  }
},

   created() {
      window.addEventListener('click', (event) => {if(this.showUserName){

return this.handleCloseTextarea(event)
}})
    },
    unmounted() {

      window.removeEventListener('click', (event) => {if(this.showUserName){
return this.handleCloseTextarea(event)}
})
    },

mounted(){
this.loadUserData() 


},
beforeUnmount(){
this.loadUserData() 
},



methods: {

    loadUserData() {
      this.userData = this.$store.state.userData;

      this.$store.dispatch("handlePostViews", {
          userName: this.userData.userName,
        });
 
    },



handleTheme(theme){
this.postStyle = theme

},

handleTextarea(){
this.$refs.formField.style ="flex-flow:column;height:32rem;transition:all 0.4s"
this.$refs.textArea.style = "width:100%;height:15rem;transition:all 0.4s;border-radius:0"
this.$refs.textareaIcons.style= "flex-flow:column;font-size:1.5rem;transition:all 0.4s"
this.$refs.themeContainer.style ="display:flex;width:auto;transition:all 0.4s"
this.$refs.editContainer.style ="display:flex"
this.$refs.chevronRight.style="display:inline"
this.showUserName = true;
},

CloseTextArea(){
this.$refs.formField.style ="flex-flow:row;height:auto;transition:all 0.4s"
this.$refs.textArea.style = "width:95%;height:2.5rem;transition:all 0.4s;border-radius:15px"
this.$refs.textareaIcons.style= "flex-flow:row;"
this.$refs.themeContainer.style ="display:none;"
this.$refs.editContainer.style ="display:inline"
this.$refs.chevronRight.style="display:none"
this.postStyle="text-theme-default"
    this.showUserName= false;



},


handleCloseTextarea(e){
  let formField = this.$refs.formField
        let target = e.target
        if (formField !== target && !formField.contains(target)) {
this.CloseTextArea()
        }

     

},


     handleUserIcon(userThumbnail) {
        if (userThumbnail === undefined ) {
          return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
          // require('./assets/userThumbnail/original1.jpg')

        }
        return userThumbnail

      },


   handleLikes(condition, params, postId, userId, posterUserName, comment) {
        this.$store.dispatch("handleLikes", {
          condition,
          params,
          postId,
          userId,
          commentId: comment.commentId,
          dateLiked: Date.now(),
        });

        this.$store.dispatch("handleNotifications", {
          userName: this.userData.userName,
          posterUserName,
          notificationId: uuid.v1(),
          notificationType: 'likes',
          notificationStatus: "unRead",
          notificationDate: Date.now(),
        });


        if (condition === "postLikes" && params === "incrementPostLikes") {

          this.$store.dispatch("handleNotifications", {
            userName: this.userData.userName,
            posterUserName,
            notificationId: uuid.v1(),
            notificationType: 'likes',
            notificationStatus: "unRead",
            notificationDate: Date.now(),
          });


          this.$store.dispatch("handleActivities", {
            userName: this.userData.userName,
            posterUserName,
            activity: "liked",
            activityDate: Date.now(),
            activityId: uuid.v1()
          });

        }
        else {
          if (params === "incrementCommentLikes") {
            this.$store.dispatch("handleActivities", {
              userName: this.userData.userName,
              posterUserName,
              commenterUserName: comment.userName,
              activity: "likedComment",
              activityDate: Date.now(),
              activityId: uuid.v1()
            });

            this.$store.dispatch("handleNotifications", {
              userName: this.userData.userName,
              posterUserName,
              commenterUserName: comment.userName,
              notificationId: uuid.v1(),
              notificationType: 'likedComment',
              notificationStatus: "unRead",
              notificationDate: Date.now(),
            });

          }
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
       return    months === 1 ? "1 month ago" : months + " mouths ago";
    } else {
      return   years === 1 ? "1 year ago" : years + " years ago";
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
            notificationType: 'comment',
            notificationStatus: "unRead",
            notificationDate: Date.now(),
          });

          this.$store.dispatch("handleActivities", {
            userName: this.userData.userName,
            posterUserName,
            activity: "commented",
            activityDate: Date.now(),
            activityId: uuid.v1()
          });


        }
      },


    showUserTimeline(userName) {

        this.$router.push({
          name: "Timeline",
          params: { userName,Timeline:"Timeline" },
        });
 this.loadData(userName) 
 this.$store.dispatch("handleActivities", {
        userName: this.userData.userName,
       activity:"commented",
activityDate:Date.now(),
activityId: uuid.v1()
      });
    },



       handlePublishPost() {
        let postId = uuid.v1();
console.log(this.$store.state.newsFeed)
        if (this.postTextArea.length) {
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
postStyle:this.postStyle,
            },
          });
          this.postTextArea = "";
this.CloseTextArea();
          // this.loadData();
        }

        this.$store.dispatch("handleNotifications", {
          userName: this.userData.userName,
          notificationId: uuid.v1(),
          notificationType: 'post',
          notificationStatus: "unRead",
          notificationDate: Date.now(),
        });


        this.$store.dispatch("handleActivities", {
          userName: this.userData.userName,
          activity: "posted",
          activityDate: Date.now(),
          activityId: uuid.v1()
        });

      },
  


},
computed:{
userDatas(){
let userData = this.$store.state.users[this.userName] 


return userData

},



posts(){
let posts = []

for(let newsfeedId in this.$store.state.newsFeed){
if(this.$store.state.newsFeed[newsfeedId].userName === this.userName){
// for(const postId in userData.posts){
// if(newsfeedId !== userData.posts[postId].postId)

 posts = [...posts,this.$store.state.newsFeed[newsfeedId]]

// }

 }



}


posts.sort((a, b) => a.datePosted - b.datePosted ).reverse();


return posts

},

}




}







</script>

