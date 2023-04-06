<template>
  <section>
    <div class="container">
      <h2>Список книг</h2>
      <ul class="book-list">
        <AppBook
          v-for="book in books"
          :key="book.id"
          :title="book.title"
          :author="book.author"
          :year="book.year"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import AppBook from "@/components/AppBook.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  components: { AppBook },
  computed: {
    ...mapGetters(["books"]),
  },
};
</script>
