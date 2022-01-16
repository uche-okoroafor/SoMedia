<template>
  <span>{{ showDate(date) }}</span>
</template>

<script>
import moment from "moment";

export default {
  name: "Time",
  props: ["date"],
  methods: {
    showDate(date) {
      console.log(date);
      let currentDate = Date.now();
      let dateStatus = currentDate - messageDate;
      const minutes = Math.round(dateStatus / (1000 * 60));
      const hours = Math.round(dateStatus / (1000 * 60 * 60));
      const days = Math.round(dateStatus / (1000 * 60 * 60 * 24));
      const weeks = Math.round(dateStatus / (1000 * 60 * 60 * 24 * 7));
      const months = Math.round(dateStatus / (1000 * 60 * 60 * 24 * 7 * 12));
      const years = Math.round(dateStatus / (1000 * 60 * 60 * 365));

      if (minutes <= 0) {
        return "Just now";
      } else if (minutes < 59) {
        return minutes === 1 ? "1 minute ago" : minutes + "minutes ago";
      } else if (hours < 11) {
        return moment(messageDate).format(" h:mm :ss a L");
      } else if (days >= 1) {
        return moment(messageDate).format(" h:mm:ss a L");
      } else if (weeks < 59) {
        return moment(messageDate).format(" h:mm :ss a L");
      } else if (months < 59) {
        return moment(messageDate).format(" h:mm :SS a L");
      } else {
        return moment(messageDate).format(" h:mm a  L");
      }
    },
  },
};
</script>
