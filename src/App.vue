<template>
  <div id="app">
    <router-view/>
    <Footer-Guide  v-if="$route.meta.FooterGuide"
     
    />
  </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide';

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
