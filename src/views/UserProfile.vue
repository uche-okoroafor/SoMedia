<template>
  <div class="mai-container">



    <div class="cover-container">

      <h1>{{userData.userName}}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae <br> facere sit quidem nobis accusantium
        illo explicabo doloribus laudantium omnis veritatis totam libero in laborum amet, doloremque, delectus magni!
        Totam, perferendis!</p>

    </div>
    <div class="body-container">
      <div class="card-set-profile">
        <form @submit.prevent="handleuserDetailsUpDate">
          <div class="card-set-profile-header">

            <h3>My account</h3>

            <button class="btn btn-info">Settings</button>
          </div>

          <div class="info-form">
            <h4>User information</h4>
            <div class="your-info">


              <div>

                <label for="UserName">UserName</label>
                <input type="text" v-model="userData.userName" placeholder="UserName">
              </div>

              <div> <label for="Email"> Email</label>
                <input type="text" v-model="userData.emailAddress" placeholder="Email">
              </div>

              <div> <label for="FirstName">First Name</label>
                <input type="text" v-model="userData.firstName" placeholder="First Name">
              </div>

              <div> <label for="LastName">Last Name</label>
                <input type="text" v-model="userData.lastName" placeholder="Last Name">
              </div>


              <div> <label for="age">Age</label>
                <input type="text" v-model="userData.age" placeholder="age">
              </div>

              <div> <label for="education">Education</label>
                <input type="text" v-model="userData.Education" placeholder="Education">
              </div>


              <div class="age"> <label for="occupation">Occupation</label>
                <input type="text" v-model="userData.Occupation" placeholder="Occupation">
              </div>


            </div>
            <hr>

          </div>
          <h4>Contact information</h4>
          <div class="contact-info">



            <div class="Home-Address">
              <div>
                <label for="Address">Address</label>
              </div>
              <input type="text" placeholder="Home Address" v-model="userData.Address">
            </div>
            <div class="">
              <label for="City">City</label>
              <input type="text" placeholder="City" v-model="userData.city">
            </div>
            <div class="">
              <label for="Country">Country</label>
              <input type="text" placeholder="Country" v-model="userData.country">
            </div>
            <div class="">
              <label for="postCode">postCode</label>
              <input type="text" placeholder="postCode" v-model="userData.postCode">
            </div>






          </div>
          <hr>

          <div class="about-me">
            <h4>About me</h4>

            <div class="textarea-container">


              <label for="About-me">About Me</label>
              <textarea name="About-me" cols="30" rows="5" placeholder="About me" v-model="userData.aboutMe"></textarea>
            </div>




          </div>

            <button type="submit" class="btn btn-success mt-5">Save</button>


        </form>
      </div>
      <div class="card-view-profile">
<div class="user-Profile-pix">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vOZ__cf7MMP5RLD6UKL6_03pYgkrMyt2AQ&usqp=CAU" alt="">

</div>
<div class="friends-follwers-container">
<div><h5>{{userData.friends.length}} 1</h5>  <span>Friends</span> </div>
<div><h5>{{userData.photos.length}}2</h5> <span>Photos</span> </div>
<div><h5>{{userData.posts.length}}3</h5> <span>Posts</span> </div>


</div>

<div class="userData-userName">

<h5>{{userData.userName}}</h5>, 
     <span>{{userData.age}}</span>

</div>


<div class="userData-userName">

<h5>{{userData.city}}</h5>, 
     <span>{{userData.country}}</span>

</div>


<div class="userData-userName">

<h5>{{userData.occupation}}</h5>, 
     <span>{{userData.education}}</span>

</div>

<hr>

<span>{{userData.aboutMe}}</span>


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

          posterComment: "",
          comments: {
            likes: [],
            unLikes: [],
          },
        },
      };
    },

    mounted() {
      this.loadData();
    },
    beforeUnmount() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.userDatas = this.$store.state.users[this.userName];
      },

      handleuserDetailsUpDate() {



      }

    },
    computed: {
      userData() {
        this.userDatas = this.$store.state.users[this.userName];

        return this.userDatas;
      },
    },
  };
</script>