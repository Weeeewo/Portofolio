<template>
  <div :data-theme="theme" class="app">
    <Navbar @toggle-theme="toggleTheme" :theme="theme" />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

const theme = ref("dark");

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    theme.value = savedTheme;
  }
});
</script>

<style scoped>
.app {
  min-height: 100vh;
  transition: background-color 0.3s ease;
}
</style>
