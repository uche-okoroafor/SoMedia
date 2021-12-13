<template> </template>

<script>
import { uuid } from "vue-uuid";
import moment from "moment";

export default {
  name: "AutoUsers",
  data() {
    return {
      newUser: this.$store.state.displayFunctions.newAccount,
    };
  },

  watch: {
    newUser: {
      handler(state) {},
      deep: true,
    },
  },

  methods: {},

  computed: {},
};
</script>
