// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Weather from "../App.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/assignment/1",
    name: "Assignment1",
    beforeEnter(to, from, next) {
      window.open("https://lukman-project-cv.netlify.app/");
      next({ name: "Weather" });
    },
  },
  {
    path: "/assignment/2",
    name: "Assignment2",
    beforeEnter(to, from, next) {
      window.open("https://tugas2-pratikum-pbk-rosy.vercel.app/");
      next({ name: "Weather" }); 
    },
  },
  {
    path: "/assignment/3",
    name: "Assignment3",
    beforeEnter(to, from, next) {
      window.open("https://tugas3-pratikum-pbk-lukman.vercel.app/");
      next({ name: "Weather" }); 
    },
  },
  {
    path: "/assignment/4",
    name: "Assignment4",
    beforeEnter(to, from, next) {
      window.open("https://lukman-basha-223510276-tugas4.vercel.app/");
      next({ name: "Weather" }); 
    },
  },
  {
    path: "/assignment/5",
    name: "Assignment5",
    beforeEnter(to, from, next) {
      window.open("https://lukman-basha-223510276-tugas5.vercel.app/");
      next({ name: "Weather" }); 
    },
  },
  {
    path: "/assignment/6",
    name: "Assignment6",
    beforeEnter(to, from, next) {
      window.open("https://lukman-basha-223510276-tugas6.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/7",
    name: "Assignment7",
    beforeEnter(to, from, next) {
      window.open("https://lukman-basha-223510276-tugas7-prak-pbk.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;