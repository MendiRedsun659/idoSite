<template>
  <div class="news-cards grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    <div v-for="news in newsItems" :key="news.title" class="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h4 class="font-bold text-lg text-pink-600">{{ news.title }}</h4>
      <p>{{ news.summary }}</p>
    </div>
  </div>
</template>

<script setup>
const newsItems = [
  {
    title: 'Сказочная математика',
    summary: 'Как научить ребёнка решать задачи весело и легко'
  },
  {
    title: 'Азбука для малышей',
    summary: 'Интерактивное обучение чтению и письму'
  },
  {
    title: 'Занимательная наука',
    summary: 'Эксперименты дома с безопасными материалами'
  }
]
</script>