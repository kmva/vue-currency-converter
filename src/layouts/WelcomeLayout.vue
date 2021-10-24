<template>
  <div class="welcome">
    <h1>Welcome!</h1>
    <div class="blue">
      <router-link to="/Currencies">Перейти к списку валют</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .welcome{
    width: 100vw;
    height: 100vh;
    padding: 3em 0 0;
    text-align: center;
  }

  h1{
    height: 20%;
    font-size: 4.3rem
  }

  .blue {
    background-color: #4d97f8;
    color: #FFF;
    height: 80%;
    padding: 3em
  }

  .blue a{
    font-size: 1.5rem;
    color: #FFF

  }
</style>
