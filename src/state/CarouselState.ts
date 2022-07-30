import { ref, markRaw, nextTick } from "vue";
import { defineStore } from "pinia";
// import { useAppState } from "./AppState";
import { DynamicComponent } from "../models/dynamic-components";

export const useCarouselState = defineStore("CarouselState", () => {
  // const app$ = useAppState();
  const Renderables = markRaw([
    {
      id: "Art",
      name: "Art",
    },
    {
      id: "Repo",
      name: "Repo",
    },
    {
      id: "Fake",
      name: "Fake",
    },
  ] as Array<DynamicComponent>);

  let duration = 3;
  let Timer = ref(duration);
  setInterval(() => {
    if (Timer.value !== 0) {
      Timer.value = Timer.value - 0.25;
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
  }, 250);

  const IndexToRender = ref(0);
  return {
    Timer,
    Renderables,
    IndexToRender,
  };
});
