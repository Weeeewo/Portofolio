<template>
  <Transition name="modal">
    <div class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal-container">
        <button class="modal-close" @click="$emit('close')">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div class="modal-content">
          <!-- Video and Info Side by Side -->
          <div class="video-info-section">
            <div class="video-container">
              <video
                v-if="!selectedImage"
                ref="videoPlayer"
                :src="project.video"
                class="project-video"
                autoplay
                loop
                muted
                playsinline
              ></video>
              <img
                v-else
                :src="selectedImage"
                class="project-image"
                :alt="project.name"
              />
              <div class="video-controls" v-if="!selectedImage">
                <button @click="togglePlay" class="control-btn">
                  <svg
                    v-if="isPlaying"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button @click="toggleMute" class="control-btn">
                  <svg
                    v-if="isMuted"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path
                      d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="info-container">
              <div class="details-header">
                <h2 class="project-title">{{ project.title }}</h2>
                <p class="project-tagline">{{ project.tagline }}</p>
              </div>

              <div class="tech-stack">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tech-item"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="project-description">
                <h3>About This Project</h3>
                <p>{{ project.description }}</p>
              </div>

              <div class="project-features">
                <h3>Key Features</h3>
                <ul>
                  <li v-for="feature in project.features" :key="feature">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="project-actions">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- Horizontal Thumbnail Gallery -->
          <div class="gallery-section">
            <div class="gallery-horizontal">
              <!-- Video Thumbnail -->
              <div
                class="gallery-thumb"
                :class="{ active: !selectedImage }"
                @click="showVideo"
              >
                <div class="thumb-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <img :src="project.thumbnail" :alt="`${project.name} video`" />
              </div>

              <!-- Image Thumbnails -->
              <div
                v-for="(image, index) in images"
                :key="index"
                class="gallery-thumb"
                :class="{ active: selectedImage === image }"
                @click="showImage(image)"
              >
                <img
                  :src="image"
                  :alt="`${project.name} screenshot ${index + 1}`"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Fullscreen Image Modal -->
  <Transition name="fade">
    <div
      v-if="selectedImageIndex !== null"
      class="image-modal"
      @click="closeImageModal"
    >
      <button class="image-modal-close" @click="closeImageModal">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <button
        v-if="selectedImageIndex > 0"
        class="image-nav prev"
        @click.stop="prevImage"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <img
        :src="images[selectedImageIndex]"
        :alt="`${project.name} screenshot`"
      />
      <button
        v-if="selectedImageIndex < images.length - 1"
        class="image-nav next"
        @click.stop="nextImage"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps(["project"]);
defineEmits(["close"]);

const videoPlayer = ref(null);
const isPlaying = ref(true);
const isMuted = ref(true);
const selectedImageIndex = ref(null);
const selectedImage = ref(null);

// Auto-load images from the project folder
const images = computed(() => {
  const imageFiles = {
    QuraShop: [
      "/assets/projects/QuraShop/Dashboard.png",
      "/assets/projects/QuraShop/Login.png",
      "/assets/projects/QuraShop/Signup.png",
      "/assets/projects/QuraShop/CatalogDetail.png",
      "/assets/projects/QuraShop/Cart.png",
      "/assets/projects/QuraShop/Profile.png",
    ],
    ChickenGang: [
      "/assets/projects/ChickenGang/Dashboard.png",
      "/assets/projects/ChickenGang/Menu.png",
      "/assets/projects/ChickenGang/History.png",
      "/assets/projects/ChickenGang/ContactUs.png",
    ],
    Cineplay: [
      "/assets/projects/Cineplay/DashboardDarkMode.png",
      "/assets/projects/Cineplay/DashboardLightMode.png",
      "/assets/projects/Cineplay/CinemaSelection.png",
      "/assets/projects/Cineplay/SeatSelection.png",
      "/assets/projects/Cineplay/PaymentMethod.png",
      "/assets/projects/Cineplay/Payment.png",
      "/assets/projects/Cineplay/TicketHistory.png",
      "/assets/projects/Cineplay/Profile.png",
    ],
  };

  return imageFiles[props.project.folder] || [];
});

const togglePlay = () => {
  if (videoPlayer.value) {
    if (isPlaying.value) {
      videoPlayer.value.pause();
    } else {
      videoPlayer.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};

const toggleMute = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = !videoPlayer.value.muted;
    isMuted.value = videoPlayer.value.muted;
  }
};

