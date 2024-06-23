<template>
    <q-card class="q-mb-md">
      <q-card-section class="row items-center">
        <q-input v-model="city" outlined dense placeholder="Masukkan lokasi" class="q-mr-sm" />
        <q-btn @click="fetchWeather" label="Cek Cuaca" color="primary" :loading="loading" />
      </q-card-section>
  
      <q-card-section v-if="weather">
        <div class="text-h6 q-mb-sm">Cuaca di {{ weather.name }}</div>
        <div class="row">
          <div class="col">
            <q-avatar size="50px">
              <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt="weather icon">
            </q-avatar>
          </div>
          <div class="col">
            <div class="text-h6">{{ weather.weather[0].description }}</div>
            <div>Suhu: {{ weather.main.temp }} °C</div>
            <div>Kelembapan: {{ weather.main.humidity }}%</div>
          </div>
        </div>
      </q-card-section>
  
      <q-card-section v-else>
        <q-item>
          <q-item-section>
            <q-item-label>{{ error || 'Belum ada informasi cuaca.' }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const city = ref('');
  const weather = ref(null);
  const loading = ref(false);
  const error = ref('');
  
  const apiKey = '31f105f1e51a5df845ce80fc9288418b'; 
  
  async function fetchWeather() {
    if (!city.value) {
      error.value = 'Silakan masukkan nama kota.';
      return;
    }
  
    loading.value = true;
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`);
      if (response.data.cod === '404') {
        error.value = 'Kota tidak ditemukan. Harap masukkan nama kota yang valid.';
        weather.value = null;
      } else {
        weather.value = response.data;
        error.value = '';
      }
    } catch (err) {
      console.error("Terjadi kesalahan saat mengambil data cuaca: ", err);
      if (err.response) {
        error.value = `Tidak ada ramalan cuaca pada wilayah ${city.value}`;
      } else if (err.request) {
        error.value = 'Gagal terhubung ke server. Harap periksa koneksi internet Anda.';
      } else {
        error.value = 'Lagi bermasalah. Coba lagi nanti.';
      }
    } finally {
      loading.value = false;
      city.value = ''; 
    }
  }
  

  function handleLinkClick(url, isExternal = true) {
    if (isExternal) {
      window.open(url, '_blank');
    } else {
      router.push(url);
    }
  }
  
  function navigateTo(route) {
    router.push(route);
  }
  </script>
  
  <style scoped>
  .q-mr-sm {
    margin-right: 10px;
  }
  </style>
  