import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginPage from '@/views/LoginPage.vue'
// import SignupPage from '@/views/SignupPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/Auth/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/Auth/SignupPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/Error/NotFoundPage.vue'),
		},
	],
})
