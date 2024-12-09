export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", {
    mounted(el, binding) {
      // 也可以從 binding.value 中取到字串
      const newTtext =
        binding.arg === "uppercase"
          ? el.textContent.toUpperCase()
          : el.textContent.toLowerCase();
      el.textContent = newTtext;
    },
  });
});
