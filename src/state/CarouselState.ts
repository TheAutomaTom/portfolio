import { ref, markRaw, nextTick } from "vue";
import { defineStore } from "pinia";
// import { useAppState } from "./AppState";
import { DynamicComponent } from "../models/dynamic-components";

export const useCarouselState = defineStore("CarouselState", () => {
  // const app$ = useAppState();
  const Renderables = markRaw([
    {
      id: "Repo_3PA",
      name: "Repo_3PA",
    },
    {
      id: "Repo_LGRM",
      name: "Repo_LGRM",
    },
  ] as Array<DynamicComponent>);

  let duration = 5;
  let Timer = ref(duration);
  setInterval(() => {
    if (Timer.value !== 0) {
      5;
      Timer.value = Timer.value - 1;
    } else {
      Timer.value = duration;
      if (IndexToRender.value == Renderables.length - 1) {
        nextTick();
        IndexToRender.value = 0;
      } else {
        nextTick();
        IndexToRender.value++;
      }
    }
  }, 1000);

  const IndexToRender = ref(0);
  return {
    Timer,
    Renderables,
    IndexToRender,
  };
});
