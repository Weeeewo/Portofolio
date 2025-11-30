<template>
  <section id="education" class="education section">
    <div class="container">
      <h2 class="section-title">Experience & Education</h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Jul 2023 - Jul 2027</div>
            <h3>Bachelor of Computer Science</h3>
            <p class="institution">BINUS University</p>
            <p class="description">
              Pursuing a comprehensive Computer Science degree with focus on
              full-stack web development, data management, and software
              engineering. Actively applying theoretical knowledge through
              real-world projects and organizational leadership roles.
            </p>
            <div class="tags">
              <span>Computer Science</span>
              <span>Web Development</span>
              <span>Data Structures</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Sep 2025 - Present</div>
            <h3>Data Manager</h3>
            <p class="institution">Brighton Real Estate · Contract · Remote</p>
            <p class="description">
              • Reviewed website UI/UX by identifying usability issues and
              proposing workflow improvements<br />
              • Managed and organized 100+ datasets from local and international
              sources<br />
              • Processed raw data into structured marketing datasets for
              reporting and insights<br />
              • Oversaw Rumah123 property listings, ensuring accuracy and
              platform consistency
            </p>
            <div class="tags">
              <span>Data Management</span>
              <span>UI/UX Review</span>
              <span>Property Listings</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-date">Mar 2025 - Present</div>
            <h3>Secretary of HIMTI Bandung 2025/2026</h3>
            <p class="institution">HIMTI BINUS University</p>
            <p class="description">
              • Coordinated organizational activities by managing schedules and
              organizing agendas<br />
              • Prepared formal meeting minutes and maintained organized
              documentation<br />
              • Facilitated meetings with internal and external stakeholders<br />
              • Supported end-to-end event operations from planning to
              execution<br />
              • Served as communication bridge between committees, leaders, and
              partners
            </p>
            <div class="tags">
              <span>Leadership</span>
              <span>Event Management</span>
              <span>Documentation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.education {
  background: var(--bg-primary);
  padding: 100px 0;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 48px;
  padding-bottom: 48px;
}

.timeline-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -34px;
  top: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  border: 4px solid var(--bg-primary);
  z-index: 2;
  box-shadow: 0 0 0 4px var(--border);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 0 8px rgba(229, 9, 20, 0.2);
}

.timeline-content {
  background: var(--bg-card);
  padding: 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  transform: translateX(8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--accent);
}

.timeline-date {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.institution {
  color: var(--accent);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 16px;
}

.description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tags span {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid var(--border);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline-marker {
    left: -29px;
  }

  .timeline-content {
    padding: 20px;
  }

  .timeline-content h3 {
    font-size: 1.25rem;
  }
}
</style>
