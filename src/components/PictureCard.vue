<script>
export default {
  name: "PictureCard",
  props: {
    picture_src: String,
    pic_link: {
      type: Object,
    },
  },
  methods: {
    retornaUrlFilme(id) {
      return `/filme/${id}`;
    },
  },
};
</script>

<template>
  <article>
    <div class="films">
      <RouterLink :to="retornaUrlFilme(pic_link.id)">
        <img :src="picture_src" />
      </RouterLink>
       
    </div>
  </article>
</template>