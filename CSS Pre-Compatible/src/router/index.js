import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookMe from '../views/BookMe.vue'
import MyProjects from '../views/MyProjects.vue'
import Project from '../views/Project.vue'

const routes = [
	{
		path: '/',
		alias: '/upwork',
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
		alias: '/upwork/myprojects',
		name: 'MyProjects',
		component: MyProjects
	},
	{
		path: '/project/:projectId',
		alias: '/upwork/project/:projectId',
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