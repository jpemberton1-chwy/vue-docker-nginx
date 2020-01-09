import Home from './screens/Home.vue'
import Dashboard from './screens/Dashboard.vue'
import Profile from './screens/Profile.vue'
import ErrorPage from './screens/ErrorPage.vue'

export default [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/user/profile', component: Profile },
  { path: '*', component: ErrorPage }
]
