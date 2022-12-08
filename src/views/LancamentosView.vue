<script>
import PictureCard from "../components/PictureCard.vue";
import LancamentosApi from "../api/lancamentos.js";
const lancamentosapi = new LancamentosApi();
export default {
  components: { PictureCard },
  data() {
    return {
      lancamentos: [],
    };
  },
  async created() {
    this.lancamentos = await lancamentosapi.BuscaTodosOsLancamentos();
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
    <div>
      <p>Lançamentos</p>
    </div>
    <div class="container">
      <PictureCard
        v-for="lancamento of lancamentos"
        :key="lancamento.id"
        :picture_src="getPosterUrl(lancamento.poster_path)"
        :pic_link="lancamento"
      />
    </div>
  </div>
</template>

<style>
.search {
  position: relative;
  margin: 10px;
  width: 100%;
  max-width: 280px;
  border-radius: 3px;
  overflow: hidden;
}

input {
  -webkit-appearance: none;
  appearance: none;
  width: 70%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  background: rgba($dark, 0.02);
  box-shadow: inset 0 -1px 0 rgba($dark, 0.3);
  transition: all 0.15s ease;
}

label {
  position: absolute;
  top: 20px;
  left: 12px;
  font-size: 16px;
  color: rgba($dark, 0.5);
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}
</style>
