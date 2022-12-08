<script>
import PictureCard from "../components/PictureCard.vue";
import FilmeApi from "../api/filme.js";
const filmeapi = new FilmeApi();
export default {
  components: { PictureCard },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscaTodosOsFilmes();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<template>
  <div class="main">
    
    <div class="container">
      <PictureCard
        v-for="filme of filmes"
        :key="filme.id"
        :picture_src="getPosterUrl(filme.poster_path)"
        :pic_link="filme"
      />
    </div>
  </div>
</template>


<style>
body {
  width: 100%;
  place-items: center;
}
img {
  width: 10%;
  height: 77%;
  object-fit: cover;
  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);
  transform-origin: center;
  transform: perspective(800px) rotateY(25deg);
  transition: 0.5s;
  margin-top: 10%;
}
.container {
  max-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
.container:hover img {
  opacity: 0.3;
}
.container img:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
}

#app {
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: stretch;
  align-content: stretch;
}
.titulo{
  font-family: sans-serif;
  margin-left: 10px;
  color: black;
}
</style>
