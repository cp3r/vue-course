//Компонент редактирования пользователя
let UserEdit = {
  name: "UserEdit",
  template: "#user-edit",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tempUser: Object.assign({}, this.user)
    };
  },
  methods: {
    saveUser() {
      this.$emit("save-user", this.tempUser);
    },
    cancelEdit() {
      this.tempUser = Object.assign({}, this.user);
      this.$emit("cancel-edit");
    }
  }
};

//Основаной компонент
let app = new Vue({
  el: "#root",
  components: {
    "user-edit": UserEdit
  },
  data() {
    return {
      isEdit: false,
      user: {
        firstName: "Clarke",
        lastName: "Pennington",
        age: 20,
        company: "OBONES",
        email: "pennington.clarke@obones.org",
        balance: "$3,023.67"
      }
    };
  },
  computed: {
    userFullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    editUser() {
      this.isEdit = true;
    },
    cancelEdit() {
      this.isEdit = false;
    },
    saveUser(user) {
      this.user = Object.assign({}, user);
      this.isEdit = false;
    }
  }
});
