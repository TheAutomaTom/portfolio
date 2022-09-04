<template>
  <div class="m-6">
    <div class="intro">
      <h3 class="mb-1" style="font-variant: small-caps">
        Formatted Number Inputs
      </h3>
      <p class="mb-1" style="text-indent: 1em">
        Formatting data for literary expectations is tricky, especially for
        real-time user inputs.
      </p>
      <p class="mb-5" style="text-indent: 1em">
        &nbsp;&nbsp;The inputs below are native html. You can see their backing
        data value, labelled "Model." I've added Prime Vue's floating labels
        because, not only do they look cool, but it took a little extra effort
        to get them working properly.
      </p>
      <span class="text-zinc-400 text-xs"
        ><em>All inputs below allow maximum values of 999,999.00</em>
      </span>
    </div>

    <!-- Feature detail -->
    <div class="card">
      <h3 class="ml-1" style="font-variant: small-caps">Typical Inputs</h3>
      <p class="mb-3 mx-2 text-sm" style="text-indent: 1em">
        What happens when you want to display a friendly round number, but the
        initial value calculated just ain't? What about maintaining a
        presentable 2 decimal currency format?
      </p>

      <!-- Feature Input -->
      <div class="row-wrapper">
        <div class="row-feature-wrapper">
          <span class="p-float-label">
            <input-numbers
              v-model="numberModel"
              :initialNumber="numberModel"
              id="inputNumbers"
              :max="999999"
            />
            <label for="inputNumbers">Integer Model: {{ numberModel }}</label>
          </span>
        </div>

        <!------------------------------------------------------------------------>
        <!-- Feature Input -->
        <div class="row-feature-wrapper">
          <span class="p-float-label">
            <input-numbers
              v-model="decimalModel"
              :initialNumber="decimalModel"
              id="inputFloat"
              :allowDecimal="true"
              :prefix="'$'"
              :max="999999"
            />
            <label for="inputFloat">Currency Model: {{ decimalModel }} </label>
          </span>
        </div>
      </div>

      <!------------------------------------------------------------------------>

      <h3 class="ml-1 mb-3" style="font-variant: small-caps">Null Handling</h3>
      <p class="mb-3 mx-2 text-sm" style="text-indent: 1em">
        Should we initialize as null or zero? Wait...what if they erase the zero
        and leave it blank... is that intentionally null?
      </p>
      <!-- Feature detail -->
      <div class="row-wrapper">
        <div class="row-feature-wrapper">
          <span class="p-float-label">
            <input-numbers
              v-model="numberModelNoNull"
              id="numberModelNoNull"
              :max="999999"
            />
            <label for="numberModelNoNull">Empty becomes zero on blur </label>
          </span>
        </div>
        <!------------------------------------------------------------------------>

        <div class="row-feature-wrapper">
          <span class="p-float-label">
            <input-numbers
              v-model="numberModelAllowsNull"
              id="numberAllowsNull"
              :max="999999"
              :allowEmpty="true"
            />
            <label for="numberAllowsNull">{{
              numberModelAllowsNull || "Allows null value"
            }}</label>
          </span>
        </div>
      </div>
      <!------------------------------------------------------------------------>
    </div>
    <!-- Feature detail -->
    <!-- <div class="intro">
      <h3 class="mb-1" style="font-variant: small-caps">Diagnostic Mode</h3>
      <p class="mb-5">
        <em>
          Reference the browser's console to see real-time input evaluation.
        </em>
      </p>
      <div class="input-div">
        <span class="p-float-label">
          <input-numbers
            v-model="numberModel3"
            id="inputDiagMode"
            :max="888888"
            :diagnosticMode="true"
          />
          <label for="inputDiagMode"><em>Throws off labels!</em></label>
        </span>
        <p>Model: {{ numberModel3 }}</p>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const stringA = ref("");
const numberModel = ref(41.6);
const decimalModel = ref(1234.5);
const numberModelAllowsNull = ref(undefined);
const numberModelNoNull = ref(undefined);
const numberModel3 = ref(undefined);
</script>

<style scoped lang="scss">
.input-div {
  @apply flex flex-col items-center mb-6 pt-7;
}
.card {
  @apply px-3 pt-1 pb-2;
}
.intro {
  @extend .card;
  @apply border rounded border-amber-900;
}
.row-wrapper {
  @apply flex flex-grow flex-wrap justify-center;
  //@apply flex flex-wrap m-5;
}
.row-feature-wrapper {
  @apply flex space-x-4 m-5;
}
</style>
