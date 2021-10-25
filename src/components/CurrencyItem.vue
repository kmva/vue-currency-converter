<template>
  <li class="currencies__list-item" @click="switchCurrs">
        <p class="currencies__name">{{currency.Name}}</p>
        <p class="currencies__conv">
            <span>  1 {{ isSwitched ? 'RUB' : currency.CharCode }} 
                &harr; {{isSwitched ? (1 / currency.Value).toFixed(4) : currency.Value}} 
                        {{isSwitched ? currency.CharCode : 'RUB'}}
            </span>  
            <span 
                class="diff" 
                :class="(currency.Previous - currency.Value) > 0 ? 'up' : 'down'">
                    {{ Math.abs((currency.Previous - currency.Value).toFixed(4)) }}
            </span>
        </p>
    </li>
</template>

<script>
import {ref} from 'vue';

export default {
    props: ['currency'],
    setup(props) {
        const currency = props.currency;
        const isSwitched = ref(false);

        function switchCurrs() {
            isSwitched.value = !isSwitched.value;
        } 

        return {
            currency,
            isSwitched,

            switchCurrs
        }
    }
}
</script>

<style>
    .currencies__list-item{
        padding: 2em;
        width: 400px;
        box-shadow: 0 0 4px 0 #999;
        border-radius: 15px;
        margin-bottom: 2em;
        transition: .3s;
        color: #4d97f8;
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

    @media screen and (max-width: 480px){
        .currencies__conv{
            flex-direction: column;
            row-gap: .7em;
        }

        @supports not (row-gap: .7em) {
            .currencies__conv .diff {
                margin-top: .7em;
            }
        }

        .currencies__list-item {
            width: 95%;
            padding: 1.5em;
        }
    }
</style>