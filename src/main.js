import Vue from 'vue';
import './style.scss';

import genres from './util/genres'

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `<div id="movie-list">
                            <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                       </div>`,
            // data should be a function in components
            data: function() {
                return {
                    movies: [
                        { title: 'Pulp fiction'},
                        { title: 'Home alone'},
                        { title: 'Austin powers'}
                    ]
                }

            }
        },
        'movie-filter': {
            data(){
                return {
                    genres
                } 
            },
            template: `<div id="movie-filter">
                            <h1>Filter results</h1>
                            <div class="filter-group">
                                <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                            </div>
                        </div>`,
            components: {
                'check-filter':{
                    data() {
                        return {
                            checked: false
                        }
                    },
                    props: ['title'],
                    template: `
                            <div v-bind:class="{'check-filter': true, active: checked}" v-on:click="checked = !checked">
                                <span class="checkbox"></span>
                                <span class="check-filter-title"> {{ title }} </span>
                            </div>`
                }
            }
        }
    }
})