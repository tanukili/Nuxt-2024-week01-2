// export const useBookingStore =
export const useBookingStore = defineStore("booking", () => {
  const roomInfo = ref({});

  return { roomInfo };
});
