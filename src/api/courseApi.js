const BASE_API = '/api'  // прокси на сервер sign.local:9099 в vite.config.js

// Получение списка курсов
export async function fetchCourses() {
  const res = await fetch(`${BASE_API}/courses`)
  if (!res.ok) {
    throw new Error('Ошибка загрузки списка курсов')
  }
  return res.json()
}

// Получение курса по ID
export async function fetchCourseById(id) {
  const res = await fetch(`${BASE_API}/courses/${id}`)
  if (!res.ok) {
    throw new Error('Ошибка загрузки курса')
  }
  return res.json()
}

// Логин пользователя
export async function loginUser({ email, password }) {
  const res = await fetch(`${BASE_API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  if (!res.ok) {
    const errorData = await res.json()
    const error = new Error('Ошибка входа')
    error.response = errorData
    error.status = res.status
    throw error
  }

  return res.json()
}

// Регистрация пользователя
export async function registerUser({ fio, email, password, phone }) {
  const res = await fetch(`${BASE_API}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ fio, email, password, phone })
  })

  if (!res.ok) {
    const errorData = await res.json()
    const error = new Error('Ошибка регистрации')
    error.response = errorData
    error.status = res.status
    throw error
  }

  return res.json()
}

// Отправка заявки
export async function submitApplication(formData) {
  const res = await fetch(`${BASE_API}/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (!res.ok) {
    const errorData = await res.json()
    const error = new Error('Ошибка отправки заявки')
    error.response = errorData
    error.status = res.status
    throw error
  }

  return res.json()
}

// Подтверждение кода заявки
export async function confirmApplicationCode(userId, code) {
  const res = await fetch(`${BASE_API}/applications/confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user_id: userId, code })
  })

  if (!res.ok) {
    const errorData = await res.json()
    const error = new Error('Ошибка подтверждения кода')
    error.response = errorData
    error.status = res.status
    throw error
  }

  return res.json()
}
