<template>
	<div>
		<Navigation />

		<router-view v-slot="{ Component }">
			<transition mode="out-in" name="route">
				<component :is="Component"></component>
			</transition>
		</router-view>

		<Footer />

		<!--<div class="loader-ctn">
			<div class="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>-->
	</div>
</template>


<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'App',
	components: {
		Navigation,
		Footer
	},
	created() {
		window.addEventListener('resize', this.setHeight)
		this.setHeight()
	},
	methods: {
		contentLoaded() {
			window.addEventListener('load', function() {
				setTimeout(() => {
					document.querySelector('.loader-ctn').style.opacity = '0'

					setTimeout(() => {
						document.querySelector('.loader-ctn').style.display = 'none'
					}, 1100);
				}, 1000);
			})
		},
		setHeight() {
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}
	},
	mounted() {
		//this.contentLoaded()
	}
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@500;700&family=Josefin+Sans:wght@500;700&family=Montserrat:wght@500;700&family=Neuton:wght@400;700&family=Noto+Sans:wght@500;700&family=Open+Sans:wght@500;700&family=Playfair+Display:wght@500;700&family=Quicksand:wght@500;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=RocknRoll+One&family=Rokkitt:wght@500;700&family=Rosario:wght@500;700&family=Rouge+Script&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Raleway';
	color: #363636;
}

html {
	scrollbar-color: #FFD4AC #363636;
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		width: 3px;
		background: #363636;
	}

	&::-webkit-scrollbar-thumb {
		background: #FFD4AC;
	}

	body {
		background: #FFD4AC;
		width: 100%;
		overflow-x: hidden;
	}

	.link {
		text-decoration: none;
	}

	h1 {
		font-weight: 500;
		font-size: 22px;
		line-height: 35px;
		letter-spacing: 0.05em;
		text-align: center;
		max-width: 750px;
		margin: auto;
		margin-top: 100px;

		&.home-h1 {
			margin-top: 75px;
		}

		@media (max-width: 800px) {
			max-width: unset;
			width: 80vw;
		}
	}

	h2 {
		font-weight: 700;
		font-size: 14vw;
		text-align: center;
		text-transform: uppercase;

		@media (min-width: 1840px) {
			font-size: 265px;
		}
	}

	h3 {
		font-size: 17px;
		font-weight: 700;
		line-height: 25px;
	}

	h4 {
		font-weight: 600;
		font-size: 13px;
		line-height: 25px;
		text-transform: uppercase;
		color: rgba(54, 54, 54, 0.4);
	}

	.normal-p {
		font-size: 15px;
		font-weight: 500;
		line-height: 23px;
	}

	.not-available {
		text-align: center;
		margin: auto;
		margin-top: 25px;
		font-size: 14px;
		max-width: 500px;
	}

	button {
		display: block;
		outline: none;
		border: none;
		font-weight: 700;
		font-size: 15px;
		text-align: center;
		width: 170px;
		height: 43px;
		box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		border-radius: 5px;
		transition: .3s ease-in;

		&.light-btn {
			background: #FFFFFF;

			&:hover {
				color: #363636;
				box-shadow: 0px 3px 4px rgba(0, 0, 0, 0);
				transform: rotateZ(-2deg) scale(1.01);
			}
		}

		&.dark-btn {
			color: #FFFFFF;
			background: #363636;
			box-shadow: 0px 3px 4px rgba(0, 0, 0, 0);

			&:hover {
				box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
				transform: rotateZ(-2deg) scale(1.01);
			}
		}
	}

    @media (max-width: 640px) {
		h1 {
			font-size: 20px;
			line-height: 30px;
			margin-top: 80px;

			&.home-h1 {
				margin-top: 135px;
			}
		}

		h3 {
			font-size: 15px;
			line-height: 25px;
		}

		h4 {
			font-size: 11px;
			line-height: 22px;
		}

		.normal-p {
			font-size: 13px;
			line-height: 20px;
		}
	}

	.loader-ctn {
		position: fixed;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		width: 100vw;
		height: calc(100 * var(--vh));
		z-index: 100000;
		background: #363636;
		background: #FFD4AC;
		transition: 1s ease-out;

		.loader {
			display: flex;
			gap: 10px;
			height: 35px;

			div {
				width: 6px;
				height: 25px;
				border-radius: 20px;
				background: #FFD4AC;
				background: #363636;
				margin-top: auto;
				transform-origin: bottom;
				transition: all ease-in;
				animation-direction: alternate;
				animation-iteration-count: infinite;
				animation-play-state: running;

				&:nth-of-type(1) {
					animation-name: one;
					animation-duration: 1s;
				}

				&:nth-of-type(2) {
					animation-name: two;
					animation-duration: .6s;
				}

				&:nth-of-type(3) {
					animation-name: three;
					animation-duration: .8s;
				}

				&:nth-of-type(4) {
					animation-name: four;
					animation-duration: .4s;
				}
			}

			@keyframes one {
				from {
					height: 5px;
				}

				to {
					height: 25px;
				}
			}

			@keyframes two {
				from {
					height: 25px;
				}

				to {
					height: 10px;
				}
			}

			@keyframes three {
				from {
					height: 15px;
				}

				to {
					height: 35px;
				}
			}

			@keyframes four {
				from {
					height: 5px;
				}

				to {
					height: 20px;
				}
			}
		}
	}

	.tooltip {
		position: relative;

		.tooltip-text {
			position: absolute;
			top: -50px;
			left: 10px;
			padding: 10px 15px;
			background: #363636;
			color: #FFFFFF;
			border-radius: 5px;
			visibility: hidden;
			opacity: 0;
			transition: all .3s ease-out;
		}

		&:hover {
			.tooltip-text {
				visibility: visible;
				opacity: 1;
			}
		}
	}
}

/* ROUTE TRANSITIONS */
.route-enter-from {
	opacity: 0;
	transform: scaleX(.9);
}

.route-enter-active {
	transition: all .5s ease-out .3s;
}

.route-leave-to {
	opacity: 0;
}

.route-leave-active {
	transition: all .3s ease-in-out;
}
</style>