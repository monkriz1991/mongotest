<script setup>
const { data: posts, error, refresh } = await useFetch("/api/posts/");
const message = ref("");
const text = ref("");
const status = ref(false);
const showdiv = ref(0);
const body = ref({
  title: "",
});
const dell = ref({
  title: "",
});
const update = ref({
  title: "",
});
const addpost = async (item, st, tx) => {
  body.value = { title: item, status: st, text: tx };

  const { data: responseData } = await useFetch("/api/add/addpost/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: body.value,
  });
  if (responseData) {
    refresh();
    message.value = "";
    status.value = "";
    text.value = "";
  }
};
const deletepost = async (id) => {
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
const updatepost = async (id, title) => {
  update.value = { title: title, _id: id };
  const { data: responseData } = await useFetch("/api/update/updatepost/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: update.value,
  });
  if (responseData) {
    refresh();
    showdiv.value = 0;
  }
};
const showUpdate = (idx) => {
  if (idx == showdiv.value) {
    showdiv.value = 0;
  } else {
    showdiv.value = idx;
  }
};
</script>
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <h1>Mongo</h1>
        <input v-model="message" placeholder="edit me" />
        <input type="checkbox" v-model="status" placeholder="edit me" />
        <textarea v-model="text" placeholder="add multiple lines"></textarea>
        <button @click="addpost(message, status, text)">save</button>
        <div class="block" v-for="item in posts" :key="item._id">
          <p>
            {{ item.title }}
          </p>
          <p>
            {{ item.text }}
          </p>
          <button @click="showUpdate(item._id)">show</button>
          <button @click="deletepost(item._id)">delete</button>
          <transition>
            <div v-show="item._id == showdiv">
              {{ item._id }}
              <input v-model="item.title" placeholder="edit me" />
              <button @click="updatepost(item._id, item.title)">save</button>
            </div>
          </transition>
        </div>
      </div>
      <div class="column is-4">
        <cabinet-LeftBar />
      </div>
    </div>
  </div>
</template>

<style>
.block {
  float: left;
  width: 100%;
  margin: 0 0 15px;
  border-radius: 5px;
  padding: 20px;
  background: #f9f9f9;
}
</style>
