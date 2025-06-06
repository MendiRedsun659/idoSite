<template>
  <section class="news-detail">
    <div v-if="newsItem">
      <h1 class="news-title">{{ newsItem.title }}</h1>
      <div class="news-date">{{ formatDate(newsItem.createdAt) }}</div>

      <img v-if="newsItem.mainImage" :src="newsItem.mainImage" alt="Главное изображение" class="main-image" />

      <p class="news-short">{{ newsItem.shortDescription }}</p>
      <div class="news-full" v-html="newsItem.fullDescription"></div>

      <div v-if="newsItem.images?.length" class="gallery">
        <h3>Галерея</h3>
        <div class="gallery-grid">
          <img v-for="(img, i) in newsItem.images" :key="i" :src="img" alt="Изображение" />
        </div>
      </div>
    </div>

    <div v-else>
      <p>Новость не найдена.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      newsItem: null
    }
  },
  mounted() {
    const id = this.$route.params.id

  
    const dummyNews = [
      {
        id: 1,
        createdAt: '2025-05-19T08:32:48.894Z',
        title: '1',
        shortDescription: '21',
        fullDescription: '<p>23</p>',
        mainImage: null,
        images: [],
        status: 'active',
        updatedAt: '2025-05-19T08:32:48.897Z'
      }
     
    ]

    this.newsItem = dummyNews.find(item => item.id === parseInt(id))
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.news-detail {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 16px;
  line-height: 1.6;
}

.news-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #124191;
}

.news-date {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.main-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
}

.news-short {
  font-style: italic;
  margin-bottom: 20px;
}

.news-full {
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.gallery-grid img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>
