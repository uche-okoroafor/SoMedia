<template>
  <div class="mai-container">
    <div class="cover-container" :style="HandleUserCoverImage">
<div class="welcome-message">
       <h1> Hello&nbsp;{{ userData.userName }}</h1>
<span>Welcome to your Profile &nbsp;</span>
<!-- <span>Update Your Cover Picture</span> -->
<span class="update-cover-img">
                <font-awesome-icon :icon="['fas', 'folder-plus']" @click="handleImageUpdate"/>&nbsp;

               <span class="update-cover-text">updated Your Cover Picture
              </span>

 <input type="file"  name="fileUpload" accept="image/png, image/jpeg,video/mp4" ref="filesUpload"
            @change="getLocalAddressCoverPix" v-show="false" >
<input type="file"  name="fileUploadprofile" accept="image/png, image/jpeg,video/mp4" ref="filesUploadProfile"
            @change="getLocalAddressProfile" v-show="false"   >
</span>


</div>
    <!--  <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae <br />
        facere sit quidem nobis accusantium illo explicabo doloribus laudantium omnis
        veritatis totam libero in laborum amet, doloremque, delectus magni! Totam,
        perferendis!
      </p> -->
    </div>
    <div class="body-container">
      <div class="card-set-profile">
        <form @submit.prevent="handleuserDetailsUpDate">
          <div class="card-set-profile-header">
            <h3>My account</h3>

            <button class="btn btn-info">Edit</button>
          </div>

          <div class="info-form">
            <h4>User information</h4>
            <div class="your-info">
              <div>
                <label for="UserName">UserName</label>
                <input type="text" v-model="userData.userName" placeholder="UserName"  />
              </div>

              <div>
                <label for="Email"> Email</label>
                <input type="text" v-model="userData.emailAddress" placeholder="Email" />
              </div>

              <div>
                <label for="FirstName">First Name</label>
                <input
                  type="text"
                  v-model="userData.firstName"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label for="LastName">Last Name</label>
                <input type="text" v-model="userData.lastName" placeholder="Last Name" />
              </div>

              <div>
                <label for="age">Age</label>
                <input type="text" v-model="userData.age" placeholder="age" />
              </div>

              <div>
                <label for="education">Education</label>
                <input type="text" v-model="userData.Education" placeholder="Education" />
              </div>

              <div class="age">
                <label for="occupation">Occupation</label>
                <input
                  type="text"
                  v-model="userData.Occupation"
                  placeholder="Occupation"
                />
              </div>
            </div>
            <hr />
          </div>
          <h4>Contact information</h4>
          <div class="contact-info">
            <div class="Home-Address">
              <div>
                <label for="Address">Address</label>
              </div>
              <input type="text" placeholder="Home Address" v-model="userData.Address" />
            </div>
            <div class="">
              <label for="City">City</label>
              <input type="text" placeholder="City" v-model="userData.city" />
            </div>
            <div class="">
              <label for="Country">Country</label>
              <input type="text" placeholder="Country" v-model="userData.country" />
            </div>
            <div class="">
              <label for="postCode">postCode</label>
              <input type="text" placeholder="postCode" v-model="userData.postCode" />
            </div>
          </div>
          <hr />

          <div class="about-me">
            <h4>About me</h4>

            <div class="textarea-container">
              <label for="About-me">About Me</label>
              <textarea
                name="About-me"
                cols="30"
                rows="5"
                placeholder="About me"
                v-model="userData.aboutMe"
              ></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-success mt-5">Save</button>
        </form>
      </div>
      <div class="card-view-profile">
        <div class="user-Profile-pix">




          <img :src="handleUserProfilePic(userName)" alt="" />
          <span class="setup-buttons"><font-awesome-icon :icon="['fas', 'folder-plus']" @click="handleImageUpdate" /><span class="setup-buttons-text">&nbsp; Update Profile Picture</span> </span>      

        </div>
        <div class="friends-follwers-container">
          <div>
            <h5>{{ userData.friends.length }} 1</h5>
            <span>Friends</span>
          </div>
          <div>
            <h5>{{ userData.photos.length }}2</h5>
            <span>Photos</span>
          </div>
          <div>
            <h5>{{ userData.posts.length }}3</h5>
            <span>Posts</span>
          </div>
        </div>

        <div class="userData-userName">
          <h5>{{ userData.userName }}</h5>
          ,
          <span>{{ userData.age }}</span>
        </div>

        <div class="userData-userName">
          <h5>{{ userData.city }}</h5>
          ,
          <span>{{ userData.country }}</span>
        </div>

        <div class="userData-userName">
          <h5>{{ userData.occupation }}</h5>
          ,
          <span>{{ userData.education }}</span>
        </div>

        <hr />

        <span>{{ userData.aboutMe }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userProfile",
  props: ["userName"],
  data() {
    return {
      userDatas: {
        userName: "Guest",
        userId: "419",
        emailAddress: "419",
        firstName: "Guest",
        lastName: "Guest",
        address: "Guest",
        emailAddress: "Guest@gmail.com",
        postCode: "Guest",
        country: "Guest",
        city: "Guest",
        aboutMe: "Guest",
        password: "Guest",
        occupation: "Guest",
        education: "Guest",
        age: "27",
        messages: [],
        posts: {
          Guest: { likes: ["Guest"], unLikes: ["Guest"] },
        },
        followers: ["Guest"],
        following: ["Guest"],
        friends: ["Guest"],
userProfileImage:'',
userCoverImage:'',
// inputState:disabled,
        posterComment: "",
        comments: {
          likes: [],
          unLikes: [],
        },
      },
    };
  },

  mounted() {
    this.loadData("load");
  },
  beforeUnmount() {
    this.loadData("unLoad");
  },
  methods: {
    loadData(params) {
      this.userDatas = this.$store.state.users[this.userName];

params === "load"?this.$store.dispatch("handleDisplayFunctions", {
            activeLink:"userProfile",
            params: "activeLink"
          }):this.$store.dispatch("handleDisplayFunctions", {
            activeLink:"",
            params: "activeLink"
          })


this.$store.dispatch("handleDisplayFunctions", {
            activeLink:"userProfile",
            params: "activeLink"
          });
    },

 getLocalAddressCoverPix(e) {

        this.userCoverImage = URL.createObjectURL(e.target.files[0]);

      },

 getLocalAddressprofile(e) {

        this.userProfileImage = URL.createObjectURL(e.target.files[0]);

      },


handleImageUpdate(params){
this.$refs.filesUpload.click()
},



    handleuserDetailsUpDate() {





},

    handleUserProfilePic(userName) {
      if (
        this.$store.state.users[userName].userProfileImage !== undefined &&
        this.$store.state.users[userName].userProfileImage.length
      ) {
        return this.$store.state.users[userName].userProfileImage;
      }

      return "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
    },

HandleUserCoverImage(){

return `background-image:url(${this.userData.HandleUserCoverImage})`

},

  },
  computed: {
    userData() {
      this.userDatas = this.$store.state.users[this.userName];

      return this.userDatas;
    },
  },



};
</script>
