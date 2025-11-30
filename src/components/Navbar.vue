<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-content">
      <div class="navbar-brand">
        <h1>Jason Yoswara</h1>
      </div>

      <ul class="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="navbar-actions">
        <button
          @click="$emit('toggle-theme')"
          class="theme-toggle"
          :title="
            theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
          "
        >
          <svg
            v-if="theme === 'dark'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <button @click="toggleMobileMenu" class="mobile-menu-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <ul>
        <li><a href="#home" @click="toggleMobileMenu">Home</a></li>
        <li><a href="#about" @click="toggleMobileMenu">About</a></li>
        <li><a href="#projects" @click="toggleMobileMenu">Projects</a></li>
        <li><a href="#skills" @click="toggleMobileMenu">Skills</a></li>
        <li><a href="#contact" @click="toggleMobileMenu">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps(["theme"]);
defineEmits(["toggle-theme"]);

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(255, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 0, 0, 0.1);
}

[data-theme="light"] .navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(255, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 0, 0, 0.2);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4%;
}

.navbar-brand h1 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  cursor: pointer;
  letter-spacing: -0.5px;
}

.navbar-menu {
  display: flex;
  gap: 32px;
  list-style: none;
}

.navbar-menu a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s ease;
  position: relative;
}

.navbar-menu a:hover {
  color: var(--accent);
}

.navbar-menu a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.navbar-menu a:hover::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.theme-toggle {
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.theme-toggle:hover {
  background: var(--bg-card);
  transform: rotate(15deg);
}

.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 8px;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-menu ul {
  list-style: none;
  padding: 20px;
}

.mobile-menu ul li {
  margin: 16px 0;
}

.mobile-menu ul li a {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  display: block;
  padding: 12px;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.mobile-menu ul li a:hover {
  background: var(--bg-card);
  color: var(--accent);
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
