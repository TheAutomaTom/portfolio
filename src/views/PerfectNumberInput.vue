<template>
  <div class="mt-6">
    <div class="input-div flex items-center">
      <span class="p-float-label">
        <input-numbers
          v-model="numberModel"
          :initialNumber="numberModel"
          id="inputNumbers"
          :max="666666"
        />
        <label for="inputNumbers">Integer Input</label>
      </span>
      <p>Model: {{ numberModel }}</p>
    </div>
    <!------------------------------------------------------------------------>
    <div class="input-div flex items-center">
      <span class="p-float-label">
        <input-numbers
          v-model="decimalModel"
          :initialNumber="decimalModel"
          id="inputFloat"
          :allowDecimal="true"
          :prefix="'$'"
          :max="77777"
        />
        <label for="inputFloat">Currency Input</label>
      </span>
      <p>Model: {{ decimalModel }}</p>
    </div>
    <!------------------------------------------------------------------------>
    <h3 class="mb-4">Begins as Null</h3>
    <div class="input-div flex items-center">
      <span class="p-float-label">
        <input-numbers
          v-model="numberModelAllowsNull"
          id="numberAllowsNull"
          :max="888888"
          :allowEmpty="true"
        />
        <label for="numberAllowsNull">Allows null</label>
      </span>
      <p>Model: {{ numberModelAllowsNull }}</p>
    </div>
    <!------------------------------------------------------------------------>
    <div class="input-div flex items-center">
      <span class="p-float-label">
        <input-numbers
          v-model="numberModelNoNull"
          id="numberModelNoNull"
          :max="888888"
        />
        <label for="numberModelNoNull">Becomes 0 after blur</label>
      </span>
      <p>Model: {{ numberModelNoNull }}</p>
    </div>
    <!------------------------------------------------------------------------>
    <h3 class="mb-4">Diagnostic Mode (ref. console)</h3>
    <div input-div>
      <span class="p-float-label">
        <input-numbers
          v-model="numberModel3"
          id="inputDiagMode"
          :max="888888"
          :diagnosticMode="true"
        />
        <label for="inputDiagMode"><em>Throws off labels!</em></label>
      </span>
    </div>
    <p>Model: {{ numberModel3 }}</p>
    <div>
      <p>
        <em>
          Note, the floating labels are from Prime Vue. It took a little extra
          effort to make those work.
        </em>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const stringA = ref("");
const numberModel = ref(22.6);
const decimalModel = ref(1111.5);
const numberModelAllowsNull = ref(undefined);
const numberModelNoNull = ref(undefined);
const numberModel3 = ref(undefined);
</script>

<style scoped lang="scss">
.input-div {
  padding-bottom: 3em;
}
</style>
