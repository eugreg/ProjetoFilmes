<script>
export default {
  data() {
    return {
      videos: false,
    };
  },
  props: ["filme"],


  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    getVideoUrl(key) {
      return `https://www.youtube.com/embed/${key}`;
    },
  },
};
</script>
<template>
  <div class="descMovi">
    <div>
      <img
        class="poster-filme-pag"
        :src="getPosterUrl(filme.poster_path)"
        alt="linda imagem do avatar"
      />
    </div>
    <div class="info-movi">
      <div class="titulo">{{ filme.title }}</div>
      <div class="descricao">
        {{ filme.overview }}
      </div>
      <div class="descricao">
        </div>
        <h2>lançamento: {{ filme.release_date }}</h2>
        <h3>Avaliação dos usuários: {{ Math.round(filme.vote_average) }}</h3>
      </div>
    </div>
</template>