<template>  
  <div v-if="!user && !errors.length" class="ui active inverted dimmer">
    <div class="ui text loader">Загрузка...</div>        
  </div>     
  <div v-else  class="five wide column">        
      <div v-if="errors.length">
        <div class="ui error message">Ошибка при загрузке данных</div>
      </div>   
      <div v-else  class="ui segment">
        <user-form :user="user"></user-form>      
      </div>
  </div>
</template>
<script>
import axios from "axios";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "User",
  components: {
    UserForm
  },
  data: () => ({
    errors: [],
    user: null
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("http://localhost:3000/users/" + this.$route.params.id)
        .then(response => {
          this.user = response.data;
        })
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>
