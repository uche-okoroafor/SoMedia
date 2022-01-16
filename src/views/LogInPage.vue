<template>
  <div class="login-background">
    <div class="login">
      <div class="logo-text">
        <h2>SoMedia</h2>
      </div>

      <form
        @submit.prevent="handleCreateAccount"
        v-if="createAccount"
        class="signup-form"
      >
        <div class="signin-header">
          <h5>Create an Account</h5>
        </div>

        <div class="login-userName-input" :class="{ inputEmpty: inputEmpty1 }">
          <span>
            <font-awesome-icon :icon="['fas', 'user']" />
          </span>
          <input
            type="text"
            id="username"
            placeholder="Username"
            v-model="state.userName"
          />
        </div>

        <div class="login-userName-input">
          <span>
            <font-awesome-icon :icon="['fas', 'user']" />
          </span>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            v-model="state.firstName"
          />
        </div>

        <div class="login-userName-input">
          <span>
            <font-awesome-icon :icon="['fas', 'user']" />
          </span>
          <input
            type="text"
            id="surname"
            placeholder="LastName"
            v-model="state.lastName"
          />
        </div>

        <div class="login-userName-input">
          <span>
            <font-awesome-icon :icon="['fas', 'at']" />
          </span>
          <input
            type="email"
            id="input-email"
            placeholder="jesse@example.com"
            v-model="state.emailAddress"
          />
        </div>
        <div class="login-user-lock" :class="{ inputEmpty: inputEmpty2 }">
          <span>
            <font-awesome-icon :icon="['fas', 'lock']" />
          </span>
          <input
            type="password"
            id="input-first-name"
            placeholder="Password"
            v-model="state.password"
          />
        </div>

        <div class="login-user-lock" :class="{ inputEmpty: inputEmpty3 }">
          <span>
            <font-awesome-icon :icon="['fas', 'lock']" />
          </span>
          <input
            type="password"
            id="input-last-name"
            placeholder="Password"
            v-model="state.passwordSecond"
          />
        </div>
        <div class="login-dropdown">
          <label for="gender"><span>Gender:&nbsp;</span></label>
          <select
            id="gender"
            name="gender"
            v-model="state.gender"
            placeholder="Password"
            :class="{ inputEmpty: inputEmpty4 }"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div class="signup-directives">
          <span
            @click="toggleDisplay('showCreateAccountOrLogin')"
            class="login-directives-click"
          >
            I already have an account</span
          >
          <span style="color: red;" v-if="userExists"
            >Username already Exist</span
          >
          <span style="color: red;" v-if="inputEmpty"
            >Please fill The highlighted Areas
          </span>
          <span style="color: red;" v-if="passwordMismatch"
            >Passwords does not Match</span
          >
          <span style="color: red;text-align:center;" v-if="passwordLength"
            >Your Password Should not be less than 6 Characters
          </span>
        </div>
        <div class="signup-button">
          <button class="btn btn-success" type="submit">SignUp</button>
        </div>
      </form>

      <form @submit.prevent="handleLogin" v-else>
        <div class="signin-header">
          <h5>Sign In</h5>
        </div>

        <div class="login-userName-input">
          <span>
            <font-awesome-icon :icon="['fas', 'user']" />
          </span>
          <input
            type="text"
            placeholder="Enter Your Username"
            v-model="state.userName"
          />
        </div>

        <div class="login-user-lock">
          <span>
            <font-awesome-icon :icon="['fas', 'lock']" />
          </span>
          <input
            type="password"
            placeholder="Enter Your Password"
            v-model="state.password"
          />
        </div>
        <div style="text-align: right;">
          <span class="login-directives-click">Forgot Password</span>
        </div>
        <div class="login-user-botton">
          <button type="submit" class="btn btn-success">Login</button>
        </div>
        <div class="login-directives">
          <span
            @click="toggleDisplay('showCreateAccountOrLogin')"
            class="login-directives-click"
            >Create New Account</span
          >
          <span @click="useGuestAccount" class="login-directives-click"
            >Continue As Guest</span
          >
          <span v-if="inputEmpty" style="color: red;"
            >Enter Your Username and Password</span
          >
          <span v-if="userUnexist" style="color: red;text-align: center;"
            >Username or Password is incorrect or does not Exist</span
          >
        </div>
      </form>
    </div>
  </div>

  <div v-if="$store.state.dis" class="backdrop-login"></div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  name: "LogInPage",
  data() {
    return {
      state: {
        userName: "",
        emailAddress: "",
        password: "",
        passwordSecond: "",
        id: uuid.v1(),
        firstName: "",
        lastName: "",
        gender: "",
      },
      createAccount: false,
      userExists: false,
      inputEmpty: false,
      userUnexist: false,
      passwordMismatch: false,
      passwordLength: false,
      inputEmpty1: false,
      inputEmpty2: false,
      inputEmpty3: false,
      inputEmpty4: false,

      userData: {
        userName: "Guest",
        emailAddress: "",
        password: "",
        emailAddress: "419",
        gender: "",
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
  beforeMount() {
    this.$store.dispatch("handleDisplayFunctions", {
      loginPageUnmounted: false,
      params: "loginPageUnMount",
    });
    setTimeout(() => {
      this.$store.dispatch("handleDisplayFunctions", {
        wihteBackgroundLogin: false,
        params: "wihteBackgroundLogin",
      });
    }, 2000);
  },

  beforeUnmount() {
    this.$store.dispatch("handleDisplayFunctions", {
      loginPageUnmounted: true,
      params: "loginPageUnMount",
    });
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
          this.handleBorderHignLight("");
          break;

        case "loginUser":
          this.userUnexist = false;
          this.inputEmpty = false;
          this.handleBorderHignLight("");

          break;

        case "userUnexist":
          this.userUnexist = true;
          this.inputEmpty = false;
          this.handleBorderHignLight("");

          break;

        case "inputEmpty":
          this.inputEmpty = true;
          this.userUnexist = false;
          this.userExists = false;
          this.passwordMismatch = false;
          this.passwordLength = false;
          this.handleBorderHignLight("inputEmpty");
          break;

        case "userExists":
          this.inputEmpty = false;
          this.userExists = true;
          this.passwordMismatch = false;
          this.handleBorderHignLight("");

          break;

        case "passwordMismatch":
          this.passwordMismatch = true;
          this.inputEmpty = false;
          this.userExists = false;
          this.passwordLength = false;
          this.handleBorderHignLight("");

          break;

        case "passwordLength":
          this.passwordLength = true;
          this.inputEmpty = false;
          this.userExists = false;
          this.handleBorderHignLight("");

          break;

        default:
          break;
      }
    },

    handleBorderHignLight(params) {
      if (params.length) {
        !this.state.userName.length && (this.inputEmpty1 = true);
        !this.state.password.length && (this.inputEmpty2 = true);
        !this.state.passwordSecond.length && (this.inputEmpty3 = true);
        !this.state.gender.length && (this.inputEmpty4 = true);
      } else {
        this.inputEmpty1 = false;
        this.inputEmpty2 = false;
        this.inputEmpty3 = false;
        this.inputEmpty4 = false;
      }
    },

    handleClearInputField() {
      this.state.userName = "";
      this.state.emailAddress = "";
      this.state.password = "";
      this.state.passwordSecond = "";
      this.state.gender = "";
    },
    handleLocalStorage() {
      let userData = {
        userName: this.state.userName,
        loginTime: Date.now(),
      };
      localStorage.userData = JSON.stringify(userData);
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
          } else if (!this.state.gender.length) {
            return this.toggleDisplay("inputEmpty");
          } else {
            this.$store.dispatch("handleDisplayFunctions", {
              newAccount: true,
              params: "newAccount",
            });

            this.$store.dispatch("handleAddAccount", {
              [this.state.userName]: {
                userName: this.state.userName,
                emailAddress: this.state.emailAddress,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                address: "",
                postCode: "",
                country: "",
                city: "",
                aboutMe: "",
                posts: [],
                followers: [],
                following: [],
                friends: [],
                age: "",
                education: "",
                videos: [],
                photos: [],
                messages: {},
                messageStatus: {},
                notifications: {},
                occupation: "",
                status: "online",
                activities: {},
                userCoverImage: require("../assets/coverImages/defaultBg.jpg"),
                userId: uuid.v1(),
                userProfileImage: require("../assets/userThumbnail/User.png"),
              },
            });
            this.handleLocalStorage();
            this.userData = this.$store.state.users[this.state.userName];
            this.toggleDisplay("loginUser");
            this.$store.dispatch("handleActivities", {
              userName: this.state.userName,
              activity: "Created account",
              activityDate: Date.now(),
              activityId: uuid.v1(),
            });
            this.$router.push({ name: "Home" });
            return this.handleClearInputField();
          }
        }
      } else {
        this.$store.dispatch("handleDisplayFunctions", {
          newAccount: false,
          params: "newAccount",
        });
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
          this.$router.push({ name: "Home" });
          this.$store.dispatch("handleLogin", {
            userName: this.state.userName,
            status: "online",
          });
          this.handleLocalStorage();
          this.$store.dispatch("handleActivities", {
            userName: this.state.userName,
            activity: "logged in",
            activityDate: Date.now(),
            activityId: uuid.v1(),
          });

          return this.handleClearInputField();
        } else {
          return this.toggleDisplay("userUnexist");
        }
      } else {
        return this.toggleDisplay("inputEmpty");
      }
    },
    useGuestAccount() {
      this.$router.push({ name: "Home" });
      this.$store.dispatch("updateUserData", {
        Guest: {
          userName: "Guest",
          emailAddress: "",
          password: "",
          firstName: "",
          lastName: "",
          gender: "",
          address: "",
          postCode: "",
          country: "",
          city: "",
          aboutMe: "",
          posts: [],
          followers: [],
          following: [],
          friends: [],
          age: "",
          education: "",
          videos: [],
          photos: [],
          messages: {},
          messageStatus: {},
          notifications: {},
          occupation: "",
          status: "online",
          activities: {},
          userCoverImage: require("../assets/coverImages/defaultBg.jpg"),
          userId: uuid.v1(),
          userProfileImage: require("../assets/userThumbnail/User.png"),
        },
      });
    },
  },
};
</script>
