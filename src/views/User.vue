<template>  
  <div class="five wide column">
    <div class="ui segment">
      <div v-if="!user">Загрузка...</div>
      <user-edit v-else :user="user"></user-edit>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserEdit from "@/components/UserEdit.vue";

export default {
  name: "User",
  components: {
    UserEdit
  },
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get("http://localhost:3000/users/0").then(response => {
        this.user = response.data;
      });
    }
  }
};
</script>
