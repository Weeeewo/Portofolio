<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <div class="hero-text fade-in-up">
        <div class="hero-greeting">
          <span class="wave">👋</span>
          <span class="greeting-text">Hello, I'm</span>
        </div>
        <h1 class="hero-title">Jason Yoswara</h1>
        <h2 class="hero-subtitle">Full-Stack Developer & Data Manager</h2>
        <p class="hero-description">
          Crafting seamless digital experiences with Vue.js & Laravel.<br />
          Transforming data into actionable insights.
        </p>
        <div class="hero-buttons">
          <a href="#about" class="btn btn-primary">Discover My Story</a>
          <a href="#contact" class="btn btn-secondary">Let's Connect</a>
        </div>
      </div>
    </div>
    <div class="hero-fade"></div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #000000 0%, #1a0000 50%, #000000 100%);
  overflow: hidden;
}

[data-theme="light"] .hero {
  background: linear-gradient(135deg, #ffffff 0%, #ffcccc 50%, #ffffff 100%);
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(255, 0, 0, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.2) 0%, transparent 50%);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
}

.hero-text {
  animation-delay: 0.2s;
}

.hero-greeting {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--text-secondary);
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  font-size: clamp(2rem, 4vw, 3rem);
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  30% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
}

.greeting-text {
  font-weight: 600;
  background: linear-gradient(to right, var(--text-secondary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.1;
  background: linear-gradient(to right, var(--text-primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, var(--bg-primary), transparent);
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 200px;
  }
}
</style>
