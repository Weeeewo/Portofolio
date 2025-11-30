<template>
  <section id="skills" class="skills section">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>

      <div class="skills-grid">
        <div class="skill-category">
          <h3 class="category-title">Frontend</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">⚡</div>
              <span>Vue.js</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">📱</div>
              <span>JavaScript</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🎨</div>
              <span>Tailwind CSS</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🌐</div>
              <span>HTML5 & CSS3</span>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="category-title">Backend</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">🚀</div>
              <span>Laravel</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🐘</div>
              <span>PHP</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🗄️</div>
              <span>MySQL</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🔐</div>
              <span>JWT Auth</span>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="category-title">Tools & Others</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">📦</div>
              <span>Git & GitHub</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">📮</div>
              <span>Postman</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">💻</div>
              <span>VSCode</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🎯</div>
              <span>REST API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.skills {
  background: var(--bg-secondary);
  padding: 100px 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.skill-category {
  background: var(--bg-card);
  padding: 32px;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid var(--border);
}

.skill-category:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--accent);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--accent);
}

.skill-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-item:hover {
  background: var(--bg-primary);
  transform: scale(1.05);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.skill-item span {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-items {
    grid-template-columns: 1fr;
  }
}
</style>
