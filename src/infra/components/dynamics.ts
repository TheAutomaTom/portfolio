// These components are intended to be created by BenefitScreeningApi calls
// Any changes to names or parameters must be coordinated with that Api.
import Art from "../../views/Art.vue";
import Fake from "../../views/Fake.vue";
import Repo from "../../views/Repo.vue";

export default [
  // Note: This "name" must match our api's VueComponents' "name"
  { component: Art, name: "Art" },
  { component: Fake, name: "Fake" },
  { component: Repo, name: "Repo" },
];
