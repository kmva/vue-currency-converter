<template>
  <component :is="layout" v-if="layout"></component>
</template>


<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import Main from './layouts/WelcomeLayout.vue'
import Currency from './layouts/CurrencyLayout.vue'
import './assets/css/normalize.css'
import './assets/css/reset.css'

export default {
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout)

    return {
      layout
    }
  },
  components: {Main, Currency}
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  *{
    box-sizing: border-box;
  }

</style>
