import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookMe from '../views/BookMe.vue'
import MyProjects from '../views/MyProjects.vue'
import Project from '../views/Project.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/bookme',
		name: 'BookMe',
		component: BookMe
	},
	{
		path: '/myprojects',
		name: 'MyProjects',
		component: MyProjects
	},
	{
		path: '/project/:projectId',
		name: 'Project',
		component: Project
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 }
	}
})

export default router