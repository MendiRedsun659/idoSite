<template>
  <div class="bg-gradient-to-r from-orange-400 to-purple-600 text-gray-800">
    <!-- Верхняя панель -->
    <div class="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center bg-opacity-90 rounded-lg shadow-md backdrop-blur-sm bg-white/10">
      <!-- Логотип и название -->
      <div class="flex items-center mb-4 md:mb-0">
        <img 
          src="@/assets/logo.png" 
          alt="Логотип" 
          class="w-12 h-12 mr-3 rounded-lg shadow-md"
        />
        <h2 class="text-white text-xl font-bold">Институт довузовского образования</h2>
      </div>

      <!-- Контакты -->
      <div class="flex flex-col sm:flex-row items-center gap-4 text-white mb-4 md:mb-0">
        <div class="flex items-center">
          <EnvironmentOutlined class="text-yellow-300 mr-2" />
          <span>г. Кызыл, ул. Ленина, д. 3</span>
        </div>
        <div class="flex items-center">
          <PhoneOutlined class="text-yellow-300 mr-2" />
          <span>+7 (394-22) 2-26-72</span>
        </div>
      </div>

      <!-- Кнопки доступности и авторизации (теперь с иконками) -->
      <div class="flex items-center gap-4">
        <button 
          @click="toggleAccessibility"
          class="text-white hover:text-yellow-200 transition-all duration-300 transform hover:scale-110"
          title="Версия для слабовидящих"
        >
          <component :is="isHighContrast ? EyeInvisibleOutlined : EyeOutlined" class="text-2xl" />
        </button>

        <router-link 
          to="/login" 
          class="text-white hover:text-yellow-200 transition-all duration-300 transform hover:scale-110"
          title="Вход"
        >
          <LoginOutlined class="text-2xl" />
        </router-link>

        <router-link 
          to="/register" 
          class="text-white hover:text-yellow-200 transition-all duration-300 transform hover:scale-110"
          title="Регистрация"
        >
          <UserAddOutlined class="text-2xl" />
        </router-link>
      </div>
    </div>

    <!-- Навигационное меню -->
    <nav class="bg-purple-700 bg-opacity-70 backdrop-filter backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <ul class="flex flex-wrap items-center justify-center md:justify-start">
          <li v-for="item in menuItems" :key="item.key" class="relative group">
            <router-link 
              v-if="!item.children"
              :to="item.path"
              class="block px-4 py-3 text-white hover:bg-purple-600 transition-colors rounded-md m-1"
              :class="{ 'bg-purple-500': selectedKeys.includes(item.key) }"
            >
              {{ item.title }}
            </router-link>
            
            <template v-else>
              <button class="flex items-center px-4 py-3 text-white hover:bg-purple-600 transition-colors rounded-md m-1">
                {{ item.title }}
                <DownOutlined class="ml-1" />
              </button>
              <ul class="absolute left-0 mt-0 w-56 bg-white bg-opacity-90 shadow-lg rounded-b-md z-10 invisible group-hover:visible transition-all duration-300">
                <li v-for="child in item.children" :key="child.key">
                  <router-link 
                    :to="child.path"
                    class="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors"
                  >
                    {{ child.title }}
                  </router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </nav>

    

    <!-- Основной контент -->
    <router-view class="container mx-auto px-4 py-6" /> 
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  EnvironmentOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LoginOutlined,
  UserAddOutlined,
  DownOutlined
} from '@ant-design/icons-vue'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Переключатель "для слабовидящих"
const isHighContrast = ref(false)
const toggleAccessibility = () => {
  isHighContrast.value = !isHighContrast.value
}

// Меню навигации
const selectedKeys = ref(['home'])

const menuItems = [
  { key: 'home', title: 'Главная', path: '/' },
  { key: 'about', title: 'О нас', path: '/about' },
  { 
    key: 'kids', 
    title: 'Детский университет',
    children: [
      { key: 'kids-about', title: 'О детском университете', path: '/kids-university/about' },
      { key: 'kids-paid-services', title: 'Стоимость обучения', path: '/kids-university/paid-services' },
      { key: 'kids-schedule', title: 'Расписание', path: '/kids-university/schedule' },
      { key: 'kids-docs', title: 'Документы', path: '/kids-university/documents' },
      { key: 'kids-surveys', title: 'Анкеты', path: '/kids-university/surveys' }
    ]
  },
  {
    key: 'summer-school',
    title: 'Летняя школа',
    children: [
      { key: 'summer-school-main', title: 'О летней школе', path: '/summer-school' },
      { key: 'summer-school-documents', title: 'Документы', path: '/summer-school/documents' }
    ]
  },
  {
    key: 'prep-courses',
    title: 'Подготовительные курсы',
    children: [
      { key: 'prep-courses-main', title: 'О подготовительных курсах', path: '/preparation-courses' },
      { key: 'prep-courses-services', title: 'Стоимость обучения', path: '/prep-course/paid-services' },
      { key: 'prep-courses-schedule', title: 'Расписание', path: '/preparation-courses/schedule' },
      { key: 'prep-courses-docs', title: 'Документы', path: '/preparation-courses/documents' },
      { key: 'prep-courses-surveys', title: 'Анкеты', path: '/preparation-courses/surveys' }
    ]
  },
  {
    key: 'prep-department',
    title: 'Подготовительное отделение',
    children: [
      { key: 'prep-department-about', title: 'О подготовительном отделении', path: '/preparatory-department/about' },
      { key: 'prep-department-paid-services', title: 'Стоимость обучения', path: '/preparatory-department/paid-services' },
      { key: 'prep-department-schedule', title: 'Расписание', path: '/preparatory-department/schedule' },
      { key: 'prep-department-docs', title: 'Документы', path: '/preparatory-department/documents' },
      { key: 'prep-department-surveys', title: 'Анкеты', path: '/preparatory-department/surveys' }
    ]
  },
  { key: 'olympiads', title: 'Олимпиады', path: '/olympiads' },
  { key: 'feedback', title: 'Отзывы', path: '/feedback' },
  { key: 'questions', title: 'Вопросы', path: '/questions' }
]

// Баннеры
const banners = [
  { src: new URL('@/assets/banner1.png', import.meta.url).href, alt: 'Баннер 1' },
  { src: new URL('@/assets/banner2.jpg', import.meta.url).href, alt: 'Баннер 2' },
  { src: new URL('@/assets/banner3.jpg', import.meta.url).href, alt: 'Баннер 3' }
]
</script>

<style scoped>
/* Стили для меню */
.bg-purple-700 {
  background-color: #6d3dff;
}
.bg-purple-500 {
  background-color: #8a5cf6;
}
.text-purple {
  color: #6d3dff;
}

/* Анимация выпадающего меню */
transition-all duration-300

/* Стиль карусели */
.carousel__pagination-button::after {
  color: #fff !important;
}
.carousel__pagination-button--active::after {
  color: #ff9900 !important;
}

/* Стили для иконок в хедере */
.carousel__navigation-prev::after,
.carousel__navigation-next::after {
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>