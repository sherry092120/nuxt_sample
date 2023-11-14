<template>
    <div class="first-wrap">
        <div class="bg bg1"><img :src="$imagePath+bg_bottom_image_name"></div>
        <div class="bg bg2"><img :src="$imagePath+bg_top_image_name"></div>
        <div class="content">
            <div class="slogan">台灣的明天，<br>喵先鋪路</div>
            <img class="fish fish-small" src="@/assets/image/fish_98x47.png">
            <img class="fish fish-big" src="@/assets/image/fish_148x71.png">
        </div>
    </div>
</template>
  
<script setup>
const nav = reactive({
    left: ['About Me', 'Last Activity', 'Policy'],
    right: ['Donate', 'Feedback'],
})
const { $imagePath } = useNuxtApp();
const bg_bottom_image_name = ref('bg_orange.png');
const bg_top_image_name = ref('bg_cat.png');
const resizeEvent = function(){
    if(process.client){
        if(window.innerWidth <=767){
            bg_bottom_image_name.value = 'bg_orange_m.png';
            bg_top_image_name.value = 'bg_cat_m.png';
        }else{
            bg_bottom_image_name.value = 'bg_orange.png';
            bg_top_image_name.value = 'bg_cat.png';
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
.first-wrap{
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    margin-top: $height-nav;
    @include xxl{
        margin-top: $height-nav-xxl;
    }
    @include l{
        margin-top: $height-nav-l;
    }
    @include m{
        margin-top: 0;
        text-align: center;
    }
    @include s{
        margin-top: $height-nav-s;
    }
    .bg{
        width: 100%;
        height: 697px;
        @include xxl{
            height: 515px;
        }
        @include m{
            height: auto;
        }
        img{
            object-fit: cover;
            @include square(100%);
            object-position: cover;
        }
    }
    .bg1{
        position: absolute;
        top: 10%;
    }
    .bg2{
        position: relative;
        top: 0;
        left: 0;
    }
    .content{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        @include max-width;
    }
    .slogan{
        margin-top: 140px;
        font-size: 100px;
        letter-spacing: calc(100px * 0.3);
        font-weight: 800;
        color: $color-title;
        line-height: 150px;
        @include xxl{
            font-size: 72px;
            letter-spacing: calc(72px * 0.3);
            font-weight: 700;
            line-height: 110px;
            margin-top: 110px;
        }
        @include l{
            font-size: 60px;
            letter-spacing: calc(60px * 0.3);
            font-weight: 700;
            line-height: 90px;
        }
        @include m{
            margin-top: 25%;
            font-size: 50px;
            letter-spacing: calc(50px * 0.3);
            font-weight: 800;
            line-height: 75px;
        }
        @include s{
            margin-top: 13%;
            font-size: 40px;
            letter-spacing: calc(40px * 0.3);
            font-weight: 800;
            line-height: 60px;
        }
    }
    .fish{
        position: absolute;
    }
    .fish-small{
        bottom: 35px;
        left: 101px;
        @include xxl{
            width: 77px;
            left: 56px;
        }
        @include m{
            width: 15%;
            left: 36%;
            bottom: 2%;
        }
    }
    .fish-big{
        bottom: 80px;
        left: -64px;
        @include xxl{
            width: 112px;
        }
        @include m{
            width: 22.7%;
            left: 9%;
            bottom: 6%;
        }
    }
}
</style>