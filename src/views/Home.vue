<template>
	<div class="home">
		<h1 class="home-h1">Web |  UI Designer</h1>

		<div class="header-graphic">
			<img :src="require('@/assets/project-images/yasso.png')" alt="Yasso Project Image">
			<img :src="require('@/assets/project-images/healthic.png')" alt="Healthic Project Image">
			<img :src="require('@/assets/project-images/diem.png')" alt="Diem Project Image">
			<img :src="require('@/assets/project-images/chefart.png')" alt="Chefart Project Image">
			<img :src="require('@/assets/project-images/goodpie.png')" alt="Goodpie Project Image">
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

			<button @click="toggleProjects" class="dark-btn">{{ (this.projectNo == 3) ? 'View More...' : 'View Less...' }}</button>
		</div>
	</div>
</template>


<script>
import ToolCard from '@/components/ToolCard.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
	name: 'Home',
	components: {
		ToolCard,
		ProfileCard,
		ProjectCard
	},
	data() {
		return {
			tools: [
                {
                    name: 'html5',
                    level: '95%'
                },
                {
                    name: 'css3',
                    level: '90%'
                },
				{
                    name: 'javaScript',
                    level: '70%'
                },
				{
                    name: 'figma',
                    level: '95%'
                },
				{
                    name: 'vue',
                    level: '65%'
                },
                {
                    name: 'webflow',
                    level: '45%'
                }
            ],
			profile: {
				fullName: 'Yessoufou Yasmine',
				degree: 'B.Sc. Computer Science',
				firstPicture: 'profile1',
				secondPicture: 'profile2',
				about: 'I’m Yessoufou Yasmine, a Web & UI Designer living in Parakou, Republic of Benin.',
				contact: {
					email: 'hyyasmine@gmail.com',
					whatsapp: '+229 66 55 64 05',
					tel: '+229 90 94 32 22',
					github: 'github.com/YasmineYH'
				},
				services: [
					'UI design',
					'Website design',
					'Front-end development',
					'Consultation and Website audit'
				],
				yearsOfExperience: '+2',
				clientSatisfaction: '95%',
				projectsDone: '15'
			},
			experiences: [
				{
					year: '2013 - 2016',
					title: 'O’ Level',
					location: 'Sharon Rose College',
					country: 'Nigeria'
				},
				{
					year: '2017 - 2022',
					title: 'B.Sc. Computer Science',
					location: 'University of Ilorin',
					country: 'Nigeria'
				},
				{
					year: 'Mar - Sept, 2020',
					title: 'Web Development Intern',
					location: 'McLords Mobile Solutions Ltd',
					country: 'Nigeria'
				}
			],
			projects: [
				{
					alias: 'healthic',
					title: 'Healthic Clinic App'
				},
				{
					alias: 'diem',
					title: 'DIEM Consultants Website'
				},
				{
					alias: 'yasso',
					title: 'Yasso’s World Blog'
				},
				{
					alias: 'chefart',
					title: 'ChefArt Restaurant Website'
				},
				{
					alias: 'goodpie',
					title: 'GoodPie Food Delivery Website'
				},
				{
					alias: 'bicm',
					title: 'BICM Consultants Website'
				}
			],
			projectNo: 3
		}
	},
	methods: {
		toggleProjects() {
			if (this.projectNo == 3) {
				this.projectNo = this.projects.length-1
			} else {
				this.projectNo = 3
			}
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

	img {
		position: relative;
		border-radius: 5px;
		width: calc((100%/5) - 35px);
		object-fit: cover;
		object-position: top;
		box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

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
	}

	@media (min-width: 1740px) {
		height: 935px;

		img {
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

		img {
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

		img {
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

		img {
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
	margin-bottom: 250px;

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
		margin-bottom: 150px;

		.projects-ctn {
			width: 95vw;
			row-gap: 55px;
			margin-top: 45px;
		}
	}
}
</style>