<template>
  <div class="m-6">
    <h3 class="mb-1">Formatted Number Inputs</h3>
    <p class="mb-1" style="text-indent: 1em">
      <em>
        Formatting numbers into our typical literary expectations is tricky,
        especially for real-time user inputs. What happens when you want to
        display a friendly round number, but the initial value calculated isn't?
        What about maintaining a presentable 2 decimal currency format? And
        nulls... sometimes you want'em to default to zero, but other times it
        should you need a user to deliberately state "zero."
      </em>
    </p>
    <p class="mb-5" style="text-indent: 1em">
      <em>
        &nbsp;&nbsp;The inputs below are native html. You can see their backing
        data value, labelled "Model." I've added Prime Vue's floating labels
        because, not only do they look cool, but it took a little extra effort
        to get them working properly.
      </em>
    </p>
    <div class="input-div">
      <span class="p-float-label">
        <input-numbers
          v-model="numberModel"
          :initialNumber="numberModel"
          id="inputNumbers"
          :max="666666"
        />
        <label for="inputNumbers">Integer Input</label>
      </span>
      <div>
        <p>Model: {{ numberModel }}</p>
      </div>
    </div>
    <!------------------------------------------------------------------------>
    <div class="input-div">
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

    <h3 class="mb-4">Values Initialized as Null</h3>

    <div class="input-div">
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
    <div class="input-div">
      <span class="p-float-label">
        <input-numbers
          v-model="numberModelNoNull"
          id="numberModelNoNull"
          :max="888888"
        />
        <label for="numberModelNoNull">Defaults to 0 after blur</label>
      </span>
      <p>Model: {{ numberModelNoNull }}</p>
    </div>
    <!------------------------------------------------------------------------>
    <h3 class="mb-1">Diagnostic Mode</h3>
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
        <!-- <label for="inputDiagMode"><em>Throws off labels!</em></label> -->
      </span>
      <p>Model: {{ numberModel3 }}</p>
    </div>
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
  @apply flex flex-col items-center mb-6;
}
</style>
