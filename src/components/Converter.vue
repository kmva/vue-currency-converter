<template>
  <h1>Конвертер</h1>
  <div class="cards">
    <div class="card">
      <p class="currency-name">curr.Name</p>
      <div class="choose-curr">
        <select name="" id="">
          <option 
            v-for="curr in currencies"
            :key="curr.ID"
            :value="curr.CharCode"
          >{{ curr.CharCode }}</option>
        </select>
        <input type="text" class="currV" v-bind="currV">
      </div>
    </div>
    <button @click="switchCurrs" class="switch-button">&harr;</button>
    <div class="card">
      <p class="currency-name">curr.Name</p>
      <div class="second-curr">
        <select>
          <option 
            v-for="curr in currencies"
            :key="curr.ID"
            :value="curr.CharCode"
          >{{ curr.CharCode }}</option>
        </select>
        <input type="text" class="currV" v-bind="currV">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const selectedCurr = ref('');
    const toCurr = ref('');
    const currencies = computed(() => store.getters.getCurrencies)

    onBeforeMount(() => {
      store.dispatch('getCurrencies')
    })

    function switchCurrs() {

    }

    return{
      selectedCurr,
      toCurr,
      currencies,

      switchCurrs
    }
  }
}
</script>

<style>
  .cards {
    justify-content: center;
    display: flex;
    align-items: flex-end;
    align-content: center;
    column-gap: 3em;

    width: 500px;
    margin: auto;
    padding: 3em;
    box-shadow: 0 0 4px 0 #999;
    border-radius: 15px;
  }

  .card{
    text-align: left;
  }

  .card select {
    margin-right: 1em;
    border: none;
  }

  .card input {
    width: 100px;
    border: none;
    border-bottom: 2px solid #333;
  }

  .card input:focus{
    border-bottom-color: rgb(77,151,248);
  }

  .currency-name{
    margin-bottom: 1em;
  }

  .switch-button {
    background: #FFF;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgb(77,151,248);
    color: rgb(77,151,248)
  }

</style>