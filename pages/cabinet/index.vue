<script setup>
definePageMeta({
  middleware: "auth",
  title: "My home page",
  layout: "custom",
});

const { data, signOut } = useAuth();
const drawer = ref(false);
const buttonEdit = ref(false);
const dell = ref({});
const selectForm = ref("");
const form = reactive({
  one: {
    type: "",
    title: "",
    img: "",
    raiting: "",
    description: "",
    link: "",
  },
  two: {
    type: "",
    title: "",
    img: "",
    raiting: "",
    description: "",
    link: "",
  },
  three: {
    type: "",
    title: "",
    img: "",
    description: "",
    link: "",
    color:"",
  },
});
const optionForm = [
  {
    value: "one",
    label: "Первый Блок",
  },
  {
    value: "two",
    label: "Второй Блок",
  },
  {
    value: "three",
    label: "Топ слайдер",
  },
];
const { data: main, refresh } = await useFetch("/api/main/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});
const addMain = async () => {
  let updatemain = "api/update/updatemain";
  let formObj = {}
  if (buttonEdit.value == true) {
    updatemain = "api/add/addmain";
  }
  formObj = form[selectForm.value]
  formObj['type'] = selectForm.value
  const { data: responseData } = await useFetch(`/${updatemain}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: { form:formObj},
    watch: false,
  });
  if (responseData) {
    for (let item in form[selectForm.value]) {
      form[selectForm.value][item] = "";
    }
    refresh();
  }
};
const drawerDel = async (id, type) => {
  dell.value = { _id: id, obtype: type };
  const { data: responseData } = await useFetch("/api/delete/daletemain/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: dell.value,
  });
  if (responseData) {
    refresh();
  }
};
const drawerIn = (array, type) => {
  for (let item in array) {
    form[array.type][item] = array[item];
  }
  selectForm.value = array.type;
  drawer.value = true;
  buttonEdit.value = false;
};

const drawerNull = () => {
  drawer.value = true;
  buttonEdit.value = true;
  if (form[selectForm.value] != undefined) {
    for (let item in form[selectForm.value]) {
      form[selectForm.value][item] = "";
    }
    delete form[selectForm.value]["__v"];
    delete form[selectForm.value]["_id"];
    selectForm.value = "";
  }
};
</script>
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <div class="content">
          <div class="cat-h1-cab">
            <h1>Main</h1>
            <button class="button is-white" type="primary" @click="drawerNull">
              <span class="icon">
                <Icon class="modal-b-svg" name="solar:add-square-broken" />
              </span>
              <span>Добавить контент</span>
            </button>
          </div>
          <div class="drawer-add">
            <div v-if="main" class="drawer-cat-all">
              <div
                class="drawer-cat-all"
                v-for="itemmine in main"
                :key="itemmine"
              >
                <div class="drawer-cat" v-for="item in itemmine" :key="item">
                  <div class="drawer-cat-left">
                    <span>{{ item.type }}</span>
                    <span>{{ item.title }}</span>
                  </div>

                  <div class="drawer-cat-right">
                    <button
                      class="button is-warning is-normal is-light"
                      type="submit"
                      @click="drawerIn(item)"
                    >
                      Edit
                    </button>
                    <button
                      class="button is-danger is-normal is-light"
                      type="submit"
                      @click="drawerDel(item._id, item.type)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ClientOnly>
            <el-drawer
              v-model="drawer"
              title="I am the title"
              :with-header="false"
              size="60%"
            >
            
              <span>Hi there!</span>
              <div class="drawer-block">
                <div v-show="buttonEdit == true">
                  <el-select
                    v-model="selectForm"
                    class="mb-3"
                    placeholder="Select typ"
                    size="large"
                  >
                    <el-option
                      v-for="item in optionForm"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <form v-if="selectForm" @submit.prevent="addMain">
      
                  <div class="field" v-for="(item, index) in form[selectForm]" :key="index">
                    <div
                      class="field"
                      v-show="index != '__v' && index != '_id' && index != 'type' && index != 'color'">
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          :placeholder="index"
                          v-model="form[selectForm][index]"
                        />
                      </div>
                    </div>
                    <div class="field" v-if="index == 'color'">
                        <el-color-picker
                          v-model="form[selectForm][index]"
                          show-alpha
                        />
                    </div>
                  </div>
     
                  <div class="field">
                    <div class="control">
                      <button
                        v-if="buttonEdit == true"
                        class="button is-success"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        v-else
                        class="button is-success"
                        type="submit"
                        @click="drawer = false"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            
            </el-drawer>
          </ClientOnly>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <cabinet-LeftBar />
      </div>
    </div>
  </div>
</template>
