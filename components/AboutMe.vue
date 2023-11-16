<template>
    <div style="width: 100%; overflow: hidden;">
        <div class="about-wrap">
        <div class="title-block">
            <div class="en title_en">About me</div>
            <div class="title">立法委員<br>候選人主張</div>
        </div>
        <div class="content-block content" v-html="content"></div>
        <div class="images-block">
            <img class="image-bg" :src="$imagePath+'bg_orange_684x534.png'">
            <img class="image-cat" :src="$imagePath+'cat_658x658.png'">
            <div class="title name">喵立翰</div>
            <div class="en name_en">Miao Li-Han</div>
        </div>
    </div>
    </div>
</template>
  
<script setup>
const { $imagePath } = useNuxtApp();
const content = ref('我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。')

</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/var";
.about-wrap{
    @include max-width;
    padding: 231px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 1076px;
    @include xxl{
        height: 934px;
        padding: 197px 0;
    }
    @include xl{
        height: 868px;
        padding: 180px 0;
        justify-content: center;
    }
    @include l{
        flex-direction: row;
        height: auto;
        padding: 90px 0 60px;
    }
    .title-block{
        width: 50%;
        @include l{
            width: 100%;
            order: 1;
            text-align: center;
        }
        .title_en{
            margin-bottom: 10px;
            @include xxl{
                margin-bottom: 8px;    
            }
        }
        .title{
            margin-bottom: 80px;
            @include xxl{
                margin-bottom: 50px;    
            }
            @include l{
                margin-bottom: 30px;
            }
        }
    }
    .content-block{
        width: 50%;
        padding-right: 46px;
        @include xxl{
            padding-right: 30px;
        }
        @include l{
            width: 100%;
            order: 3;
            padding: 60px 30px 0;
            text-align: center;
        }
    }
    .images-block{
        padding-left: 46px;
        position: relative;
        @include xxl{
            padding-left: 30px;
        }
        @include l{
            width: 100%;
            order: 2;
            padding: 0 30px;
            display: flex;
            justify-content: center;
        }
        .image-cat{
            position: relative;
            @include square(658px); /* 原圖630px + 陰影 28px */
            object-fit: contain;
            @include xxl{
                @include square(568px); 
            }
            @include xl{
                @include square(486px); 
            }
            @include s{
                @include square(100%); 
                left: 2%;
            }

        }
        .image-bg{
            width: 683px;
            height: 532px;
            object-fit: contain;
            position: absolute;
            top: 208px;
            left: calc(75px + 46px); /* left padding 46px */
            @include xxl{
                width: 613px;
                height: 477px;
                top: 190px;
                left: calc(70px + 30px); /* left padding 30px */
            }
            @include xl{
                width: 533px;
                height: 415px;
                top: 165px;
                left: calc(65px + 30px); /* left padding 30px */
            }
            @include xl{
                width: 471px;
                height: 367px;
                top: 30%;
                left: 21%;
            }
            @include s{
                width: 84.8%;
                height: auto;
                top: 31%;
                left: 11%;
            }
        }
        .name{
            position: absolute;
            bottom: calc(105px + 28px); /* 陰影 28px */
            right: 5.6px; /* 陰影 28px - letter-spacing 22.4px */
            @include xl{
                bottom: 90px;
            }
            @include l{
                bottom: 19%;
            }
            @include m{
                font-size: 40px;
                line-height: 50px;
                letter-spacing: calc(40px * 0.28);
                right: 13.6px;
                bottom: 16%;
            }
            @include s{
                font-size: 24px;
                line-height: 30px;
                letter-spacing: calc(24px * 0.28);
                right: 22.6px;
                bottom: 14.5%;
            }
        }
        .name_en{
            position: absolute;
            bottom: calc(24px + 28px); /* 陰影 28px */
            right: 28px; /* 陰影 28px */
            font-size: 50px;
            line-height: 72.25px;
            letter-spacing: calc(50px * 0.08);
            font-weight: 500;
            @include xl{
                bottom: 10px;
            }
            @include l{
                bottom: 5%;
            }
            @include m{
                font-size: 35px;
                line-height: 45px;
                letter-spacing: calc(35px * 0.08);
                font-weight: 500;
            }
            @include s{
                font-size: 18px;
                line-height: 26px;
                letter-spacing: calc(18px * 0.08);
                font-weight: 500;
            }
        }

    }
}

</style>