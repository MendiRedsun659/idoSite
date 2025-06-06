<template>
  <div class="paid-services-page max-w-6xl mx-auto px-4 py-12 bg-white rounded-xl shadow">
    <!-- Заголовок -->
    <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">Программы обучения</h2>
    <p class="text-center text-gray-600 mb-8">
      Ознакомьтесь с доступными программами. Выберите подходящую и подайте заявку.
    </p>

    <!-- Карточки программ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CourseCard
        v-for="(program, index) in programs"
        :key="index"
        :title="program.name"
        :price="program.total + ' ₽'"
        :description="`Занятий в месяц: ${program.count || '—'}. Стоимость занятия: ${program.cost || '—'} ₽.`"
      />
    </div>

    <!-- Блок "Начните обучение" -->
    <div class="start-education bg-blue-50 border-l-4 border-blue-500 p-6 mt-12 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-blue-800 mb-3">Начните обучение</h3>
      <p class="mb-4 text-gray-700">
        Если вы уже выбрали программу — оставьте заявку для заключения договора.
        Если остались вопросы, свяжитесь с нами.
      </p>
      <div class="flex justify-center mt-4">
        <a
          href="/zayavka"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          Оставить заявку
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseCard from '@/components/CourseCard.vue'
import { ref } from 'vue'

const programs = ref([
  { name: 'Центр раннего развития', cost: '—', count: '—', total: '10000' },
  { name: 'Мини-школа', cost: 500, count: 8, total: 4000 },
  { name: 'Группа продленного дня 2-4 классы', cost: 380, count: 20, total: 7600 },
  { name: 'Группа продленного дня для 1 классников', cost: 400, count: 20, total: 8000 },
  { name: 'Иностранный язык для младших школьников', cost: 400, count: 8, total: 3200 },
  { name: 'Иностранный язык для школьников 5-8 кл.', cost: 400, count: 8, total: 3200 },
  { name: 'Русский язык для школьников 1-4 классов', cost: 400, count: 8, total: 3200 },
  { name: 'Русский язык для школьников 5-8 классов', cost: 400, count: 8, total: 3200 },
  { name: 'Развитие речи (тувинский язык, русский язык)', cost: 400, count: 8, total: 3200 },
  { name: 'Математика с 1 по 4 кл.', cost: 400, count: 8, total: 3200 },
  { name: 'Математика с 5 по 8 кл.', cost: 400, count: 8, total: 3200 },
  { name: 'Логопедические занятия', cost: 600, count: 8, total: 4800 },
  { name: 'Занятия психолога', cost: 600, count: 8, total: 4800 },
  { name: 'Песочная терапия (сенсорная комната)', cost: 300, count: 8, total: 2400 },
  { name: 'Творческие кружки', cost: 300, count: 8, total: 2400 },
  { name: 'Подготовка к ОГЭ и ЕГЭ', cost: 400, count: 16, total: 6400 }
])
</script>

<style scoped>
.paid-services-page {
  background-color: white;
}
</style>
