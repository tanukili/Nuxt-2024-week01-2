// As component
import Loading from "vue-loading-overlay";
// As plugin
import { LoadingPlugin, useLoading } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  // As component
  nuxtApp.vueApp.component("Loading", Loading);

  // As plugin with Composition API
  nuxtApp.vueApp.use(LoadingPlugin);
  nuxtApp.provide("useLoading", useLoading);
});
