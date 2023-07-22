<template>
    <div class="profile-card">
        <div class="profile" v-on:mousemove="getMousePosition" v-on:mouseleave="replaceImagePosition">
            <p>{{ profile.fullName }}</p>
            <h3>{{ profile.degree }}</h3>

            <img 
                :src="require(`@/assets/profile/${profile.firstPicture}.png`)" 
                alt="{{ profile.fullName }}"
                :style="profilePosition"
            >
        </div>
    </div>
</template>


<script>
export default {
    name: 'ProfileCard',
    props: [
        'profile'
    ],
    data() {
        return {
            mousePositionX: null,
            mousePositionY: null,
            profilePosition: null,
        }
    },
    created() {
    },
    methods: {
        getMousePosition(event) {
            this.mousePositionX = event.clientX;     // Get the horizontal coordinate
            this.mousePositionY = event.clientY;     // Get the vertical coordinate

            if (this.mousePositionX < 1050 && this.mousePositionX > 750) {
                if (this.mousePositionY < 225 && this.mousePositionY > 87) {
                    this.profilePosition = 'transform: translate(-10px, 10px)'
                }

                if (this.mousePositionY < 380 && this.mousePositionY > 275) {
                    this.profilePosition = 'transform: translate(-10px, 0px)'
                }

                if (this.mousePositionY < 565 && this.mousePositionY > 380) {
                    this.profilePosition = 'transform: translate(-10px, -10px)'
                }
            }

            /*if (this.mousePositionX < 850 && this.mousePositionX > 670) {
                if (this.mousePositionY < 300 && this.mousePositionY > 160) {
                    this.profilePosition = 'transform: translate(0px, 10px)'
                }

                if (this.mousePositionY < 500 && this.mousePositionY > 300) {
                    this.profilePosition = 'transform: translate(0px, 0px)'
                }

                if (this.mousePositionY < 630 && this.mousePositionY > 500) {
                    this.profilePosition = 'transform: translate(0px, -10px)'
                }
            }*/

            if (this.mousePositionX < 750 && this.mousePositionX > 480) {
                if (this.mousePositionY < 225 && this.mousePositionY > 87) {
                    this.profilePosition = 'transform: translate(10px, 10px)'
                }

                if (this.mousePositionY < 380 && this.mousePositionY > 275) {
                    this.profilePosition = 'transform: translate(10px, 0px)'
                }

                if (this.mousePositionY < 565 && this.mousePositionY > 380) {
                    this.profilePosition = 'transform: translate(10px, -10px)'
                }
            }
        },
        replaceImagePosition() {
            this.profilePosition = `top: 150px; left: unset`
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-card {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    padding-bottom: 120px;

    .profile {
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
        width: 570px;
        height: 475px;
        padding-top: 25px;
        border-radius: 5px;
        background: #FFFFFF;
        -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
                box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
        -webkit-transition: 0.5s ease all;
        -o-transition: 0.5s ease all;
        transition: 0.5s ease all;

        &:hover {
            -webkit-transform: rotateZ(0deg) scale(1.01);
                -ms-transform: rotate(0deg) scale(1.01);
                    transform: rotateZ(0deg) scale(1.01);
            -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
        }

        p {
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 10px;
        }

        img {
            position: absolute;
            height: 445px;
            top: 150px;
            -webkit-filter: drop-shadow(0px -10px 14px rgba(0, 0, 0, 0));
                    filter: drop-shadow(0px -10px 14px rgba(0, 0, 0, 0));
			-webkit-transition: 1s ease-out all;
			-o-transition: 1s ease-out all;
			transition: 1s ease-out all;
        }
    }

    @media (max-width: 1240px) {
        .profile {
            width: 32vw;
        }
    }

    @media (max-width: 1040px) {
        .profile {
            width: 95vw;
            height: 665px;

            p {
                font-size: 16px;
                margin-bottom: 7px;
            }

            img {
                height: 350px;
                top: 375px;
                left: 42vw;
            }
        }
    }

    @media (max-width: 640px) {
        .profile {
            width: 95vw;
            height: 925px;
            padding-top: 110px;

            p {
                font-size: 16px;
                margin-bottom: 0px;
            }

            img {
                object-fit: cover;
                object-position: top;
                width: 235px;
                height: 145px;
                top: -45px;
                left: 50%;
                filter: drop-shadow(0 1px 0 #363636);
                transform: translateX(-50%);
            }
        }
    }
}
</style>