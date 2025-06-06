<template>
  <div class="bg-white min-h-screen py-8 px-4 md:px-8 lg:px-16">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      <!-- Левая колонка: содержание -->
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Расписание занятий — Детский университет</h2>

        <!-- Курсы -->
        <div class="mb-10">
          <h3 class="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Очные занятия</h3>
          <div class="flex flex-col gap-2 pl-2">
            <a class="text-blue-600 hover:underline" href="/pdfs/Детский университет очные февраль.pdf" target="_blank">
              📄 Занятия с февраля 2025 года
            </a>
            <a class="text-blue-600 hover:underline" href="/pdfs/Детский университет очные октябрь.pdf" target="_blank">
              📄 Занятия с октября 2025 года
            </a>
          </div>
        </div>

        <!-- Онлайн-курсы -->
        <div class="mb-10">
          <h3 class="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Онлайн-программы</h3>
          <div class="flex flex-col gap-2 pl-2">
            <a class="text-blue-600 hover:underline" href="/pdfs/Детский университет онлайн весна.pdf" target="_blank">
              📄 Онлайн занятия весной 2025
            </a>
            <a class="text-blue-600 hover:underline" href="/pdfs/Детский университет онлайн осень.pdf" target="_blank">
              📄 Онлайн занятия осенью 2025
            </a>
          </div>
        </div>

        <!-- Календарный график -->
        <div class="mb-10">
          <h3 class="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Календарный учебный график</h3>
          <div class="flex flex-col gap-2 pl-2">
            <a class="text-blue-600 hover:underline" href="/pdfs/Календарь детского университета.pdf" target="_blank">
              📄 График на 2024–2025 учебный год
            </a>
          </div>
        </div>

       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KidsUniversitySchedulePage'
}
</script>
