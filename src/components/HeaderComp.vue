<script>
export default {};
</script>

<template>
  <header>
    <div class="title">
      <router-link to="/" id="title">
        <h1><span>IM</span>ovies</h1>
      </router-link>
    </div>

    <nav>
      <div class="links">
      <router-link class="routerlink" to="/movie">Filmes</router-link>
      <router-link class="routerlink" to="/actors">Atores</router-link>
      <router-link class="routerlink" to="/category">Categorias</router-link>
    </div>
  </nav>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
.title {
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-content: normal;
  justify-content: space-around;
  align-items: center;
  color: black;
  text-decoration: none;
}

a{
  text-decoration: none;
  color: black;
}
.title span {
  text-decoration: none;
}

.title :hover {
  background-color: white;
  color:rgb(178, 48, 48); 
  
}
</style>
