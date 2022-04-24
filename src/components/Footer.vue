<template>
    <footer>
        <ul v-show="!mobile || route.includes('/upwork')">
            <li><a href="https://www.twitter.com" target="_blank"><img :src="require('../assets/icons/twitter.svg')" alt="Twitter"></a></li>
            <li><a href="https://www.github.com/YasmineYH" target="_blank"><img :src="require('../assets/icons/github.svg')" alt="Github"></a></li>
            <li><a href="https://www.linkedin.com/in/yasmine-yh/" target="_blank"><img :src="require('../assets/icons/linkedin.svg')" alt="Linkedin"></a></li>
        </ul>

        <div class="lines">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <p class="normal-p">© Yessoufou Yasmine.  All Rights Reserved.</p>
    </footer>
</template>


<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    name: 'Footer',
    data() {
		return {
            route: computed(() => useRoute().path)
		}
	},
}
</script>


<style lang="scss" scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 88vw;
	max-width: 1740px;
    margin: 250px auto 35px auto;

    ul {
        list-style: none;
        display: flex;
        padding-top: 3px;
        gap: 35px;

        img {
            height: 20px;
        }
    }

    .lines {
        display: flex;
        justify-content: space-between;
        width: 30vw;

        div {
            height: 2px;
            border-radius: 100px;
            background: #363636;

             &:nth-of-type(1) {
                width: 4%;
            }

            &:nth-of-type(2) {
                width: 85%;
            }

            &:nth-of-type(3) {
                width: 2%;
            }
        }
    }

    @media (max-width: 1040px) {
        .lines {
            display: none;
        }
    }

    @media (max-width: 640px) {
        justify-content: center;
        margin: 150px auto 25px auto;

        ul {
            display: none;
        }
    }
}
</style>