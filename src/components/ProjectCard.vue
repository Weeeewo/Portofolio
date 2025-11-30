<template>
  <div class="project-card" @click="$emit('click')">
    <div class="card-image">
      <img :src="project.thumbnail" :alt="project.title" loading="lazy" />
      <div class="card-overlay">
        <div class="card-content">
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-tagline">{{ project.tagline }}</p>
          <div class="card-tech">
            <span
              v-for="tech in project.tech.slice(0, 3)"
              :key="tech"
              class="tech-badge"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
      <div class="play-icon">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle
            cx="25"
            cy="25"
            r="24"
            fill="rgba(0,0,0,0.7)"
            stroke="white"
            stroke-width="2"
          />
          <path d="M20 15 L35 25 L20 35 Z" fill="white" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["project"]);
defineEmits(["click"]);
</script>

<style scoped>
.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--bg-card);
  aspect-ratio: 16 / 9;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 10;
}

.card-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: all 0.3s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.7) 60%,
    transparent 100%
  );
  padding: 24px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .card-overlay {
  transform: translateY(0);
  opacity: 1;
}

.card-content {
  color: white;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: white;
}

.card-tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
}

.card-tech {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-badge {
  background: rgba(255, 0, 0, 0.9);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.project-card:hover .play-icon {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

@media (max-width: 640px) {
  .card-overlay {
    transform: translateY(0);
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      transparent 100%
    );
  }

  .card-title {
    font-size: 1.25rem;
  }
}
</style>
