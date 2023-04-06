/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import ApiService from "@/ApiService";

const apiSerice = new ApiService();

export default createStore({
  state: {
    apiSerice,
    books: [],
    login: false,
    loginError: false,
  },
  getters: {
    apiSerice: ({ apiSerice }) => apiSerice,
    checkLogin: ({ login }) => login,
    books: ({ books }) => books,
    loginError: ({ loginError }) => loginError,
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setLogin(state, status) {
      state.login = status;
    },
    setLoginError(state, status) {
      state.loginError = status;
    },
  },
  actions: {
    async loadBooks() {
      const res = await this.state.apiSerice.getAllBooks();
      if (res.status === 401) {
        this.commit("setLogin", false);
      } else {
        this.commit("setBooks", res.result);
        this.commit("setLogin", true);
      }
    },
    async auth({ commit, dispatch }, data) {
      const res = await this.state.apiSerice.auth(data);
      console.log(res);
      if (res.ok) {
        this.dispatch("loadBooks");
        commit("setLoginError", false);
      } else {
        commit("setLoginError", true);
      }
    },
    async logout({ commit }) {
      const res = await this.state.apiSerice.logOut();
      if (res.ok) {
        commit("setLogin", false);
      }
    },
  },
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});
