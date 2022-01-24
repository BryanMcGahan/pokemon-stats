<template>
  <TitleBar></TitleBar>
  <div
    id="main"
    class="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-2"
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
              <thead class="bg-slate-400">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-100
                      uppercase
                      tracking-wider
                      flex
                      items-center
                    "
                  >
                    <div class="">
                      <p>Name</p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-slate-100
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
                      text-slate-100
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
                      text-slate-100
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
                      text-slate-100
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
                  id="table-row"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          :src="pokemon.sprites.front_default"
                          alt=""
                          v-if="pokemon.sprites.front_default != null"
                        />
                        <img
                          :src="pokemon.sprites.back_default"
                          alt=""
                          v-else
                        />
                      </div>
                      <div class="ml-4">
                        <div>
                          <button
                            @click="toggleOverlay(pokemon)"
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
    class="
      container
      mx-auto
      bg-white/70
      backdrop-blur-xl
      z-20
      fixed
      bottom-0
      top-0
      w-full
      h-full
      md:w-3/5
      xl:w-3/6
      2xl:w-2/6
      border border-white
      rounded-l-lg
      right-0
      px-8
      sm:px-14
      py-16
      sm:py-20
    "
    :class="overlay ? 'absolute' : 'hidden'"
  >
    <div>
      <button class="absolute top-5 left-4" @click="overlay = !overlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
          />
        </svg>
      </button>
      <div class="flex flex-row space-x-4 justify-start items-end">
        <div>
          <img
            :src="this.pokemon.profile"
            alt="Photo"
            class="
              w-48
              bg-white/30
              border
              backdrop-blur-lg
              rounded-xl
              shadow-md
            "
          />
        </div>
        <div>
          <div>
            <p class="font-semibold text-2xl pb-2">{{ this.pokemon.name }}</p>
          </div>
          <div>
            <p class="font-medium text-md pb-4">
              Types:
              <span
                v-for="type in pokemon.types"
                :key="type"
                class="
                  flex-row
                  mx-1
                  bg-green-600
                  text-sm
                  px-2
                  py-1
                  rounded-full
                  shadow-md
                "
                >{{ type.type.name }}</span
              >
            </p>
          </div>
          <div class="flex -space-x-1">
            <div
              v-for="sprite in Object.fromEntries(
                Object.entries(pokemon.sprites).slice(0, 6)
              )"
              :key="sprite"
            >
              <img
                :src="sprite"
                v-if="sprite != null && typeof sprite === 'string'"
                class="
                  w-12
                  h-12
                  rounded-full
                  shadow-lg
                  bg-white
                  backdrop-blur-lg
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0  mt-4">
        <div
          class="
            bg-white/70
            backdrop-blur-xl
            md:w-4/6
            h-fit
            rounded-lg
            py-2
            px-4
            shadow-xl
          "
        >
          <div>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="stat in pokemon.stats"
                :key="stat"
                class="
                  bg-white/80
                  backdrop-blur-xl
                  w-full
                  h-32
                  shadow-md
                  rounded-lg
                  py-2
                  px-2
                "
              >
                <p class="border-b uppercase mb-2 text-sm">
                  {{ stat.stat.name }}
                </p>
                <p class="text-sm font-light">
                  Base Stat: <span>{{ stat.base_stat }}</span>
                </p>
                <p class="text-sm font-light">
                  Effort: <span>{{ stat.effort }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-2/6 flex-row space-y-2">
          <div class="bg-white/70 backdrop-blur-xl rounded-lg shadow-xl  py-2 px-3">
            <p class="border-b text-base mb-2">Abilities 👇🏼</p>
            <div v-for="ability in pokemon.abilities" :key="ability">
              <p class="text-sm">{{ ability.ability.name }}</p>
            </div>
          </div>
          <div
            class="
              bg-white/70
              backdrop-blur-xl
              w-full
              h-fit
              rounded-lg
              shadow-xl
              py-2
              px-3
            "
          >
            <p class="border-b text-base mb-2">Moves 👇🏼</p>
            <div v-for="move in pokemon.moves.slice(0, 15)" :key="move">
              <p class="text-sm">{{ move.move.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="absolute z-10 top-0 bottom-0 bg-black/30 backdrop-blur w-screen h-full"
    :class="overlay ? 'absolute' : 'hidden'"
    @click="overlay = !overlay"
  ></div>
  <div
    id="loader"
    class="
      top-0
      bottom-0
      left-0
      right-0
      fixed
      z-10
      bg-slate-900
      flex flex-col
      items-center
      justify-center
    "
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
import TitleBar from "./components/TitleBar.vue";
export default {
  components: {
    TitleBar,
  },
  data() {
    return {
      pokemon_list: [],
      pokemon: {
        name: null,
        base_experience: null,
        height: null,
        weight: null,
        sprites: [],
        profile: null,
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
      offset: 0,
      overlay: false,
    };
  },

  beforeCreate() {},

  created() {
    this.getPokemonList();
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },

  methods: {
    async getPokemonList() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + this.offset
        );
        const data = response.data.results;
        for (let i = 0; i < data.length; i++) {
          try {
            const response = await axios.get(data[i].url);
            const pokemon = response.data;
            this.pokemon_list.push(pokemon);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getIndiPokemon(pokemon) {
      var new_pokemon = pokemon.toLowerCase();
      try {
        const response = await axios.get(
          "http://pokeapi.co/api/v2/pokemon/" + new_pokemon
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
        this.pokemon = {
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
        document.getElementById("search").value = "";
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
      if (!(this.nav_end + 10 > 1120)) {
        this.nav_start += 10;
        this.nav_end += 10;
        this.offset += 10;
        this.getPokemonList();
      }
    },

    async searchTable() {
      const pokemon = document.getElementById("search").value;
      this.getIndiPokemon(pokemon);
      console.log(this.pokemon);
    },

    toggleOverlay(pokemon) {
      this.pokemon = pokemon;
      this.pokemon.profile = pokemon.sprites.other.home.front_default;
      this.overlay = !this.overlay;
    },
  },
};
</script>

<style>
</style>
