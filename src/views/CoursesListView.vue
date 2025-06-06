<template>
  <div class="courses-list px-4 py-8 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Список курсов</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CourseCard
  v-for="course in courses"
  :key="course.id"
  :course="course"
  class="cursor-pointer"
/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CourseCard from '@/components/CourseCard.vue'

const router = useRouter()
const courses = ref([])

const goToCourse = (id) => {
  router.push({ name: 'CourseDetail', params: { id } })
}

// Загрузка данных с API при монтировании компонента
onMounted(async () => {
  try {
    const { data } = await axios.get('http://sign.local:9099/courses/')
    courses.value = data
  } catch (error) {
    console.error('Ошибка загрузки курсов:', error)
  }
})
</script>
