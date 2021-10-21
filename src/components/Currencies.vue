<template>
  <h1>Список валют</h1>
  <ul>
      <!-- <li 
        v-for="currency in currencies"
        key="currency"
      ></li> -->
      cc{{currencies}}
  </ul>
</template>

<script>
import { computed, onBeforeMount } from 'vue';
import {useStore} from 'vuex';

export default {

    setup() {
        const store = useStore();
        const currencies = computed(() => {store.currencies});


        onBeforeMount(() => {
            store.dispatch('getCurrencies')
            console.log(currencies);
        })

        return{
            currencies
        }
    }
}
</script>

<style>

</style>