<template>
    <div class="project-details">
        <div class="project-ctn">
            <div class="left">
                <div class="details">
                    <h3>{{ state.project.title }}</h3>
                    <p class="normal-p">{{ state.project.desc }}</p>
                    <div class="visit-site">
                        <button class="light-btn">Visit Site</button>
                        <div>
                            <a :href="state.project.link[0]" target="_blank" v-if="state.project.link[0]">Figma Prototype</a>
                            <a :href="state.project.link[1]" target="_blank" v-if="state.project.link[1]">Final Website</a>
                        </div>
                    </div>
                </div>

                <div class="assets">
                    <h3>Design Assets</h3>
                    <div class="color">
                        <p class="normal-p">Colors</p>
                        <div>
                            <div v-for="(color, index) in state.project.colors" :key="index" :style="color"></div>
                        </div>
                    </div>
                    <div class="type">
                        <p class="normal-p">Typography</p>
                        <div v-for="(type, index) in state.project.type" :key="index" :style="type">{{ type.substring(13) }} <span :style="type">- Aa Bb Cc Dd Ff</span></div>
                    </div>
                </div>
            </div>¨

            <transition name="projectimg" appear>
                <img :src="require(`@/assets/project-displays/${state.project.alias}.png`)" alt="Bicm Project Display">
            </transition>
        </div>

        <div class="tools">
            <h3>Tools Used</h3>
			<div class="tool-ctn"><ToolCard v-for="(tool, index) in state.project.tools" :key="index" :tool="tool" /></div>
        </div>

        <div class="visit-site">
            <button class="light-btn" style="margin:auto;">Visit Site</button>
            <div>
                <a :href="state.project.link" target="_blank">Figma Prototype</a>
                <a :href="state.project.link" target="_blank">Final Website</a>
            </div>
        </div>
    </div>
</template>


<script>
import ToolCard from '@/components/ToolCard.vue'
import { projects } from '../assets/data/projects'
import { useRoute } from 'vue-router'
import { reactive, computed } from 'vue'

export default {
    name: 'Project',
	components: {
		ToolCard
	},
	setup() {
        const route = useRoute()
        const projectId = computed(() => route.params.projectId)

        const state = reactive({
            project: projects[projectId.value] || projects.diem
        })

        return {
            projectId,
            state
        }
    }
}
</script>


<style lang="scss" scoped>
.project-details {
    display: flex;
    flex-direction: column;
    gap: 150px;
    margin: auto;
    margin-top: 145px;
    width: 935px;

    .project-ctn {
        width: 100%;
        display: flex;
        justify-content: space-between;

        img {
            width: 440px;
            object-fit: contain;
            object-position: top;
        }

        .projectimg-enter-from {
            opacity: 0;
            transform: translateX(100px) translateY(-50px);
        }

        .projectimg-enter-active {
            transition: all .9s ease-out 1s;
        }

        .left {
            display: flex;
            flex-direction: column;
            gap: 100px;
            width: 335px;
            margin-top: 105px;

            button {
                margin-top: 22px;
            }

            .assets {
                .color {
                    margin-bottom: 32px;

                    div {
                        display: flex;
                        gap: 15px;
                        margin-top: 2px;

                        div {
                            width: 45px;
                            height: 32px;
                            border-radius: 5px;
                            transition: 0.5s ease all;

                            &:hover {
                                transform: rotateZ(-5deg) scale(1.01);
                                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
                            }
                        }
                    }
                }

                .type {
                    div {
                        display: flex;
                        align-items: center;
                        margin-top: 5px;
                        margin-bottom: 15px;
                        border-radius: 5px;
                        border: 2px solid;
                        padding: 0 15px;
                        height: 35px;
                        width: fit-content;
                        font-size: 15px;
                        font-weight: 500;
                        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);

                        span {
                            font-weight: 700;
                            margin-left: 3px;
                        }
                    }
                }
            }
        }
    }

    h3 {
        font-weight: 700;
        font-size: 22px;
        margin-bottom: 32px;
    }

    button {
        a {
            display: grid;
            place-content: center;
            text-decoration: none;
            height: 100%;
            width: 100%;
        }
    }

    .visit-site {
        margin: auto;

        &:hover > div {
            display: flex;
            transform: scale(1) translateX(0);
        }

        div {
            flex-direction: column;
            gap: 5px;
            align-items: center;
            font-weight: 700;
            font-size: 15px;
            padding: 5px 5px;
            margin-top: 25px;
            width: 200px;
            text-align: center;
            background: #FFFFFF;
            border-radius: 5px;
            transition: .3s ease-out;
            display: flex;
            transform: scale(0) translateX(-100px);
            transform-origin: top;

            a {
                text-decoration: none;
                width: 150px;
                padding: 10px;
                transition: .3s ease-in;

                &:hover {
                    transform: translateY(2px);
                }
            }
        }
    }

    .tools {
        margin: auto;
        text-align: center;

        .tool-ctn {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
            width: 450px;
        }
    }
    
    .tools ~ button {
        margin: auto;
    }

    @media (max-width: 1240px) {
        width: 83vw;

        .project-ctn {
            .left {
                gap: 65px;
            }

            img {
                width: 400px;
                height: unset;
                object-fit: contain;
                object-position: top;
            }
        }
    }

    @media (max-width: 940px) {
        .project-ctn {
            flex-direction: column;
            gap: 65px;

            .left {
                width: 100%;
                margin-top: 0;
            }

            img {
                width: 100%;
            }
        }
    }

    @media (max-width: 640px) {
		margin-top: 135px;

        h3 {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .tools {
            .tool-ctn {
                width: 83vw;
            }
        }
    }
}
</style>