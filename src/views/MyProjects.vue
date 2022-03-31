<template>
    <div class="my-projects">
        <h1>My Projects</h1>

        <div class="projects-ctn">
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" :index="{'index':index, 'no':6}" />
        </div>
    </div>
</template>


<script>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../assets/data/projects'

export default {
    name: 'MyProjects',
    components: { 
        ProjectCard
    },
    setup() {
		const projectNo = Object.keys(projects).length

		return  {
			projects,
			projectNo
		}
	}
}
</script>


<style lang="scss" scoped>
.my-projects {
	.projects-ctn {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 112px;
		width: 78vw;
		max-width: 1240px;
		margin: auto;
		margin-top: 90px;
	}

	@media (max-width: 1040px) {
		.projects-ctn {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			row-gap: 112px;
			width: 78vw;
			max-width: 1240px;
			margin: auto;
			margin-top: 90px;
		}
	}

	@media (max-width: 640px) {
		.projects-ctn {
			width: 95vw;
			row-gap: 55px;
			margin-top: 45px;
		}
	}
}
</style>