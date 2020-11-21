<template>
  <div class="galaxy__container">
    <PlanetsPanel />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import PlanetsPanel from "@/components/PlanetsPanel.vue";

export default {
  name: "Home",
  components: {
    PlanetsPanel
  }
};
</script>

<style scoped>
.galaxy__container{
  position: absolute;
  left: 0;
  top:0;
  width: 100vw;
  height: 100vh;
  background: url("../assets/background.jpg") fixed;
}
</style>
