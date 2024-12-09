export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", {
    mounted(el) {
      const date = new Date(parseInt(el.textContent, 10));
      const setformat = (number) => `${number}`.padStart(2, "0");
      const month = setformat(date.getMonth() + 1);
      const time = date.toTimeString().slice(0, 8);
      el.textContent = `${date.getFullYear()}-${month}-${setformat(
        date.getDate()
      )} ${time}`;

      // 更簡潔的寫法：使用 toLocalString
      const convertTimeFormat = new Date(binding.value)
        .toLocaleString("zh-Hant", {
          hour12: false,
        })
        .replaceAll("/", "-");
    },
  });
});
