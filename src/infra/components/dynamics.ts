// These components are intended to be created by BenefitScreeningApi calls
// Any changes to names or parameters must be coordinated with that Api.
// import Carousel_3PA from "../../views/Home/Carousel/Carousel_3PA.vue";
import Carousel_LGRM from "../../views/Home/Carousel/Carousel_LGRM.vue";
import Carousel_VuenarchistsCookbook from "../../views/Home/Carousel/Carousel_VuenarchistsCookbook.vue";

export default [
  // Note: This "name" must match our api's VueComponents' "name"
  // { component: Carousel_3PA, name: "Carousel_3PA" },
  { component: Carousel_LGRM, name: "Carousel_LGRM" },
  {
    component: Carousel_VuenarchistsCookbook,
    name: "Carousel_VuenarchistsCookbook",
  },
];
