<template>
    <div class="profile-card" :style="cssProps" v-if="(!(index.index > index.no))">
        <div class="project">
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}.png`)" alt="`${project.alias} Project Image`">
            </div>
            <div class="image">
                <div></div>
                <img :src="require(`@/assets/project-images/${project.alias}.png`)" alt="`${project.alias} Project Image`">
            </div>
        </div>

        <h3>{{ project.title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: [ 'project', 'index' ],
    computed: {
        cssProps() {
            return {
                '--project-image': "url('../assets/project-images/" + (this.project.alias) + ".png')"
            }
        }
  }
}
</script>

<style lang="scss" scoped>
.profile-card {
	justify-self: flex-start;

    &:nth-of-type(2n) {
        justify-self: flex-end;
    }

    .project {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 473px;
        height: 380px;
        padding: 9px;
        border-radius: 5px;
        background: #FFFFFF;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

        .image {
            position: relative;
            border-radius: 5px;

            img {
                object-fit: cover;
                object-position: top;
                width: 100%;
                height: 100%;
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

    h3 {
        margin-top: 30px;
        text-align: center;
    }
    
	@media (max-width: 1240px) {
		.project {
            width: 385px;
            height: 305px;
            padding: 7px;

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

    @media (max-width: 1240px) {
        justify-self: center;

        &:nth-of-type(2n) {
            justify-self: center;
        }
	}
}
</style>