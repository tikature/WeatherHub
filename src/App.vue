<template>
  <div class="app">
    <div class="background-pattern"></div>

    <!-- Header -->
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <div class="logo-icon">🌦️</div>
          <div class="logo-text">
            <h1 class="app-name">WeatherHub</h1>
            <p class="app-subtitle">Informasi Cuaca & Kelembaban Real-time</p>
          </div>
        </div>

        <div class="credits">
          <div class="created-by">
            <span class="created-text">Created by</span>
            <span class="developer-name">tikature</span>
            <div class="developer-links">
              <a href="https://github.com/tikature" class="social-link" title="GitHub">💻</a>
              <a href="https://www.linkedin.com/in/dewi-atika-muthi/" class="social-link" title="LinkedIn">💼</a>
              <a href="#" class="social-link" title="Portfolio">🌐</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Improved Floating Elements -->
      <div class="header-decoration">
        <div class="floating-element cloud-1">☁️</div>
        <div class="floating-element cloud-2">⛅</div>
        <div class="floating-element cloud-3">🌤️</div>
        <div class="floating-element sun">☀️</div>
        <div class="floating-element rain">🌧️</div>
        <div class="floating-element snow">❄️</div>
      </div>
    </header>

    <div class="container">
      <Weather />
    </div>
  </div>
</template>

<script>
import Weather from './components/Weather.vue'

export default {
  name: 'App',
  components: { 
    Weather 
  }
}
</script>

<style scoped>
.app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  min-height: 100vh;
  background: linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 100%);
  position: relative;
  overflow-x: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
  z-index: 0;
}

.app-header {
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  padding: 2rem 1.5rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  font-size: 3rem;
  animation: gentle-pulse 3s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%, 100% { 
    transform: scale(1); 
  }
  50% { 
    transform: scale(1.05); 
  }
}

.app-name {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.app-subtitle {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 300;
}

.credits {
  text-align: right;
}

.created-text {
  font-size: 0.8rem;
  color: #ddd;
  display: block;
}

.developer-name {
  font-weight: bold;
  display: block;
  margin: 0.2rem 0;
  font-size: 1rem;
}

.developer-links {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 0.3rem;
}

.developer-links a {
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 0.2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.developer-links a:hover {
  transform: scale(1.2) rotate(10deg);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Improved Floating Elements */
.header-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.6;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.cloud-1 {
  top: 20%;
  left: 10%;
  animation: float-horizontal 15s infinite;
  animation-delay: 0s;
}

.cloud-2 {
  top: 60%;
  right: 15%;
  animation: float-diagonal 20s infinite;
  animation-delay: -5s;
  font-size: 1.8rem;
}

.cloud-3 {
  top: 40%;
  left: 70%;
  animation: float-vertical 12s infinite;
  animation-delay: -8s;
  font-size: 1.5rem;
}

.sun {
  top: 15%;
  right: 25%;
  animation: rotate-and-float 25s infinite;
  animation-delay: -3s;
  font-size: 1.6rem;
  opacity: 0.4;
}

.rain {
  top: 70%;
  left: 30%;
  animation: float-rain 8s infinite;
  animation-delay: -2s;
  font-size: 1.4rem;
  opacity: 0.5;
}

.snow {
  top: 30%;
  right: 5%;
  animation: float-snow 18s infinite;
  animation-delay: -12s;
  font-size: 1.3rem;
  opacity: 0.3;
}

/* Floating Animations */
@keyframes float-horizontal {
  0% { transform: translateX(-20px) translateY(0px); opacity: 0.3; }
  25% { opacity: 0.6; }
  50% { transform: translateX(20px) translateY(-10px); opacity: 0.4; }
  75% { opacity: 0.7; }
  100% { transform: translateX(-20px) translateY(0px); opacity: 0.3; }
}

@keyframes float-diagonal {
  0% { transform: translateX(-15px) translateY(-15px); opacity: 0.4; }
  25% { transform: translateX(10px) translateY(-5px); opacity: 0.6; }
  50% { transform: translateX(15px) translateY(10px); opacity: 0.3; }
  75% { transform: translateX(-5px) translateY(15px); opacity: 0.5; }
  100% { transform: translateX(-15px) translateY(-15px); opacity: 0.4; }
}

@keyframes float-vertical {
  0% { transform: translateY(-10px); opacity: 0.5; }
  50% { transform: translateY(15px); opacity: 0.3; }
  100% { transform: translateY(-10px); opacity: 0.5; }
}

@keyframes rotate-and-float {
  0% { transform: rotate(0deg) translateY(0px); opacity: 0.3; }
  25% { transform: rotate(90deg) translateY(-8px); opacity: 0.5; }
  50% { transform: rotate(180deg) translateY(5px); opacity: 0.4; }
  75% { transform: rotate(270deg) translateY(-5px); opacity: 0.6; }
  100% { transform: rotate(360deg) translateY(0px); opacity: 0.3; }
}

@keyframes float-rain {
  0% { transform: translateY(-5px) scale(1); opacity: 0.4; }
  50% { transform: translateY(8px) scale(1.1); opacity: 0.6; }
  100% { transform: translateY(-5px) scale(1); opacity: 0.4; }
}

@keyframes float-snow {
  0% { transform: translateX(-8px) translateY(-8px) rotate(0deg); opacity: 0.2; }
  33% { transform: translateX(5px) translateY(5px) rotate(120deg); opacity: 0.4; }
  66% { transform: translateX(8px) translateY(-3px) rotate(240deg); opacity: 0.3; }
  100% { transform: translateX(-8px) translateY(-8px) rotate(360deg); opacity: 0.2; }
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

@media (max-width: 768px) {
  .app-header {
    padding: 1.5rem 1rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .credits {
    text-align: center;
  }
  
  .logo-section {
    justify-content: center;
  }
  
  .app-name {
    font-size: 1.5rem;
  }
  
  .floating-element {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 1.2rem;
  }
  
  .logo-icon {
    font-size: 2.5rem;
  }
  
  .app-name {
    font-size: 1.3rem;
  }
  
  .app-subtitle {
    font-size: 0.8rem;
  }
  
  .floating-element {
    font-size: 1.2rem;
  }
}
</style>