<template>
  <div class="NuxtLogo">
    <img src="https://a.storyblok.com/f/88787/1663x752/2a60644fe6/summit-logo.png" class="logo">
  </div>
</template>

<style scoped lang="scss">
.NuxtLogo {
  animation: 1s appear;
  margin: 0;
  padding: 10px 0;

  img {
    height: 70px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
