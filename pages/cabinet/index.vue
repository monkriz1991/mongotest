<script setup>
definePageMeta({
  middleware: "auth",
  title: "My home page",
  layout: "custom",
});
const { data, signOut } = useAuth();

const drawer = ref(false)
const buttonEdit = ref(false)
const dell = ref({})
const selectForm = ref('')
const form = reactive({
  one:{
      title: "",
      img: "",
      description:"",
  },
  two:{
    title: "",
    img: "",
    raiting:"",
    description:"",
  },
  three:{
      title: "",
      img: "",
      description:"",
  }
})
const optionForm = [
    {
      value: 'one',
      label: 'Первый Блок',
    },
    {
      value: 'two',
      label: 'Второй Блок',
    },
    {
      value: 'three',
      label: 'Топ слайдер',
    },
  ]
const { data: main, error, refresh } = await useFetch("/api/main/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

const addMain = async () =>{
    let updatemain = "api/update/updatemain"
    if(buttonEdit.value==true){
      updatemain = "api/add/addmain"
    }
    let requestBody = {form:JSON.parse(JSON.stringify(form[selectForm.value])),type:selectForm.value}
    const { data: responseData } = await useFetch(`/${updatemain}/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
        body: requestBody
    });
    if (responseData) {
      for(let item in form[selectForm.value]){
        form[selectForm.value][item] = ''
      }
      refresh();
    }
}
const drawerDel = async (id) => {
  dell.value = { _id: id };
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
const drawerIn = (item) =>{
    form.value._id = item._id
    form.value.oneblock = item.oneblock
    form.value.twoblock = item.twoblock,
    form.value.topslider = item.topslider,
    drawer.value = true
    buttonEdit.value = false
}

const drawerNull = () =>{
    drawer.value = true
    buttonEdit.value = true
    form.value = {}
}

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
                        <div class="drawer-cat" v-for="item in main" :key="item">
                            <div class="drawer-cat-left">
                                <span>{{ item.title }}</span>
                            </div>

                            <div class="drawer-cat-right">
                                <button class="button is-warning is-normal is-light" type="submit" @click="drawerIn(item)">Edit</button>
                                <button class="button is-danger is-normal is-light" type="submit" @click="drawerDel(item._id)">Delete</button>
                            </div>
                        </div> 
                    </div>
                    <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="60%">
                        <span>Hi there!</span>
                        <div class="drawer-block">
      
                          <el-select v-model="selectForm" class="mb-3" placeholder="Select typ" size="large">
                            <el-option
                              v-for="item in optionForm"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                            <form @submit.prevent="addMain">
                                <div v-if="selectForm" class="field">
                                  <div v-for="(item,index) in form[selectForm]" :key="index" class="field">
                                    <div class="control">
                                        <input
                                        class="input"
                                        type="text"
                                        :placeholder="index"
                                        v-model="form[selectForm][index]"
                                        />
                                    </div>
                                  </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <button v-if = "buttonEdit==true" class="button is-success" type="submit">Save</button>
                                        <button v-else class="button is-success" type="submit" @click="drawer=false">Edit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </el-drawer>
                </div>
            </div>
      </div>
      <div class="column is-4">
        <cabinet-LeftBar />
      </div>
    </div>
  </div>
</template>