<template>
  <div class="hello">
    <p>
      Welcome in <span class="important">Cosmo</span>!
    </p>
    <p>Current User: {{ curUser.username }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const curUser = ref(store.state.User);
    return {
      curUser
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a, .important {
  color: #42b983;
}
</style>
