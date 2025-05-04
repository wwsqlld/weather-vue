<template>
  <div class="home-page">
    <h1>Weather Searcher</h1>
    <SearchBar :onSearch="handleSearch" />
    <WeatherCard :weather="weather" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import WeatherCard from './components/WeatherCard.vue'
import { getWeather } from './lib/api.js'

const weather = ref(null)

const handleSearch = async (query) => {
  const weatherData = await getWeather(query)
  weather.value = weatherData
}
</script>

