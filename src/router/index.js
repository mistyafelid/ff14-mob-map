import Home from '../containers/Home.vue'
import List from '../containers/List.vue'
import Map from '../containers/Map.vue'

export default {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list/',
      name: 'List',
      component: List
    },
    {
      path: '/map/',
      name: 'Map',
      component: Map
    }
  ]
}
