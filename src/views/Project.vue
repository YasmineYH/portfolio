<template>
    <div class="project-details">
        <div class="project-ctn">
            <div class="left">
                <div class="details">
                    <h3>{{ bicm.title }}</h3>
                    <p class="normal-p">{{ bicm.desc }}</p>
                    <button class="light-btn"><a :href="bicm.link" target="_blank">Visit Site</a></button>
                </div>

                <div class="assets">
                    <h3>Design Assets</h3>
                    <div class="color">
                        <p class="normal-p">Colors</p>
                        <div>
                            <div v-for="(color, index) in bicm.colors" :key="index" :style="color"></div>
                        </div>
                    </div>
                    <div class="type">
                        <p class="normal-p">Typography</p>
                        <div :style="bicm.type">{{ bicm.type.substring(13) }} <span>- Aa Bb Cc Dd Ff</span></div>
                    </div>
                </div>
            </div>
            <img :src="require('@/assets/project-displays/bicm.png')" alt="Bicm Project Display">
        </div>

        <div class="tools">
            <h3>Tools Used</h3>
			<div class="tool-ctn"><ToolCard v-for="(tool, index) in bicm.tools" :key="index" :tool="tool" /></div>
        </div>

        <button class="light-btn"><a :href="bicm.link" target="_blank">Visit Site</a></button>
    </div>
</template>


<script>
import ToolCard from '@/components/ToolCard.vue'

export default {
    name: 'Project',
	components: {
		ToolCard
	},
	data() {
		return {
            bicm: {
                title: 'DIEM Consultants Website',
                desc: 'Dignissim magna sed ante non commodo mauris, sed vulputate. Tellus egestas magna nibh diam vestibulum porta. Ut porttitor in in libero malesuada gravida aliquet tempus bibendum. Etiam sit id maecenas enim. Lorem velit mauris consectetur in sit nulla. Lacus, pharetra velit ut viverra ipsum. Mollis et vitae dui in quis faucibus a, eget.',
                colors: [
                    'background: #002640',
                    'background: #FF6C2E',
                    'background: #72BCF0',
                    'background: #FFFFFF'
                ],
                type: "font-family: 'Josefin Sans'",
                tools: [
                    {
                        name: 'figma'
                    },
                    {
                        name: 'html5'
                    },
                    {
                        name: 'css3'
                    },
                    {
                        name: 'javaScript'
                    },
                    {
                        name: 'webflow',
                    }
                ],
                link: 'https://yasmineyh.github.io/bicm/'
            }
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
                        }
                    }
                }

                .type {
                    div {
                        display: flex;
                        align-items: center;
                        margin-top: 5px;
                        border-radius: 5px;
                        border: 2px solid;
                        padding: 0 15px;
                        height: 35px;
                        width: fit-content;
                        font-size: 15px;
                        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.3);

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

        &:hover {
            a {
                color: #FFFFFF;
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