<template>
    <div class="profile-card">
        <div class="profile">
            <p>{{ profile.fullName }}</p>
            <h3>{{ profile.degree }}</h3>

            <img :src="require(`@/assets/profile/${profile.firstPicture}.png`)" alt="{{ profile.fullName }}">
        </div>
    </div>
</template>


<script>
export default {
    name: 'ProfileCard',
    props: [
        'profile'
    ]
}
</script>


<style lang="scss" scoped>
.profile-card {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 120px;

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 570px;
        height: 475px;
        padding-top: 25px;
        border-radius: 5px;
        background: #FFFFFF;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

        p {
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 10px;
        }

        img {
            position: absolute;
            height: 445px;
            top: 150px;
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
            height: 900px;

            p {
                font-size: 16px;
                margin-bottom: 7px;
            }

            img {
                display: none;
                height: 350px;
                top: 375px;
                left: 42vw;
            }
        }
    }
}
</style>