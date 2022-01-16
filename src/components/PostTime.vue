<template>
  <span>{{ showDateInWords(date) }}</span>
</template>

<script>
export default {
  name: "PostTime",
  props: ["date"],

  data() {
    return {};
  },
  methods: {
    showDateInWords(date) {
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
      } else if (minutes < 60) {
        return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
      } else if (hours < 12) {
        return hours === 1 ? "1 hour ago" : hours + " hours ago";
      } else if (days < 7) {
        return days === 1 ? "1 day ago" : days + " days ago";
      } else if (weeks < 4) {
        return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
      } else if (months < 12) {
        return months === 1 ? "1 month ago" : months + " mouths ago";
      } else {
        return years === 1 ? "1 year ago" : years + " years ago";
      }
    },
  },
};
</script>
