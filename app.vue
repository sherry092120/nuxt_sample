<template>
  <header>
    <Nav></Nav>
  </header>
  <First></First>
  <AboutMe></AboutMe>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/scss/var";
  header{
    background-color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 2px solid $primary;
    text-align: center;
    z-index: 1;
  }
</style>