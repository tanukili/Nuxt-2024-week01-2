// 因為會使用到 DOM 元素，記得使用後綴 .client ，讓差件只在 client 端執行
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      offcanvas: (element, options) =>
        new bootstrap.Offcanvas(element, options),
      modal: (element, options) => new bootstrap.Modal(element, options),
    },
  };
});
