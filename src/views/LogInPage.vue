<template>
  <div class="backdrop" >
    <div class="login">

      <!-- <form @submit.prevent="handleCreateAccount()" v-if="createAccount">
    <h6 class="heading-small text-muted mb-4">User information</h6>
    <div class="pl-lg-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group focused">
            <label class="form-control-label" for="input-username"
              >Username</label
            >
            <input
              type="text"
              id="input-username"
                           class="form-control form-control-alternative"

              placeholder="Username"
              v-model="state.userName"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label class="form-control-label" for="input-email"
              >Email address</label
            >
            <input
              type="email"
              id="input-email"
              class="form-control form-control-alternative"
              placeholder="jesse@example.com"
              v-model="state.emailAddress"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group focused">
            <label class="form-control-label" for="input-first-name"
              >Password</label
            >
            <input
              type="text"
              id="input-first-name"
              class="form-control form-control-alternative"
              placeholder="First name"
              v-model="state.password"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group focused">
            <label class="form-control-label" for="input-last-name"
              >first name</label
            >
            <input
              type="text"
              id="input-last-name"
              class="form-control form-control-alternative"
              placeholder="Last name"
              v-model="state.passwordSecond"
            />
          </div>
        </div>
      </div>
    </div>
    <span @click="toggleDisplay()"> i already have an account</span> <br />
    <span v-show="userExists">username or emailAddress already exist</span>
    <br />
    <button type="submit" class="btn">SignUp</button>
  </form> -->

      <form @submit.prevent="handleCreateAccount" v-if="createAccount">
        <input
          type="text"
          id="input-username"
          placeholder="Username"
          v-model="state.userName"
        />
        <br />
        <input
          type="email"
          id="input-email"
          placeholder="jesse@example.com"
          v-model="state.emailAddress"
        />
        <br />
        <input
          type="password"
          id="input-first-name"
          placeholder="password"
          v-model="state.password"
        />
        <br />
        <input
          type="password"
          id="input-last-name"
          placeholder="password"
          v-model="state.passwordSecond"
        />
        <br />

        <span @click="toggleDisplay('showCreateAccountOrLogin')">
          i already have an account</span
        >
        <br />
        <span v-show="userExists">username or emailAddress already exist</span>
        <br />
        <span v-show="inputEmpty">Please fill The highlighted Areas </span>
        <br />
        <span v-show="passwordMismatch">password does not match</span> <br />
        <span v-show="passwordLength"
          >your password should not be less than 6 characters
        </span>
        <br />
        <button type="submit" class="btn btn-success">SignUp</button>
      </form>

      <form @submit.prevent="handleLogin" v-else>
        <input
          type="text"
          placeholder="enter your userName"
          v-model="state.userName"
        />
        <br />
        <input
          type="password"
          placeholder="enter your password"
          v-model="state.password"
        />
        <br />
        <button type="submit" class="btn btn-success">Login</button> <br />

        <span @click="toggleDisplay('showCreateAccountOrLogin')"
          >create new account</span
        >   <br />
<span @click="useGuestAccount"
          >Continue as Guest</span
        >
        <br />

        <br /><span v-show="inputEmpty">enter your username and password</span>
        <br /><span v-show="userUnexist"
          >username or password is incorrect or does not exist</span
        >
        <br />
      </form>
    </div>
  </div>
  <!-- <Home :userData="userData"    :work="'state.userData'"/> -->
</template>

<script>
import { uuid } from "vue-uuid";
// import Home from "./Home";

export default {
  name: "LogInPage",
  // props:[],
  data() {
    return {
      state: {
        userName: "",
        emailAddress: "",
        password: "",
        passwordSecond: "",
        id: uuid.v1(),
      },
      createAccount: false,
      userExists: false,
      inputEmpty: false,
      userUnexist: false,
      passwordMismatch: false,
      passwordLength: false,

      userData: {
        userName: "Guest",
        emailAddress: "",
        password: "",
        emailAddress: "419",
gender:'',
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
    };
  },

  methods: {
    toggleDisplay(params) {
      switch (params) {
        case "showCreateAccountOrLogin":
          this.createAccount = !this.createAccount;
          this.userExists = false;
          this.inputEmpty = false;
          this.userUnexist = false;
          this.passwordMismatch = false;
          this.passwordLength = false;

          break;

        case "loginUser":
          this.userUnexist = false;
          this.inputEmpty = false;
          break;

        case "userUnexist":
          this.userUnexist = true;
          this.inputEmpty = false;
          break;

        case "inputEmpty":
          this.inputEmpty = true;
          this.userUnexist = false;
          this.userExists = false;
          this.passwordMismatch = false;
          this.passwordLength = false;

          break;

        case "userExists":
          this.inputEmpty = false;
          this.userExists = true;
          this.passwordMismatch = false;
          break;

        case "passwordMismatch":
          this.passwordMismatch = true;
          this.inputEmpty = false;
          this.userExists = false;
          this.passwordLength = false;
          break;

        case "passwordLength":
          this.passwordLength = true;
          this.inputEmpty = false;
          this.userExists = false;
          break;

        default:
          break;
      }
    },

    handleClearInputField() {
      this.state.userName = "";
      this.state.emailAddress = "";
      this.state.password = "";
      this.state.passwordSecond = "";
    },
  },

  computed: {
    handleCreateAccount() {
      let users = this.$store.state.users;
      if (this.state.userName && this.state.password) {
        if (users[this.state.userName] !== undefined) {
          return this.toggleDisplay("userExists");
        } else {
          if (this.state.password.length < 6) {
            return this.toggleDisplay("passwordLength");
          } else if (this.state.password !== this.state.passwordSecond) {
            return this.toggleDisplay("passwordMismatch");
          } else {
            this.$store.dispatch("handleAddAccount", {
              [this.state.userName]: {
                userName: this.state.userName,
                emailAddress: this.state.emailAddress,
                password: this.state.password,
                firstName: "",
                lastName: "",
                address: "",
                emailAddress: "",
                postCode: "",
                country: "",
                city: "",
                aboutMe: "",
                id: uuid.v1(),
                messages: [],
                posts: [],
                followers: [],
                following: [],
                friends: [],
              },
            });

            this.userData = this.$store.state.users[this.state.userName];
            this.toggleDisplay("loginUser");
           this.$store.dispatch("handleActivities", {
 userName:this.state.userName,
activity:"Created account",
activityDate:Date.now(),
activityId: uuid.v1()
            })

            return this.handleClearInputField();
          }
        }
      } else {
        return this.toggleDisplay("inputEmpty");
      }
    },

    handleLogin() {
      let users = this.$store.state.users;

      if (this.state.userName && this.state.password) {
        if (
          users[this.state.userName] !== undefined &&
          users[this.state.userName] !== undefined 
        ) {
          this.toggleDisplay("loginUser");
          this.userData = users[this.state.userName];
          this.$emit("sendUserdata", this.userData);
this.$router.push({name:"Home"})
this.$store.dispatch("handleLogin", { userName:this.state.userName,status:"online"
            })
this.$store.dispatch("handleActivities", {
 userName:this.state.userName,
activity:"logged in",
activityDate:Date.now(),
activityId: uuid.v1(),
            })

          return this.handleClearInputField();
        } else {
          return this.toggleDisplay("userUnexist");
        }
      } else {
        return this.toggleDisplay("inputEmpty");
      }
    },
    useGuestAccount(){
this.$router.push({name:"Home"})
this.$store.dispatch("updateUserData",{Guest:{ 
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

 }})
},





  },
};
</script>
<style scoped>


.login {
  margin: 10% auto;

  color: rgb(2, 2, 2);
}
</style>
