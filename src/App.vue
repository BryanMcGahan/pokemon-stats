<template>
  <ul v-for="pokemon in pokemon_list" :key="pokemon" id="list" class="bg-black">
    <li>
      <button
        @click="getIndiPokemon(pokemon.name)"
        class="flex items-center bg-teal-600 px-8 py-2 w-64 space-x-2"
      >
        <img
          v-if="pokemon.sprites.back_default"
          :src="pokemon.sprites.back_default"
          alt=""
          class="w-8 rounded-full bg-black"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="32px"
          viewBox="0 0 24 24"
          width="32px"
          fill="#000000"
          v-else
        >
          <rect fill="none" height="24" width="24" />
          <path
            d="M14.5,12c0,1.38-1.12,2.5-2.5,2.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5C13.38,9.5,14.5,10.62,14.5,12z M22,12 c0,5.52-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2C17.52,2,22,6.48,22,12z M20,12h-4c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4H4 c0,4.41,3.59,8,8,8C16.41,20,20,16.41,20,12z"
          />
        </svg>
        <span>{{ pokemon.name }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pokemon_list: [],
      pokemon: {
        name: null,
        base_experience: null,
        height: null,
        weight: null,
        sprites: [],
        types: [],
        forms: [],
        abilities: [],
        moves: [],
        stats: [],
      },
    };
  },

  beforeMount() {
    this.getPokemonList();
  },

  methods: {
    async getPokemonList() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1118"
        );
        this.pokemon_list = response.data.results;
        this.pokemon_list.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          {
            if (a.name > b.name) {
              return 1;
            }
          }
          return 0;
        });
        for (let i = 0; i < this.pokemon_list.length; i++) {
          try {
            const response = await axios.get(this.pokemon_list[i].url);
            const data = response.data;
            this.pokemon_list[i].sprites = data.sprites;
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getIndiPokemon(pokemon) {
      try {
        const response = await axios.get(
          "http://pokeapi.co/api/v2/pokemon/" + pokemon
        );
        const data = response.data;
        this.pokemon.name = data.name;
        this.pokemon.base_experience = data.base_experience;
        this.pokemon.height = data.height;
        this.pokemon.weight = data.weight;
        this.pokemon.sprites = data.sprites;
        this.pokemon.types = data.types;
        this.pokemon.forms = data.forms;
        this.pokemon.abilities = data.abilities;
        this.pokemon.moves = data.moves;
        this.pokemon.stats = data.stats;
        console.log(this.pokemon);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
