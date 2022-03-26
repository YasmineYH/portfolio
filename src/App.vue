<template>
	<div>
		<Navigation />
		<router-view />
		<Footer />
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
	data() {
		
	},
	created() {
		
	},
	methods: {
		
	}
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rouge+Script&display=swap');

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
				color: #FFFFFF;
				background: #363636;
				box-shadow: 0px 3px 4px rgba(0, 0, 0, 0);
			}
		}

		&.dark-btn {
			color: #FFFFFF;
			background: #363636;
			box-shadow: 0px 3px 4px rgba(0, 0, 0, 0);

			&:hover {
				color: #363636;
				background: #FFFFFF;
				box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
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
}
</style>