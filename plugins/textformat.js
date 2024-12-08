export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", {
    mounted(el, binding) {
      const newTtext =
        binding.arg === "uppercase"
          ? el.textContent.toUpperCase()
          : el.textContent.toLowerCase();
      el.textContent = newTtext;
    },
  });
});
