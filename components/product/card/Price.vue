<template>
  <p class="product-price">{{ price }}</p>
</template>

<script setup lang="ts">
defineProps({
  price: String,
});
</script>

<style scoped>
.product-price {
  font-size: 16px;
  color: #007bff;
  text-align: center;
  margin-bottom: 16px;
}
</style>
