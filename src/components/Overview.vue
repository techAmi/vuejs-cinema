<template>
  <div id="overview">
    <div class="main">
      <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies" v-bind:day="day"></movie-list>
      <movie-filter></movie-filter>
    </div>
  </div>
</template>

<script>
import MovieFilter from './MovieFilter.vue';
import MovieList from './MovieList.vue';

export default {
  components: {
    MovieList,
    MovieFilter,
  },
  props: ['genre', 'time', 'movies', 'day'],
}
</script>
