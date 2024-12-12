import { defineRule, configure } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
  defineRule("min", min);
  defineRule("email", email);
  defineRule("phone", (value) => {
    const regex = /^(09)[0-9]{8}$/;
    return regex.test(value) || "需要正確的電話號碼";
  });

  configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
  });
  setLocale("zh_TW");
});
