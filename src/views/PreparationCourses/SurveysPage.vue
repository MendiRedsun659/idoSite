<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-4 py-8 md:px-6">
      <!-- Заголовок страницы -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-blue-800 mb-2">Анкеты</h1>
        <p class="text-gray-600 text-lg">
          Уважаемые родители и участники программ подготовительных курсов!<br />
          Просим вас уделить несколько минут для заполнения анкет. Это поможет нам улучшить качество образовательных услуг и учитывать ваши пожелания.
        </p>
      </div>

      <!-- Анкеты для заполнения -->
      <div class="bg-white rounded-xl p-6 mb-6 border border-blue-200 shadow-sm">
        <details open>
          <summary class="flex items-center cursor-pointer text-xl font-semibold text-blue-700 mb-4">
            <span class="mr-2">📝</span> Анкеты для заполнения
          </summary>
          <ul class="mt-4 space-y-3 pl-6">
            <li>
              <a href="https://anketolog.ru/s/723180/E1U2YsSl" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <span class="mr-2">🔗</span> Анкета по удовлетворенности
              </a>
            </li>
            <li>
              <a href="https://anketa.tuvsu.ru/listeners/" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <span class="mr-2">🔗</span> Анкета для слушателей подготовительных курсов на выявление удовлетворенности обучением
              </a>
            </li>
            <li>
              <a href="https://anketa.tuvsu.ru/listeners/" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <span class="mr-2">🔗</span> Анкета для слушателей подготовительных курсов на выявление мотивации в выборе подготовительных курсов
              </a>
            </li>
            <li>
              <a href="https://anketa.tuvsu.ru/cpkurcov/" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <span class="mr-2">🔗</span> Анкета для слушателей "Оценка качества преподавания на подготовительных курсах"
              </a>
            </li>
          </ul>
        </details>
      </div>

      <!-- Результаты анкетирования -->
      <div class="bg-white rounded-xl p-6 mb-6 border border-blue-200 shadow-sm">
        <details open>
          <summary class="flex items-center cursor-pointer text-xl font-semibold text-blue-700 mb-4">
            <span class="mr-2">📊</span> Результаты анкетирования
          </summary>
          <ul class="mt-4 space-y-3 pl-6">
            <li>
              <a href="/docs/результаты анкетирования слушателей.doc" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <span class="mr-2">📄</span> Результаты анкетирования слушателей
              </a>
            </li>
            <li>
              <a href="/docs/результаты анкетирования родителей.doc" target="_blank" rel="noopener noreferrer"
                class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                <span class="mr-2">📄</span> Результаты анкетирования родителей
              </a>
            </li>
          </ul>
        </details>
      </div>

      <!-- Примечание -->
      <div class="bg-blue-50 rounded-lg p-4 text-center text-blue-800 border border-blue-200">
        <p>Все ответы анонимны. Мы благодарим вас за активное участие!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Логика компонента (если требуется)
</script>
