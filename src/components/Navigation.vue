<template>
    <nav>
        <ul v-show="!mobile">
            <li class="normal-p"><router-link class="link" :to="{ name: 'MyProjects'}">My Projects</router-link></li>
            <li class="normal-p"><router-link class="link" :to="{ name: 'BookMe'}">Book Me</router-link></li>
        </ul>

        <router-link class="logo" to="/">
            <img :src="require('@/assets/icons/logo.svg')" alt="Logo">
        </router-link>

        <ul v-show="!mobile">
            <li><a href="https://www.twitter.com" target="_blank"><img :src="require('../assets/icons/twitter.svg')" alt="Twitter"></a></li>
            <li><a href="https://www.github.com/YasmineYH" target="_blank"><img :src="require('../assets/icons/github.svg')" alt="Github"></a></li>
            <li><a href="https://www.linkedin.com/in/yasmine-yh/" target="_blank"><img :src="require('../assets/icons/linkedin.svg')" alt="Linkedin"></a></li>
        </ul>

        <Hamburger @click="toggleMobileNav" class="burger" v-show="mobile" :class="(mobileNav ? 'close' : '')" />

        <transition name="mobile-nav">
			<div class="mobile-nav" v-show="mobileNav">
				<ul class="mobile-nav-text">
                    <li class="normal-p"><router-link class="link" to="myprojects">My Projects</router-link></li>
                    <li class="normal-p"><router-link class="link" to="bookme">Book Me</router-link></li>
                </ul>

                <ul class="mobile-nav-icons">
                    <li><a href="https://www.twitter.com" target="_blank"><img :src="require('../assets/icons/twitter-light.svg')" alt="Twitter"></a></li>
                    <li><a href="https://www.github.com/YasmineYH" target="_blank"><img :src="require('../assets/icons/github-light.svg')" alt="Github"></a></li>
                    <li><a href="https://www.linkedin.com/in/yasmine-yh/" target="_blank"><img :src="require('../assets/icons/linkedin-light.svg')" alt="Linkedin"></a></li>
                </ul>
			</div>
		</transition>
    </nav>
</template>


<script>
import Hamburger from '@/components/Hamburger.vue'

export default {
    name: 'Navigation',
    components: { Hamburger },
    data() {
		return {
			mobile: null,
			mobileNav: null,
			windowWidth: null
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
			this.mobileNav = false
			return
		},
		toggleMobileNav() {
			this.mobileNav = !this.mobileNav
		}
	}
}
</script>


<style lang="scss" scoped>
nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88vw;
	max-width: 1740px;
    margin: 35px auto 0 auto;

    .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 153px;
        }
    }

    ul {
        list-style: none;
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

        img {
            height: 20px;
        }
    }

    .mobile-nav {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: calc(100 * var(--vh));
        width: 75vw;
        max-width: 400px;
        padding: 75px 0;
        background: #363636;
        transition: all 1s ease;

        .mobile-nav-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
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
            transform: unset;
            padding-top: 5px;

            img {
                width: 103px;
            }
        }
    }

    .mobile-nav-enter-active {
        transition: all 1s ease;
    }

    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

    .mobile-nav-enter,
    .mobile-nav-leave-to {
        transform: translateX(-450px);
    }

    .mobile-nav-enter-to {
        transform: translateX(0px);
    }
}
</style>