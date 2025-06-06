<template>
  <div
    :class="[
      'app-layout',
      isHighContrast ? 'high-contrast' : '',
      'bg-gradient-to-r from-orange-400 to-purple-600 text-gray-800 min-h-screen flex flex-col'
    ]"
  >
    <!-- Верхняя панель -->
    <header
      class="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center bg-white/10 rounded-lg shadow-md backdrop-blur-sm transition-all duration-300"
    >
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

      <!-- Кнопки доступности и авторизации -->
      <div class="flex items-center gap-4">
        <button
          @click="toggleAccessibility"
          class="text-white hover:text-yellow-200 transition-all duration-300 transform hover:scale-110"
          title="Версия для слабовидящих"
          aria-label="Переключить режим для слабовидящих"
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
    </header>

    <!-- Навигационное меню -->
    <nav class="bg-purple-700 bg-opacity-70 backdrop-filter backdrop-blur-sm" role="navigation" aria-label="Главное меню">
      <div class="container mx-auto px-4">
        <ul class="flex flex-wrap items-center justify-center md:justify-start" role="menubar">
          <li
            v-for="item in menuItems"
            :key="item.key"
            class="relative group"
            :aria-haspopup="item.children ? 'true' : 'false'"
            :aria-expanded="item.expanded ? 'true' : 'false'"
          >
            <template v-if="!item.children">
              <router-link
                :to="item.path"
                class="block px-4 py-3 text-white hover:bg-purple-600 transition-colors rounded-md m-1"
                :class="{ 'bg-purple-500': selectedKeys.includes(item.key) }"
                @click="selectMenuItem(item.key)"
                role="menuitem"
                tabindex="0"
              >
                {{ item.title }}
              </router-link>
            </template>

            <template v-else>
              <button
                class="flex items-center px-4 py-3 text-white hover:bg-purple-600 transition-colors rounded-md m-1 focus:outline-none"
                @click="toggleSubMenu(item.key)"
                @keydown="handleButtonKeydown($event, item.key)"
                :aria-controls="'submenu-' + item.key"
                :aria-expanded="item.expanded"
                role="menuitem"
                tabindex="0"
              >
                {{ item.title }}
                <DownOutlined class="ml-1" />
              </button>
              <ul
                :id="'submenu-' + item.key"
                class="absolute left-0 mt-0 w-56 bg-white bg-opacity-90 shadow-lg rounded-b-md z-10"
                :class="item.expanded ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'"
                role="menu"
                @keydown="handleSubmenuKeydown($event, item.key)"
              >
                <li v-for="child in item.children" :key="child.key" role="none">
                  <router-link
                    :to="child.path"
                    class="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors"
                    @click="selectMenuItem(child.key)"
                    role="menuitem"
                    tabindex="-1"
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
    <main class="container mx-auto px-4 py-6 flex-grow">
      <router-view />
    </main>

    <!-- Футер -->
    <AppFooter />
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
  DownOutlined,
} from '@ant-design/icons-vue'
import AppFooter from '@/components/AppFooter.vue'

const isHighContrast = ref(false)
const toggleAccessibility = () => {
  isHighContrast.value = !isHighContrast.value
}

const selectedKeys = ref(['home'])

const selectMenuItem = (key) => {
  selectedKeys.value = [key]
  closeAllSubmenus()
}

