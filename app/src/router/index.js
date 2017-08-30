import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bar from '@/components/Bar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import about from '@/pages/about'
import Sign from '@/components/Sign'
import Sign1 from '@/components/Sign1'
import Register from '@/components/Register'
import Register1 from '@/components/Register1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Sign1',
      name: 'Sign1',
      component: Sign1
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Register1',
      name: 'Register1',
      component: Register1
    },
    {
      path: '/Bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
