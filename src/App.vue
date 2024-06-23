<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibIViFjsBxvgUNFgqVwG5dkLWD2JHELlm6w&s">
          </q-avatar>
          Kevin Alfariza
        </q-toolbar-title>
        <nav>
          <div class="dropdown">
            <button class="dropbtn">Assignments</button>
            <div class="dropdown-content">
              <q-item clickable v-ripple @click="handleLinkClick('https://kevin-project-cv.netlify.app/')">
                <q-item-section>TUGAS 1</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://kevin-prakpbk-tgs2.vercel.app/')">
                <q-item-section>TUGAS 2</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://kevin-prak3.netlify.app/')">
                <q-item-section>TUGAS 3</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://kevinalfariza-prakpbk-tgs4.vercel.app/')">
                <q-item-section>TUGAS 4</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://kevinalfariza-prakpbk-tgs5.vercel.app/')">
                <q-item-section>TUGAS 5</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://kevinalfariza-223510572-prak-pbk-tgs6.vercel.app/')">
                <q-item-section>TUGAS 6</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://kevinalfariza-prakpbk-tgs7.vercel.app/')">
                <q-item-section>TUGAS 7</q-item-section>
              </q-item>
            </div>
          </div>
        </nav>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <konten/>
    </q-page-container>

  <q-footer elevated class="bg-blue-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <div>Kevin</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</q-layout>

</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import konten from './components/WeatherContainer.vue';

const handleLinkClick = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #2b48c8;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: 0;
}

.dropdown-content q-item {
  width: 100%; 
}

.dropdown-content q-item-section {
  color: white; 
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content q-item:hover {
  background-color: #f1f1f1;
  color: #2b48c8; 
}

.dropbtn {
  background-color: #2b48c8; /* Warna latar belakang tombol dropdown */
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>