<template>
  <div class="NuxtLogo">
    <img src="https://a.storyblok.com/f/88787/1663x752/2a60644fe6/summit-logo.png" class="logo">
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/sass/base/_index.scss';

.NuxtLogo {
  animation: 1s appear;
  margin: 0;
  padding: 10px 0;
  display: flex;
  align-items: center;

  @include breakpoint(lg){
    height: 70px;
  }

  img {
    height: 40px;

    @include breakpoint(lg){
      height: 70px;
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
