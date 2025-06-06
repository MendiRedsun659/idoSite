<template>
  <div class="about-page bg-gray-100 min-h-screen py-12 px-4">
    <!-- Заголовок -->
    <h1 class="gradient-title text-center mb-10">
      О нас
    </h1>

    <!-- Информация об институте -->
    <section class="info-section mb-12">
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="mb-6 leading-relaxed text-gray-700">
          Институт довузовского образования (ИДО ТувГУ) создан после реорганизации Института непрерывного образования 2 февраля 2015 года на основании решения Ученого совета ТувГУ от 29 января 2015 года (протокол № 1). Основная цель — развитие системы довузовского образования в республике, включая довузовскую подготовку учащихся и выпускников общеобразовательных школ с учетом их индивидуальных интересов, потребностей работодателей и прогноза рынка труда.
        </p>

        <p class="mb-6 leading-relaxed text-gray-700">
          В структуру ИДО входят следующие подразделения:
        </p>

        <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li>Центр довузовского образования</li>
          <li>Подготовительное отделение</li>
          <li>Детский университет</li>
          <li>Центр раннего развития</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 border-b border-blue-300 pb-2 mb-4">Задачи ИДО</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li>Координация, повышение качества и развитие деятельности университета на региональном, федеральном и международном уровнях в сфере довузовского образования.</li>
          <li>Выявление и сопровождение одаренных детей.</li>
          <li>Привлечение абитуриентов.</li>
          <li>Взаимодействие с учительским сообществом республики.</li>
          <li>Продвижение образовательных услуг университета.</li>
          <li>Реализация дополнительных общеобразовательных программ довузовской подготовки.</li>
          <li>Организация и проведение профориентационной работы.</li>
          <li>Создание условий для привлечения в университет одарённых школьников и талантливой молодёжи.</li>
          <li>Развитие олимпиадного движения, включая организацию Олимпиад школьников разных уровней.</li>
          <li>Подготовка информационно-аналитических материалов о состоянии и перспективах развития довузовского образования в ТувГУ.</li>
        </ul>
      </div>
    </section>

    <!-- Команда -->
    <section class="staff-section mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 border-b border-blue-300 pb-2 mb-6">Наша команда</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="person in staff" :key="person.name" class="bg-white shadow rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-md">
          <img :src="person.photo" :alt="`Фото ${person.name}`" class="w-full h-64 object-cover" />
          <div class="p-4">
            <h3 class="font-semibold text-lg">{{ person.name }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ person.position }}</p>
            <p v-if="person.email" class="text-sm">
              📧 <a :href="`mailto:${person.email}`" class="text-blue-600 hover:underline">{{ person.email }}</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Контакты -->
    <section class="contact-section">
      <h2 class="text-2xl font-semibold text-gray-800 border-b border-blue-300 pb-2 mb-4">Контакты</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <p class="mb-2"><strong>Адрес:</strong> г. Кызыл, ул. Ленина, 3, тел. 8(394-22) 2-26-72</p>
        <p class="mb-2"><strong>Юридический адрес:</strong> 667000, Республика Тыва, г. Кызыл, ул. Ленина, д.3</p>
        <p class="mb-6"><strong>E-mail:</strong> <a href="mailto:ido.tgu@mail.ru" class="text-blue-600 hover:underline">ido.tgu@mail.ru</a></p>

        <!-- Карта -->
        <div class="map-container rounded-lg overflow-hidden shadow">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c7c44a8b4b60f49d62c6b3ce43c297839bc9996a7541db15b2d8e30d98a743d&amp ;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
            allowfullscreen=""
            loading="lazy"
            class="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const staff = ref([
  {
    name: "Даржа Урана Анай-ооловна",
    position: "Исполняющий обязанности директора института довузовского образования",
    photo: "https://ido.tsu.ru/images/staff/DUA.jpg ",
    email: ""
  },
  {
    name: "Ооржак Аржана Арыевна",
    position: "Методист Центра довузовской подготовки",
    photo: "https://ido.tsu.ru/images/staff/OAA.jpg ",
    email: ""
  }
])
</script>

<style scoped>
.gradient-title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  background: linear-gradient(90deg, #1a73e8, #3f51b5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine 3s infinite linear;
}

@keyframes shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
</style>