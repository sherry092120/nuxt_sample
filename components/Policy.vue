<template>
    <div class="policy-wrap">
        <div class="title-block">
            <div class="en title_en">Policy</div>
            <div class="title">政策議題</div>
        </div>
        <el-carousel id="vertical" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="carousel-wrap">
                    <div class="left"><img :src="$imagePath+'cat_policy.jpg'"></div>
                    <div class="right">
                    <div class="carousel-title">為毛孩子謀福利！推動寵物醫療保障方案</div>
                    <ol class="carousel-content content">
                        <li>街上氣氛真設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</li>
                        <li>提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</li>
                        <li>合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</li>
                    </ol>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <el-carousel id="carousel-m" trigger="click" height="auto" arrow="never" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item" style="height: auto">
                <div class="carousel-wrap">
                    <div class="top"><img :src="$imagePath+'cat_policy.jpg'"></div>
                    <div class="bottom">
                        <div class="carousel-title">為毛孩子謀福利！推動寵物醫療保障方案</div>
                        <ol class="carousel-content content">
                            <li>街上氣氛真設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</li>
                            <li>提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</li>
                            <li>合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</li>
                        </ol>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>

    </div>
</template>
  
<script setup>
const resizeEvent = function(){
    if(process.client){
        if(window.innerWidth <= 565){
            document.querySelector("#vertical").setAttribute("direction","")
        }else{
            document.querySelector("#vertical").setAttribute("direction","vertical")
        }
    }
}
onMounted(()=>{
    window.addEventListener("resize", resizeEvent);
    resizeEvent();
})

</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/var";
.policy-wrap{
    padding: 150px 0;
    @include max-width;
    // border: 1px solid orange;
}

/*   輪播： */
.carousel-wrap {
    .carousel-content{
        padding-left: 25px;
        color: $color-content;
        li{
            list-style: decimal;
        }
    }
}
.carousel-wrap{
    background-color: #EA7F1B1A;
    border-radius: 8px;
}
.carousel-wrap img{
    width: 100%;
    border-radius: 8px;
    box-shadow: 10px 14px 10px #0000001A;
}
#vertical.el-carousel {
  width: 100%;
  @include l {
    display: none;
  }
}
#vertical .carousel-wrap{
    display: flex;
    height: 100%;
    margin-left: 95px;
    padding: 85px 120px 85px 0;
    @include xl{
        margin-left: 50px;
        padding: 30px 50px 30px 0;
    }
  .left{
        width: 50%;
        height: 100%;
        position: relative;
        left: -95px;
        display: flex;
        align-items: center;
        @include xl{
            left: -50px;
            width: 45%;
        }
        img{
            width: 100%;
        }
    }
    .right{
        width: 50%;
        @include xl{
            width: 55%;
        }
    }
}
// 垂直輪播整體高度
:deep(.el-carousel__container){
    height: 558px;
    @include xl{
        height: 462px;
    }
}
// 指示條按鈕 carousel indicator
:deep(#vertical .el-carousel__button){
  background-color: #d7d7d7;
  opacity: 1;
}
:deep(#vertical .el-carousel__indicator--vertical){
    padding: 0 45px;
    @include xl{
        padding: 0 25px;
    }
}
:deep(#vertical .el-carousel__indicator--vertical .el-carousel__button){
    width: 1px;
    height: 50px;
}
:deep(#vertical .el-carousel__indicator.is-active button){
  background-color: $primary;
  width: 3px;
}

#carousel-m{
    display: none;
    @include l{
        display: block;
    }
}
#carousel-m .carousel-wrap{
    margin-top: 82px;
    @include l{
        padding: 0 17px 50px;
        margin: 82px 32px 0;
    }
    .top{
        width: 80%;
        position: relative;
        top: -82px;
        left: 50%;
        transform: translateX(-50%);
        @include s{
            width: 95%;
        }
        img{
            width: 100%;
        }
    }
    .bottom{

    }

}
:deep(#carousel-m  .el-carousel__indicators--outside){
    position: absolute;
    bottom: 0;
    top: 48%;
    transform: translateX(-50%);
    @include m{
        top: 35%;
    }
    @include s{
        top: 23%;
    }
}

</style>