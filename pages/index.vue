<script setup>
// As component
const isLoading = ref(false);
function openLoading() {
  // 開啟讀取效果
  isLoading.value = true;
  setTimeout(() => {
    // 關閉讀取效果
    isLoading.value = false;
  }, 1000);
}

// As plugin 並使用 useLoading 方法建立 loading
const { $useLoading } = useNuxtApp();
const formContainer = ref(null);
let loadingApp = null;

onMounted(() => {
  loadingApp = $useLoading({
    backgroundColor: "pink",
    loader: "spinner",
    fullPage: false,
    container: formContainer.value,
  });
});

function submit() {
  const loader = loadingApp.show();
  setTimeout(() => {
    loader.hide();
  }, 2000);
}
</script>

<template>
  <!-- As component -->
  <ClientOnly>
    <Loading :active="isLoading" />
  </ClientOnly>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>

  <!-- As plugin：區塊 loading 需要指定 container 與註明 vl-parent -->
  <form
    @submit.prevent="submit"
    class="vl-parent"
    ref="formContainer"
    style="padding: 50px"
  >
    <button type="submit">區塊 Login 效果</button>
  </form>
</template>

<style scoped></style>
