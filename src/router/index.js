import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import ZayavkaForm from '@/views/ZayavkaForm.vue'

// Главные страницы
const HomePage = () => import('@/views/HomePage.vue')
const AboutPage = () => import('@/views/AboutPage.vue')
const OlympiadsPage = () => import('@/views/OlympiadsPage.vue')
const FeedbackPage = () => import('@/views/FeedbackPage.vue')
const QuestionsPage = () => import('@/views/QuestionsPage.vue')

// Детский университет
const KidsUniversityAbout = () => import('@/views/KidsUniversity/AboutPage.vue')
const KidsUniversitySchedule = () => import('@/views/KidsUniversity/KidsUniversitySchedulePage.vue')
const KidsUniversityDocs = () => import('@/views/KidsUniversity/DocsPage.vue')
const KidsUniversityPaidServices = () => import('@/views/KidsUniversity/PaidServices.vue')
const KidsUniversitySurveys = () => import('@/views/KidsUniversity/SurveysPage.vue')

// Подготовительные курсы
const PrepCoursesMain = () => import('@/views/PreparationCourses/PreparationCourses.vue')
const PrepCoursesSchedule = () => import('@/views/PreparationCourses/PreparationCoursesSchedulePage.vue')
const PrepCoursesDocs = () => import('@/views/PreparationCourses/DocsPage.vue')
const PrepCoursesPaidServices = () => import('@/views/PreparationCourses/PreparationCoursePaidServices.vue')
const PrepCoursesSurveys = () => import('@/views/PreparationCourses/SurveysPage.vue')

// Подготовительное отделение
const PrepDepartmentAbout = () => import('@/views/PreparatoryDepartment/AboutPage.vue')
const PrepDepartmentDocs = () => import('@/views/PreparatoryDepartment/DocsPage.vue')
const PrepDepartmentSchedule = () => import('@/views/PreparatoryDepartment/SchedulePage.vue')
const PrepDepartmentPaidServices = () => import('@/views/PreparatoryDepartment/PaidServices.vue')
const PrepDepartmentSurveys = () => import('@/views/PreparatoryDepartment/SurveysPage.vue')

// Летняя школа
const AboutSummerSchool = () => import('@/views/SummerSchool/AboutSummerSchool.vue')
const SummerSchool = () => import('@/views/SummerSchool/SummerSchool.vue')
const SummerSchoolDocs = () => import('@/views/SummerSchool/DocsPage.vue')

// Курсы
const CourseCard = () => import('@/components/CourseCard.vue')
const CourseDetailView = () => import('@/views/CourseDetailView.vue')
const CoursesListView = () => import('@/views/CoursesListView.vue')

// Аутентификация
const LoginPage = () => import('@/views/auth/LoginPage.vue')
const RegistrPage = () => import('@/views/auth/RegistrPage.vue')

// Новости
const NewsDetail = () => import('@/views/NewsDetail.vue')

// 404
const NotFound = () => import('@/views/NotFound.vue')

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', name: 'Home', component: HomePage, meta: { title: 'Главная' } },
      { path: 'about', name: 'About', component: AboutPage, meta: { title: 'О нас' } },
      { path: 'olympiads', name: 'Olympiads', component: OlympiadsPage, meta: { title: 'Олимпиады' } },
      { path: 'feedback', name: 'Feedback', component: FeedbackPage, meta: { title: 'Отзывы' } },
      { path: 'questions', name: 'Questions', component: QuestionsPage, meta: { title: 'Вопросы и ответы' } },

      // Детский университет
      { path: 'kids-university/about', name: 'KidsUniversityAbout', component: KidsUniversityAbout, meta: { title: 'О детском университете' } },
      { path: 'kids-university/schedule', name: 'KidsUniversitySchedule', component: KidsUniversitySchedule, meta: { title: 'Расписание детского университета' } },
      { path: 'kids-university/documents', name: 'KidsUniversityDocuments', component: KidsUniversityDocs, meta: { title: 'Документы детского университета' } },
      { path: 'kids-university/paid-services', name: 'KidsUniversityPaidServices', component: KidsUniversityPaidServices, meta: { title: 'Стоимость обучения' } },
      { path: 'kids-university/surveys', name: 'KidsUniversitySurveys', component: KidsUniversitySurveys, meta: { title: 'Анкеты для детей' } },

      // Подготовительные курсы
      { path: 'preparation-courses', name: 'PreparationCoursesMain', component: PrepCoursesMain, meta: { title: 'О подготовительных курсах' } },
      { path: 'preparation-courses/schedule', name: 'PrepCoursesSchedule', component: PrepCoursesSchedule, meta: { title: 'Расписание курсов' } },
      { path: 'preparation-courses/documents', name: 'PrepCoursesDocuments', component: PrepCoursesDocs, meta: { title: 'Документы курсов' } },
      { path: 'preparation-courses/paid-services', name: 'PrepCoursesPaidServices', component: PrepCoursesPaidServices, meta: { title: 'Программы подготовительных курсов' } },
      { path: 'preparation-courses/surveys', name: 'PrepCoursesSurveys', component: PrepCoursesSurveys, meta: { title: 'Анкеты курсов' } },

      // Подготовительное отделение
      { path: 'preparatory-department/about', name: 'PrepDepartmentAbout', component: PrepDepartmentAbout, meta: { title: 'О подготовительном отделении' } },
      { path: 'preparatory-department/documents', name: 'PrepDepartmentDocuments', component: PrepDepartmentDocs, meta: { title: 'Документы для поступления' } },
      { path: 'preparatory-department/schedule', name: 'PrepDepartmentSchedule', component: PrepDepartmentSchedule, meta: { title: 'Расписание занятий' } },
      { path: 'preparatory-department/paid-services', name: 'PrepDepartmentPaidServices', component: PrepDepartmentPaidServices, meta: { title: 'Стоимость обучения' } },
      { path: 'preparatory-department/surveys', name: 'PrepDepartmentSurveys', component: PrepDepartmentSurveys, meta: { title: 'Анкеты для записи' } },

      // Летняя школа
      { path: 'summer-school/about', name: 'AboutSummerSchool', component: AboutSummerSchool, meta: { title: 'О летней школе' } },
      { path: 'summer-school', name: 'SummerSchool', component: SummerSchool, meta: { title: 'Летняя школа' } },
      { path: 'summer-school/documents', name: 'SummerSchoolDocs', component: SummerSchoolDocs, meta: { title: 'Документы летней школы' } },
      { path: 'summer-form', name: 'ZayavkaForm', component: ZayavkaForm, meta: { title: 'Оставить заявку' } },

      // Курсы
      { path: 'courses', name: 'CourseList', component: CoursesListView, meta: { title: 'Список курсов' } },
      { path: 'courses/:id', name: 'CourseDetail', component: CourseDetailView, meta: { title: 'Детали курса' } },

      // Аутентификация
      { path: 'login', name: 'Login', component: LoginPage },
      { path: 'register', name: 'Register', component: RegistrPage },

      // Новости
      { path: 'news/:id', name: 'NewsDetail', component: NewsDetail },

      // 404
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
