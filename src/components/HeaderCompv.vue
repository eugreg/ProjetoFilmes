<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
export default {
  data() {
    return {
      genero: "",
    };
  },
  async created() {
    this.generos = await this.getAllGenres();
  },
  computed: {
  
    ...mapStores(useGenreStore),
 
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["getAllGenres"]),
    go() {
      this.$router.push(`/filmes_por_genero/${this.genero}`);
    },
    getProfileUrl(avatar_path) {
      return `https://image.tmdb.org/t/p/w500${avatar_path}`;
    },
  },
};
</script>

<template>

  <body>
    <header>
      <div class="content">
        <hgroup>
          <h1>
            <router-link to="/" id="title">
              <h1><span>IM</span>ovies</h1>
            </router-link>
          </h1>
        </hgroup>
      </div>
      <div class="overlay"></div>
    </header>
    <section class="site">
      <nav>
        <router-link class="routerlink" to="/movie">Lançamentos</router-link>
        <select v-model="genero" @change="go" class="select-cabecalho">
            <option value="" disabled>Categorias</option>
            <option
              v-for="genero of genres"
              :key="genero.id"
              :value="genero.id"
            >
              {{ genero.name }}
            </option>
          </select>
     
      </nav>
    </section>
  </body>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: sans-serif;
}

header {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url(https://unsplash.imgix.net/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=857f07b76abac23a7fb7161cc7b12a46) center no-repeat;
  background-size: cover;
}

header .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

header h1,
header h2 {
  margin: 0;
}

header h2 {
  text-transform: uppercase;
  margin-top: -0.5em;
}

header hgroup {
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  border: 5px solid #fff;
  padding: 0.5em 3em;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #333 center no-repeat;
  background-size: cover;
  z-index: 0;
  opacity: 0;
  -webkit-filter: blur(4px);
}

img {
  margin-right: 20px;
}

.site {
  padding: 10% 0;
  text-align: center;
  font-size: 0.8em;
  color: #444;
  position: relative;
}

.site a {
  color: #666;
  text-decoration: none;
}

.site a:hover {
  color: #222;
}

.site nav {
  position: absolute;
  top: 0;
  left: 0;
  background: #222;
  width: 100%;
}

.site nav a {
  padding: 10px 30px;
  font-size: 1.3em;
  display: inline-block;
}

.site nav a:hover {
  background: #333;
  color: #fff;
}
</style>
