<template>
  <div class="docs-page max-w-4xl mx-auto my-10 px-6 py-8 bg-white rounded-xl shadow-md font-sans text-gray-800">
    <h1 class="page-title text-3xl font-bold text-blue-800 text-center mb-6">
      Документы
    </h1>

    <!-- Инструкции -->
    <details class="docs-section mb-5 border border-gray-200 rounded-lg bg-blue-50 overflow-hidden" open>
      <summary class="docs-summary cursor-pointer p-4 text-xl font-bold text-blue-800 hover:text-blue-900 focus:outline-none">
        📋 Инструкции
      </summary>
      <ul class="docs-list px-4 pb-4 space-y-2">
        <li>
          <a 
            href="/pdfs/Инструкция для входа в систему Moodle.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors"
          >
            <span class="mr-2">📄</span> Инструкция для входа в систему Moodle
          </a>
        </li>
      </ul>
    </details>

    <!-- Положения -->
    <details class="docs-section mb-5 border border-gray-200 rounded-lg bg-blue-50 overflow-hidden" open>
      <summary class="docs-summary cursor-pointer p-4 text-xl font-bold text-blue-800 hover:text-blue-900 focus:outline-none">
        📁 Положения
      </summary>
      <ul class="docs-list px-4 pb-4 space-y-2">
        <li>
          <a 
            href="/pdfs/положение о центре довузовской подготовки.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors"
          >
            <span class="mr-2">📄</span> Положение о Центре довузовской подготовки
          </a>
        </li>
        <li>
          <a 
            href="/pdfs/положение о подготовительных курсах.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors"
          >
            <span class="mr-2">📄</span> Положение о подготовительных курсах
          </a>
        </li>
      </ul>
    </details>

    <!-- Рабочие программы -->
    <details class="docs-section mb-5 border border-gray-200 rounded-lg bg-blue-50 overflow-hidden" open>
      <summary class="docs-summary cursor-pointer p-4 text-xl font-bold text-blue-800 hover:text-blue-900 focus:outline-none">
        📚 Рабочие программы
      </summary>
      <div class="px-4 pb-4 space-y-4">
        <div>
          <p class="font-semibold mb-2">Рабочие программы дисциплин по дополнительным общеобразовательным общеразвивающим программам "Подготовка к ЕГЭ", 2024–2025 уч. год:</p>
          <ul class="space-y-2">
            <li v-for="subject in egeSubjects" :key="`ege-${subject.name}`">
              <a 
                :href="`/pdfs/подготовка к егэ по ${subject.file}.pdf`" 
                target="_blank"
                class="flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span class="mr-2">📄</span> {{ subject.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-semibold mb-2">Рабочие программы дисциплин по программе "Подготовка к ОГЭ", 2024–2025 уч. год:</p>
          <ul class="space-y-2">
            <li v-for="subject in ogeSubjects" :key="`oge-${subject.name}`">
              <a 
                :href="`/pdfs/подготовка к огэ по ${subject.file}.pdf`" 
                target="_blank"
                class="flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span class="mr-2">📄</span> {{ subject.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </details>

    <!-- Договор -->
    <details class="docs-section mb-5 border border-gray-200 rounded-lg bg-blue-50 overflow-hidden" open>
      <summary class="docs-summary cursor-pointer p-4 text-xl font-bold text-blue-800 hover:text-blue-900 focus:outline-none">
        📃 Договор
      </summary>
      <ul class="docs-list px-4 pb-4 space-y-2">
        <li>
          <a 
            href="/pdfs/договор подготовительных курсов.docx" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center text-blue-700 hover:text-blue-900 hover:underline transition-colors"
          >
            <span class="mr-2">📄</span> Договор подготовительных курсов
          </a>
        </li>
      </ul>
    </details>

    <!-- Контакт -->
    <p class="contact-info mt-10 text-center text-gray-700">
      Все документы доступны для скачивания. Если у вас возникли вопросы, пожалуйста, свяжитесь с нами:
      <a 
        href="mailto:ido.tgu@mail.ru" 
        class="font-semibold text-blue-700 hover:underline"
      >
        ido.tgu@mail.ru
      </a>
    </p>
  </div>
</template>

<script setup>
const egeSubjects = [
  { name: 'Русский язык', file: 'русскому языку' },
  { name: 'Математика', file: 'математике' },
  { name: 'История', file: 'истории' },
  { name: 'Обществознание', file: 'обществознанию' },
  { name: 'Биология', file: 'биологии' },
  { name: 'Химия', file: 'химии' },
  { name: 'Информатика', file: 'информатике' }
]

const ogeSubjects = [
  { name: 'Русский язык', file: 'русскому' },
  { name: 'Математика', file: 'математике' },
  { name: 'Биология', file: 'биологии' },
  { name: 'Химия', file: 'химии' }
]
</script>

<style>
.docs-summary {
  list-style: none;
}

.docs-summary::-webkit-details-marker {
  display: none;
}
</style>