const showVideo = () => {
  selectedImage.value = null;
  if (videoPlayer.value) {
    videoPlayer.value.play();
    isPlaying.value = true;
  }
};

const showImage = (image) => {
  selectedImage.value = image;
  if (videoPlayer.value) {
    videoPlayer.value.pause();
  }
};

const openImageModal = (index) => {
  selectedImageIndex.value = index;
};

const closeImageModal = () => {
  selectedImageIndex.value = null;
};

const prevImage = () => {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--;
  }
};

const nextImage = () => {
  if (selectedImageIndex.value < images.value.length - 1) {
    selectedImageIndex.value++;
  }
};

const handleKeyPress = (e) => {
  if (selectedImageIndex.value !== null) {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeImageModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyPress);
});
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 20px;
}

.modal-container {
  position: relative;
  background: var(--bg-secondary);
  border-radius: 12px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
  animation: slideInFromBottom 0.4s ease-out;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 0, 0, 0.9);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}

.modal-content {
  overflow: hidden;
  border-radius: 12px;
}

.video-info-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--bg-secondary);
}

.video-container {
  position: relative;
  width: 100%;
  background: #000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 500px;
  max-height: 600px;
  overflow: auto;
}

.video-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.video-container::-webkit-scrollbar-track {
  background: #000;
}

.video-container::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}

.project-video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.project-image {
  max-width: 100%;
  max-height: none;
  display: block;
  cursor: grab;
}

.project-image:active {
  cursor: grabbing;
}

.video-controls {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 12px;
  z-index: 5;
}

.control-btn {
  background: rgba(0, 0, 0, 0.7);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: rgba(255, 0, 0, 0.9);
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}

.info-container {
  padding: 40px;
  background: var(--bg-secondary);
  overflow-y: auto;
  max-height: 600px;
}

.info-container::-webkit-scrollbar {
  width: 6px;
}

.info-container::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

.info-container::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 3px;
}

.details-header {
  margin-bottom: 24px;
}

.details-header {
  margin-bottom: 24px;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--text-primary);
  letter-spacing: -1px;
}

.project-tagline {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.tech-stack {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.tech-item {
  background: var(--accent);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
}

.project-description,
.project-features {
  margin-bottom: 24px;
}

.project-description h3,
.project-features h3,
.gallery-section h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.project-description p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

.project-features li svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--accent);
}

.project-actions {
  margin-bottom: 0;
}

.project-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
}

.gallery-section {
  padding: 20px 40px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
}

.gallery-horizontal {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0;
  scroll-behavior: smooth;
}

.gallery-horizontal::-webkit-scrollbar {
  height: 8px;
}

.gallery-horizontal::-webkit-scrollbar-track {
  background: var(--bg-primary);
  border-radius: 4px;
}

.gallery-horizontal::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}

.gallery-thumb {
  position: relative;
  flex-shrink: 0;
  width: 180px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  background: var(--bg-card);
}

.gallery-thumb:hover {
  transform: scale(1.05);
  border-color: var(--accent);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
}

.gallery-thumb.active {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}

.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.gallery-inline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gallery-inline .gallery-item {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--bg-card);
  border: 1px solid var(--border);
}

.gallery-inline .gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  border-color: var(--accent);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Image Modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.image-modal img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
}

.image-modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.image-modal-close:hover {
  background: rgba(255, 0, 0, 0.9);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}

.image-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.image-nav:hover {
  background: rgba(255, 0, 0, 0.9);
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}

.image-nav.prev {
  left: 40px;
}

.image-nav.next {
  right: 40px;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  animation: slideInFromBottom 0.4s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 0;
  }

  .modal-container {
    border-radius: 0;
    max-width: 100%;
  }

  .video-info-section {
    grid-template-columns: 1fr;
  }

  .video-container {
    min-height: 300px;
  }

  .info-container {
    padding: 24px;
    max-height: none;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .gallery-section {
    padding: 24px;
  }

  .gallery-horizontal {
    gap: 8px;
  }

  .gallery-thumb {
    width: 140px;
    height: 80px;
  }

  .image-modal {
    padding: 20px;
  }

  .image-nav {
    width: 40px;
    height: 40px;
  }

  .image-nav.prev {
    left: 10px;
  }

  .image-nav.next {
    right: 10px;
  }
}
</style>
