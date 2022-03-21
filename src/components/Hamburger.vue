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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35px;
        height: 13px;
        transition: all 1s ease;

        .line {
            width: 100%;
            height: 3px;
            border-radius: 10px;
            background: #363636;
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
                transform: rotate(35deg) translateY(-7px);

                &:nth-of-type(1) {
                    transform: rotate(-35deg)  translateY(3px);
                }
            }
        }
    }
</style>