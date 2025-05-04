<template>
    <div v-if="weather" class="weather-card">
      <div class="weather-img">
        <img :src="'https:' + weather.current.condition.icon" alt="Weather Icon" />
      </div>
      <div class="weather-info">
        <div>
          <div class="weather-info-header">
            <h1>{{ weather.location.name }}</h1>
            <h1>{{ weather.current.temp_c }} °C</h1>
          </div>
          <p>Feels like: {{ weather.current.feelslike_c }} °C</p>
        </div>
  
        <p>{{ weather.location.country }}</p>
        <p>Weather conditions: {{ weather.current.condition.text }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    weather: {
      type: Object,
      required: true
    }
  })
  </script>


