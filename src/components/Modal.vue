<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Авторизация</h2>
      <form>
        <div class="input-group">
          <label for="username">Имя пользователя:</label>
          <input v-model="username" type="text" id="username" name="username" />
        </div>
        <div class="input-group">
          <label for="password">Пароль:</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <p v-if="loginError" class="login-error">Неверный лолин или Пароль</p>
        <input
          @click.prevent="auth({ username, password })"
          type="submit"
          value="Войти"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ModalAuth",
  methods: {
    ...mapActions(["auth"]),
  },
  computed: {
    ...mapGetters(["loginError"]),
  },
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Отображение содержимого всплывающего окна */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 5px;
}

.input-group {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

/* Закрыть кнопку в верхнем правом углу */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.login-error {
  color: red;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
