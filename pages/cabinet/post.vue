<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const {
  data: category
} = await useFetch("/api/category/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});
const sortPage = ref(0);
const currentPage = ref(1);
const pageSize = ref(2);
const drawer = ref(false);
const buttonEdit = ref(false);
const dell = ref({});
const form = ref({
  category: "",
  title: "",
  preview: "",
  price: "",
  kirilica: "",
  img: "",
  info: "",
  description: "",
  show_index:"",
});
const {
  data: post,
  error,
  refresh,
} = await useFetch("/api/posts/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: { sortPage, pageSize },
});
const addPost = async () => {
  let updatepost = "api/update/updatepost";
  if (buttonEdit.value == true) {
    updatepost = "api/add/addpost";
  }

  const { data: responseData } = await useFetch(`/${updatepost}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: form.value,
  });
  if (responseData) {
    refresh();
    form.value = {};
  }
};
const drawerDel = async (id) => {
  dell.value = { _id: id };
  const { data: responseData } = await useFetch("/api/delete/deletepost/", {
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
const drawerIn = (item) => {
  form.value._id = item._id;
    (form.value.category = item.category),
    (form.value.title = item.title),
    (form.value.preview = item.preview),
   
    (form.value.img = item.img),
    (form.value.price = item.price),
    (form.value.info = item.info),
    (form.value.description = item.description),
    (form.value.show_index = item.show_index),
    (drawer.value = true);
  
    for(let catall  in category){
      for(let catim  in category[catall]){
        if(category[catall][catim]!=undefined){
          if(item.kirilica==category[catall][catim]['kirilica']){
            form.value.kirilica = category[catall][catim].kirilica
          } 
        }
      }
    }
    if (item.description == undefined) {
      form.value.description = [];
    } else {
      form.value.description = item.description;
    }
    buttonEdit.value = false;
};

const drawerNull = () => {
  drawer.value = true;
  buttonEdit.value = true;
  form.value = {};
  form.value.description = [];
};
const handleCurrentChange = (val) => {
  if (val == 1) {
    sortPage.value = 0;
  } else {
    sortPage.value = val * 2 - 2;
  }
  currentPage.value = val;
  refresh();
};
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <div class="content">
          <div class="cat-h1-cab">
              <h1>Post</h1>
              <button class="button is-white" type="primary" @click="drawerNull">
                  <span class="icon">
                      <Icon class="modal-b-svg" name="solar:add-square-broken" />
                  </span>  
                  <span>Добавить пост</span>    
              </button>
          </div>
          <div class="drawer-add">
            <div v-if="post.result" class="drawer-cat-all">
              <div class="drawer-cat" v-for="item in post.result" :key="item">
                <div class="drawer-cat-left">
                  <div class="drawer-cat-img">
                    <img :src="item.img" />
                  </div>
                  <span>{{ item.category }}</span>
                  <strong>{{ item.title }}</strong>
                </div>
                <!-- <span>{{ item.kirilica }}</span>   
                           <span>{{ item.description }}</span> -->
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
                    @click="drawerDel(item._id)"
                  >
                    Delete
                  </button>
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
                  <form @submit.prevent="addPost">
                    <div class="field">
                      <el-select v-model="form.kirilica" class="" placeholder="category" size="large">
                        <el-option
                          v-for="item in category"
                          :key="item.id_category"
                          :label="item.name"
                          :value="item.kirilica"
                        />
                      </el-select>
                    </div>
                    <div class="field">
                      <div class="control">
                        <el-checkbox
                          placeholder="show_indeex"
                          v-model="form.show_index"
                        >Показывать на главной</el-checkbox>
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="name"
                          v-model="form.title"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="preview"
                          v-model="form.preview"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          placeholder="price"
                          v-model="form.price"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="img"
                          v-model="form.img"
                        />
                      </div>
                    </div>
                    <!-- <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="kirilica"
                          v-model="form.kirilica"
                        />
                      </div>
                    </div> -->
                    <div class="field">
                      <div class="control">
                        <textarea
                          class="textarea"
                          placeholder="info"
                          v-model="form.info"
                          rows="4"
                        >
                        </textarea>
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <QuillEditor
                          v-model:content="form.description"
                          contentType="html"
                          toolbar="full"
                          theme="snow"
                        ></QuillEditor>
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
                          class="button is-success mt-6"
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
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="post.count"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="column is-4">
        <cabinet-LeftBar />
      </div>
    </div>
  </div>
</template>

<style>
.drawer-cat-all {
  margin: 30px 0 0 0;
}
.drawer-add {
}
.drawer-block {
  padding: 25px 100px;
}
.drawer-cat {
  border-radius: 4px;
  min-height: 36px;
  /* background: #e2e4e6; */
  padding: 15px 15px 15px 0;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drawer-cat-img {
  height: 110px;
  width: 180px;
  margin: 0 20px 0 0;
  border-radius: 6px;
  overflow: hidden;
}
.drawer-cat-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.drawer-cat-left {
  display: flex;
  align-items: center;
}
.drawer-cat-right {
  display: flex;
  align-items: center;
}
.drawer-cat-left span {
  font-size: 13px;
  margin: 0 20px 0 0;
}
.drawer-cat-left span {
}
.drawer-cat-right button {
  margin: 0 0px 0 10px;
}
.ql-container {
  min-height: 350px;
}
</style>
