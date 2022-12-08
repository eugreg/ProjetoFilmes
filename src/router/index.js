import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ActorsView from "../views/ActorsView.vue";
import MovieView from "../views/LancamentosView.vue";
import CategoryView from "../views/CategoryView.vue"
import PaginaFilme from "../views/PaginaFilme.vue";
import PaginaCategorias from "../views/PaginaCategorias.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/filmes_por_genero/:id",
      nome: "filmesPorGenero",
      component: PaginaCategorias,
      props: true,
    },
    {
      path: "/actors",
      name: "Actors",
      component: ActorsView,
    },
    {
      path: "/movie",
      name: "Movie",
      component: MovieView,
    },
    {
      path: "/filme/:id",
      name: "filme",
      component: PaginaFilme,
      props: true,
    },
    {
      path: "/category",
      name: "Category",
      component: CategoryView,
    },
  ],
});

export default router;
