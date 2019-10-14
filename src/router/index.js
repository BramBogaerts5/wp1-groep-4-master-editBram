import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from 'src/components/WelcomePage.vue'
import BookingPage from 'src/components/BookingPage.vue'

Vue.use(Router)


//Dit dus voor vue-router
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Welcome',
            components: WelcomePage
        },
        {
            path: '/book',
            name: 'Book',
            components: BookingPage
        }
    ]
})