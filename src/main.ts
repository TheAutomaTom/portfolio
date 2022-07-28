import { createApp } from "vue";
import "./infra/style.scss";
import App from "./App.vue";
const _app = createApp(App);

import PrimeVue from "primevue/config";
import primes from "./infra/components-primefaces";
_app.use(PrimeVue);
primes.forEach((element) => {
  _app.component(element.name, element.component);
});

_app.mount("#app");
