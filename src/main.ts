import "./infra/styles.scss";

import { createApp } from "vue";
import App from "./App.vue";
const _app = createApp(App);

import { createPinia } from "pinia";
_app.use(createPinia());

import router from "./infra/router";
_app.use(router);

// Register Components
import standards from "./infra/components/standards";
standards.forEach((element) => {
  _app.component(element.name, element.component);
});

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

import VueFormattedNumberInputPlugin from 'vue-formatted-number-input';
// import "vue-formatted-number-input/styles.css";
_app.use(VueFormattedNumberInputPlugin)

_app.mount("#app");
