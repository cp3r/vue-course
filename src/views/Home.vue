<template>
  <div class="home">     
    <users-list :users="users"></users-list>    
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
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("http://localhost:3000/users").then(response => {
        this.users = response.data;
      });
    }
  }
};
</script>
