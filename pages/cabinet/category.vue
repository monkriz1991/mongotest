<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

// const pageTotal = ref(0)
const sortPage = ref(0)
const currentPage = ref(1)
const pageSize = ref(2)
const drawer = ref(false)
const buttonEdit = ref(false)
const dell = ref({})
const form = ref({
    id_category: "",
    name: "",
    kirilica: "",
    img: "",
    description: "",
})
const { data: category, error, refresh } = await useFetch("/api/category/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
      body: {sortPage,pageSize},

    });
const addCategory = async () =>{
    let updatepost = "api/update/updatecategory"
    if(buttonEdit.value==true){
        updatepost = "api/add/addcategory"
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
}
const drawerDel = async (id) => {
  dell.value = { _id: id };
  const { data: responseData } = await useFetch("/api/delete/deletecategory/", {
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
    form.value.id_category = item.id_category,
    form.value.name = item.name,
    form.value.kirilica = item.kirilica,
    form.value.img = item.img,
    form.value.description = item.description,
    drawer.value = true
    buttonEdit.value = false
}

const drawerNull = () =>{
    drawer.value = true
    buttonEdit.value = true
    form.value = {}
}
const handleCurrentChange = (val) => {
    if(val==1){
        sortPage.value = 0 
    }else{
        sortPage.value = val*2-2 
    }
  currentPage.value = val
  refresh();
}
</script>

<template>
    <div class="container">
        <div class="columns">
            <div class="column is-8">
                <div class="content">
                <h1>Category</h1>
                <div class="drawer-add">
                    <button class="button is-success" type="primary" @click="drawerNull">
                        Добавить категорию
                    </button>
                    <div v-if="category.result" class="drawer-cat-all">
                        <div class="drawer-cat" v-for="item in category.result" :key="item">
                            <div class="drawer-cat-left">
                                <div class="drawer-cat-img">
                                    <img :src="item.img">
                                </div>
                                <span>{{ item.id_category }}</span>
                                <strong>{{ item.name }}</strong>
                            </div>
                           <!-- <span>{{ item.kirilica }}</span>   
                           <span>{{ item.description }}</span> -->
                            <div class="drawer-cat-right">
                                <button class="button is-warning is-normal is-light" type="submit" @click="drawerIn(item)">Edit</button>
                                <button class="button is-danger is-normal is-light" type="submit" @click="drawerDel(item._id)">Delete</button>
                            </div>
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
                                        type="text"
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
                                        <button v-if = "buttonEdit==true" class="button is-success" type="submit">Save</button>
                                        <button v-else class="button is-success" type="submit" @click="drawer=false">Edit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </el-drawer>
                </div>
            </div>
            <el-pagination background layout="prev, pager, next" 
            :current-page="currentPage"  
            :page-size="pageSize" 
            :total="category.count"       
            @current-change="handleCurrentChange"/>
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
    /* background: #e2e4e6; */
    padding: 15px 15px 15px 0;
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.drawer-cat-img{
height: 100px;
width:140px;
margin:0 20px 0 0;
border-radius: 6px;
overflow:hidden;
}
.drawer-cat-img img{
height: 100%;
width: 100%;
object-fit: cover;
}
.drawer-cat-left{
    display: flex;
    align-items: center;
}
.drawer-cat-right{
    display: flex;
    align-items: center;
}
.drawer-cat-left span{
    font-size: 13px;
    margin:0 20px 0 0;
}
.drawer-cat-left span{

}
.drawer-cat-right button{
    margin:0 0px 0 10px;
}
</style>