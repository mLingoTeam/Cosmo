<template>
  <div class="home">
    <Greetings />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Greetings from "@/components/Greetings.vue";

export default {
  name: "Home",
  components: {
    Greetings
  }
};
</script>
