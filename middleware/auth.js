export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isHydrating, payload } = useNuxtApp();
  // 是否在客戶端、是否正在將伺服器端渲染的程式碼轉換成客戶端的、伺服器端是否以渲染過 HTML
  if (import.meta.client && isHydrating && payload.serverRendered) {
    return; // 阻止 $fetch 在客戶端再戳 API
  }
  // 取出 cookie 中的 token
  const token = useCookie("auth");
  if (!token.value) return navigateTo("/login", { redirectCode: 302 }); // 沒有 token 時直接重新導向

  try {
    await $fetch("https://nuxr3.zeabur.app/api/v1/user/check", {
      headers: { Authorization: token.value },
    });
  } catch (err) {
    token.value = null;
    return navigateTo("/login", { redirectCode: 302 });
  }
});
