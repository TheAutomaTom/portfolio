import { ref, markRaw, nextTick, computed } from "vue";
import { defineStore } from "pinia";
import type {CarouselComponent}  from "../models/CarouselComponent";

export const useCarouselState = defineStore("CarouselState", () => {
  const Renderables = markRaw([
    {
      id: "Carousel_3PA",
      name: "Carousel_3PA",
    },
    {
      id: "Carousel_LGRM",
      name: "Carousel_LGRM",
    },
    {
      id: "Carousel_VuenarchistsCookbook",
      name: "Carousel_VuenarchistsCookbook",
    },
    {
      id: "Carousel_Animation",
      name: "Carousel_Animation",
    },
  ] as Array<CarouselComponent>);

  let duration = 190;
  let evaluationInterval = 35;
  let timer = ref(duration);
  setInterval(() => {
    if (timer.value !== 0) {
      timer.value = timer.value - 1;
    } else {
      timer.value = duration;
      incrementCarousel("Right");
    }
  }, evaluationInterval);

  const Progress = computed(() => {
    const increment = 100 / duration;
    return increment * timer.value;
  });

  const IndexToRender = ref(0);
  const Skip = (command: string) => {
    switch (command) {
      case "Right":
        incrementCarousel("Right");
        break;
      default: //case "Left":
        incrementCarousel("Left");
        break;
    }
  };

  const incrementCarousel = (command: string) => {
    switch (command) {
      case "Right":
        if (IndexToRender.value == Renderables.length - 1) {
          nextTick();
          IndexToRender.value = 0;
        } else {
          nextTick();
          IndexToRender.value++;
        }
        break;

      default: //case "Right":
        if (IndexToRender.value == 0) {
          nextTick();
          IndexToRender.value = Renderables.length - 1;
        } else {
          nextTick();
          IndexToRender.value--;
        }

        break;
    }
  };

  return {
    Progress,
    Renderables,
    IndexToRender,
    Skip,
  };
});
