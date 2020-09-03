import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '../routes/index.js'
Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '/',
            component: () => import(/* webpackChunkName: "handler-layout" */ '../layouts/_handler.vue'),
            children: routes
        }
	],
	mode: 'history'
})
 