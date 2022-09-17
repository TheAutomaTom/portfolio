<template>
  <div class="flex items-center" >

    <span class="p-float-label">
    <input
    :id="_$.Question.questionId"
    v-model="_$.Question.answer"
    :class="hasFloatingLabel(_$.Question.answer)"
    />
      <label :for="_$.Question.questionId">
        {{_$.Question.questionText}}
      </label>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs } from "vue";
import { useFormFocusModule } from "../../../state/FormFocusModule";
import { IQuestionComponent, ControlType } from "../../../models/FormFocusElements";

const emits = defineEmits(["register-nav-requirement"]);
const focus$ = useFormFocusModule();
const attrs = useAttrs();
let _$ = attrs.parameters as IQuestionComponent;

// const submitAnswer = () => {
//   wiz$.Wizard.navInstruction = "Next";
//   for (const req of wiz$.NavRequirements) {
//     if (req.key === _$.Question.questionId) req.value = _$.Question.answer;
//   }
//   wiz$.TryPostWizard();
// };

const hasFloatingLabel = (x: string): string => {
  return x !== "" ? "p-filled" : "";
};
</script>
<script lang="ts">
  export default { name: "InputString" };
</script>
<style scoped lang="scss">
  @use "../../../infra/styles.scss";
.question-container {
  @apply px-5;
}
input {
  @extend .p-component, .p-input, .p-inputtext;
  @apply px-2 py-1;
}
.card {
  @apply px-3 pt-1 pb-2;
}
.row-wrapper {
  @apply flex flex-grow flex-wrap justify-center;
  //@apply flex flex-wrap m-5;
}
.row-feature-wrapper {
  @apply flex space-x-4 m-5;
}
.dialog {
  @apply bg-sky-900 w-full h-full;
}
</style>
