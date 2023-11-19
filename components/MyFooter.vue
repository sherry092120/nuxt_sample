<template>
    <footer>
        <div class="footer-wrap">
            <div class="group">
                <div class="footer-title en">Information</div>
                <div></div>
            </div>
            <div class="group">
                <div class="footer-title en">Links</div>
                <div style="display: flex">
                    <div class="nav" v-for="index in Math.ceil(nav.length / 4)">
                        <div class="text en" v-for="item in nav.slice((4*(index-1)),(4*(index-1)+4))">{{ item }}</div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="footer-title en">Follow us</div>
                <div></div>
            </div>
        </div>
    </footer>
</template>
  
<script setup>
const nav = ref(['About Me', 'Last Activity', 'Policy','Donate', 'Feedback'])
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/var";
footer{
    width: 100%;
    border-top: 2px solid $primary;
    .footer-wrap{
        @include max-width;
        display: flex;
        padding: 75px 0 110px;
    }
}
.group{
    .footer-title{
        color: $color-title;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: calc(16px * 0.06);
        margin-bottom: 25px;
    }
    .nav{
        width: 240px;
        .text{
            font-size: 16px;
            letter-spacing: calc(16px * 0.06);
            font-weight: 400;
            line-height: 30px;
            margin-bottom: 14px;
            color: $primary;
            cursor: pointer;
        }
    }
}
</style>