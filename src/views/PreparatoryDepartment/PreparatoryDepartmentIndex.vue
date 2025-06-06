<template>
  <div class="preparatory-department">
    
    <!-- Основное содержание - здесь будут отображаться дочерние компоненты -->
    <div class="content">
      <router-view />
    </div>

    <!-- Нижнее меню (дублирует основное для мобильных устройств) -->
    <footer class="bottom-nav">
      <nav>
        <router-link to="/preparatory-department/about">О подготовительном отделении</router-link> |
        <router-link to="/preparatory-department/documents">Документы</router-link> |
        <router-link to="/preparatory-department/schedule">Расписание</router-link> |
        <router-link to="/preparatory-department/paid-services">Платные услуги</router-link> |
        <router-link to="/preparatory-department/surveys">Анкеты</router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PreparatoryDepartmentIndex'
}
</script>

<style scoped>
.preparatory-department {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.nav-menu {
  display: flex;
  flex-direction: column;
}

.nav-link {
  padding: 10px 15px;
  margin: 5px 0;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #e9ecef;
  color: #124191;
}

.nav-link.active {
  background-color: #124191;
  color: white;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 20px;
}

/* Стили для нижнего меню (на мобильных устройствах) */
.bottom-nav {
  display: none;
  padding: 15px;
  background-color: #f8f9fa;
  text-align: center;
  border-top: 1px solid #dee2e6;
}

.bottom-nav a {
  margin: 0 5px;
  color: #2c3e50;
  text-decoration: none;
}

.bottom-nav a:hover {
  color: #124191;
  text-decoration: underline;
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .preparatory-department {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 10px;
  }
  
  .nav-menu {
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .nav-link {
    margin: 0 5px;
    padding: 8px 12px;
  }
  
  .bottom-nav {
    display: block;
  }
}
</style>