<template>
    <!-- STRING INPUT -->
    
    <div class="flex items-center" >
      <!-- v-if="_$.spec?.kind === ElementKind.StringInput" -->

      <span class="p-float-label">
        <input
          :id="_$.id"
          v-model="_$.value"
        />
              
        <label :for="_$.id">
          <!-- ((_$ as unknown) as IStringInput).label -->
          {{_$.spec?.label}}
        </label>
      </span>
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
