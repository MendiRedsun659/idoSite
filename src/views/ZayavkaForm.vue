<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
    <h1 class="text-2xl font-bold mb-6 text-center">Оставить заявку</h1>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Основные данные -->
      <div>
        <label class="block font-semibold mb-1">ФИО</label>
        <input v-model="form.fio" type="text" required placeholder="Фамилия Имя Отчество"
          class="w-full border rounded px-3 py-2" />
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <label class="block font-semibold mb-1">Email</label>
          <input v-model="form.email" type="email" required placeholder="example@mail.com"
            class="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label class="block font-semibold mb-1">Телефон</label>
          <input v-model="form.phone" type="tel" required placeholder="+7 (___) ___-__-__"
            class="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <!-- Паспорт -->
      <fieldset class="border rounded p-4">
        <legend class="font-semibold text-blue-700">Паспорт родителя</legend>
        <div class="grid sm:grid-cols-2 gap-4 mt-2">
          <input v-model="form.passport.series" type="text" placeholder="Серия" class="border rounded px-3 py-2" />
          <input v-model="form.passport.number" type="text" placeholder="Номер" class="border rounded px-3 py-2" />
          <input v-model="form.passport.issued_by" type="text" placeholder="Кем выдан"
            class="border rounded px-3 py-2 col-span-2" />
          <input v-model="form.passport.issued_at" type="date" class="border rounded px-3 py-2 col-span-2" />
        </div>
      </fieldset>

      <!-- Адрес -->
      <div>
        <label class="block font-semibold mb-1">Адрес</label>
        <input v-model="form.addresses[0].value" type="text" placeholder="Адрес проживания"
          class="w-full border rounded px-3 py-2" />
      </div>

      <!-- Дети -->
      <fieldset class="border rounded p-4">
        <legend class="font-semibold text-blue-700">Данные ребёнка</legend>
        <input v-model="form.children[0].fio" type="text" placeholder="ФИО ребёнка"
          class="w-full border rounded px-3 py-2 mb-2" />
        <input v-model="form.children[0].birthdate" type="date" class="w-full border rounded px-3 py-2 mb-2" />

        <div class="mb-2">
          <label class="block font-semibold mb-1">Тип документа</label>
          <select v-model="form.children[0].passport.type" class="w-full border rounded px-3 py-2">
            <option value="birth_certificate">Свидетельство о рождении</option>
            <option value="passport">Паспорт</option>
          </select>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <input v-model="form.children[0].passport.series" type="text" placeholder="Серия"
            class="border rounded px-3 py-2" />
          <input v-model="form.children[0].passport.number" type="text" placeholder="Номер"
            class="border rounded px-3 py-2" />
          <input v-model="form.children[0].passport.issued_by" type="text" placeholder="Кем выдан"
            class="border rounded px-3 py-2 col-span-2" />
          <input v-model="form.children[0].passport.issued_at" type="date"
            class="border rounded px-3 py-2 col-span-2" />
        </div>
      </fieldset>

      <!-- Курс -->
      <div>
        <label class="block font-semibold mb-1">Курс</label>
        <select v-model="form.course_id" required class="w-full border rounded px-3 py-2">
          <option disabled value="">Выберите курс</option>
          <option v-for="course in courses" :key="course.id" :value="course.id">
            {{ course.contract_type }}
          </option>
        </select>
      </div>

      <!-- Комментарий -->
      <div>
        <label class="block font-semibold mb-1">Комментарий</label>
        <textarea v-model="form.comment" rows="3" placeholder="Дополнительная информация"
          class="w-full border rounded px-3 py-2" />
      </div>

      <!-- Кнопка -->
      <button type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">Отправить
        заявку</button>

      <p v-if="successMessage" class="mt-4 text-green-600 font-semibold text-center">
        {{ successMessage }}
      </p>

      <!-- Модальное окно подтверждения кода -->
      <div v-if="showCodeForm" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
          <h2 class="text-xl font-bold mb-4 text-center text-blue-700">Подтверждение кода</h2>
          <p class="mb-2 text-sm text-gray-600">{{ infoMessage }}</p>
          <input v-model="confirmationCode" type="text" placeholder="Введите код из письма"
            class="w-full border rounded px-3 py-2 mb-4" />
          <div class="flex gap-2">
            <button @click="confirmCode"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Подтвердить</button>
            <button @click="showCodeForm = false" class="flex-1 border border-gray-400 py-2 rounded">Отмена</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { fetchCourses, submitApplication, confirmApplicationCode } from '@/api/courseApi'

const form = reactive({
  fio: '',
  email: '',
  phone: '',
  passport: {
    series: '',
    number: '',
    issued_by: '',
    issued_at: ''
  },
  addresses: [{ type: 'registration', value: '' }],
  children: [
    {
      fio: '',
      birthdate: '',
      passport: {
        type: 'birth_certificate',
        series: '',
        number: '',
        issued_by: '',
        issued_at: ''
      }
    }
  ],
  course_id: '',
  comment: ''
})

const successMessage = ref('')
const courses = ref([])
const showCodeForm = ref(false)
const confirmationCode = ref('')
const infoMessage = ref('')
const userId = ref(null)

onMounted(async () => {
  try {
    courses.value = await fetchCourses()
  } catch (error) {
    console.error('Не удалось загрузить курсы:', error)
  }
})

async function handleSubmit() {
  try {
    const data = await submitApplication(form)
    infoMessage.value = data.msg || 'Заявка создана.'
    userId.value = data.user_id
    showCodeForm.value = true
  } catch (error) {
    alert('Произошла ошибка при отправке формы. Попробуйте позже.')
    console.error(error)
  }
}

async function confirmCode() {
  try {
    await confirmApplicationCode(userId.value, confirmationCode.value)
    successMessage.value = 'Код подтверждён.'
    showCodeForm.value = false
    confirmationCode.value = ''

    Object.assign(form, {
      fio: '',
      email: '',
      phone: '',
      passport: { series: '', number: '', issued_by: '', issued_at: '' },
      addresses: [{ type: 'registration', value: '' }],
      children: [
        {
          fio: '',
          birthdate: '',
          passport: { type: 'birth_certificate', series: '', number: '', issued_by: '', issued_at: '' }
        }
      ],
      course_id: '',
      comment: ''
    })
  } catch (error) {
    alert(error.message)
    console.error(error)
  }
}
</script>