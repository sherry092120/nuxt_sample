<template>
    <nav>
        <div class="nav left-nav">
            <ul>
                <li v-for="item in nav.left" class="en">{{ item }}</li>
            </ul>
        </div>
        <div class="nav right-nav">
            <ul>
                <li v-for="item in nav.right" class="en">{{ item }}</li>
                <li class="icons">
                    <img src="@/assets/image/fb.svg">
                    <img src="@/assets/image/ig.svg">
                    <img src="@/assets/image/yt.svg">
                    <img src="@/assets/image/line.svg">
                </li>
            </ul>
        </div>
        <div class="logo"><img src="@/assets/image/logo_166x166.png"></div>
    </nav>
</template>
  
<script setup>
const nav = reactive({
    left: ['About Me', 'Last Activity', 'Policy'],
    right: ['Donate', 'Feedback'],
})

</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/var";
    nav{
        display: flex;
        position: relative;
        width: 100%;
        @include max-width;
        font-size: $font-size-nav-en;
        letter-spacing: $letter-spacing-nav-en;
        @include xxl{
            font-size: 16px;
            letter-spacing: calc(16px * 0.06);
        }
        @include m{
            font-size: $font-size-nav-en;
            letter-spacing: $letter-spacing-nav-en;
        }
    }
    .nav{
        width: 50%;
        height: $height-nav;
        display: flex;
        align-items: center;
        @include xxl{
            height: $height-nav-xxl;
        }
        @include l{
            height: $height-nav-l;
        }
        @include s{
            height: $height-nav-s;
        }
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            @include l{
                display: none;
            }
            li{
                font-weight: bold;
                font-size: 18px;
                cursor: pointer;
            }
        }
    }
    .left-nav{
        margin-right: 180px;
        @include xxl{
            margin-right: 145px;
        }
    }
    .right-nav{
        margin-left: 180px;
        @include xxl{
            margin-left: 145px;
        }
        .icons{
            display: flex;
            img{
                cursor: pointer;
                display: block;
                @include square(25px);
                object-fit: contain;
                margin: 11.5px;
                @include xxl{
                    @include square(20px);
                    margin: 5px;
                }
            }
        }
    }
    .logo{
        cursor: pointer;
        @include square(166px);
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        box-shadow: 10px 10px 14px #0000001A;
        @include xxl{
            @include square(122px);
        }
        @include l{
            @include square(100px);
        }
        @include s{
            @include square(85px);
        }
        img{
            @include square(100%);
        }
    }


</style>