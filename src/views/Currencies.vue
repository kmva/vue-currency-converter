<template>
    <div class="currencies">
        <h1 class="currencies__heading">Список валют</h1>
        <form action="">
            <input type="text" v-model="searchV" class="currencies__search" placeholder="Поиск">
        </form>
        <ul class="currencies__list">
            <currency-item 
                v-for="currency in currencies"
                :key="currency.ID"
                :currency="currency"
            ></currency-item>
        </ul>
    </div>
</template>

<script>
import { computed, onBeforeMount, ref } from 'vue';
import {useStore} from 'vuex';
import CurrencyItem from '../components/CurrencyItem.vue';

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

        // если идёт поиск - показать результат поиска, иначе список всех валют
        const currencies = computed(() => searchV.value ? filteredCurrencies.value : allCurrencies.value)

        onBeforeMount(() => {
            if(!store.getters.getCurrencies.length) {store.dispatch('getCurrencies')}
        })

        return{
            allCurrencies,
            filteredCurrencies,
            currencies,
            searchV
        }
    },

    components: {CurrencyItem}
}
</script>

<style>
    .currencies__heading{
        margin: 1.5em auto 1.1em;
        font-size: 2rem
    }

    .currencies__search{
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

    @media screen and (max-width: 480px){
        .currencies__heading{
            margin: 1em 0 0.7em;
        }

        .currencies__search{
            width: 95%;
        }
    }
</style>