<template>
  <div class="survey-page container">
    <h1 class="page-title">Анкеты</h1>
    <p class="page-description">
      Уважаемые родители и участники программ Детского университета ТувГУ!<br />
      Просим вас уделить несколько минут для заполнения анкет. Это поможет нам улучшить качество образовательных услуг и учитывать ваши пожелания.
    </p>

    <!-- Анкеты -->
    <details class="survey-section" open>
      <summary class="survey-summary">📝 Анкеты для заполнения</summary>
      <ul class="survey-list">
        <li>
          <a href="https://anketolog.ru/s/723180/E1U2YsSl" target="_blank" rel="noopener noreferrer">
            🔗 Анкета по удовлетворенности образовательным процессом
          </a>
        </li>
        <li>
          <a href="https://anketa.tuvsu.ru/detuniver21/" target="_blank" rel="noopener noreferrer">
            🔗 Анкета для родителей: качество дополнительного образования
          </a>
        </li>
        <li>
          <a href="https://anketa.tuvsu.ru/detuniver/" target="_blank" rel="noopener noreferrer">
            🔗 Общая анкета для родителей обучающихся
          </a>
        </li>
      </ul>
    </details>

    <!-- Результаты анкетирования -->
    <details class="survey-section" open>
      <summary class="survey-summary">📊 Результаты анкетирования</summary>
      <ul class="survey-list">
        <li>
          <a href="/docs/результаты анкетирования слушателей.doc" target="_blank" rel="noopener noreferrer">
            📄 Результаты анкетирования слушателей
          </a>
        </li>
        <li>
          <a href="/docs/результаты анкетирования родителей.doc" target="_blank" rel="noopener noreferrer">
            📄 Результаты анкетирования родителей
          </a>
        </li>
      </ul>
    </details>

    <!-- Примечание -->
    <div class="survey-note">
      <p>Все ответы анонимны. Мы благодарим вас за активное участие!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KidsUniversitySurveyPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.survey-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 25px;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #124191;
  text-align: center;
  margin-bottom: 10px;
}

.page-description {
  text-align: center;
  font-size: 16px;
  color: #444;
  margin-bottom: 30px;
  line-height: 1.6;
}

.survey-section {
  background: #f9faff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  margin-bottom: 20px;
}

.survey-summary {
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: #124191;
  user-select: none;
}

.survey-list {
  list-style: none;
  margin-top: 15px;
  padding-left: 20px;
}

.survey-list li {
  margin-bottom: 12px;
}

.survey-list a {
  text-decoration: none;
  font-weight: 500;
  color: #1a73e8;
  transition: color 0.3s ease;
}

.survey-list a:hover {
  text-decoration: underline;
  color: #0f57c4;
}

.survey-note {
  margin-top: 30px;
  text-align: center;
  font-size: 15px;
  color: #555;
  background-color: #f1f5fb;
  padding: 15px;
  border-radius: 6px;
  border: 1px dashed #b5cbe9;
}
</style>
