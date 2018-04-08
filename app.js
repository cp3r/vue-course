let app = new Vue({
  el: "#app",
  data() {
    return {
      title: "Курс по Vue: Урок первый",
      users: [
        {
          name: "Валерий",
          surname: "Носов",
          middlename: "Егорович",
          avatar: "https://randomuser.me/api/portraits/lego/0.jpg"
        },
        {
          name: "Кира",
          surname: "Беспалова",
          middlename: "Олеговна",
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
        },
        {
          name: "Таисия",
          surname: "Терентьева",
          middlename: "Евгеньевна",
          avatar: null
        },
        {
          name: "Иван",
          surname: "Сидоров",
          middlename: "Фёдорович",
          avatar: "https://randomuser.me/api/portraits/lego/5.jpg"
        }
      ],
      userListVisible: false
    };
  },
  methods: {
    toggleUserList() {
      this.userListVisible = !this.userListVisible;
    }
  }
});
