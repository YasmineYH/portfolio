<template>
	<div class="home">
		<h1 class="home-h1">Web |  UI Designer</h1>

		<div class="header-graphic">
			<router-link class="link" :to="{ name: 'Project', params: { projectId : 'yasso'}}">
				<img :src="require('@/assets/project-images/yasso.png')" alt="Yasso Project Image">
			</router-link>

			<router-link class="link" :to="{ name: 'Project', params: { projectId : 'healthic'}}">
				<img :src="require('@/assets/project-images/healthic.png')" alt="Healthic Project Image">
			</router-link>

			<router-link class="link" :to="{ name: 'Project', params: { projectId : 'diem'}}">
				<img :src="require('@/assets/project-images/diem.png')" alt="Diem Project Image">
			</router-link>

			<router-link class="link" :to="{ name: 'Project', params: { projectId : 'chefart'}}">
				<img :src="require('@/assets/project-images/chefart.png')" alt="Chefart Project Image">
			</router-link>

			<router-link class="link" :to="{ name: 'Project', params: { projectId : 'goodpie'}}">
				<img :src="require('@/assets/project-images/goodpie.png')" alt="Goodpie Project Image">
			</router-link>
		</div>

		<div class="tools">
			<ToolCard v-for="(tool, index) in tools" :key="index" :tool="tool" />
		</div>

		<div class="profile">
			<div class="profile-side left">
				<div>
					<h4>About me</h4>
					<p class="normal-p">{{ profile.about }}</p>
				</div>

				<div>
					<h4>Contact</h4>
					<p class="normal-p"><span>Email: </span>{{ profile.contact.email }}</p>
					<p class="normal-p"><span>Whatsapp: </span>{{ profile.contact.whatsapp }}</p>
					<p class="normal-p"><span>Tel: </span>{{ profile.contact.tel }}</p>
					<p class="normal-p"><span>Github: </span>{{ profile.contact.github }}</p>
				</div>

				<div>
					<h4>Services</h4>
					<p class="normal-p" v-for="(service, index) in profile.services" :key="index">{{ service }}</p>
				</div>
			</div>

			<ProfileCard :profile="profile" />

			<div class="profile-side right">
				<div>
					<h4>Years of experience</h4>
					<p class="normal-p">{{ profile.yearsOfExperience }}</p>
				</div>

				<div>
					<h4>Client satisfaction</h4>
					<p class="normal-p">{{ profile.clientSatisfaction }}</p>
				</div>

				<div>
					<h4>Projects done</h4>
					<p class="normal-p">{{ profile.projectsDone }}</p>
				</div>
			</div>
		</div>

		<div class="experience">
			<h2>Experience</h2>

			<div class="experience-ctn">
				<div v-for="(experience, index) in experiences" :key="index">
					<h4>{{ experience.year }}</h4>
					<p class="normal-p">{{ experience.title }}</p>
					<p class="normal-p">{{ experience.location }},</p>
					<p class="normal-p">{{ experience.country }}</p>
				</div>
			</div>
		</div>

		<div class="projects">
			<h2>Projects</h2>

			<div class="projects-ctn">
				<ProjectCard v-for="(project, index) in projects" :key="index" :project="project" :index="{'index':index, 'no':projectNo}" />
			</div>

			<button @click="toggleProjects" class="dark-btn">{{ (projectNo == 3) ? 'View More...' : 'View Less...' }}</button>
		</div>

		<div class="about">
			<div>
				<p class="normal-p">After my degree in Computer Science at the University of Ilorin, Nigeria in 2022, I went on ahead to live my dream: 
					work with actual people! I at last, had the opportunity to give actual value back to my society; 
					helping businesses and entrepreneurs find their place, as well as an audience, in the global community. The Internet.
				</p>

				<p class="normal-p">
					I love beauty. I love art. I love colors. I love logic. I love code. But most importantly, 
					I love listening to my clients and then translating <span>who they are</span>, more so than what they do, into design.
				</p>
			</div>

			<img :src="require('@/assets/profile/profile2.png')" alt="Profile Picture">
		</div>

		<div class="contact">
			<h2>Get a quote</h2>

			<form action="">
				<p>Please fill this form, Sir/Ma, and I’ll get in touch as soon as possible!</p>

				<div>
					<input type="email" placeholder="Your e-mail address here...">
					<textarea name="" id="" cols="30" rows="10">Your message here...</textarea>

					<button class="dark-btn">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
import ToolCard from '@/components/ToolCard.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '../assets/data/projects'
import { tools } from '../assets/data/tools'
import { profile } from '../assets/data/profile'
import { experiences } from '../assets/data/experiences'

