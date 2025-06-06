<template>
  <!-- Карусель -->
  <div class="carousel-wrapper px-4">
    <Carousel 
      :items-to-show="1" 
      :wrap-around="true"
      autoplay
      :transition="800"
      class="rounded-xl overflow-hidden shadow-lg"
    >
      <Slide v-for="(banner, index) in banners" :key="index">
        <div class="carousel-content h-[400px] md:h-[600px] relative overflow-hidden">
          <img 
            :src="banner.image" 
            :alt="'Баннер ' + (index + 1)" 
            class="w-full h-full object-cover"
          />
          <div class="carousel-caption absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 class="caption-title text-3xl md:text-4xl font-bold mb-2">{{ banner.title }}</h3>
            <p class="caption-text text-base md:text-lg opacity-90">{{ banner.description }}</p>
            <button class="mt-4 bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors">
              Записаться
            </button>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <!-- Два блока под каруселью -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 px-4 max-w-6xl mx-auto">
    <!-- Блок "Записаться" -->
    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div class="flex items-center justify-center mb-4">
        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png " alt="Иконка обучения" class="w-12 h-12" />
      </div>
      <h3 class="text-2xl font-bold text-center mb-4">Запишитесь на наши курсы</h3>
      <p class="mb-6 text-center text-gray-700">
        Летние школлы ждут вас!
      </p>
      <div class="flex justify-center">
        <router-link to="/register" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Зарегистрироваться
        </router-link>
      </div>
    </div>

    <!-- Слайдер новостей -->
    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 class="text-2xl font-bold mb-4 text-center">Последние новости</h3>

      <!-- Пример слайдера новостей -->
      <div class="news-slider space-y-4">
        <div v-for="news in newsItems" :key="news.title" class="border-b pb-3 last:border-b-0">
          <h4 class="font-semibold text-lg">{{ news.title }}</h4>
          <p class="text-sm text-gray-600">{{ news.summary }}</p>
        </div>
      </div>

      <!-- Кнопка "Все новости" -->
      <div class="flex justify-end mt-6">
        <router-link to="/news" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Все новости →
        </router-link>
      </div>
    </div>
  </div>

  <!-- Полезные ресурсы -->
  <section class="useful-links-section mt-16 px-4">
    <h2 class="section-title text-3xl md:text-4xl font-extrabold text-center mb-2">Полезные ресурсы</h2>
    <div class="useful-links-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <a
        v-for="(link, index) in usefulLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        class="glass-card relative group rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
        :style="{ '--hover-color': link.color }"
      >
        <div class="card-icon mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
          <img :src="link.image" :alt="link.title" class="w-10 h-10 object-contain" />
        </div>
        <div class="card-content">
          <h3 class="text-xl font-bold mb-2 text-gray-800">{{ link.title }}</h3>
          <p class="text-sm text-gray-600">{{ link.description }}</p>
        </div>
        <div class="card-glow"></div>
      </a>
    </div>
  </section>

  
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import AppFooter from '@/components/AppFooter.vue'

// Баннеры
const banners = ref([
  {
    image: new URL('@/assets/banner1.png', import.meta.url).href,
    title: 'Играем и учимся!',
    description: 'Курсы для дошкольников и школьников'
  },
  {
    image: new URL('@/assets/news2.jpg', import.meta.url).href,
    title: 'Развиваемся вместе',
    description: 'Образование через мультфильмы и игры'
  },
  {
    image: new URL('@/assets/news3.jpg', import.meta.url).href,
    title: 'Творческий подход',
    description: 'Уроки, которые детям интересны'
  }
])

// Новости (пример)
const newsItems = [
  {
    title: 'Новые курсы по математике',
    summary: 'Созданы интерактивные курсы для начальных классов'
  },
  {
    title: 'Программа развития 2025',
    summary: 'Опубликованы обновления по детскому образованию'
  },
  {
    title: 'Фестиваль детского творчества',
    summary: 'Открыт приём заявок на участие'
  }
]

// Полезные ссылки
const usefulLinks = ref([
  {
    url: 'https://edu.gov.ru/ ',
    image: new URL('@/assets/edu.png', import.meta.url).href,
    title: 'Минпросвещения РФ',
    description: 'Официальный портал министерства',
    color: '#f7c600'
  },
  {
    url: 'https://minobrnauki.gov.ru/ ',
    image: new URL('@/assets/minobr.png', import.meta.url).href,
    title: 'Минобрнауки РФ',
    description: 'Наука и высшее образование',
    color: '#ff6b6b'
  },
  {
    url: 'https://obrnadzor.gov.ru/ ',
    image: new URL('@/assets/obrnadzor.png', import.meta.url).href,
    title: 'Рособрнадзор',
    description: 'Контроль качества образования',
    color: '#4ecdc4'
  },
  {
    url: 'https://fipi.ru/ ',
    image: new URL('@/assets/fipi.png', import.meta.url).href,
    title: 'ФИПИ',
    description: 'Федеральный институт измерений',
    color: '#45b7d1'
  }
])
</script>

<style scoped>
/* Общие стили */
.home-page {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Comic Sans MS', 'Inter', sans-serif;
  background: linear-gradient(to bottom, #fefefe, #fff8f8);
}

/* Стили карусели */
.carousel-wrapper {
  margin-top: 2rem;
  margin-bottom: 4rem;
}
.carousel-content {
  position: relative;
  width: 100%;
  height: 600px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}
.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
}
.caption-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.caption-text {
  font-size: 1.1rem;
  opacity: 0.9;
}
.carousel-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: 24px;
  background: radial-gradient(circle at center, rgba(255, 105, 180, 0.1), transparent 70%);
  pointer-events: none;
  z-index: -1;
}
.carousel__navigation-button {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
.carousel__pagination-button--active::after {
  background: #ffcc00 !important;
}
.carousel__pagination {
  bottom: 20px !important;
}

/* Заголовки и разделы */
.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin: 4rem 0 2rem;
  position: relative;
}
.title-decor::before,
.title-decor::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, transparent);
}
.title-decor::before {
  right: 100%;
  background: linear-gradient(90deg, #ff6b6b, transparent);
}
.title-decor::after {
  left: 100%;
  background: linear-gradient(90deg, transparent, #6e91f0);
}

/* Стеклянные карточки */
.useful-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;
}
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #1e293b;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1;
}
.glass-card:hover .card-glow {
  opacity: 1;
}
.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.card-icon img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(circle at center, var(--hover-color, #ffdd00) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
</style>