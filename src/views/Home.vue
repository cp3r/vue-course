<template>
  <div class="home">     
    <div v-if="!users && !errors.length" class="ui active inverted dimmer">
      <div class="ui text loader">Загрузка...</div>  
    </div>
    <div v-else>
      <div v-if="errors.length" class="ui error message">Ошибка при загрузке данных</div>
      <users-list v-else :users="users"></users-list>    
    </div>    
  </div>
</template>

<script>
import axios from "axios";
import UsersList from "@/components/UsersList.vue";

export default {
  name: "home",
  components: {
    UsersList
  },
  data: () => ({
    errors: [],
    users: null
  }),
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("http://localhost:3000/users")
        .then(response => {
          this.users = response.data;
        })
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>
