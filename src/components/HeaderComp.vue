<script>
export default {};
</script>

<template>
  <header>
    <div class="title">
      <router-link id="title">
        <h1>IMovies</h1>
      </router-link>
    </div>

    <div class="links">
      <router-link class="routerlink" to="/movie">Filmes</router-link>
      <router-link class="routerlink" to="/actors">Atores</router-link>
      <router-link class="routerlink" to="/category">Categorias</router-link>
    </div>
  </header>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

.title {
  font-family: "Baloo 2", cursive;
}
</style>
