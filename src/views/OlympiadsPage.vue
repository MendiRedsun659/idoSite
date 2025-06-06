<template>
  <div class="py-10 max-w-6xl mx-auto px-4 bg-white min-h-screen">
    <h1 class="text-3xl font-bold text-center text-blue-800 mb-6">Олимпиада ТувГУ для школьников</h1>
    <p class="text-center text-gray-700 mb-8">
      Приглашаем учащихся 4–11 классов принять участие в олимпиаде по различным предметам. Развивайте свои способности и достигайте новых высот!
    </p>

    <!-- Фильтры -->
    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      <select v-model="selectedSubject" class="border border-gray-300 rounded px-4 py-2">
        <option value="">Все предметы</option>
        <option v-for="subject in subjects" :key="subject" :value="subject">{{ subject }}</option>
      </select>
      <select v-model="selectedGrade" class="border border-gray-300 rounded px-4 py-2">
        <option value="">Все классы</option>
        <option v-for="grade in grades" :key="grade" :value="grade">{{ grade }} класс</option>
      </select>
    </div>

    <!-- Список олимпиад -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <OlympiadCard
        v-for="olympiad in filteredOlympiads"
        :key="olympiad.id"
        :olympiad="olympiad"
      />
    </div>

    <!-- Результаты -->
    <div class="mt-10">
      <h2 class="text-2xl font-bold text-center text-blue-800 mb-6">Результаты</h2>
      <ul class="list-disc list-inside">
        <li v-for="result in results" :key="result.id">
          <a :href="result.link" class="text-blue-600 hover:underline">{{ result.title }}</a>
        </li>
      </ul>
    </div>

    <!-- Документы -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-center text-blue-800 mb-6">Документы</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><a href="https://tuvsu.ru/upload/Информационное_письмо.pdf" target="_blank" class="text-blue-600 hover:underline">Информационное письмо</a></li>
        <li><a href="https://tuvsu.ru/upload/Инструкция_по_проведению.pdf" target="_blank" class="text-blue-600 hover:underline">Инструкция по проведению</a></li>
        <li><a href="https://tuvsu.ru/upload/Форма_заявки.docx" target="_blank" class="text-blue-600 hover:underline">Форма заявки</a></li>
        <li><a href="https://tuvsu.ru/upload/Согласие_на_обработку_данных.pdf" target="_blank" class="text-blue-600 hover:underline">Согласие на обработку персональных данных</a></li>
      </ul>
    </div>

    <!-- Интерактивный график -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-center text-blue-800 mb-6">График проведения олимпиады</h2>
      <BarChart />
    </div>

    <!-- Электронные дипломы -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-center text-blue-800 mb-6">Электронные дипломы</h2>
      <ul class="list-disc list-inside text-gray-700">
        <li><a href="https://tuvsu.ru/.../diplomy-shkolnikov.pdf" class="text-blue-600 hover:underline" target="_blank">Для школьников</a></li>
        <li><a href="https://tuvsu.ru/.../diplomy-prepodavateley.pdf" class="text-blue-600 hover:underline" target="_blank">Для преподавателей</a></li>
      </ul>
    </div>

    <!-- Федеральная олимпиада -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-center text-blue-800 mb-6">Федеральная олимпиада школьников</h2>
      <p class="text-center text-gray-700">
        Ознакомьтесь с условиями участия в федеральной олимпиаде на странице:
        <a href="https://tuvsu.ru/dop-obrazovanie/olimpiada-dlya-shkolnikov/federalnaya-olimpiada-shkolnikov/"
           target="_blank" class="text-blue-600 hover:underline">Федеральная олимпиада школьников</a>
      </p>
    </div>

    <!-- Кнопка "Подать заявку" -->
    <div class="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50">
      <router-link
        to="/olympiad-form"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
      >
        Подать заявку
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import OlympiadCard from '@/components/OlympiadCard.vue'
import BarChart from '@/components/BarChart.vue' // компонент с графиком

const selectedSubject = ref('')
const selectedGrade = ref('')
const subjects = ['Математика', 'Физика', 'Биология', 'История']
const grades = ['4', '5', '6', '7', '8', '9', '10', '11']

const olympiads = ref([
  { id: 1, subject: 'Математика', grade: '8', stage: 'Отборочный', dates: '15.10 – 08.01', link: '#' },
  { id: 2, subject: 'Биология', grade: '11', stage: 'Заключительный', dates: '10.02 – 20.02', link: '#' }
])

const results = ref([
  { id: 1, title: 'Результаты по математике (8 класс)', link: '#' },
  { id: 2, title: 'Результаты по биологии (11 класс)', link: '#' }
])

const filteredOlympiads = computed(() =>
  olympiads.value.filter(o =>
    (!selectedSubject.value || o.subject === selectedSubject.value) &&
    (!selectedGrade.value || o.grade === selectedGrade.value)
  )
)
</script>
