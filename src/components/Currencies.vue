<template class="currencies">
  <h1 class="currencies__heading">Список валют</h1>
  <form action="">
      <input type="text" v-model="searchV" class="currencies__search" placeholder="Поиск">
  </form>
  <ul class="currencies__list">
    <li 
        v-for="currency in currencies"
        :key="currency.ID"
        class="currencies__list-item"
    >
        <p class="currencies__name">{{currency.Name}}</p>
        <p class="currencies__conv">
            <span>1 {{ currency.CharCode }} &harr; {{currency.Value }} RUB</span>  
            <span 
                class="diff" 
                :class="(currency.Previous - currency.Value) > 0 ? 'up' : 'down'">
                    {{ Math.abs((currency.Previous - currency.Value).toFixed(4)) }}
            </span>
        </p>
    </li>
  </ul>
</template>

<script>
import { computed, onBeforeMount, ref } from 'vue';
import {useStore} from 'vuex';

export default {

    setup() {
        const store = useStore();
        const allCurrencies = computed(() => store.getters.getCurrencies);

        const searchV = ref('')
        const filteredCurrencies = computed(() => {
            const currArr = Object.values(allCurrencies.value)
            return currArr.filter(curr => {
                    return (
                        curr.Name.toUpperCase().indexOf(searchV.value.toUpperCase()) != -1 
                        || curr.CharCode.indexOf(searchV.value.toUpperCase()) != -1
                    )
                })
            });

        const currencies = computed(() => searchV.value ? filteredCurrencies.value : allCurrencies.value)

        onBeforeMount(() => {
            store.dispatch('getCurrencies')
        })

        return{
            allCurrencies,
            filteredCurrencies,
            currencies,
            searchV
        }
    }
}
</script>

<style>
    .currencies__heading{
        margin: 1.5em auto 1.1em;
    }

    .currencies__search {
        padding: 1em 2em;
        width: 400px;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 4px 0 #999;
        margin-bottom: 2em;
    }

    .currencies__list{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .currencies__list-item{
        padding: 2em;
        width: 400px;
        box-shadow: 0 0 4px 0 #999;
        border-radius: 15px;
        margin-bottom: 2em;
        transition: .3s;
        color: rgb(77,151,248);
        font-size: 1.2rem;
        text-align: left;
        cursor: pointer;
    }

    .currencies__list-item:hover{
        box-shadow: 0 0 10px 0 #888;
        transform: scale(1.01);
    }

    .currencies__name{
        color: #999;
        margin-bottom: .8em;
    }

    .currencies__conv{
        display: flex;
        justify-content: space-between;
    }

    .currencies__conv span{
        display: inline-block;
    }

    .currencies__conv .diff{
        position: relative;
        padding-left: 17px;
    }

    .currencies__conv .diff.up{
        color: green;
    }

    .currencies__conv .diff.down{
        color: rgb(197, 0, 0);
    }

    .currencies__conv .diff::before{
        content: '↑';
        margin-right: 1em;
        position: absolute;
        left: 0;
        top: -2px;
    }
    
    .currencies__conv .diff.down::before{ 
        content: '↓';
    }

    @media screen and (max-width: 480px) {
        .currencies__search{
            width: 95%;
        }
        
        .currencies__conv{
            flex-direction: column;
            row-gap: .7em;
        }

        .currencies__list-item {
            width: 95%;
        }
    }
</style>