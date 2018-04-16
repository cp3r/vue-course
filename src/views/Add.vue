<template>
  <div class="five wide column">
    <div class="ui segment">
      <user-form :user="user"></user-form>
    </div>
    <button type="button" class="ui primary button" @click="save">Сохранить</button>
  </div>
</template>
<script>
import UserForm from "@/components/UserForm.vue";
export default {
  name: "Add",
  components: {
    UserForm
  },
  data: () => ({
    user: {}
  }),
  methods: {
    save() {
      //Добавить запрос на добаление пользователя
    }
  }
};
</script>

