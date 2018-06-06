<template>
<div class="container">
  <div class="content">
    <section v-for="area in areas" :key="area.id">
      <h2>{{area.name}}</h2>
      <div class="mobs" v-for="mob in area.mobs" :key="mob.id">
        <ul>
          <li>
            <span class="level">Lv.{{mob.lv}}</span>
            <span class="name">{{mob.name}}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    ...mapState(['areas'])
  },
  mounted() {
    console.log(this.areas)
  }
}
</script>

<style scoped>
h2 {
  font-size: 1rem;
  font-weight: 400;
}
</style>
