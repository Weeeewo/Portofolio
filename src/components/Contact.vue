<template>
  <section id="contact" class="contact section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>

      <div class="contact-content">
        <div class="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div class="contact-items">
            <a href="mailto:jason.yoswara@gmail.com" class="contact-item">
              <div class="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>jason.yoswara@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Weeeewo"
              target="_blank"
              rel="noopener"
              class="contact-item"
            >
              <div class="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <div>
                <h4>GitHub</h4>
                <p>@Weeeewo</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/jason-yoswara/"
              target="_blank"
              rel="noopener"
              class="contact-item"
            >
              <div class="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </div>
              <div>
                <h4>LinkedIn</h4>
                <p>Jason Yoswara</p>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-form-container">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Your name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>

            <p
              v-if="submitMessage"
              class="submit-message"
              :class="{ success: submitSuccess }"
            >
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  // Simulate form submission
  setTimeout(() => {
    submitSuccess.value = true;
    submitMessage.value =
      "Thank you for your message! I'll get back to you soon.";
    formData.value = { name: "", email: "", message: "" };
    isSubmitting.value = false;

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  }, 1000);
};
</script>

<style scoped>
.contact {
  background: var(--bg-secondary);
  padding: 100px 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.contact-info > p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.contact-item:hover {
  transform: translateX(8px);
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--accent);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.contact-item p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.contact-form-container {
  background: var(--bg-card);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button[type="submit"] {
  align-self: flex-start;
}

.contact-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  padding: 12px 16px;
  border-radius: 8px;
  background: rgba(255, 0, 0, 0.1);
  color: var(--accent);
  font-size: 0.95rem;
  margin: 0;
  border: 1px solid rgba(255, 0, 0, 0.3);
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form-container {
    padding: 28px;
  }
}

@media (max-width: 640px) {
  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .contact-form-container {
    padding: 24px;
  }
}
</style>
