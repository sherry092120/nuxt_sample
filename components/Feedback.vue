<template>
    <div class="feedback-wrap">
        <div class="title-block">
            <div class="en title_en">Feedback</div>
            <div class="title">民眾服務信箱</div>
            <div class="sub-title">您的聲音，我們的行動！</div>
            <div class="content">副標描述：親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</div>
        </div>
        <div class="form">
            <div class="input-group">
                <label>姓名</label>
                <input type="text" placeholder="請輸入">
            </div>
            <div class="input-group">
                <label>Email</label>
                <input type="text" placeholder="請輸入">
            </div>
            <div class="input-group">
                <label>手機</label>
                <input type="text" placeholder="請輸入">
            </div>
            <div class="input-group">
                <label>建言</label>
                <textarea rows="5" placeholder="請輸入"></textarea>
            </div>
            <div class="primary-btn">送出</div>
        </div>
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
.feedback-wrap{
    @include max-width;
    display: flex;
    align-items: center;
    margin-bottom: 315px;
}
.title-block{
    width: 50%;
    padding-right: 85px;
    .content{
        margin-right: 72px;
    }
}
.form{
    width: calc(50% - 14px);
    margin-left: 14px;
    box-shadow: 10px 14px 10px #0000001A;
    border-radius: 8px;
    padding: 80px 60px;
    background-color: #EA7F1B1A;
}
.input-group{
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    label{
        width: 100%;
        font-size: 12px;
        line-height: 30px;
        letter-spacing: calc(12px * 0.18);
        font-weight: 400;
        color: $color-content2;
        margin-bottom: 4px;
        display: inline-block;
    }
    input, textarea{
        width: 100%;
        background-color: #fff;
        border-radius: 8px;
        color: $color-content;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: calc(14px * 0.18);
        font-weight: 400;
        padding: 10px 16px;
        border: 0;
        outline: none;
    }
    textarea{
        margin-bottom: 16px;
        resize: none;
    }
}
</style>