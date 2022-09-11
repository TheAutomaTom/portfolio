import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFormFocusState = defineStore("FormFocusState", () => {
  const IsActive = ref(false);

  // const myComputed = computed(
  //   () => `Computing ${myObject.value.myProp} is so cool!`
  // );

  // Lambda replaces `actions: {}`...
  // const changeValue = (newValue: string) => {
  //   myObject.value.myProp = newValue;
  // };

  return {
    IsActive,
  };
});
