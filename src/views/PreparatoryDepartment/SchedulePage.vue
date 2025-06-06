<template>
  <v-container fluid class="schedule-page-layout">
    <v-row>
      <!-- Основная колонка с расписанием -->
      <v-col cols="12" md="8" class="mx-auto">
        <div class="schedule-content">
          <h2 class="centered-title">Расписание подготовительного отделения</h2>

          <div class="schedule-section">
            <h3 class="section-title">Очная форма обучения</h3>
            <div class="link-list">
              <a href="/pdfs/prep-schedule-fulltime-nov2024.pdf" target="_blank">
                📄 Ноябрь 2024 - Март 2025 (основной поток)
              </a>
              <a href="/pdfs/prep-schedule-fulltime-feb2025.pdf" target="_blank">
                📄 Февраль - Июнь 2025 (дополнительный набор)
              </a>
            </div>
          </div>

          <div class="schedule-section">
            <h3 class="section-title">Заочная форма обучения</h3>
            <div class="link-list">
              <a href="/pdfs/prep-schedule-parttime-nov2024.pdf" target="_blank">
                📄 Ноябрь 2024 - Апрель 2025 (основной поток)
              </a>
            </div>
          </div>

          <div class="schedule-section">
            <h3 class="section-title">Интенсивные подготовительные курсы</h3>
            <div class="link-list">
              <a href="/pdfs/prep-intensive-jan2025.pdf" target="_blank">
                📄 Январь - Февраль 2025 (предэкзаменационный интенсив)
              </a>
              <a href="/pdfs/prep-intensive-may2025.pdf" target="_blank">
                📄 Май - Июнь 2025 (летний интенсив)
              </a>
            </div>
          </div>

          <div class="schedule-section">
            <h3 class="section-title">Расписание вступительных испытаний</h3>
            <div class="link-list">
              <a href="/pdfs/prep-entrance-schedule.pdf" target="_blank">
                📄 График вступительных испытаний 2025
              </a>
            </div>
          </div>

          <div class="schedule-section">
            <h3 class="centered-title">Календарный учебный график</h3>
            <div class="link-list">
              <a href="/pdfs/prep-calendar-2024-2025.pdf" target="_blank">
                📄 Календарный график на 2024-2025 учебный год
              </a>
            </div>
          </div>

          <div class="current-info">
            <p>Сегодня: {{ today }} | Текущее время: {{ currentTime }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PreparatoryDepartmentSchedule',
  data() {
    return {
      today: new Date().toLocaleDateString(),
      currentTime: ''
    }
  },
  mounted() {
    this.updateTime()
    this.interval = setInterval(this.updateTime, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    updateTime() {
      const now = new Date()
      this.currentTime = now.toLocaleTimeString()
      this.today = now.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.schedule-content {
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Roboto', sans-serif;
  max-width: 900px;
  margin: 0 auto;
}

.centered-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: #124191;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.schedule-section {
  background: #f9faff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin-top: 25px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #d0d0d0;
}

.link-list a {
  display: block;
  margin: 12px 0;
  padding: 8px 12px;
  color: #1a73e8;
  font-weight: 500;
  text-decoration: none;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.link-list a:hover {
  background-color: #e8f0fe;
  text-decoration: none;
  transform: translateX(5px);
}

.current-info {
  margin-top: 30px;
  padding: 12px;
  background-color: #f0f7ff;
  border-radius: 6px;
  text-align: center;
  font-size: 0.95rem;
  color: #555;
}

@media (max-width: 768px) {
  .schedule-content {
    padding: 15px;
  }
  
  .centered-title {
    font-size: 22px;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
}
</style>