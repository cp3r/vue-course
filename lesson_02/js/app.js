//Компонент списка пользователей
let UsersList = {
  name: "UsersList",
  template: "#users",
  props: {
    users: {
      type: Array
    }
  }
};

//Основной компонент
let app = new Vue({
  el: "#root",
  components: {
    "users-list": UsersList
  },
  data() {
    return {
      users: [],
      errors: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://next.json-generator.com/api/json/get/V1mjzBPjN")
        .then(response => {
          this.users = response.data;
          this.errors = [];
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
});
