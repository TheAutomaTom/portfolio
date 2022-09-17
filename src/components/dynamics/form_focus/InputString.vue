<template>
  <div class="flex items-center" >

    <label :for="_$.Question.questionId">
      _$.Question.questionText
    </label>
    <input
      :id="_$.Question.questionId"
      v-model="_$.Question.answer"
    />
    
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs } from "vue";
import { useFormFocusModule } from "../../../state/FormFocusModule";
import { IFocussed, ElementKind } from "../../../models/FormFocusElements";

const emits = defineEmits(["register-nav-requirement"]);
const focus$ = useFormFocusModule();
const attrs = useAttrs();
let _$ = attrs.parameters as IFocussed;

// const submitAnswer = () => {
//   wiz$.Wizard.navInstruction = "Next";
//   for (const req of wiz$.NavRequirements) {
//     if (req.key === _$.Question.questionId) req.value = _$.Question.answer;
//   }
//   wiz$.TryPostWizard();
// };
</script>
<script lang="ts">
export default { name: "InputString" };
</script>
<style scoped lang="scss">
.question-container {
  @apply px-5;
}
</style>
