<template>
  <div class="docs-page container">
    <h1 class="page-title">Документы подготовительного отделения</h1>

    <details class="docs-section" open>
      <summary class="docs-summary">📁 Нормативные документы</summary>
      <ul class="docs-list">
        <li><a href="/pdfs/polozhenie-o-podgotovitelnom-otdelenii.pdf" target="_blank" rel="noopener noreferrer">📄 Положение о подготовительном отделении</a></li>
        <li><a href="/pdfs/pravila-priema-na-podgotovitelnoe-otdelenie.pdf" target="_blank" rel="noopener noreferrer">📄 Правила приема на подготовительное отделение</a></li>
      </ul>
    </details>

    <details class="docs-section" open>
      <summary class="docs-summary">📚 Учебные программы</summary>
      <ul class="docs-list">
        <li>
          <a href="/pdfs/programma-podgotovki-po-matematike.pdf" target="_blank" rel="noopener noreferrer">
            📄 Программа подготовки по математике
          </a>
        </li>
        <li>
          <a href="/pdfs/programma-podgotovki-po-russkomu-yazyku.pdf" target="_blank" rel="noopener noreferrer">
            📄 Программа подготовки по русскому языку
          </a>
        </li>
        <li>
          <a href="/pdfs/programma-podgotovki-po-obshestvoznaniyu.pdf" target="_blank" rel="noopener noreferrer">
            📄 Программа подготовки по обществознанию
          </a>
        </li>
      </ul>
    </details>

    <details class="docs-section" open>
      <summary class="docs-summary">📃 Формы документов</summary>
      <ul class="docs-list">
        <li><a href="/pdfs/obrazec-zayavleniya.docx" target="_blank" rel="noopener noreferrer">📄 Образец заявления о приеме</a></li>
        <li><a href="/pdfs/dogovor-na-obuchenie.docx" target="_blank" rel="noopener noreferrer">📄 Договор на обучение (для заочной формы)</a></li>
      </ul>
    </details>

    <p class="contact-info">
      Все документы доступны для скачивания. По вопросам подготовительного отделения обращайтесь:
      <a href="mailto:podgotovka@tuvsu.ru">podgotovka@tuvsu.ru</a> или по телефону: 8-394-22-2-26-72
    </p>
  </div>
</template>

<script>
export default {
  name: 'PreparatoryDepartmentDocsPage',
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
  line-height: 1.6;
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