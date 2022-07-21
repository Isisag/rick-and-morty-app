<template>
  <div>
    <div v-for="item in allData" :key="item.id" class="tarjeta">
      <!-- <h3>{{item.name}}</h3> -->
    </div>
    <h3>{{ characterName }}  ESTE</h3>
    <RouterLink :to="`characters/${characterID}`"
      >link en info component
    </RouterLink>
    <RouterLink to="/characters">back </RouterLink>
    <span>holii</span>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "CharacterInfo",
  data() {},
  props: ["characterID", "allData", "characterName", "characterStatus"],
};
</script>

<style></style>
