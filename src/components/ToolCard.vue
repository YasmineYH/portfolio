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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        height: 142px;
        margin: auto;
        padding-top: 15px;
        border-radius: 5px;
        background: #FFFFFF;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
        transition: 0.5s ease all;

        img {
            height: 56px;
        }

        &:hover {
            transform: rotateZ(-2deg) scale(1.01);
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