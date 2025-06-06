<template>
  <div class="register-container">
    <form @submit.prevent="register">
      <input v-model="formData.name" type="text" placeholder="Имя" required />
      <input v-model="formData.email" type="email" placeholder="Email" required />
      <input v-model="formData.password" type="password" placeholder="Пароль" required />
      <input v-model="formData.confirmPassword" type="password" placeholder="Подтвердите пароль" required />
      <input v-model="formData.phone" type="text" placeholder="Телефон" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '@/api/courseApi'

const router = useRouter()
const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: ''
})

const register = async () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    alert('Пароли не совпадают')
    return
  }

  try {
    await registerUser({
      fio: formData.value.name,
      email: formData.value.email,
      password: formData.value.password,
      phone: formData.value.phone
    })
    alert('Регистрация прошла успешно')
    router.push('/login')
  } catch (error) {
    alert('Ошибка при регистрации')
    console.error(error)
  }
}
</script>
