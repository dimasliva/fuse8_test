<template>
  <div class="container">
		<div class="joke_wrapper">
			<div class="field-container">
				<input type="text" ref='focusMe' v-model="input" placeholder="Search jokes..." class="field" />
			</div>
			<span class="count">Found jokes: {{ store.jokes.length ? store.jokes.length : 0 }}</span>
		</div>

		<div class="cards">
			<Card v-for="(joke, i) in store.jokes" :key="joke" 
				:id="joke.id" :text="joke.value" :created_at="joke.created_at"
				:class="{one: i===0, two: i===1}"
				@click="openJoke(joke)"
				/>
		</div>
  </div>
</template>

<script>
  import axios from "axios"
import Card from "../components/Card.vue"
import { useJokesStore } from "../stores/counter";
export default {
    name: 'HomeView',
		setup() {
			const store = useJokesStore()
			return {store}
		},
    data() {
        return {
            input: "",
            jokes: [],
            url: "https://api.chucknorris.io/jokes/search?query="
        };
    },
    methods: {
      showRow(val) {
        this.selectedItem = val;
      },
			openJoke(joke) {
				window.location=joke.url;
			}
    },
    watch: {
        async input() {
            if (this.input.length >= 3) {
                const res = await axios.get(this.url + `${this.input}`);
								this.store.setJokes(res.data.result)
            } else {
							this.store.setJokes([])
						}
        } 
    },
    mounted() {
			this.$nextTick(() => this.$refs.focusMe.focus())
    },
    components: { Card }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
 @keyframes spin {
	 0% {
		 transform: rotate(0deg);
	}
	 100% {
		 transform: rotate(360deg);
	}
}
 @keyframes color-1 {
	 0% {
		 background-color: #eb73b9;
	}
	 100% {
		 background-color: #17ead9;
	}
}
.joke_wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.count {
	margin: 10%;
	margin-bottom: 0px;
	color: #6b6969;
}
@media screen and (min-width:320px) {
	.cards {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 0px; 
	}
}
@media screen and (min-width:930px) {
	.cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px; 
	}
}
@media screen and (min-width:1440px) {
	.cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-row-gap: 20px; 
		grid-column-gap: 20px;
		height: 100%;
		max-width: 100%;
		margin-top: 4%;
	}
}


.container {
  display: flex;
	flex-direction: column;
  align-items: center;
  padding-top: 4%;
}
 ::selection {
	 background: #6078ea;
	 color: white;
	 text-shadow: none;
}
 ::-webkit-selection {
	 background: #6078ea;
	 color: white;
	 text-shadow: none;
}
 body {
	 font-family: 'Montserrat', 'Helevtica', sans-serif;
	 position: relative;
	 width: 100%;
	 height: 100vh;
	 background-color: #f2ecec;
	 color: #4b4848;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 transition: background-color 1.25s ease-in-out;
}
 body.is-focus {
	 background-color: #17ead9;
}


 .field-container {
	 position: relative;
	 padding: 0;
	 border: 0;
	 width: 330px;
	 height: 56px;
}
 .field {
	 border: 0;
	 width: 100%;
	 height: 100%;
	 padding: 10px 20px;
	 background: white;
	 border-radius: 3px;
	 box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
	 transition: all 0.4s ease;
   color: #6f77c6;
   font-weight: bold;
}
 .field:focus {
	 outline: none;
	 box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
}
</style>
