<template>
    <div style="width: 100%;">
        <div class="last-activity-wrap">
            <div class="title-block">
                <div class="en title_en">Last Activity</div>
                <div class="title">最新活動</div>
            </div>


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
.last-activity-wrap{
    @include max-width;
}
</style>