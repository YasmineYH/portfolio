<template>
    <nav>
        <ul v-if="!mobile">
            <li class="normal-p"><router-link class="link" :to="route.includes('/upwork') ? { path: '/upwork/myprojects' } : { name: 'MyProjects'}">My Projects</router-link></li>
            <li class="normal-p"><router-link class="link" :to="{ name: 'BookMe'}" v-if="!route.includes('/upwork')">Book Me</router-link></li>
        </ul>

        <router-link class="logo" :to="route.includes('/upwork') ? { path: '/upwork' } : { name: 'Home' }">
            <img :src="require('@/assets/icons/logo.svg')" @click="toggleMobileNavDelay" alt="Logo">
        </router-link>

        <ul v-if="!mobile && !route.includes('/upwork')">
            <li><a href="https://twitter.com/YasmineYesoufou" target="_blank"><img :src="require('../assets/icons/twitter.svg')" alt="Twitter"></a></li>
            <li><a href="https://www.github.com/YasmineYH" target="_blank"><img :src="require('../assets/icons/github.svg')" alt="Github"></a></li>
            <li><a href="https://www.linkedin.com/in/yasmine-yh/" target="_blank"><img :src="require('../assets/icons/linkedin.svg')" alt="Linkedin"></a></li>
        </ul>


        <!--Mobile part of the navigation-->
        <Hamburger @click="toggleMobileNav" class="burger" v-if="mobile" :class="(mobileNav ? 'close' : '')" />

        <div class="mobile-nav" v-if="mobile" @click="toggleMobileNavDelay" :style="(mobileNav ? 'opacity:1;transform:scale(1)' : '')">
            <ul class="mobile-nav-text">
                <li class="normal-p"><router-link class="link" :to="{ name: 'MyProjects'}">My Projects</router-link></li>
                <li class="normal-p"><router-link class="link" :to="{ name: 'BookMe'}">Book Me</router-link></li>
            </ul>

            <ul class="mobile-nav-icons">
                <li><a href="https://twitter.com/YasmineYesoufou" target="_blank"><img :src="require('../assets/icons/twitter-light.svg')" alt="Twitter"></a></li>
                <li><a href="https://www.github.com/YasmineYH" target="_blank"><img :src="require('../assets/icons/github-light.svg')" alt="Github"></a></li>
                <li><a href="https://www.linkedin.com/in/yasmine-yh/" target="_blank"><img :src="require('../assets/icons/linkedin-light.svg')" alt="Linkedin"></a></li>
            </ul>
        </div>
    </nav>
</template>


<script>
import Hamburger from '@/components/Hamburger.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    name: 'Navigation',
    components: { Hamburger },
    data() {
		return {
			mobile: null,
			mobileNav: false,
			windowWidth: null,

            route: computed(() => useRoute().path)
		}
	},
	created() {
		window.addEventListener('resize', this.checkScreen)
		this.checkScreen()
	},
	methods: {
		checkScreen() {
			this.windowWidth = window.innerWidth

			if (this.windowWidth <= 1000) {
				this.mobile = true 
				return
			}

			this.mobile = false
			return
		},
		toggleMobileNav() {
            this.mobileNav = !this.mobileNav
		},
		toggleMobileNavDelay() {
            setTimeout(() => {
                if (this.mobileNav) {
                    this.mobileNav = !this.mobileNav
                }
            }, 400);
		}
	}
}
</script>


<style lang="scss" scoped>
nav {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 88vw;
	max-width: 1740px;
    margin: 35px auto 0 auto;

    .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);

        img {
            width: 153px;
        }
    }

    ul {
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

        &:nth-of-type(1) {
            gap: 45px;
        }

        &:nth-of-type(2) {
            padding-top: 5px;
            gap: 35px;
        }
    }

    li {
        font-style: normal;
        letter-spacing: 0.05em;
        -webkit-transition: 0.5s ease all;
        -o-transition: 0.5s ease all;
        transition: 0.5s ease all;

        &:hover {
            -webkit-transform: rotateZ(-2deg) scale(1.02);
                -ms-transform: rotate(-2deg) scale(1.02);
                    transform: rotateZ(-2deg) scale(1.02);
        }

        img {
            height: 20px;
            -webkit-transition: 0.5s ease all;
            -o-transition: 0.5s ease all;
            transition: 0.5s ease all;

            &:hover {
                -webkit-transform: rotateZ(-2deg) scale(1.02);
                    -ms-transform: rotate(-2deg) scale(1.02);
                        transform: rotateZ(-2deg) scale(1.02);
				-webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
            }
        }
    }

    .mobile-nav {
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
        gap: 80px;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        position: absolute;
        right: 0;
        top: 50px;
        z-index: 10000;
        width: 250px;
        border-radius: 5px;
        padding-bottom: 25px;
        padding-top: 5px;
        background: #363636;
        -webkit-transition: .3s ease-out;
        -o-transition: .3s ease-out;
        transition: .3s ease-out;
        -webkit-transform: scale(.001);
            -ms-transform: scale(.001);
                transform: scale(.001);
        -webkit-transform-origin: top right;
            -ms-transform-origin: top right;
                transform-origin: top right;
        opacity: 0;

        @media (max-width: 340px) {
            width: 75vw;
        }

        .mobile-nav-text {
            width: 100%;
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
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            gap: 5px;

            li {
                width: 100%;

                .link {
                    display: block;
                    width: 100%;
                    padding: 20px 0;
                    text-align: center;
                }
            }
        }

        .mobile-nav-icons {
            img {
                height: 30px;
            }
        }

        .link {
            color: #FFFFFF;
        }
    }

    @media (max-width: 1000px) {
        margin: 15px auto 0 auto;
        z-index: 10000;

        .logo {
            position: unset;
            top: unset;
            left: unset;
            -webkit-transform: unset;
                -ms-transform: unset;
                    transform: unset;
            padding-top: 5px;

            img {
                width: 103px;
            }
        }
    }
}
</style>