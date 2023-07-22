<template>
    <div class="book-me">
        <h1>Thank you so much for your interest in working with me! Please fill out the information below and I’ll get in touch.</h1>
        <p class="not-available">Unfortunately, this form is not functional at the moment, please call me directly (00229 90943222) or email me (hyyasmine@gmail.com). Thank you!</p>

        <form>
            <div class="form-ctn">
                <div class="input-ctn">
                    <input type="text" placeholder="Full name">
                    <input type="email" placeholder="E-mail address">
                </div>

                <div class="input-ctn">
                    <div class="select-ctn">
                        <select>
                            <option value="">Business/Personal?</option>
                            <option value="">Business</option>
                            <option value="">Personal</option>
                        </select>
                    </div>

                    <div class="select-ctn">
                        <select>
                            <option value="">Remote/On-site?</option>
                            <option value="">Remote</option>
                            <option value="">On-site</option>
                        </select>
                    </div>
                </div>

                <div class="input-ctn">
                    <div class="checks-ctn">
                        <p class="normal-p">Which services will you likely need?</p>

                        <div class="two-checks">
                            <div class="check-ctn">
                                <input type="checkbox" name="" id="">
                                <label class="normal-p" for="">UI Design</label>
                            </div>
                            <div class="check-ctn">
                                <input type="checkbox" name="" id="">
                                <label class="normal-p" for="">Web Design</label>
                            </div>
                        </div>

                        <div class="check-ctn">
                            <input type="checkbox" name="" id="">
                            <label class="normal-p" for="">Frontend development</label>
                        </div>

                        <div class="check-ctn">
                            <input type="checkbox" name="" id="">
                            <label class="normal-p" for="">Consultation/Website audit</label>
                        </div>

                        <div class="check-ctn">
                            <input type="checkbox" name="" id="">
                            <label class="normal-p" for="">Other</label>
                        </div>
                    </div>

                    <textarea>Anything else I should know? Add a personal note here</textarea>
                </div>
            </div>

            <button class="dark-btn">Submit</button>
        </form>
    </div>
</template>


<script>
export default {
    name: 'BookMe'
}
</script>


<style lang="scss" scoped>
form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 45px;
    width: 73vw;
    max-width: 1240px;
    margin: auto;
    padding: 45px 50px;
    margin-top: 90px;
    border-radius: 5px;
    background: #FFFFFF;
    -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

    .form-ctn {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        width: 100%;
        gap: 35px;

        .input-ctn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            gap: 45px;

            input,
            textarea,
            select {
                border: none;
                outline: none;
                width: 100%;
                min-height: 50px;
                border-radius: 5px;
                padding: 20px 30px;
                border: 1px solid #36363600;
                font-weight: 500;
                font-size: 15px;
                -webkit-appearance: none;
                -webkit-box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
                        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
                -webkit-transition: .5s ease-out;
                -o-transition: .5s ease-out;
                transition: .5s ease-out;

                &:hover,
                &:focus {
                    border: 1px solid #36363663;
                }

                &::-webkit-input-placeholder {
                    color: #363636;
                }

                &::-moz-placeholder {
                    color: #363636;
                }

                &:-ms-input-placeholder {
                    color: #363636;
                }

                &::-ms-input-placeholder {
                    color: #363636;
                }

                &::placeholder {
                    color: #363636;
                }
            }

            .select-ctn {
                position: relative;
                width: 100%;

                &::after {
                    position: absolute;
                    top: 25px;
                    right: 30px;
                    z-index: 100;
                    content: "";
                    width: 12px;
                    height: 10px;
                    background: #363636;
                    -webkit-clip-path: polygon(50% 44%, 100% 0, 50% 100%, 0 0);
                            clip-path: polygon(50% 44%, 100% 0, 50% 100%, 0 0);
                }

                select {
                    -webkit-appearance: none;
                       -moz-appearance: none;
                            appearance: none;
                    background: none;

                    &::-ms-expand {
                        display: none;
                    }
                }
            }

            textarea {
                height: 200px;
            }

            .checks-ctn {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                        flex-direction: column;
                gap: 15px;
                width: 100%;
                padding: 0 30px;

                p {
                    margin-bottom: 10px;
                }

                .two-checks {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    gap: 50px;
                }

                .check-ctn {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    gap: 15px;
                    width: -webkit-fit-content;
                    width: -moz-fit-content;
                    width: fit-content;
                    height: 25px;

                    label {
                        width: -webkit-fit-content;
                        width: -moz-fit-content;
                        width: fit-content;
                    }
                        
                    input {
                        border: none;
                        outline: none;
                        -webkit-box-shadow: none;
                                box-shadow: none;
                        width: 15px;
                        height: 15px;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
        }
    }

    @media (max-width: 1140px) {
        width: 83vw;
        margin-top: 45px;
        padding: 20px 20px;

        .form-ctn {
            .input-ctn {
                gap: 35px;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                        flex-direction: column;
                
                input,
                select,
                textarea {
                    width: 100%;
                    padding: 10px 10px;
                }

                .select-ctn {
                    &::after {
                        top: 20px;
                        right: 12px;
                    }
                }
                
                .checks-ctn {
                    padding: 0 10px;

                    .two-checks {
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        gap: 15px;
                    }
                }
            }
        }
    }
}
</style>