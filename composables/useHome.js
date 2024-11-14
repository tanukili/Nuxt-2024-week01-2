import axios from "axios";

export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  async function getNews() {
    isLoading.value = !isLoading.value;
    try {
      const res = await axios.get("https://nuxr3.zeabur.app/api/v1/home/news/");
      newsList.value = [...res.data.result];
    } catch (err) {
      console.log(`Error:${err}`);
    }
    // fetch API 寫法
    // try {
    //   const res = await fetch("https://nuxr3.zeabur.app/api/v1/home/news/");
    //   const data = await res.json();
    //   newsList.value = [...data.result];
    // } catch (err) {
    //   console.log(`Error:${err}`);
    // }
    isLoading.value = !isLoading.value;
  }
  return {
    newsList,
    isLoading,
    getNews,
  };
};
