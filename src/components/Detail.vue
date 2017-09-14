<template>
  <div id="detail" v-if="movie">
    <movie-item v-bind:movie="movie.movie" v-bind:sessions="[]"></movie-item>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  props: ['movies'],
  components: {
    MovieItem
  },
  computed: {
    movie() {
      let movie = this.movies.find(movie => movie.id === this.$route.params.id);
      return movie ? movie : null;
    }
  },
  created() {
    console.log(this.$route);
  }
}
</script>
