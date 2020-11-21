<template>
  <div class="PlanetsPanel">
    <span v-for="planet in planets" :key="planet.name" class="planet__container">
        <Planet :planet="planet"/>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Planet from "./Planet.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const curUser = ref(store.state.User);
    return {
      curUser
    };
  },
  data(){
    return {
      planets:[
        {name: "Tatooine"},
        {name: "Mars"},
        {name: "Earth"}
      ]
    }
  },
  name: "PlanetsPanel",
  components:{
    Planet,
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.PlanetsPanel{
  margin-left: 4vw;
  width: 96vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.planet__container {
    width: 20%;
    height: 400px;
    padding: 50px 3%;
    background: rgba(00,00,00,0.5);
}
</style>