// Добавляем expanded для пунктов с подменю
const menuItems = ref([
  { key: 'home', title: 'Главная', path: '/' },
  { key: 'about', title: 'О нас', path: '/about' },
  {
    key: 'kids',
    title: 'Детский университет',
    expanded: false,
    children: [
      { key: 'kids-about', title: 'О детском университете', path: '/kids-university/about' },
      { key: 'kids-paid-services', title: 'Программы детского университета', path: '/kids-university/paid-services' },
      { key: 'kids-schedule', title: 'Расписание', path: '/kids-university/schedule' },
      { key: 'kids-docs', title: 'Документы', path: '/kids-university/documents' },
      { key: 'kids-surveys', title: 'Анкеты', path: '/kids-university/surveys' },
    ],
  },
  {
    key: 'summer-school',
    title: 'Летняя школа',
    expanded: false,
    children: [
      { key: 'summer-school-about', title: 'О летней школе', path: '/summer-school/about' },
      { key: 'summer-school-main', title: 'Программы летних школ', path: '/summer-school' },
      { key: 'summer-school-documents', title: 'Документы', path: '/summer-school/documents' },
    ],
  },
  {
    key: 'prep-courses',
    title: 'Подготовительные курсы',
    expanded: false,
    children: [
      { key: 'prep-courses-main', title: 'О подготовительных курсах', path: '/preparation-courses' },
      { key: 'prep-courses-services', title: 'Программы подготовительных курсов', path: '/preparation-courses/paid-services' },
      { key: 'prep-courses-schedule', title: 'Расписание', path: '/preparation-courses/schedule' },
      { key: 'prep-courses-docs', title: 'Документы', path: '/preparation-courses/documents' },
      { key: 'prep-courses-surveys', title: 'Анкеты', path: '/preparation-courses/surveys' },
    ],
  },
  {
    key: 'prep-department',
    title: 'Подготовительное отделение',
    expanded: false,
    children: [
      { key: 'prep-department-about', title: 'О подготовительном отделении', path: '/preparatory-department/about' },
      { key: 'prep-department-paid-services', title: 'Программы подготовительного отделения', path: '/preparatory-department/paid-services' },
      { key: 'prep-department-schedule', title: 'Расписание', path: '/preparatory-department/schedule' },
      { key: 'prep-department-docs', title: 'Документы', path: '/preparatory-department/documents' },
      { key: 'prep-department-surveys', title: 'Анкеты', path: '/preparatory-department/surveys' },
    ],
  },
  { key: 'olympiads', title: 'Олимпиады', path: '/olympiads' },
  { key: 'feedback', title: 'Отзывы', path: '/feedback' },
  { key: 'questions', title: 'Вопросы', path: '/questions' },
])

const closeAllSubmenus = () => {
  menuItems.value.forEach((i) => {
    if (i.children) i.expanded = false
  })
}

const toggleSubMenu = (key) => {
  const item = menuItems.value.find((i) => i.key === key)
  if (item) {
    item.expanded = !item.expanded
  }
}

const handleButtonKeydown = (event, key) => {
  const item = menuItems.value.find((i) => i.key === key)
  if (!item) return

  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      toggleSubMenu(key)
      break
    case 'ArrowDown':
      event.preventDefault()
      if (!item.expanded) toggleSubMenu(key)
      focusFirstSubmenuItem(key)
      break
    case 'Escape':
      event.preventDefault()
      item.expanded = false
      break
  }
}

const focusFirstSubmenuItem = (key) => {
  setTimeout(() => {
    const submenu = document.getElementById(`submenu-${key}`)
    if (submenu) {
      const firstItem = submenu.querySelector('a[role="menuitem"]')
      firstItem?.focus()
    }
  }, 0)
}

const handleSubmenuKeydown = (event, parentKey) => {
  const submenu = document.getElementById(`submenu-${parentKey}`)
  if (!submenu) return

  const focusableItems = [...submenu.querySelectorAll('a[role="menuitem"]')]
  const currentIndex = focusableItems.indexOf(document.activeElement)

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      const nextIndex = (currentIndex + 1) % focusableItems.length
      focusableItems[nextIndex].focus()
      break
    case 'ArrowUp':
      event.preventDefault()
      const prevIndex = (currentIndex - 1 + focusableItems.length) % focusableItems.length
      focusableItems[prevIndex].focus()
      break
    case 'Escape':
      event.preventDefault()
      const parentItem = menuItems.value.find((i) => i.key === parentKey)
      if (parentItem) parentItem.expanded = false
      const button = document.querySelector(`button[aria-controls="submenu-${parentKey}"]`)
      button?.focus()
      break
    case 'Tab':
      // Закрываем подменю при уходе фокуса табом
      const parent = menuItems.value.find((i) => i.key === parentKey)
      if (parent) parent.expanded = false
      break
  }
}
</script>

<style scoped>
.app-layout.high-contrast {
  background-color: #000;
  color: #fff;
}
.app-layout.high-contrast .text-gray-800 {
  color: #fff !important;
}
.app-layout.high-contrast .bg-white {
  background-color: #222 !important;
}
.app-layout.high-contrast .bg-purple-700 {
  background-color: #000 !important;
}
.app-layout.high-contrast .hover\:bg-purple-600:hover {
  background-color: #222 !important;
}
.app-layout.high-contrast .bg-purple-500 {
  background-color: #444 !important;
}
.app-layout.high-contrast .text-white {
  color: #fff !important;
}
.app-layout.high-contrast .text-yellow-300 {
  color: #ff0 !important;
}
.app-layout.high-contrast .bg-purple-100 {
  background-color: #333 !important;
}

/* Плавное появление выпадающих меню */
ul[role="menu"] {
  transition: opacity 0.3s ease;
}

/* Убираем pointer-events при скрытии, чтобы клики не проходили */
.invisible {
  pointer-events: none;
}
</style>
