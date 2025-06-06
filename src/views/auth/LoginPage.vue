<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Вход в аккаунт</h2>

      <form @submit.prevent="login" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Пароль -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Кнопка -->
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
          >
            Войти
          </button>
        </div>
      </form>

      <!-- Ссылка на регистрацию -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          Нет аккаунта?
          <router-link to="/register" class="font-medium text-blue-600 hover:text-blue-500"> Зарегистрироваться </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/api/courseApi' // ✅ корректный путь

const router = useRouter()

const formData = ref({
  email: '',
  password: ''
})

const login = async () => {
  try {
    const data = await loginUser({
      email: formData.value.email,
      password: formData.value.password
    })

    // Сохранение токена
    localStorage.setItem('access_token', data.access_token)
    console.log('Токен:', data.access_token)

    // Перенаправление
    router.push('/')
  } catch (error) {
    if (error.status === 422 && error.response?.detail) {
      alert('Неверный email или пароль')
      console.error('Ошибка валидации:', error.response.detail)
    } else {
      alert('Произошла ошибка при входе')
      console.error('Ошибка входа:', error)
    }
  }
}
</script>
