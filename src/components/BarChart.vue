<template>
  <div class="bg-white p-6 rounded shadow">
    <h3 class="text-xl font-bold text-blue-800 mb-4 text-center">Календарь олимпиады</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="stage in stages"
        :key="stage.title"
        class="p-4 border rounded-lg shadow hover:shadow-md transition duration-300"
      >
        <div class="text-blue-600 font-semibold">{{ stage.title }}</div>
        <div class="text-sm text-gray-500 mt-1">{{ stage.date }}</div>
        <div class="mt-2 text-gray-700">{{ stage.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stages = [
  {
    title: 'Регистрация',
    date: '15 сентября — 8 октября 2024',
    description: 'Заполнение заявки на участие через онлайн-форму.'
  },
  {
    title: 'Отборочный этап',
    date: '10 октября — 25 ноября 2024',
    description: 'Проведение заданий в онлайн-формате по предметам.'
  },
  {
    title: 'Проверка работ',
    date: '26 ноября — 10 декабря 2024',
    description: 'Оценка работ жюри и подведение итогов.'
  },
  {
    title: 'Финальный тур',
    date: '15 декабря 2024',
    description: 'Очный тур для лучших участников.'
  }
]
</script>
