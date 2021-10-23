<template class="converter">
<div>
  <h1 class="converter__heading">Конвертер</h1>
  <div class="converter__cards">
    <div class="converter__card">
      <p class="currency-name">{{currencies[selectedCurr] ? currencies[selectedCurr].Name : ''}}</p>
      <div class="choose-curr">
        <select v-model="selectedCurr">
          <option 
            v-for="curr in currencies"
            :key="curr.ID"
            :value="curr.CharCode"
          >{{ curr.CharCode }}</option>
        </select>
        <input type="text" class="currV" v-model="countOfselectedCurr" @input="convert">
      </div>
    </div>
    <button @click="switchCurrs" class="switch-button">&harr;</button>
    <div class="converter__card">
      <p class="currency-name">{{currencies[toCurr] ? currencies[toCurr].Name : ''}}</p>
      <div class="second-curr">
        <select  v-model="toCurr">
          <option 
            v-for="curr in currencies"
            :key="curr.ID"
            :value="curr.CharCode"
          >{{ curr.CharCode }}</option>
        </select>
        <input type="text" class="currV" :value="countOfToCurr" disabled>
      </div>
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

    const currencies = computed(() => store.getters.getCurrencies);

    const selectedCurr = ref('AUD');
    const toCurr = ref('EUR');
    const countOfselectedCurr = ref(0);
    const countOfToCurr = ref(0);

    onBeforeMount(() => {
      store.dispatch('getCurrencies')
    })

    function switchCurrs() {
      const tmp = selectedCurr.value;
      selectedCurr.value = toCurr.value;
      toCurr.value = tmp;

      convert();
    }

    function convert(){
      countOfToCurr.value = 
        ((countOfselectedCurr.value * currencies.value[selectedCurr.value].Value) / currencies.value[toCurr.value].Value).toFixed(2)
    }

    return{
      selectedCurr,
      toCurr,
      currencies,
      countOfselectedCurr,
      countOfToCurr,

      switchCurrs,
      convert
    }
  }
}
</script>

<style>
  .converter__heading{
    margin: 1.5em auto 1.1em;
  }

  .converter__cards {
    justify-content: space-between;
    display: flex;
    align-items: flex-end;
    align-content: center;

    -moz-column-gap: 3em;
    column-gap: 2em;
    width: 600px;
    margin: auto;
    padding: 3em;
    box-shadow: 0 0 4px 0 #999;
    border-radius: 15px;
  }

  .converter__card{
    text-align: left;
    font-size: 1.2rem
  }

  .converter__card select {
    margin-right: 1em;
    border: none;
  }

  .converter__card input {
    width: 100px;
    border: none;
    border-bottom: 2px solid #333;
  }

  .converter__card input:focus{
    border-bottom-color: rgb(77,151,248);
  }

  .converter__card input:disabled{
    background: transparent;
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
    color: rgb(77,151,248);
    cursor: pointer;
    transition: .2s
  }

  .switch-button:hover{
    color: #FFF;
    background-color: rgb(77,151,248);
  }

  @media screen and (max-width: 600px){
    .converter__cards{
      width: 100%;
      flex-wrap: wrap;
      row-gap: 3em
    }
  }

</style>