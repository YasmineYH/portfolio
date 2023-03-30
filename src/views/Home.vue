<template>
	<div class="home">
		<h1 class="home-h1">Web |  UI Developer</h1>

		<transition name="header" mode="out-in">
			<div class="header-graphic">
				<router-link class="link tooltip" :to="route.includes('/upwork') ? { path: `/upwork/project/yasso`} : { name: 'Project', params: { projectId: `yasso`}}">
					<img :src="require('@/assets/project-images/yasso.png')" alt="Yasso Project Image">
					<span class="tooltip-text">UI Only</span>
				</router-link>

				<router-link class="link tooltip" :to="route.includes('/upwork') ? { path: `/upwork/project/healthic`} : { name: 'Project', params: { projectId: `healthic`}}">
					<img :src="require('@/assets/project-images/healthic.png')" alt="Healthic Project Image">
					<span class="tooltip-text">UI and Frontend (Vue.js)</span>
				</router-link>

				<router-link class="link tooltip" :to="route.includes('/upwork') ? { path: `/upwork/project/bicm`} : { name: 'Project', params: { projectId: `bicm`}}">
					<img :src="require('@/assets/project-images/bicm.png')" alt="Bicm Project Image">
					<span class="tooltip-text">UI and Frontend (Html5/Css3)</span>
				</router-link>

				<router-link class="link tooltip" :to="route.includes('/upwork') ? { path: `/upwork/project/chefart`} : { name: 'Project', params: { projectId: `chefart`}}">
					<img :src="require('@/assets/project-images/chefart.png')" alt="Chefart Project Image">
					<span class="tooltip-text">UI Only</span>
				</router-link>

				<router-link class="link tooltip" :to="route.includes('/upwork') ? { path: `/upwork/project/goodpie`} : { name: 'Project', params: { projectId: `goodpie`}}">
					<img :src="require('@/assets/project-images/goodpie.png')" alt="Goodpie Project Image">
					<span class="tooltip-text">UI Only</span>
				</router-link>
			</div>
		</transition>

		<!--<div class="header-loading" v-if="!loaded">
			<h1>Images loading...</h1>
		</div>-->

		<div class="tools">
			<ToolCard v-for="(tool, index) in tools" :key="index" :tool="tool" />
		</div>

		<div class="profile">
			<div class="profile-side left">
				<div>
					<h4>About me</h4>
					<p class="normal-p">{{ profile.about }}</p>
				</div>

				<div v-if="route != '/upwork'">
					<h4>Contact</h4>
					<p class="normal-p"><span>Email: </span>{{ profile.contact.email }}</p>
					<p class="normal-p"><span>Whatsapp: </span>{{ profile.contact.tel }}</p>
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
				<transition-group name="cardslide" appear>
					<ProjectCard v-for="(project, index) in toggleProjects" :key="index" :project="project" />
				</transition-group>
			</div>

			<button @click="toggleProjectsBtn" class="dark-btn">{{ projectsBtn }}</button>
		</div>

		<div class="about">
			<div>
				<p class="normal-p">I am a passionate and ever-learning Web and UI Designer with experience in Frontend Development and UI Design, primarily using Figma, Html and Css, JavaScript, Vue.js, and Webflow. I am seeking a position where my creativity, problem-solving skills, and design thinking can be honed, challenged and utilized for the utmost growth and satisfaction of my clients and their businesses.
				</p>

				<p class="normal-p">
					I love beauty. I love art. I love colors. I love logic. I love code. But most importantly, 
					I love listening to my clients and then translating <span>who they are</span>, more so than what they do, into design.
				</p>
			</div>

			<img :src="require('@/assets/profile/profile2.png')" alt="Profile Picture">
		</div>

		<div class="contact" v-if="route != '/upwork'">
			<h2>Get a quote</h2>

			<form ref="form" @submit.prevent="sendEmail">
				<p class="form-title">Please fill this form, Sir/Ma, and I’ll get in touch as soon as possible!</p>
				<p class="not-available">Unfortunately, this form is not functional at the moment, please call me directly (00229 90943222) or email me (hyyasmine@gmail.com). Thank you!</p>

				<div>
					<!--<input type="text" placeholder="Your full name here..." name="quote_name">-->
					<input type="email" placeholder="Your e-mail address here..." name="quote_email">
					<textarea cols="30" rows="10" name="quote_message">Your message here...</textarea>

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
import emailjs from 'emailjs-com'

import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

export default {
	name: 'Home',
	components: {
		ToolCard,
		ProfileCard,
		ProjectCard,
	},
	setup() {
		const route = computed(() => useRoute().path)

		const limit = ref([5])
		const toggleProjects = computed(() => limit.value ? Object.entries(projects).slice(0,4).map(entry => entry[1]) : projects)

		const projectsBtn = ref('View More...')
		function toggleProjectsBtn() {
			if (limit.value == 5) {
				limit.value = null
				projectsBtn.value = 'View Less...'
			} else {
				limit.value = 5
				projectsBtn.value = 'View More...'
			}
		}

		const quote_name = ref([])
		const quote_email = ref([])
		const quote_message = ref([])
		function sendEmail(e) {
			emailjs.sendForm('portfolio-quote-service', 'portfolio-quote-service', e.target, '1_cV-2fNCZ6030hn7')
			.then((result) => {
				console.log('SUCCESS!', result.text);
			}, (error) => {
				console.log('FAILED...', error.text);
			});

			// Reset form field
			quote_name.value = ''
			quote_email.value = ''
			quote_message.value = ''
		}


		//const loaded = ref(false)

		/*onMounted( () => {
			console.log('MOUNTED')
			setTimeout(() => {
				loaded.value = true
			}, 1000);
		})*/

		return  {
			tools,
			projects,
			profile,
			experiences,
			limit,
			toggleProjects,
			projectsBtn,
			toggleProjectsBtn,
			route,
			quote_name,
			quote_email,
			quote_message,
			sendEmail,
			//loaded,
		}
	}
}
</script>


