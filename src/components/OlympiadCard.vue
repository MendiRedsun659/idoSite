<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between h-full">
    <div>
      <h3 class="text-xl font-semibold text-blue-800 mb-2">{{ olympiad.subject }}</h3>
      <p class="text-gray-600 mb-1"><strong>Класс:</strong> {{ olympiad.grade }}</p>
      <p class="text-gray-600 mb-1"><strong>Этап:</strong> {{ olympiad.stage }}</p>
      <p class="text-gray-600 mb-4"><strong>Сроки:</strong> {{ olympiad.dates }}</p>
    </div>
    <div>
      <a
        :href="olympiad.link"
        target="_blank"
        class="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-full transition"
      >
        Подробнее
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  olympiad: {
    type: Object,
    required: true
  }
})
</script>
