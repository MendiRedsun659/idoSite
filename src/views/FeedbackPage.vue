<template>
  <div class="feedback-page bg-gray-50 py-12 px-4">
    <!-- Заголовок -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-gray-800">Отзывы</h1>
      <p class="mt-4 text-gray-600">Поделитесь своим мнением — это поможет нам становиться лучше!</p>
    </div>

    <!-- Форма отзыва -->
    <div class="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg mb-16">
      <h2 class="text-xl font-bold mb-6">Оставить отзыв</h2>
      <form @submit.prevent="submitFeedback" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Иван Иванов"
          />
          <small v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</small>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="example@email.com"
          />
          <small v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</small>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Ваш отзыв</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Напишите ваш отзыв..."
          ></textarea>
          <small v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</small>
        </div>

        <button
          type="submit"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 transform hover:scale-105"
        >
          Отправить отзыв
        </button>
      </form>
    </div>

    <!-- Список отзывов -->
    <div class="max-w-4xl mx-auto mt-8">
      <h2 class="text-xl font-bold mb-6 text-center">Отзывы пользователей</h2>

      <div v-if="feedbacks.length === 0" class="text-center text-gray-500 mb-8">
        Пока нет отзывов. Будьте первым!
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(item, index) in feedbacks" :key="index" class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
          <h3 class="font-bold text-lg text-gray-800">{{ item.name }}</h3>
          <p class="mt-2 text-gray-700">{{ item.text }}</p>
        </div>
      </div>
    </div>

    <!-- Уведомление об успешной отправке -->
    <div v-if="showToast" class="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInUp z-50">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})
const showToast = ref(false)
const toastMessage = ref('')

const feedbacks = ref([
  {
    name: 'Анна',
    text: 'Отличные преподаватели! Ребенок с удовольствием занимается.'
  },
  {
    name: 'Сергей',
    text: 'Хорошая организация занятий. Большое спасибо!'
  }
])

const validateForm = () => {
  let valid = true
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Имя обязательно'
    valid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.match(emailRegex)) {
    errors.value.email = 'Введите корректный email'
    valid = false
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Пожалуйста, введите текст отзыва'
    valid = false
  }

  return valid
}

const submitFeedback = async () => {
  if (!validateForm()) return

  const serviceID = 'service_ais9o8a'
  const templateID = 'template_fa94y7h'
  const userID = '_4SHIwy2UwCB7seds'

  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
    to_email: 'cmm972986@tuvsu.ru'
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: templateParams
      })
    })

    if (response.status === 200) {
      feedbacks.value.unshift({
        name: formData.value.name,
        text: formData.value.message
      })

      formData.value.name = ''
      formData.value.email = ''
      formData.value.message = ''
      errors.value = {}
      showNotification('Спасибо за отзыв!')
    } else {
      showNotification('Ошибка при отправке отзыва', true)
    }
  } catch (err) {
    console.error('Ошибка:', err)
    showNotification('Не удалось отправить отзыв', true)
  }
}

const showNotification = (message, isError = false) => {
  toastMessage.value = message
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 3000)
}
</script>

<style scoped>
.animate-fadeInUp {
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>