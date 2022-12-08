<script>
import axios from "axios";
import DescFilme from "../components/DescFilme.vue";
export default {
    components: {DescFilme},
    props: ["id"],
    data() {
        return {
            filme: {},
        };
    },
    async created() {
        const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
        const { data } = await axios.get(url);
        this.filme = data;
    },
  
};
</script>

<template>
  <div class="main">
    {{ id }}
    <DescFilme :filme="filme" />
  </div>
</template>