<script setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const newsList = ref([]);
const isLoading = ref(false);

// API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
// 使用 ES6 fetch() 或是 axios.get() 串接 API
// 切換 isLoading 狀態
import axios from "axios";
async function getNews(params) {
  isLoading.value = !isLoading.value;
  const res = await axios.get("https://nuxr3.zeabur.app/api/v1/home/news/");
  if (res.data.status) {
    newsList.value = [...res.data.result];
  }
  isLoading.value = !isLoading.value;
}
getNews();
</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <NewsCard
      v-for="news in newsList"
      :key="news.id"
      v-bind="({ _id, title, image, description, createdAt, updatedAt } = news)"
    />

    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
