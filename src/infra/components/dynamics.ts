// These components are intended to be created by BenefitScreeningApi calls
// Any changes to names or parameters must be coordinated with that Api.
import Repo_3PA from "../../views/Home/Carousel/Repo_3PA.vue";
import Repo_LGRM from "../../views/Home/Carousel/Repo_LGRM.vue";

export default [
  // Note: This "name" must match our api's VueComponents' "name"
  { component: Repo_3PA, name: "Repo_3PA" },
  { component: Repo_LGRM, name: "Repo_LGRM" },
];