export default {
	name: 'Home',
	components: {
		ToolCard,
		ProfileCard,
		ProjectCard
	},
	setup() {
		const projectNo = 3

		function toggleProjects() {
			if (this.projectNo == 3) {
				this.projectNo = this.projects.length-1
			} else {
				this.projectNo = 3
			}
		}

		return  {
			tools,
			projects,
			profile,
			experiences,
			projectNo,
			toggleProjects,
		}
	}
}
</script>


<style lang="scss" scoped>
.header-graphic {
	position: relative;
	width: 100%;
	max-width: 1740px;
	height: 735px;
	margin: auto;
	margin-top: 100px;
	display: flex;
	justify-content: space-between;

	.link {
		position: relative;
		width: calc((100%/5) - 35px);

		&:nth-of-type(1) {
			height: 490px;
			margin-top: auto;
			margin-bottom: 125px;
		}

		&:nth-of-type(2) {
			height: 660px;
			margin-top: auto;
			margin-bottom: 75px;
		}

		&:nth-of-type(3) {
			width: calc((100%/5) + 75px);
			height: 570px;
			margin-top: auto;
		}

		&:nth-of-type(4) {
			height: 590px;
			margin-top: auto;
			margin-bottom: 75px;
		}
		
		&:nth-of-type(5) {
			height: 460px;
			margin-top: auto;
			margin-bottom: 125px;
		}

		img {
			border-radius: 5px;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
			box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
			transition: 0.5s ease all;

			&:hover {
				transform: rotateZ(-2deg) scale(1.01);
				box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
			}
		}
	}

	@media (min-width: 1740px) {
		height: 935px;

		.link {
			&:nth-of-type(1) {
				height: 690px;
			}

			&:nth-of-type(2) {
				height: 860px;
			}

			&:nth-of-type(3) {
				height: 770px;
			}

			&:nth-of-type(4) {
				height: 790px;
			}
			
			&:nth-of-type(5) {
				height: 660px;
			}
		}
	}

	@media (max-width: 1240px) {
		height: 635px;

		.link {
			width: calc((100%/5) - 25px);

			&:nth-of-type(1) {
				height: 390px;
			}

			&:nth-of-type(2) {
				height: 560px;
			}

			&:nth-of-type(3) {
				height: 470px;
				width: calc((100%/5) + 65px);
			}

			&:nth-of-type(4) {
				height: 490px;
			}
			
			&:nth-of-type(5) {
				height: 360px;
			}
		}
	}

	@media (max-width: 940px) {
		height: 635px;

		.link {
			width: calc((100%/5) + 8vw);

			&:nth-of-type(1) {
				display: none;
			}

			&:nth-of-type(2) {
				height: 560px;
			}

			&:nth-of-type(3) {
				height: 470px;
				width: calc((100%/5) + 20vw);
			}

			&:nth-of-type(4) {
				height: 490px;
			}
			
			&:nth-of-type(5) {
				display: none;
			}
		}
	}

	@media (max-width: 640px) {
		height: 435px;
		margin-top: 125px;

		.link {
			width: calc((100%/5) + 8vw);

			&:nth-of-type(1) {
				display: none;
			}

			&:nth-of-type(2) {
				height: 360px;
			}

			&:nth-of-type(3) {
				height: 270px;
				width: calc((100%/5) + 20vw);
			}

			&:nth-of-type(4) {
				height: 290px;
			}
			
			&:nth-of-type(5) {
				display: none;
			}
		}
	}
}

.tools {
	display: flex;
    justify-content: space-between;
    width: 73vw;
	max-width: 1240px;
    margin: auto;
	margin-top: 250px;
	
	@media (max-width: 1140px) {
		gap: 20px;
		row-gap: 35px;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 640px) {
		margin-top: 150px;
	}
}

