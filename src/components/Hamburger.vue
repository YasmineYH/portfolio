<template>
    <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: 'Hamburger'
}
</script>

<style lang="scss" scoped>
    .hamburger {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        width: 35px;
        height: 13px;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;

        .line {
            width: 100%;
            height: 3px;
            border-radius: 10px;
            background: #363636;
            -webkit-transition: all 1s ease;
            -o-transition: all 1s ease;
            transition: all 1s ease;

            &:nth-of-type(1) {
                width: 80%;
                margin-left: auto;
            }
        }

        &.close {
            .line {
                width: 80%;
                background: #363636;
                -webkit-transform: rotate(35deg) translateY(-7px);
                    -ms-transform: rotate(35deg) translateY(-7px);
                        transform: rotate(35deg) translateY(-7px);

                &:nth-of-type(1) {
                    -webkit-transform: rotate(-35deg)  translateY(3px);
                        -ms-transform: rotate(-35deg)  translateY(3px);
                            transform: rotate(-35deg)  translateY(3px);
                }
            }
        }
    }
</style>