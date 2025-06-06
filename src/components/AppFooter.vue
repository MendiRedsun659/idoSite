<script setup>
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons-vue'

const footerLinks = [
  { title: 'Главная', to: '/' },
  { title: 'О нас', to: '/about' },
  { title: 'Контакты', to: '/contact' }
]
</script>

<template>
  <footer class="bg-gradient-to-r from-purple-800 via-indigo-700 to-orange-500 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Левая колонка -->
        <div class="flex flex-col items-center md:items-start">
          <img src="@/assets/logo.png" alt="Логотип" class="w-16 h-16 mb-4 rounded-lg shadow-md" />
          <h3 class="text-2xl font-bold mb-3">Институт довузовского образования</h3>
          <p class="text-sm opacity-90 text-center md:text-left">
            Мы помогаем школьникам и дошкольникам развиваться через обучение, игры и инновационные программы.
          </p>

          <!-- Соцсети -->
          <div class="mt-6 flex space-x-4 text-yellow-300">
            <a href="#" class="hover:text-white transition-colors">
              <FacebookOutlined />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <TwitterOutlined />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <InstagramOutlined />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <YoutubeOutlined />
            </a>
          </div>
        </div>

        <!-- Центральная колонка -->
        <div class="flex flex-col items-center md:items-start">
          <ul class="space-y-2 text-sm">
            <li v-for="link in footerLinks" :key="link.title">
              <router-link 
                :to="link.to" 
                class="hover:text-yellow-200 transition-colors"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Правая колонка: Контакты -->
        <div class="mt-6 text-sm text-center md:text-right space-y-2">
          <p><MailOutlined /> <a href="mailto:ido.tgu@mail.ru" class="hover:text-yellow-200 transition-colors">ido.tgu@mail.ru</a></p>
          <p><PhoneOutlined /> +7 (394-22) 2-26-72</p>
          <p><EnvironmentOutlined /> г. Кызыл, ул. Ленина, д. 3</p>
        </div>

      </div>

      <!-- Копирайт -->
      <div class="mt-12 pt-6 border-t border-white/20 text-center text-sm opacity-80">
        &copy; {{ new Date().getFullYear() }} Институт довузовского образования. Все права защищены.
      </div>
    </div>
  </footer>
</template>
