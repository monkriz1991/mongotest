<script setup>
const {data:posts,error,refresh} = await useFetch('/api/posts/')
const message = ref('')
const showdiv = ref(false)
const body = ref({
    title:''
})
const dell = ref({
    title:''
})
const update = ref({
    title:''
})
const  addpost  = async(item) => {
    body.value = { title: item };

    const { data: responseData } = await useFetch('/api/add/addpost/',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: body.value,
    })
   if(responseData){
        refresh()
        message.value = ''
   }
}
const deletepost = async(id) =>{
    dell.value = { title: id };
    const { data: responseData } = await useFetch('/api/delete/deletepost/',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: dell.value,
    })
    if(responseData){
        refresh()
   }
}
const updatepost = async(id) =>{
    update.value = { title: id };
    const { data: responseData } = await useFetch('/api/update/updatepost/',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: update.value,
    })
    if(responseData){
        refresh()
   }
}
</script>
<template>
    <div class="container">
        <button @click="addpost(message)">save</button>
        <h1>Hello</h1>
        <input v-model="message" placeholder="edit me" />
        <div class="block" v-for="item in posts" :key="item">
            {{ item.title }} 
            <button @click="showdiv=!showdiv">show</button>
            <div v-show="showdiv==true">
                {{ item._id }} 
            </div>
            <button @click="deletepost(item.title)">delete</button>
        </div>
    </div>
</template>

<style>
.container{
    max-width: 1160px;
    margin:0 auto
}
.block{
    float:left;
    width:100%;
    margin: 0 0 15px;
    border-radius:5px;
    padding: 20px;
    background: #f9f9f9;
}
</style>