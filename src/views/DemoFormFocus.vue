<template>
  <div class="m-6">
    <div class="card">
      <h3 class="mb-1" style="font-variant: small-caps">Focussed Input Demo</h3>
      <p class="mb-3 mx-2 text-sm" style="text-indent: 1em">
        Mobile user forms can be tough to navigate. This is my solution.
      </p>
    </div>

    <!-- Feature Detail -------------------------------------------------------->
    <div class="card">
      <h3 class="ml-1" style="font-variant: small-caps">Section One</h3>
      <p class="mb-3 mx-2 text-sm" style="text-indent: 1em">
        What happens when you want to display a friendly round number, but the
        initial value calculated just ain't? What about maintaining a
        presentable 2 decimal currency format?
      </p>

      <!-- Feature Input Row --------------------------------------------------->
      <div class="row-wrapper">

        <!-- Feature Input 1 --------------------------------------------------->
        <div class="row-feature-wrapper">
          <span class="p-float-label">
            <input
              id="input1"
              v-model="input1"
              :class="hasFloatingLabel(input1)"
              :disabled="focus$.IsActive"
              @focus="activateFocus({
                id: 'idString',
                name:ControlType.InputString.toString(),
                entityId:'entityId',
                parameters:{ 
                  Question:{
                    questionId:'FirstNameQid',
                    questionText:'FirstName',
                    controlType: ControlType.InputString,
                    answer:''
                  }
                }
              } as VueComponent)"
            />
            <label for="input1">Name</label>
          </span>
        </div>
        
      </div>
    </div>

    <router-link :to="'/'" v-if="!focus$.IsActive">
      <h4 class="text-amber-800" style="font-variant: small-caps">
        <i class="pi px-1 pi-caret-left"/>
        Home
      </h4>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFormFocusModule } from "../state/FormFocusModule";
import { VueComponent, ControlType } from "../models/FormFocusElements";
const focus$ = useFormFocusModule();
const input1 = ref("input-1-value");

const activateFocus = (el: VueComponent ): void => {
  focus$.SetCurrentComponents([el]);
  focus$.Activate();
};

const hasFloatingLabel = (x: string): string => {
  return x !== "" ? "p-filled" : "";
};
</script>

<style scoped lang="scss">
@use "../infra/styles.scss";
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
