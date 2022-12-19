<template>
    <div class="project-card">
        <div class="project website" v-if="(project.class == 'website')">
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}.png`)" :alt="`${project.alias} Project Image`">
            </div>
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}.png`)" :alt="`${project.alias} Project Image`">
            </div>
            <router-link :to="route.includes('/upwork') ? { path: `/upwork/project/${project.alias}`} : { name: 'Project', params: { projectId: `${project.alias}`}}" class="project-link"></router-link>
        </div>

        <div class="project mobile-app" v-if="(project.class == 'mobile-app')">
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}1.png`)" :alt="`${project.alias} Project Image`">
            </div>
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}2.png`)" :alt="`${project.alias} Project Image`">
            </div>
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}3.png`)" :alt="`${project.alias} Project Image`">
            </div>
            <router-link :to="route.includes('/upwork') ? { path: `/upwork/project/${project.alias}`} : { name: 'Project', params: { projectId: `${project.alias}`}}" class="project-link"></router-link>
        </div>

        <div class="project desktop-app" v-if="(project.class == 'desktop-app')">
            <div class="image-ctn">
                <div class="image">
                    <div></div>
                    <img :src="require(`@/assets/project-images/${project.alias}1.png`)" :alt="`${project.alias} Project Image`">
                </div>
                <div class="image">
                    <div></div>
                    <img :src="require(`@/assets/project-images/${project.alias}2.png`)" :alt="`${project.alias} Project Image`">
                </div>
            </div>

            <div class="image-ctn">
                <div class="image">
                    <div></div>
                    <img :src="require(`@/assets/project-images/${project.alias}3.png`)" :alt="`${project.alias} Project Image`">
                </div>
                <div class="image">
                    <div></div>
                    <img :src="require(`@/assets/project-images/${project.alias}4.png`)" :alt="`${project.alias} Project Image`">
                </div>
                <div class="image">
                    <div></div>
                    <img :src="require(`@/assets/project-images/${project.alias}5.png`)" :alt="`${project.alias} Project Image`">
                </div>
            </div>
            <router-link :to="route.includes('/upwork') ? { path: `/upwork/project/${project.alias}`} : { name: 'Project', params: { projectId: `${project.alias}`}}" class="project-link"></router-link>
        </div>

        <h3>{{ project.title }}</h3>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    name: 'ProjectCard',
    props: [ 'project' ],
    data() {
        return {
            route: computed(() => useRoute().path)
        }
    }
}
</script>

<style lang="scss" scoped>
.project-card {
	justify-self: flex-start;

    &:nth-of-type(2n) {
        justify-self: flex-end;
    }

    .project {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 473px;
        height: 380px;
        padding: 9px;
        border-radius: 5px;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0);

        transition: 0.5s ease all;

        &:hover {
            transform: rotateZ(-2deg) scale(1.01);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
        }

        img {
            object-fit: cover;
        }

        &.website {
            align-items: flex-end;
            background: #FFFFFF;
            box-shadow: 0px 3px 4px rgba(0, 0, 0, .25);

            .image {
                position: relative;
                border-radius: 5px;

                img {
                    object-position: top;
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }

                &:nth-of-type(1) {
                    width: 260px;
                    height: 276px;
                }

                &:nth-of-type(2) {
                    width: 142px;
                    height: 100%;

                    img {
                        object-position: bottom;
                    }
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.20);
                    z-index: 100;
                }
            }
        }

        &.mobile-app {
            align-items: flex-start;
            .image {
                position: relative;
                width: 29.5%;
                border-radius: 5px;

                &:nth-of-type(2) {
                    align-self: flex-end;
                }

                &::after {
                    content: '';
                    position: absolute;
                    inset: 0 0 4px 0;
                    border-radius: 5px;
                    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.20);
                    z-index: 100;
                }

                img {
                    width: 100%;
                    border-radius: 5px;
                    object-position: bottom;
                }
            }
        }

        &.desktop-app {
            .image-ctn {
                display: flex;
                flex-direction: column;
                width: 58.5%;
                align-self: flex-end;
                gap: 3px;

                &:nth-of-type(2) {
                    width: 35.5%;
                    align-self: flex-start;
                }
            }
            .image {
                position: relative;
                width: 100%;
                height: fit-content;
                border-radius: 5px;

                &::after {
                    content: '';
                    position: absolute;
                    inset: 0 0 4px 0;
                    border-radius: 5px;
                    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.20);
                    z-index: 100;
                }

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                }
            }
        }

        .project-link {
            position: absolute;
            z-index: 200;
            inset: 0 0 0 0;
            background: #ffffff00;
        }
    }

    h3 {
        margin-top: 30px;
        text-align: center;
    }
    
	@media (max-width: 1240px) {
		.project {
            width: 385px;
            height: 305px;
            padding: 7px;

            &.website {
                .image {
                    &:nth-of-type(1) {
                        width: 210px;
                        height: 220px;
                    }

                    &:nth-of-type(2) {
                        width: 113px;
                        height: 100%;
                    }
                }
            }
        }
	}

    @media (max-width: 1040px) {
        justify-self: center;

        &:nth-of-type(2n) {
            justify-self: center;
        }
	}

    @media (max-width: 440px) {
		.project {
            width: 258px;
            height: 206px;
            padding: 4px;

            &.website {
                .image {
                    &:nth-of-type(1) {
                        width: 140px;
                        height: 148px;
                    }

                    &:nth-of-type(2) {
                        width: 75px;
                        height: 100%;
                    }
                }
            }
        }

        h3 {
            margin-top: 15px;
        }
	}
}
</style>