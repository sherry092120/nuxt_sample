<template>
    <div class="donate-wrap">
        <div class="title-block">
            <div class="en title_en">Donate</div>
            <div class="title">捐款方案</div>
        </div>
        <div class="amount">
            累計<span class="number en">100,000,000</span>
        </div>
        <el-carousel id="carousel" :interval="5000" arrow="always" indicator-position="none" height="auto">
            <el-carousel-item v-for="item in 4" :key="item" style="height: auto;">
                <div class="outter">
                    <div class="img">
                        <img :src="$imagePath+'cat_donate.jpg'">
                        <div class="cover"></div>
                    </div>
                    <div class="inner">
                        <div class="title">喵星人之友</div>
                        <div class="text1">捐款新台幣<span class="donate en">NT$ 600</span></div>
                        <div class="text2 en">已有 9,957 人贊助</div>
                        <div class="primary-btn">前往捐款</div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
  
<script setup>
const nav = reactive({
    left: ['About Me', 'Last Activity', 'Policy'],
    right: ['Donate', 'Feedback'],
})

</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/var";
.donate-wrap{
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 150px;
    .title-block{
        text-align: center;
        .title{
            margin-bottom: 28px;
        }
    }
    .amount{
        font-size: 30px;
        line-height: 50px;
        letter-spacing: calc(30px * 0.24);
        font-weight: 400;
        text-align: center;
        color: $color-content;
        margin-bottom: 48px;
        .number{
            color: $primary;
            font-size: 50px;
            line-height: 60px;
            letter-spacing: calc(50px * 0.08);
            font-weight: 800;
        }
    }
}
#carousel.el-carousel{
  width: 100%;
}
#carousel .outter {
  height: 100%;
  background-color: #99a9bf;
  position: relative;
  .img{
    width: 100%;
    .cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #ffffff00 0%, #ffffff66 70%, #ffffffb3 100%);;

    }
    img{
        width: 100%;
    }
  }
  .inner{
        width: 452px;
        padding: 30px 50px 50px;
        position: absolute;
        right: 250px;
        bottom: 45px;
        background-color: #d3dce6;
        border-radius: 8px;
        background-color: #ffffffb3;
        .title{
            font-size: 50px;
            line-height: 60px;
            font-weight: 800;
            letter-spacing: calc(50px * 0.26);
        }   
        .text1{            
            font-size: 18px;
            line-height: 30px;
            font-weight: 400;
            letter-spacing: calc(18px * 0.24);
            color: $color-content;
            margin: 10px 0 6px 0;
            .donate{
                font-size: 30px;
                line-height: 50px;
                font-weight: 700;
                letter-spacing: calc(30px * 0.06);
                color: $primary;
            }
        }
        .text2{
            font-size: 16px;
            line-height: 30px;
            font-weight: 400;
            letter-spacing: calc(16px * 0.06);
            color: $color-content2;
            margin-bottom: 36px;
        }
    }
}

</style>