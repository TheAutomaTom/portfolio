import { ref, markRaw } from "vue";
import { defineStore } from "pinia";
import { VueComponent } from "../models/FormFocusElements";

export const useFormFocusModule = defineStore("FormFocusModule", () => {
  const ToRender = markRaw([] as Array<VueComponent>);  
  const IsActive = ref(false);
  const Activate = ()=>{  
    IsActive.value = true;
  }

  const SetCurrentComponents = (update: Array<VueComponent>) => {
    ToRender.length = 0;
    update.forEach(el => ToRender.push(el));
    console.dir(ToRender);
  };
  
  return {
    IsActive,
    Activate,
    ToRender,
    SetCurrentComponents
  };
});
