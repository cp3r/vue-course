<template>
  <div class="ui form container">    
    <div class="field">
      <label>Имя</label>
      <input type="text" v-model="tempUser.firstName"/>
    </div>
    <div class="field">
      <label>Фамилия</label>
      <input type="text" v-model="tempUser.lastName"/>
    </div>    
    <div class="field">
      <label>Возраст</label>
      <input type="text" v-model.number="tempUser.age"/>
    </div>
    <div class="field">
      <label>Компания</label>
      <input type="text" v-model="tempUser.company"/>
    </div>
    <div class="field">
      <label>E-mail</label>
      <input type="text" v-model="tempUser.email"/>
    </div>
    <div class="field">
      <label>Телефон</label>
      <input type="text" v-model="tempUser.phone"/>
    </div>
    <div class="field">
      <label>Баланс</label>
      <input type="text" v-model="tempUser.balance"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserForm",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    tempUser: null
  }),
  watch: {
    tempUser: {
      deep: true,
      handler() {
        this.$emit("change", this.tempUser);
      }
    }
  },
  created() {
    this.tempUser = Object.assign({}, this.user);
  }
};
</script>