.profile {
	position: relative;
	display: flex;
	justify-content: space-between;
    width: 88vw;
	max-width: 1740px;
	height: 595px;
    margin: auto;
	margin-top: 250px;

	.profile-side {
		display: flex;
		flex-direction: column;
		margin-top: 5px;

		&.left {
			gap: 65px;
			text-align: left;

			div:nth-child(1) {
				width: 205px;
			}

			div:nth-child(2),
			div:nth-child(3) {
				width: 225px;

				p {
					line-height: 30px;

					span {
						font-weight: 700;
					}
				}
			}
		}

		&.right {
			gap: 90px;
			text-align: right;

			p {
				font-weight: 700;
				font-size: 32px;
			}
		}

		div {
			h4 {
				margin-bottom: 12px;
			}
		}
	}

	@media (max-width: 1040px) {
		height: 725px;

		.profile-side {
			position: absolute;
			top: 125px;
			z-index: 2000;
			display: flex;
			flex-direction: column;
			margin-top: 5px;

			&.left {
				left: 15px;
				gap: 45px;
			}

			&.right {
				right: 15px;
				gap: 65px;
			}
		}
	}

	@media (max-width: 640px) {
		height: 905px;
		margin-top: 150px;
		justify-content: unset;
		flex-direction: column;

		.profile-side {
			position: unset;
			top: unset;
			margin-top: 55px;

			&:nth-of-type(1) {
				margin-top: 125px;
			}

			&.left {
				gap: 55px;
				text-align: center;

				div:nth-child(1),
				div:nth-child(2),
				div:nth-child(3) {
					width: 205px;
					margin: auto;
					
					p {
						line-height: 23px;
					}
				}
			}

			&.right {
				gap: 55px;
				text-align: center;
			}

			div {
				h4 {
					margin-bottom: 2px;
				}
			}
		}

	}
}

.experience {
	margin-top: 250px;

	.experience-ctn {
		display: flex;
		justify-content: space-between;
		width: 73vw;
		max-width: 1240px;
		margin: auto;
		margin-top: 90px;

		h4 {
			margin-bottom: 12px;
		}

		p:nth-of-type(1) {
			font-weight: 700;
			margin-bottom: 5px;
		}
	}

	@media (max-width: 840px) {
		.experience-ctn {
			gap: 145px;
			row-gap: 55px;
			flex-wrap: wrap;
		}
	}

	@media (max-width: 640px) {
		margin-top: 150px;
		margin-bottom: 150px;

		.experience-ctn {
			flex-direction: column;
			text-align: center;
			margin-top: 45px;

			h4 {
				margin-bottom: 8px;
			}
		}
	}
}

.projects {
	margin-top: 250px;

	.projects-ctn {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 112px;
		width: 78vw;
		max-width: 1240px;
		margin: auto;
		margin-top: 90px;
	}

	button {
		margin: auto;
		margin-top: 70px;
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
		margin-top: 150px;

		.projects-ctn {
			width: 95vw;
			row-gap: 55px;
			margin-top: 45px;
		}
	}
}

.about {
	display: flex;
	width: fit-content;
	margin: auto;
	margin-top: 250px;

	div {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 530px;
		height: fit-content;
		margin-top: 100px;
		margin-right: -25px;
		transition: 1s ease-out all;

		p {
			text-align: justify;

			span {
				font-weight: 800;
			}
		}
	}

	img {
		width: 360px;
		transition: 1s ease-out all;
	}

	&:hover {
		img {
			transform: translate(10px, 0) scale(1.01);
		}
	}

	@media (max-width: 1040px) {
		div {
			margin-top: auto;
			margin-bottom: auto;
			margin-right: -5px;
			width: 45vw;
		}

		img {
			width: 30vw;
		}
	}

	@media (max-width: 840px) {
		flex-direction: column;

		div {
			order: 1;
			margin-right: unset;
			width: 73vw;

			p {
				text-align: center;
			}
		}

		img {
			margin: auto;
		}
	}

	@media (max-width: 640px) {
		margin-top: 150px;

		img {
			width: 55vw;
			height: 50vw;
			margin-bottom: 15px;
			border-bottom: 2px solid #363636;
			object-fit: cover;
			object-position: top;
		}
	}
}

.contact {
	margin-top: 250px;

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 500px;
		width: 73vw;
		max-width: 1240px;
		margin: auto;
		margin-top: 90px;
		border-radius: 5px;
        background: #FFFFFF;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

		p {
			font-weight: 500;
            font-size: 18px;
			text-align: center;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 35px;
			margin-top: 45px;

			input,
			textarea {
				border: none;
				outline: none;
				width: 600px;
				min-height: 50px;
				border-radius: 5px;
				padding: 20px 30px;
				border: 1px solid #36363600;
				font-weight: 500;
				font-size: 15px;
                box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
				transition: .5s ease-out;

				&:hover,
				&:focus {
					border: 1px solid #36363663;
				}

				&::placeholder {
					color: #363636;
				}
			}

			textarea {
				height: 150px;
			}
		}
	}

	@media (max-width: 1040px) {
		form {
			width: 83vw;
			margin-top: 45px;

			p {
				width: 65vw;
                font-size: 16px;
                margin-bottom: 7px;
			}

			div {
				input,
				textarea {
					width: 65vw;
					padding: 10px 10px;
				}
			}
		}
	}

	@media (max-width: 640px) {
		margin-top: 150px;
	}
}
</style>