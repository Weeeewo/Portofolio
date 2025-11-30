<template>
  <section id="projects" class="projects section">
    <div class="container">
      <h2 class="section-title">My Projects</h2>

      <div class="projects-row">
        <div class="row-header">
          <h3>Featured Work</h3>
        </div>
        <div class="cards-container">
          <div
            v-for="project in projects"
            :key="project.id"
            class="card-wrapper"
          >
            <ProjectCard :project="project" @click="openModal(project)" />
          </div>
        </div>
      </div>
    </div>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

const selectedProject = ref(null);

const projects = [
  {
    id: 1,
    name: "QuraShop",
    title: "QuraShop - E-Commerce Platform",
    tagline: "Full-featured online shopping experience",
    tech: ["Vue.js", "Laravel", "JWT Auth", "Tailwind CSS"],
    description:
      "QuraShop is a modern e-commerce platform built with Vue.js and Laravel. It features a complete shopping experience with JWT authentication, product catalog, shopping cart, and user profile management.",
    features: [
      "JWT-based secure authentication system",
      "Dynamic product catalog with search and filters",
      "Shopping cart with real-time updates",
      "User profile and order management",
      "Responsive design for all devices",
      "Admin panel for product management",
    ],
    github: "https://github.com/Weeeewo",
    folder: "QuraShop",
    video: "/Demo Website/Video/DemoQuraShop.mkv",
    thumbnail: "/Demo Website/Gambar/QuraShop/Dashboard.png",
    isCropped: true,
  },
  {
    id: 2,
    name: "ChickenGang",
    title: "ChickenGang - Restaurant Website",
    tagline: "Delicious experience, digitally served",
    tech: ["Vue.js", "Laravel", "MySQL", "Responsive Design"],
    description:
      "ChickenGang is a restaurant website showcasing menu items, allowing customers to browse dishes, view detailed descriptions, and contact the restaurant. Features a clean, appetizing design with smooth navigation.",
    features: [
      "Interactive menu showcase",
      "Restaurant information and history",
      "Contact form for reservations",
      "Image gallery of dishes",
      "Mobile-friendly responsive layout",
      "Fast and optimized performance",
    ],
    github: "https://github.com/Weeeewo",
    folder: "ChickenGang",
    video: "/Demo Website/Video/DemoChickenGang.mp4",
    thumbnail: "/Demo Website/Gambar/ChickenGang/Dashboard.png",
    isCropped: true,
  },
  {
    id: 3,
    name: "CinePlay",
    title: "CinePlay - Cinema Booking System",
    tagline: "Book your perfect movie experience",
    tech: ["Vue.js", "Laravel", "Payment Integration", "Dark Mode"],
    description:
      "CinePlay is a comprehensive cinema ticket booking system featuring cinema selection, seat booking, payment processing, and ticket management. Includes both light and dark mode for optimal viewing experience.",
    features: [
      "Cinema and movie selection interface",
      "Interactive seat selection system",
      "Multiple payment methods (QRIS, Bank Transfer)",
      "My Tickets page for booking history",
      "Dark mode and light mode toggle",
      "Real-time seat availability updates",
      "User profile and preferences",
    ],
    github: "https://github.com/Weeeewo",
    folder: "Cineplay",
    video: "/Demo Website/Video/DemoCineplay.mkv",
    thumbnail: "/Demo Website/Gambar/Cineplay/DashboardDarkMode.png",
    isCropped: true,
  },
];

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
.projects {
  background: var(--bg-primary);
  min-height: 100vh;
  padding: 100px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 60px;
  letter-spacing: -1px;
}

.projects-row {
  margin-bottom: 60px;
}

.row-header {
  margin-bottom: 24px;
}

.row-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 8px 0;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
