<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});
const { data: category, error, refresh } = await useFetch("/api/category/");
const drawer = ref(false)
const form = ref({
    id_category: "",
    name: "",
    kirilica: "",
    img: "",
    description: "",
})
const addCategory = async () =>{
  const { data: responseData } = await useFetch("/api/add/addcategory/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: form.value,
  });
  if (responseData) {
    refresh();
    form.value = "";
  }
}
</script>

<template>
    <div class="container">
        <div class="columns">
            <div class="column is-8">
                <div class="content">
                <h1>Category</h1>
                <div class="drawer-add">
                    <button class="button is-success" type="primary" @click="drawer = true">
                        Добавить категорию
                    </button>
                    <div v-if="category" class="drawer-cat-all">
                        <div class="drawer-cat" v-for="item in category" :key="item">
                           <strong class="drawer-cat">{{ item.id_category }}</strong>
                           <span>{{ item.name }}</span>
                           <span>{{ item.kirilica }}</span>
                           <span>{{ item.img }}</span>
                           <span>{{ item.description }}</span>
                        </div> 
                    </div>
                    <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="60%">
                        <span>Hi there!</span>
                        <div class="drawer-block">
                            <form @submit.prevent="addCategory">
                                <div class="field">
                                    <div class="control">
                                        <input
                                        class="input"
                                        type="number"
                                        placeholder="id_category"
                                        v-model="form.id_category"
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input
                                        class="input"
                                        type="text"
                                        placeholder="name"
                                        v-model="form.name"
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
                                <div class="field">
                                    <div class="control">
                                        <input
                                        class="input"
                                        type="text"
                                        placeholder="kirilica"
                                        v-model="form.kirilica"
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <textarea 
                                        class="textarea" 
                                        placeholder="description"
                                        v-model="form.description" 
                                        rows="10">
                                        </textarea>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <button class="button is-success" type="submit">Save</button>
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

<style>
.drawer-cat-all{
    margin: 30px 0 0 0;
}
.drawer-add{

}
.drawer-block{
    padding: 25px 100px;
}
.drawer-cat{
    border-radius: 4px;
    min-height: 36px;
    background: #e2e4e6;
    padding: 15px;
    margin: 0 0 20px;
}
</style>