<template>
    <div class="tool">
        <div class="tool-ctn">
            <img :src="require(`@/assets/icons/${tool.name}.svg`)" alt="{{ tool.name }}">
            <h3>{{ tool.level }}</h3>
        </div>

        <p class="normal-p" v-if="tool.name">{{ tool.name }}</p>
    </div>
</template>


<script>
export default {
    name: 'ToolCard',
    props: [
        'tool'
    ]
}
</script>


<style lang="scss" scoped>
.tool {
    width: 120px;
    border-radius: 5px;

    .tool-ctn {
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
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        gap: 20px;
        width: 100%;
        height: 142px;
        margin: auto;
        padding-top: 15px;
        border-radius: 5px;
        background: #FFFFFF;
        -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
                box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
        -webkit-transition: 0.5s ease all;
        -o-transition: 0.5s ease all;
        transition: 0.5s ease all;

        img {
            height: 56px;
        }

        &:hover {
            -webkit-transform: rotateZ(-2deg) scale(1.01);
                -ms-transform: rotate(-2deg) scale(1.01);
                    transform: rotateZ(-2deg) scale(1.01);
            -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
        }
    }

    p {
        text-align: center;
        text-transform: capitalize;
        margin: auto;
        margin-top: 15px;
    }

    @media (max-width: 940px) {
        width: 95px;

        .tool-ctn {
            height: 122px;

            img {
                height: 38px;
            }
        }
    }
}
</style>