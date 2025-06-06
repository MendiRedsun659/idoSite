<template>
  <div class="docs-page container">
    <h1 class="page-title">Документы</h1>

    <details class="docs-section" open>
      <summary class="docs-summary">📁 Положения</summary>
      <ul class="docs-list">
        <li><a href="/pdfs/положение о детском университете.pdf" target="_blank" rel="noopener noreferrer">📄 Положение о Детском университете</a></li>
        <li><a href="/pdfs/положение о центре раннего развития.pdf" target="_blank" rel="noopener noreferrer">📄 Положение о Центре раннего развития</a></li>
      </ul>
    </details>

    <!-- Рабочие программы -->
    <details class="docs-section" open>
      <summary class="docs-summary">📚 Рабочие программы</summary>
      <ul class="docs-list">
        <li>
          <a href="/pdfs/рабочая программа мини-школа.pdf" target="_blank" rel="noopener noreferrer">
            📄 ДОП Мини-школа
          </a>
        </li>
      </ul>
    </details>

    <details class="docs-section" open>
      <summary class="docs-summary">📃 Договоры</summary>
      <ul class="docs-list">
        <li><a href="/pdfs/договор детского университета.docx" target="_blank" rel="noopener noreferrer">📄 Договор Детского университета</a></li>
      </ul>
    </details>

    <p class="contact-info">
      Все документы доступны для скачивания. Если у вас возникли вопросы, пожалуйста, свяжитесь с нами:
      <a href="mailto:ido.tgu@mail.ru">ido.tgu@mail.ru</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'KidsUniversityDocsPage',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.docs-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px 25px;
  font-family: 'Roboto', sans-serif;
  color: #2b2b2b;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.1);
  user-select: none;
}

.page-title {
  font-weight: 700;
  font-size: 28px;
  color: #124191;
  margin-bottom: 10px;
  text-align: center;
}

.page-description {
  font-size: 16px;
  color: #444;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
}

.docs-section {
  margin-top: 25px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  background: #f9faff;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 0.05);
  padding: 10px 20px;
}

.docs-summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  color: #124191;
  user-select: none;
  outline: none;
}

.docs-summary:hover {
  color: #0a2f67;
}

.docs-list {
  margin-top: 15px;
  padding-left: 20px;
  list-style: none;
}

.docs-list li {
  margin-bottom: 10px;
}

.docs-list a {
  text-decoration: none;
  color: #124191;
  font-weight: 500;
  transition: color 0.3s ease;
}

.docs-list a:hover {
  color: #0a2f67;
  text-decoration: underline;
}

.contact-info {
  margin-top: 40px;
  font-size: 16px;
  color: #333;
  text-align: center;
}

.contact-info a {
  color: #124191;
  font-weight: 600;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>
