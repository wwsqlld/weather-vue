<template>
  <div class="search-bar">
    <input
      class="search-bar-input"
      type="text"
      v-model="query"
      @keydown.enter="handleSearch"
      placeholder="Search for weather in the city"
    />
    <button class="search-bar-button" @click="handleSearch">Search</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const props = defineProps({
  onSearch: {
    type: Function,
    required: true
  }
})

const query = ref("")

const handleSearch = () => {
  if (!query.value.trim()) return
  props.onSearch(query.value)
  query.value = ""
}
</script>