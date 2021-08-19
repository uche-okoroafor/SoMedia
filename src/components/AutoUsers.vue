<template>

<!-- <span v-show="autoPosts" ></span> -->

</template>

<script>

  import { uuid } from "vue-uuid";
  import moment from "moment";

   
  export default {
    name: "AutoUsers",
    data() {
      return {
newUser:this.$store.state.displayFunctions.newAccount,
      }
    },

  //  mounted() {
  //     window.addEventListener('scroll', () => this.handleCollapseNav());
  //     this.handleUserData()
  //     window.addEventListener('mousemove', () => this.userIsActive = Date.now()
  //     )
  //   },
  //   beforeUnmount() {
  //     window.removeEventListener('scroll', () => this.handleCollapseNav());
  //     this.handleUserData()
  //     window.addEventListener('mousemove', () => this.userIsActive = Date.now())

  //   },


 watch: {
     newUser: {
        handler(state) {
        },
        deep: true

      }

    },




    methods: {

  

    },

    computed: {
//     autoPosts() {
//         if (this.$store.state.displayFunctions.newAccount) {
//           setTimeout(() => {
//               const messageId = uuid.v1();
//                 this.$store.dispatch("handleSubmitMessage", {
//                   [messageId]: {
//                     userName:"Ivy",
//                     friendMessaged: this.$store.state.userData.userName,
//                     userId: "5c8ef170-db3a-11eb-af32-47b0df65ae76",
//                     message: "Hello",
//                     messageId,
//                     messageDate: Date.now(),
//                     messageStatus: "sent",
//                   },
//                 });

//                 this.$store.dispatch("handleNotifications", {
//                   userName:"Ivy",
//                   friendUserName:this.$store.state.userData.userName,
//                   notificationId: uuid.v1(),
//                   notificationType: 'message',
//                   notificationStatus: "unRead",
//                   notificationDate: Date.now()
//                 });

//           }, 3000);
//         }

//         // setTimeout(() => {

//         //   this.$store.dispatch("handlePublishPost", {
//         //     ["91283"]: {
//         //       userName: "Ada",
//         //       userId: "5c8ef170-db3a-11eb-af32-47b0df65ae76",
//         //       views: [],
//         //       postId: "91283",
//         //       datePosted: Date.now(),
//         //       posts: "She is the best Man of the Occasion 💖💖",
//         //       likes: [],
//         //       unLikes: [],
//         //       posterComment: "",
//         //       comments: [],
//         //       postStyle: "text-theme-default",
//         //       postImages: [{ imageUrl: "", imageId: "" }],
//         //       postVideos: { videoUrl: require("./assets/postVideos/ivy-post2.mp4"), videoId: "555", videoAutoplay: false },

//         //     },

//         //   });
//         // }, 1000);


//         // setTimeout(() => {

//         //         this.$store.dispatch("handlePublishPost", {
//         //           ["9b687760-dc19-11eb-9e4e-33a1151joshc9e" ]: {
//         //             userName: "Josh",
//         //             userId: "89045af0-d9c9-11eb-ba8c-e9a262a433df",
//         //             views: [],
//         //             postId: "9b687760-dc19-11eb-9e4e-33a1151joshc9e" ,
//         //             datePosted: Date.now(),
//         //             posts: "",
//         //             likes: [],
//         //             unLikes: [],
//         //             posterComment: "",
//         //             comments: [],
//         //             postStyle: "text-theme-default",
//         //             postImages: [{ imageUrl: "", imageId: "" }],
//         //             postVideos: { videoUrl: require("./assets/postVideos/josh-post2.mp4"), videoId: "33a1151joshc9e", videoAutoplay: false },

//         //           },

//         //         });
//         //       }, 1000);

// return "false"

//       },






    }

  }
</script>