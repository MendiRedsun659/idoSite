<template>
  <div class="max-w-6xl mx-auto px-5 py-10 font-sans">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-blue-800 mb-2">Программы подготовительных курсов</h1>
    </div>

    <!-- Загрузка / Ошибка -->
    <div v-if="loading" class="text-center py-10">
      <p class="text-gray-600">Загрузка курсов...</p>
      <div class="mt-4 border-t-4 border-blue-500 w-16 h-16 rounded-full animate-spin mx-auto"></div>
    </div>
    <div v-else-if="error" class="text-center py-10 text-red-600">
      {{ error }}
    </div>
    <div v-else-if="courses.length === 0" class="text-center text-gray-500">
      Пока нет доступных курсов.
    </div>

    <!-- Сетка курсов -->
    <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="transformCourse(course)"
      />
    </div>

    

    <!-- Фиксированная кнопка снизу (опционально) -->
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

const courses = ref([])
const loading = ref(true)
const error = ref(null)

const fetchCourses = async () => {
  try {
    const res = await fetch('http://sign.local:9099/courses/')
    if (!res.ok) throw new Error('Ошибка при получении данных')
    const data = await res.json()

    // Только подготовительные курсы
    courses.value = data.filter(c => c.contract_type === 'lsh') //сделать фильтр и чтобы на странице все отображались
  } catch (err) {
    console.error(err)
    error.value = 'Не удалось загрузить курсы. Попробуйте позже.'
  } finally {
    loading.value = false
  }
}

const transformCourse = (raw) => ({
  id: raw.id,
  title: raw.title,
  description: raw.description,
  image: raw.banner_url || '/images/default-course.jpg',
  place: raw.place,
  start_date: raw.start_date,
  end_date: raw.end_date,
  price1: raw.price1 || 0,
  price2: raw.price2 || 0,
  contract_type: raw.contract_type
})

onMounted(() => {
  fetchCourses()
})
</script>
