import { ref, markRaw } from "vue";
import { defineStore } from "pinia";
import { IFocussed } from "../models/FormFocusElements";

export const useFormFocusModule = defineStore("FormFocusModule", () => {
  const ToRender = markRaw([] as Array<IFocussed>);  
  const IsActive = ref(false);
  const Activate = ()=>{
    console.log("... Module.Activate()")    
    IsActive.value = true;
  }

  const SetCurrentComponents = (update: Array<IFocussed>) => {
    console.log("... Module.SetCurrentComponents(...)");
    ToRender.length = 0;
    update.forEach(el => ToRender.push(el));
    console.log("... DemoFormFocus.ToRender = ");
    console.dir(ToRender);
  };
  
  return {
    IsActive,
    Activate,
    ToRender,
    SetCurrentComponents
  };
});
