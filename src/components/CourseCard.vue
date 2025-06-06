<template>
  <div v-if="course" class="bg-white rounded-xl shadow p-5 flex flex-col justify-between h-full">
    <img
      :src="course.banner_url"
      alt="Баннер курса"
      class="rounded-lg mb-4 h-48 w-full object-cover"
    />

    <div class="flex-1">
      <h3 class="text-xl font-semibold text-blue-800 mb-2">{{ course.title || 'Без названия' }}</h3>
      <p class="text-gray-600 line-clamp-3 mb-4">{{ course.description || 'Описание отсутствует.' }}</p>

      <p class="text-sm text-gray-500 mb-2">
        <strong>Место: </strong> {{ course.place || 'Не указано' }}
      </p>

      <p class="text-sm text-gray-500 mb-2">
        <strong>Период проведения: </strong>
        {{ formatDate(course.start_date) }} – {{ formatDate(course.end_date) }}
      </p>

      <p class="text-sm mb-1">
        <strong>Цена 1: </strong>
        <span v-if="course.price1 > 0">{{ formatPrice(course.price1) }} ₽</span>
        <span v-else class="text-green-600 font-bold">Бесплатно</span>
      </p>

      <p class="text-sm mb-4">
        <strong>Цена 2: </strong>
        <span v-if="course.price2 > 0">{{ formatPrice(course.price2) }} ₽</span>
        <span v-else class="text-green-600 font-bold">Бесплатно</span>
      </p>

      <p class="text-sm text-gray-500 mb-4">
        <strong>Тип контракта: </strong> {{ course.contract_type || 'Не указан' }}
      </p>
    </div>

    <div class="mt-auto">
      <router-link
        :to="`/courses/${course.id}`"
        class="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
      >
        Подробнее
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const formatDate = (dateStr) => {
  if (!dateStr) return 'Не указано'
  const date = new Date(dateStr)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box; 
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  
  display: box; 
  line-clamp: 3; 
  box-orient: vertical;

  overflow: hidden;
}
</style>
