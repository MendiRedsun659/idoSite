<template>
  <div class="faq-page bg-gray-50 py-12 px-4">
    <!-- Заголовок -->
    <div class="text-center mb-10 opacity-0 animate-fadeInUp">
      <h1 class="text-3xl font-bold text-gray-800">Часто задаваемые вопросы</h1>
      <p class="mt-3 text-gray-600">Если у вас остались вопросы — заполните форму ниже.</p>
    </div>

    <!-- FAQ -->
    <div class="max-w-3xl mx-auto mb-16 opacity-0 animate-fadeInUp" style="animation-delay: 0.3s">
      <div v-for="(item, i) in faqItems" :key="i" class="mb-4">
        <details class="group bg-white p-5 rounded-lg shadow hover:shadow-md transition-shadow">
          <summary class="flex items-center cursor-pointer list-none text-left font-medium text-lg text-gray-800">
            <span class="mr-3 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </span>
            {{ item.question }}
            <span class="ml-auto group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </summary>
          <p class="mt-3 text-gray-600 pl-9">{{ item.answer }}</p>
        </details>
      </div>
    </div>

    <!-- Форма вопроса -->
    <div class="max-w-2xl mx-auto mt-12 opacity-0 animate-fadeInUp" style="animation-delay: 0.6s">
      <div class="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 rounded-xl shadow-lg text-white">
        <h2 class="text-2xl font-bold text-center mb-6">Задать свой вопрос</h2>
        <form @submit.prevent="submitQuestion" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium mb-1">Ваше имя</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none"
              placeholder="Иван Иванов"
            />
            <small v-if="errors.name" class="text-red-200">{{ errors.name }}</small>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none"
              placeholder="example@email.com"
            />
            <small v-if="errors.email" class="text-red-200">{{ errors.email }}</small>
          </div>

          <div>
            <label for="question" class="block text-sm font-medium mb-1">Ваш вопрос</label>
            <textarea
              id="question"
              v-model="formData.question"
              rows="4"
              required
              class="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none"
              placeholder="Введите ваш вопрос..."
            ></textarea>
            <small v-if="errors.question" class="text-red-200">{{ errors.question }}</small>
          </div>

          <button
            type="submit"
            class="w-full bg-white text-purple-700 font-semibold py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Отправить вопрос
          </button>
        </form>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="dialogVisible" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div class="bg-white p-8 rounded-xl max-w-md text-center shadow-2xl animate-bounceIn">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16 text-green-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 class="text-xl font-bold mb-2">Спасибо за ваш вопрос!</h3>
        <p class="mb-6">Мы ответим вам на почту в ближайшее время.</p>
        <button
          @click="dialogVisible = false"
          class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          Хорошо
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  question: ''
})

const dialogVisible = ref(false)
const errors = ref({})

const faqItems = [
  {
    question: 'Как записаться на занятия?',
    answer: 'Для записи необходимо подать заявку через сайт или обратиться к нам по телефону.'
  },
  {
    question: 'С какого возраста можно обучаться?',
    answer: 'Программы доступны для школьников от 7 до 17 лет.'
  },
  {
    question: 'Есть ли пробное занятие?',
    answer: 'Да! Первое занятие проводится бесплатно для ознакомления.'
  },
  {
    question: 'Какие предметы вы преподаете?',
    answer: 'Математика, русский язык, информатика, физика, химия и другие.'
  },
  {
    question: 'Как проходят занятия?',
    answer: 'Онлайн и офлайн форматы. Групповые и индивидуальные занятия.'
  }
]

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

  if (!formData.value.question.trim()) {
    errors.value.question = 'Пожалуйста, введите ваш вопрос'
    valid = false
  }

  return valid
}

const submitQuestion = async () => {
  if (!validateForm()) return

  const serviceID = 'service_ваш_id'
  const templateID = 'template_ваш_template'
  const userID = 'ваш_user_id'

  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    question: formData.value.question,
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
      formData.value.name = ''
      formData.value.email = ''
      formData.value.question = ''
      errors.value = {}
      dialogVisible.value = true
    } else {
      alert('Ошибка при отправке формы')
    }
  } catch (err) {
    console.error('Ошибка:', err)
    alert('Не удалось отправить вопрос. Попробуйте позже.')
  }
}
</script>

<style scoped>
.animate-fadeInUp {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounceIn {
  animation: bounceIn 0.5s ease forwards;
}

@keyframes bounceIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>