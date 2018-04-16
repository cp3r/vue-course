<template>
  <table class="ui table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Возраст</th>
        <th>Компания</th>
        <th>E-mail</th>
        <th>Телефон</th>
        <th>Баланс</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.age}}</td>
        <td>{{user.company}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.balance}}</td>        
        <td>
          <router-link :to='"/user/" + user.id' class="ui icon primary button">          
            <i class="pencil icon"></i>          
          </router-link>
        </td>
        <td>
          <button type="button" class="ui icon negative button">
            <i class="times icon"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>