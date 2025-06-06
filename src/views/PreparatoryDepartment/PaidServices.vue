<template>
  <div class="max-w-6xl mx-auto px-5 py-10 font-sans">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-blue-800 mb-2">Программы подготовительного отделения</h1>
    </div>

    <!-- Состояния: загрузка / ошибка / пусто -->
    <div v-if="loading" class="text-center py-10">
      <p class="text-gray-600">Загрузка курсов...</p>
      <div class="mt-4 border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin mx-auto"></div>
    </div>

    <div v-else-if="error" class="text-center py-10 text-red-600">
      {{ error }}
    </div>

    <div v-else-if="services.length === 0" class="text-center text-gray-500">
      Пока нет доступных курсов.
    </div>

    <!-- Сетка карточек курсов -->
    <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        v-for="service in services"
        :key="service.id"
        :course="service"
      />
    </div>

    <!-- Фиксированная кнопка -->
    <div class="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50">
      <router-link
        to="/zayavka"
        class="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
      >
        <span>Оставить заявку</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CourseCard from '@/components/CourseCard.vue'

const services = ref([])
const loading = ref(true)
const error = ref(null)

const fetchServices = async () => {
  try {
    const res = await fetch('http://sign.local:9099/courses/')
    if (!res.ok) throw new Error('Ошибка при получении данных')
    const data = await res.json()

    // Отфильтровать подготовительные курсы
    services.value = data
      .filter(c => c.contract_type === 'lnsh')
      .map(c => ({
        id: c.id,
        name: c.title,
        cost: c.price1 || 0,
        count: c.duration || 8,
        total: (c.price1 || 0) * (c.duration || 8)
      }))
  } catch (err) {
    console.error(err)
    error.value = 'Не удалось загрузить курсы. Попробуйте позже.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchServices)
</script>
