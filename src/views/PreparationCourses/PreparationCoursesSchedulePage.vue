<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-xl shadow-md p-6 font-sans">
      <!-- Основной заголовок -->
             <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-blue-800 mb-2">Расписание курсов</h1></div>

      <!-- Блоки расписания -->
      <div class="space-y-6">
        <!-- 3-месячные ЕГЭ -->
        <div class="bg-blue-50 p-4 rounded-lg border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Расписание занятий трёхмесячных курсов "Подготовка к ЕГЭ" 2024–2025</h3>
          <div class="space-y-2">
            <a href="/pdfs/ЕГЭ трехмесячные февраль-март 2025.pdf" target="_blank" 
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> февраль–апрель 2025 год
            </a>
            <a href="/pdfs/ЕГЭ трехмесячный окт-дек 2025.pdf" target="_blank"
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> октябрь–декабрь 2025 год
            </a>
          </div>
        </div>

        <!-- Экспресс ЕГЭ -->
        <div class="bg-blue-50 p-4 rounded-lg border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Экспресс-курсы "Подготовка к ЕГЭ"</h3>
          <div class="space-y-2">
            <a href="/pdfs/ЕГЭ экспресс март 2025.pdf" target="_blank"
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> март 2025 год
            </a>
          </div>
        </div>

        <!-- 3-месячные ОГЭ -->
        <div class="bg-blue-50 p-4 rounded-lg border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Трёхмесячные курсы "Подготовка к ОГЭ"</h3>
          <div class="space-y-2">
            <a href="/pdfs/трехмесячный огэ февраль-март.pdf" target="_blank"
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> февраль–апрель 2025 год
            </a>
            <a href="/pdfs/ОГЭ трехмесячный октябрь-декабрь.pdf" target="_blank"
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> октябрь–декабрь 2025 год
            </a>
          </div>
        </div>

        <!-- Экспресс ОГЭ -->
        <div class="bg-blue-50 p-4 rounded-lg border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Экспресс-курсы "Подготовка к ОГЭ"</h3>
          <div class="space-y-2">
            <a href="/pdfs/ОГЭ экспресс март 2025.pdf" target="_blank"
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> март 2025 год
            </a>
          </div>
        </div>

        <!-- Календарь -->
        <div class="bg-blue-50 p-4 rounded-lg border border-gray-200">
          <h3 class="text-xl font-bold text-center text-blue-800 mb-3">Календарный учебный график</h3>
          <div class="space-y-2">
            <a href="/pdfs/Календарный учебный график.pdf" target="_blank"
               class="flex items-center text-blue-600 hover:text-blue-800 hover:underline">
              <span class="mr-2">📄</span> Календарный график на 2024–2025 уч.год
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const today = ref(new Date().toISOString().substring(0, 10))
const currentTime = ref('')
let interval

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString()
}

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>