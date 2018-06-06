<template>
  <div id="app">
    <header>
      <h1>MobMap</h1>
    </header>
    <main>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </main>
    <footer>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'List' }">List</router-link></li>
          <li><router-link :to="{ name: 'Map' }">Map</router-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  methods: {
    ...mapActions(['fetchArea'])
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Home') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  created() {
    console.log('welcome')
    this.fetchArea()
    console.log(this.area)
  }
}
</script>

<style scoped>
#app {
  color: #2c3e50;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  background: rgb(20, 22, 24);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header h1 {
  margin: 0 8px;
  font-size: 1rem;
  font-weight: 400;
}
main {
  position: relative;
  height: calc(100vh - 60px);
  margin-top: 30px;
  overflow: hidden;
  color: #fff;
}
footer {
  height: 30px;
  background: rgb(20, 22, 24);
  color: #fff;
}
footer nav ul {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
footer nav a {
  color: #fff;
  text-decoration: none;
  display: block;
  line-height: 30px;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
  background: rgb(28, 32, 34);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
