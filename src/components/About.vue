<template>
  <section id="about" class="about section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p class="lead">
            A passionate Computer Science student at BINUS University with a
            drive for building impactful digital solutions.
          </p>
          <p>
            Currently serving as
            <strong>Data Manager at Brighton Real Estate</strong>, where I
            transform complex datasets into actionable insights, manage property
            listings, and optimize UI/UX workflows. I bridge the gap between
            data intelligence and strategic marketing decisions.
          </p>
          <p>
            As <strong>Secretary of HIMTI Bandung 2025/2026</strong>, I
            coordinate organizational activities, facilitate stakeholder
            meetings, and support event operations while maintaining
            professional communication across all divisions.
          </p>
          <p>
            My technical expertise spans <strong>Vue.js</strong> and
            <strong>Laravel</strong> for full-stack development. I've built
            production-ready applications including e-commerce platforms,
            restaurant websites, and cinema booking systems—all designed with
            user experience at the forefront.
          </p>
          <div class="about-stats">
            <div class="stat-item">
              <h3>100+</h3>
              <p>Datasets Managed</p>
            </div>
            <div class="stat-item">
              <h3>3+</h3>
              <p>Major Projects</p>
            </div>
            <div class="stat-item">
              <h3>2</h3>
              <p>Leadership Roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  background: var(--bg-primary);
  padding: 100px 0;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-text {
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 24px;
  font-size: 1.1rem;
}

.about-text .lead {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 32px;
}

.about-text strong {
  color: var(--accent);
  font-weight: 700;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid var(--border);
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 8px;
}

.stat-item p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .about-text .lead {
    font-size: 1.25rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .stat-item h3 {
    font-size: 2.5rem;
  }
}
</style>
