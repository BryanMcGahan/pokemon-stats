<template>
  <div
    id="main"
    class="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
  >
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-slate-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-slate-200">
              <thead class="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Height
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Weight
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Types
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Base Experience
                  </th>
                </tr>
              </thead>
              <tbody class="bg-slate-100 divide-y divide-slate-200">
                <tr
                  v-for="pokemon in pokemon_list.slice(nav_start, nav_end)"
                  :key="pokemon"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          :src="pokemon.sprites.back_default"
                          alt=""
                          v-if="pokemon.sprites.back_default != null"
                        />
                        <img
                          :src="pokemon.sprites.front_default"
                          alt=""
                          v-else
                        />
                      </div>
                      <div class="ml-4">
                        <div>
                          <button
                            class="
                              text-sm
                              font-medium
                              text-slate-900
                              uppercase
                              hover:text-emerald-700
                            "
                          >
                            {{ pokemon.name }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-slate-900">
                      {{ pokemon.height }}<span>cm</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-slate-900">
                      {{ pokemon.weight }}<span>g</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex space-x-1">
                      <div
                        v-for="varient in pokemon.types"
                        :key="varient"
                        class="
                          text-sm text-slate-200
                          px-3
                          py-1
                          inline-flex
                          leading-5
                          rounded-full
                          bg-emerald-700
                          w-fit
                          shadow-sm
                        "
                      >
                        {{ varient.type.name }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-slate-900">
                      {{ pokemon.base_experience }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-slate-100
        px-4
        py-3
        flex
        items-center
        justify-between
        border-t border-slate-300
        shadow
        sm:px-6 sm:rounded-lg
      "
    >
      <div class="flex-1 flex justify-between items-center">
        <button
          class="
            relative
            inline-flex
            items-center
            px-4
            py-2
            border border-slate-300
            text-sm
            font-medium
            rounded-md
            text-slate-800
            hover:text-slate-200 hover:bg-slate-800
          "
          @click="goBack"
        >
          Previous
        </button>
        <p
          class="
            border border-slate-300
            px-4
            py-2
            rounded-md
            text-sm
            font-medium
            text-slate-800
          "
        >
          {{ nav_start }} <span>to</span> {{ nav_end }}
        </p>
        <button
          class="
            ml-3
            relative
            inline-flex
            items-center
            px-4
            py-2
            border border-slate-300
            text-sm
            font-medium
            rounded-md
            text-slate-800
            hover:text-slate-200 hover:bg-slate-800
          "
          @click="goForward"
        >
          Next
        </button>
      </div>
    </div>
  </div>
  <div
    id="loader"
    class="top-0 bottom-0 left-0 right-0 fixed z-10 bg-slate-900 flex flex-col items-center justify-center"
    v-if="isLoading"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="72px"
        viewBox="0 0 24 24"
        width="72px"
        fill="#e54545"
      >
        <rect fill="none" height="24" width="24" />
        <path
          d="M14.5,12c0,1.38-1.12,2.5-2.5,2.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5C13.38,9.5,14.5,10.62,14.5,12z M22,12 c0,5.52-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2C17.52,2,22,6.48,22,12z M20,12h-4c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4H4 c0,4.41,3.59,8,8,8C16.41,20,20,16.41,20,12z"
        />
      </svg>
    </div>
    <div>
      <span class="text-white text-3xl font-bold">Pokemon Stats</span>
    </div>
  </div>
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
      nav_start: 0,
      nav_end: 10,
      pages: 0,
      isLoading: true,
    };
  },

  beforeCreate(){

  },

  created() {
    this.getPokemonList();
  },

  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  },

  methods: {
    async getPokemonList() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1118"
        );
        const data = response.data.results;
        for (let i = 0; i < data.length; i++) {
          try {
            const response = await axios.get(data[i].url);
            const pokemon = response.data;
            this.pokemon_list.push(pokemon);
            // this.pokemon_list.sort(function (a, b) {
            //   if (a.name < b.name) {
            //     return -1;
            //   }
            //   {
            //     if (a.name > b.name) {
            //       return 1;
            //     }
            //   }
            //   return 0;
            // });
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

    async goBack() {
      console.log(!(this.nav_start - 10 < 0));
      if (!(this.nav_start - 10 < 0)) {
        this.nav_start -= 10;
        this.nav_end -= 10;
      }
    },

    async goForward() {
      if (!(this.nav_end + 10 > this.pokemon_list.length + 2)) {
        this.nav_start += 10;
        this.nav_end += 10;
      }
    },
  },
};
</script>

<style>
</style>
