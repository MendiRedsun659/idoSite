<template>
  <div class="course-detail-page bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-6xl">
      <div v-if="loading" class="text-center py-10 text-gray-600">Загрузка курса...</div>
      <div v-else-if="error" class="text-center py-10 text-red-600">{{ error }}</div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <!-- Изображение -->
        <div>
          <img
            :src="course.banner_url"
            :alt="course.title || 'Курс'"
            class="w-full h-auto rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        <!-- Информация о курсе -->
        <div>
          <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">{{ course.title }}</h1>

          <p v-if="course.description" class="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
            {{ course.description }}
          </p>

          <div class="space-y-4 mb-8 text-sm text-gray-700">
            <div>
              <strong>Место:</strong> {{ course.place || 'Не указано' }}
            </div>

            <div>
              <strong>Период проведения:</strong> {{ formatDate(course.start_date) }} – {{ formatDate(course.end_date) }}
            </div>

            <div>
              <strong>Цена 1: </strong>
              <span v-if="course.price1 > 0" class="text-purple-700 font-semibold">{{ formatPrice(course.price1) }} ₽</span>
              <span v-else class="text-green-600 font-bold">Бесплатно</span>
            </div>

            <div>
              <strong>Цена 2: </strong>
              <span v-if="course.price2 > 0" class="text-purple-700 font-semibold">{{ formatPrice(course.price2) }} ₽</span>
              <span v-else class="text-green-600 font-bold">Бесплатно</span>
            </div>
          </div>

          <!-- Кнопка назад программная -->
          <button
            @click="goBack"
            class="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 rounded-md text-white hover:from-purple-700 hover:to-orange-600 transition-colors"
          >
            Назад к списку
          </button>

          <button
            @click="signUp"
            class="inline-block mt-4 ml-4 px-6 py-3 bg-green-600 rounded-md text-white hover:bg-green-700 transition-colors"
          >
            Записаться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Импортируем функцию API из отдельного файла
import { fetchCourseById } from '@/api/courseApi.js'

const route = useRoute()
const router = useRouter()

const course = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchCourse = async (id) => {
  try {
    const data = await fetchCourseById(id)
    course.value = data
  } catch (err) {
    console.error(err)
    error.value = 'Не удалось загрузить данные курса. Попробуйте позже.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const courseId = route.params.id
  if (courseId) {
    fetchCourse(courseId)
  } else {
    error.value = 'ID курса не указан'
    loading.value = false
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

const signUp = () => {
  alert(`Запись на курс: ${course.value.title}`)
  // сюда можно добавить логику записи или перехода на форму
}

const goBack = () => {
  router.back()
}
</script>