<style lang="scss" scoped>
.header-enter-from,
.header-leave-to {
	opacity: 0;
	-webkit-transform: translate(0, 500px);
		-ms-transform: translate(0, 500px);
			transform: translate(0, 500px);
}

.header-enter-active,
.header-leave-active {
	-webkit-transition: all .5s ease-out;
		-o-transition: all .5s ease-out;
			transition: all .5s ease-out;
}

.header-enter-to,
.header-leave-from {
	opacity: 1;
	-webkit-transform: translate(0, 0);
		-ms-transform: translate(0, 0);
			transform: translate(0, 0);
}

.header-graphic {
	position: relative;
	width: 100%;
	max-width: 1740px;
	height: 735px;
	margin: auto;
	margin-top: 100px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
		-ms-flex-pack: justify;
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
			-o-object-fit: cover;
				object-fit: cover;
			-o-object-position: top;
				object-position: top;
			-webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
				box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
			-webkit-transition: 0.5s ease all;
				-o-transition: 0.5s ease all;
					transition: 0.5s ease all;
					
			&:hover {
				-webkit-transform: rotateZ(-2deg) scale(1.01);
					-ms-transform: rotate(-2deg) scale(1.01);
						transform: rotateZ(-2deg) scale(1.01);
				-webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
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
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    width: 73vw;
	max-width: 1240px;
    margin: auto;
	margin-top: 250px;
	
	@media (max-width: 1240px) {
		gap: 20px;
		row-gap: 35px;
		-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
	}

	@media (max-width: 640px) {
		margin-top: 150px;
	}
}

.profile {
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
		-ms-flex-pack: justify;
			justify-content: space-between;
    width: 88vw;
	max-width: 1740px;
	height: 595px;
    margin: auto;
	margin-top: 250px;

	.profile-side {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
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
				width: 235px;

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
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
				-ms-flex-direction: column;
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
		-webkit-box-pack: unset;
			-ms-flex-pack: unset;
				justify-content: unset;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
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
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
			-ms-flex-pack: justify;
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
			-ms-flex-wrap: wrap;
				flex-wrap: wrap;
		}
	}

	@media (max-width: 640px) {
		margin-top: 150px;
		margin-bottom: 150px;

		.experience-ctn {
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
				-ms-flex-direction: column;
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

	/* .cardslide-enter-from {
		opacity: 0;
		transform: matrix(0.2);
	}

	.cardslide-enter-active {
		transition: all .3s ease-in;
	} */

	.projects-ctn {
		position: relative;
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: (1fr)(2);
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
			display: -ms-grid;
			display: grid;
			-ms-grid-columns: (1fr)(1);
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
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	margin: auto;
	margin-top: 250px;

	div {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
				flex-direction: column;
		gap: 15px;
		width: 530px;
		height: -webkit-fit-content;
		height: -moz-fit-content;
		height: fit-content;
		margin-top: 100px;
		margin-right: -25px;
		-webkit-transition: 1s ease-out all;
		-o-transition: 1s ease-out all;
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
		-webkit-transition: 1s ease-out all;
		-o-transition: 1s ease-out all;
		transition: 1s ease-out all;
	}

	&:hover {
		img {
			-webkit-transform: translate(10px, 0) scale(1.01);
				-ms-transform: translate(10px, 0) scale(1.01);
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
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
				flex-direction: column;

		div {
			-webkit-box-ordinal-group: 2;
				-ms-flex-order: 1;
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
			-o-object-fit: cover;
				object-fit: cover;
			-o-object-position: top;
				object-position: top;
		}
	}
}

.contact {
	margin-top: 250px;

	form {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
				flex-direction: column;
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
		width: 73vw;
		max-width: 1240px;
		margin: auto;
		margin-top: 90px;
		padding: 50px 0;
		border-radius: 5px;
        background: #FFFFFF;
        -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
                box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

		p.form-title {
			font-weight: 500;
            font-size: 18px;
			text-align: center;
		}

		div {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
				-ms-flex-direction: column;
					flex-direction: column;
			-webkit-box-align: center;
				-ms-flex-align: center;
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
                -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
                        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
				-webkit-transition: .5s ease-out;
				-o-transition: .5s ease-out;
				transition: .5s ease-out;

				&:hover,
				&:focus {
					border: 1px solid #36363663;
				}

				&::-webkit-input-placeholder {
					color: #363636;
				}

				&::-moz-placeholder {
					color: #363636;
				}

				&:-ms-input-placeholder {
					color: #363636;
				}

				&::-ms-input-placeholder {
					color: #363636;
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