<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 space-y-6">
    <!-- Заголовок с анимацией -->
    <h1 class="text-4xl font-bold text-center text-blue-800 mb-8 animate-fade-in">
      {{ msg }}
    </h1>

    <!-- Карточка с кнопкой -->
    <div class="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <button 
        @click="count++"
        class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Count is {{ count }}
      </button>
      <p class="mt-4 text-gray-600">
        Edit <code class="bg-gray-100 px-2 py-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <!-- Тестовый блок Tailwind -->
    <div class="bg-blue-500 text-white p-4 rounded-lg text-center">
      Tailwind CSS работает успешно!
    </div>

    <!-- Ссылки на документацию -->
    <div class="grid gap-4 md:grid-cols-3">
      <a 
        href="https://vuejs.org/guide/quick-start.html#local" 
        target="_blank"
        class="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors"
      >
        <h3 class="font-semibold text-blue-700">Create Vue</h3>
        <p class="text-sm text-gray-600 mt-1">Официальный стартер Vue + Vite</p>
      </a>
      
      <a 
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" 
        target="_blank"
        class="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors"
      >
        <h3 class="font-semibold text-blue-700">IDE Support</h3>
        <p class="text-sm text-gray-600 mt-1">Руководство по поддержке IDE</p>
      </a>
      
      <a 
        href="https://tailwindcss.com/docs/installation" 
        target="_blank"
        class="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors"
      >
        <h3 class="font-semibold text-blue-700">Tailwind Docs</h3>
        <p class="text-sm text-gray-600 mt-1">Документация Tailwind CSS</p>
      </a>
    </div>

    <p class="text-center text-gray-500 text-sm">
      Нажмите на логотипы Vite и Vue для получения дополнительной информации
    </p>
  </div>
</template>

<style>
/* Анимация для заголовка */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
</style>