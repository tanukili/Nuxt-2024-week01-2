<script setup>
const submitButtonRef = ref(null);
const formRef = ref(null);

const confirmReservation = () => {
  submitButtonRef.value.click();
};

const onSubmit = (value = {}, { resetForm }) => {
  console.log("送出的值:", value);
  alert("送出訂房!");
  // 改成用 VeeValidate  的 resetForm 方法將表單重置
  resetForm();
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <section>
          <h2 class="mb-4 fw-bold">訂房人資訊</h2>

          <VForm @submit="onSubmit" v-slot="{ errors }" ref="formRef">
            <div class="mb-4">
              <label for="name" class="form-label fw-bold">姓名</label>
              <VField
                id="name"
                name="name"
                rules="required|min:2"
                type="text"
                class="form-control p-3 rounded-3"
                :class="{ 'is-invalid': errors['name'] }"
                placeholder="請輸入姓名"
              />
              <span class="invalid-feedback">
                <VErrorMessage name="name">{{
                  errors["name"].replace("name", "姓名")
                }}</VErrorMessage>
              </span>
            </div>

            <div class="mb-4">
              <label for="phone" class="form-label fw-bold">手機號碼</label>
              <VField
                id="phone"
                name="phone"
                rules="required|phone"
                type="tel"
                class="form-control p-3 rounded-3"
                :class="{ 'is-invalid': errors['phone'] }"
                placeholder="請輸入手機號碼"
              />
              <span class="invalid-feedback">
                <VErrorMessage name="phone">{{
                  errors["phone"].replace("phone", "電話號碼")
                }}</VErrorMessage>
              </span>
            </div>

            <div class="mb-4">
              <label for="email" class="form-label fw-bold">電子信箱</label>
              <VField
                id="email"
                name="email"
                rules="required|email"
                type="email"
                class="form-control p-3 rounded-3"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入電子信箱"
              />
              <span class="invalid-feedback">
                <VErrorMessage name="email">{{
                  errors["email"].replace("email", "電子信箱")
                }}</VErrorMessage>
              </span>
            </div>

            <div class="mb-4">
              <label for="road" class="form-label fw-bold">地址</label>
              <div class="d-flex gap-2 mb-4">
                <VField
                  name="city"
                  as="select"
                  rules="required"
                  class="form-select w-50 p-3 fw-medium rounded-3"
                  :class="{ 'is-invalid': errors['city'] }"
                >
                  <option selected disabled value="">請選擇縣市</option>
                  <option value="高雄市">高雄市</option>
                </VField>
                <VField
                  name="district"
                  as="select"
                  rules="required"
                  class="form-select w-50 p-3 fw-medium rounded-3"
                  :class="{ 'is-invalid': errors['district'] }"
                >
                  <option selected disabled value="">請選擇行政區</option>
                  <option value="前金區">前金區</option>
                  <option value="鹽埕區">鹽埕區</option>
                  <option value="新興區">新興區</option>
                </VField>
              </div>
              <VField
                id="road"
                name="road"
                rules="required"
                type="text"
                class="form-control p-3 rounded-3"
                :class="{ 'is-invalid': errors['road'] }"
                placeholder="請輸入詳細地址"
              />
              <span class="invalid-feedback">地址 為必填</span>
            </div>
            <button ref="submitButtonRef" type="submit" class="d-none"></button>
          </VForm>
        </section>
      </div>
      <div class="col-md-5">
        <img
          class="img-fluid rounded-3"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
          alt="尊爵雙人房"
        />
        <div class="my-5">
          <h2 className="mb-3 fw-bold">價格詳情</h2>
          <div
            class="d-flex justify-content-between align-items-center mb-3 fw-medium"
          >
            <span>NT$ 10,000 X 2 晚 </span>
            <span>NT$ 20,000</span>
          </div>
          <div
            class="d-flex justify-content-between align-items-center fw-medium"
          >
            <p class="mb-0">住宿折扣</p>
            <span class="text-info">-NT$ 1,000</span>
          </div>
          <hr class="my-3" />
          <div
            class="d-flex justify-content-between align-items-center fw-bold"
          >
            <p class="mb-0">總價</p>
            <span>NT$ 19,000</span>
          </div>
        </div>

        <button
          class="btn btn-lg btn-primary w-100 fw-bold rounded-3"
          type="button"
          @click="confirmReservation"
        >
          確認訂房
        </button>
      </div>
    </div>
  </div>
</template>
