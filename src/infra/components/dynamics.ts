// These components are intended to be created by BenefitScreeningApi calls
// Any changes to names or parameters must be coordinated with that Api.
import Carousel_3PA from "../../views/Home/Carousel/Carousel_3PA.vue";
import Carousel_LGRM from "../../views/Home/Carousel/Carousel_LGRM.vue";
import Carousel_VuenarchistsCookbook from "../../views/Home/Carousel/Carousel_VuenarchistsCookbook.vue";
import Carousel_Animation from "../../views/Home/Carousel/Carousel_Animation.vue";

import InputString from "../../components/dynamics/form_focus/InputString.vue";
import DynamicTest from "../../components/dynamics/form_focus/DynamicTest.vue";

export default [
  // Form Focus
  { component: InputString, name: "InputString" },
  { component: DynamicTest, name: "DynamicTest" },
  
  // Carousel
  { component: Carousel_3PA, name: "Carousel_3PA" },
  { component: Carousel_LGRM, name: "Carousel_LGRM" },
  {
    component: Carousel_VuenarchistsCookbook,
    name: "Carousel_VuenarchistsCookbook",
  },
  { component: Carousel_Animation, name: "Carousel_Animation" },

];
