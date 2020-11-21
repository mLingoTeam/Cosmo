<template>
  <div class="">
      <div class="planet__photo"></div>
      <div class="planet__name">{{planet.name}}</div>
      <div class="planet__stats"></div>
  </div>
</template>

<script type="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "Planet",
  props: {
    planet: Object,
  },
});
</script>

<style scoped>

</style>
