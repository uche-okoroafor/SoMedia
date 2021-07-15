<template>



</template>

<script>
export default {
name:"AutoUsers",

        data() {
            return {

            }
        },





methods: {

     autoPosts() {
if(this.$store.state.displayFunctions.newAccount){

setTimeout(() => {

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
      }












  
}, 3000);
}

        // setTimeout(() => {

        //   this.$store.dispatch("handlePublishPost", {
        //     ["91283"]: {
        //       userName: "Ada",
        //       userId: "5c8ef170-db3a-11eb-af32-47b0df65ae76",
        //       views: [],
        //       postId: "91283",
        //       datePosted: Date.now(),
        //       posts: "She is the best Man of the Occasion 💖💖",
        //       likes: [],
        //       unLikes: [],
        //       posterComment: "",
        //       comments: [],
        //       postStyle: "text-theme-default",
        //       postImages: [{ imageUrl: "", imageId: "" }],
        //       postVideos: { videoUrl: require("./assets/postVideos/ivy-post2.mp4"), videoId: "555", videoAutoplay: false },

        //     },

        //   });
        // }, 1000);


  // setTimeout(() => {

  //         this.$store.dispatch("handlePublishPost", {
  //           ["9b687760-dc19-11eb-9e4e-33a1151joshc9e" ]: {
  //             userName: "Josh",
  //             userId: "89045af0-d9c9-11eb-ba8c-e9a262a433df",
  //             views: [],
  //             postId: "9b687760-dc19-11eb-9e4e-33a1151joshc9e" ,
  //             datePosted: Date.now(),
  //             posts: "",
  //             likes: [],
  //             unLikes: [],
  //             posterComment: "",
  //             comments: [],
  //             postStyle: "text-theme-default",
  //             postImages: [{ imageUrl: "", imageId: "" }],
  //             postVideos: { videoUrl: require("./assets/postVideos/josh-post2.mp4"), videoId: "33a1151joshc9e", videoAutoplay: false },

  //           },

  //         });
  //       }, 1000);



      },




    
},

computed:{



}

}
</script>
