import "./infra/styles.scss";

import { createApp } from "vue";
import App from "./App.vue";
const _app = createApp(App);

import { createPinia } from "pinia";
_app.use(createPinia());

import router from "./infra/router";
_app.use(router);

// Register Components
import PrimeVue from "primevue/config";
import primes from "./infra/components/primefaces";
_app.use(PrimeVue);
primes.forEach((element) => {
  _app.component(element.name, element.component);
});

import dynamics from "./infra/components/dynamics";
dynamics.forEach((element) => {
  _app.component(element.name, element.component);
});

_app.mount("#app");
