<template>
    <nav class="nav">
      <router-link to="/Currencies" class="nav__item">Cписок валют</router-link>
      <router-link to="/Converter" class="nav__item">Конвертер</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    .nav{
        padding: 2em;
        background-color: rgb(77,151,248);
    }

    .nav__item{
        font-size: 1.2rem;
        margin-right: 1em;
        color: #FFF;
    }

    .nav__item.active{
        border-bottom: 2px solid #FFF;
    }

    .nav__item:last-child{
        margin-right: 0;
    }
</style>