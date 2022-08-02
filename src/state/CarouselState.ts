import { ref, markRaw, nextTick, computed } from "vue";
import { defineStore } from "pinia";
// import { useAppState } from "./AppState";
import { DynamicComponent } from "../models/dynamic-components";

export const useCarouselState = defineStore("CarouselState", () => {
  // const app$ = useAppState();
  const Renderables = markRaw([
    {
      id: "Carousel_3PA",
      name: "Carousel_3PA",
    },
    {
      id: "Carousel_VuenarchistsCookbook",
      name: "Carousel_VuenarchistsCookbook",
    },
    {
      id: "Carousel_LGRM",
      name: "Carousel_LGRM",
    },
    {
      id: "Carousel_Animation",
      name: "Carousel_Animation",
    },
  ] as Array<DynamicComponent>);

  let duration = 190;
  let evaluationInterval = 35;
  let timer = ref(duration);
  setInterval(() => {
    if (timer.value !== 0) {
      timer.value = timer.value - 1;
    } else {
      timer.value = duration;
      if (IndexToRender.value == Renderables.length - 1) {
        nextTick();
        IndexToRender.value = 0;
      } else {
        nextTick();
        IndexToRender.value++;
      }
    }
  }, evaluationInterval);

  const Progress = computed(() => {
    const increment = 100 / duration;
    return increment * timer.value;
  });

  const IndexToRender = ref(0);
  return {
    Progress,
    Renderables,
    IndexToRender,
  };
});
