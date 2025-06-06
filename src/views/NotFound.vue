<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Страница не найдена</h2>
    <p>Извините, по этому адресу ничего не найдено.</p>
    <router-link to="/" class="back-home">На главную</router-link>
  </div>
</template>

<script setup>
// Можно оставить пустым или добавить логику отслеживания ошибок
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 72px;
  color: #ff4d4f;
  margin-bottom: 10px;
}

h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #555;
}

.back-home {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #6A0DAD;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.back-home:hover {
  background-color: #9b30ff;
}
</style>
