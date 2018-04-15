<template>
  <div id="app">
    <div id="nav" class="ui secondary menu">
      <router-link class="item" to="/">Список пользователей</router-link> 
      <router-link class="item" to="/user">Пользователь</router-link>
    </div>
    <div class="ui grid">           
        <router-view />      
    </div>
  </div>
</template>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ui.grid {
  padding: 0 30px;
}
</style>


