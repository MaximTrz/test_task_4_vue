<template>
  <template v-if="checkLogin">
    <nav>
      <header>
        <div class="container">
          <h1>Библиотека</h1>
          <nav>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">Контакты</a></li>
              <li @click.prevent="logout"><a href="#">Выход</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </nav>
    <main>
      <router-view />
    </main>
  </template>
  <modal v-if="!checkLogin" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "./components/Modal.vue";
export default {
  components: {
    Modal,
  },
  computed: {
    ...mapGetters(["checkLogin"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

/* Устанавливаем ширину и отступы для контейнера */
.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 20px;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

section {
  flex: 1;
  min-width: 300px;
  margin-right: 20px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.book-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.book-list li {
  margin-bottom: 20px;
}

.book-list a {
  display: block;
  text-align: center;
  color: #333;
  text-decoration: none;
}

.book-list img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.book-list h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;
}

.book-list p {
  margin: 0;
  font-size: 1rem;
  color: #999;
}
</style>
