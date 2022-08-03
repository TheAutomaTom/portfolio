<template>
  <input
    v-model="displayed"
    @input="handle"
    @blur="handleBlur"
    v-bind="$attrs"
    :class="getClasses()"
  />
  <div v-if="diagnosticMode" class="diagnostic text-pink-400">
    <em>
      <p style="text-decoration: underline">InputNumbers Diagnostics</p>
      <p class="px-2">Displayed: {{ displayed }}</p>
      <p class="px-2">Previous: {{ previous }}</p>
      <p class="px-2">Last Emitted: {{ diagnosticEmitted }}</p>
    </em>
  </div>
</template>
<script lang="ts">
export default { name: "InputNumbers" };
</script>
<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: { type: String, default: "" },
  initialNumber: { type: Number, default: undefined },
  max: { type: Number, default: 999999 },
  allowDecimal: { type: Boolean, default: false },
  allowEmpty: { type: Boolean, default: false },
  prefix: { type: String, default: "" },
  diagnosticMode: { type: Boolean, default: false },
});
const hundredthsFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
});
const tenthsFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
});
const getClasses = (): string => {
  const forFloatingLabel = displayed.value !== "" ? "p-filled" : "";
  // const forValidation = isInvalid.value ? " is-invalid" : "";
  // return forFloatingLabel.concat(forValidation);
  return forFloatingLabel;
};

function handle() {
  //let input = displayed.value;
  let input = displayed.value ? displayed.value : "";
  //>>== Skip Empties ==========================================<<//
  if (input.trim() === "" || input === props.prefix) {
    isInvalid.value = false;
    displayed.value = "";
    update("0");
    return;
  }
  const inputDecimals = input.match(/\./g);
  if (props.diagnosticMode) {
    console.warn(`INPUT-NUMBERS inputDecimals= ${inputDecimals}`);
  }

  if (props.allowDecimal && inputDecimals !== null) {
    //Do not allow multiple decimals...
    if (inputDecimals.length > 1) {
      if (props.diagnosticMode) {
        console.warn(
          `INPUT-NUMBERS Multiple Decimals Detected! Revert to: ${previous.value}`
        );
      }
      displayed.value = previous.value;
      return;
    }
    // Allow one trailing decimal at input...
    if (input.charAt(input.length - 1) === ".") {
      if (props.diagnosticMode) {
        console.warn("INPUT-NUMBERS Trailing Decimal Detected");
      }
      return;
    }
    //Round off to hundreds if there are numbers after decimal...
    if (
      input.lastIndexOf(".") > 0 &&
      input.lastIndexOf(".") < input.length - 3
    ) {
      if (props.diagnosticMode) {
        console.error("INPUT-NUMBERS Round off");
        console.warn(
          "INPUT-NUMBERS input.lastIndexOf('.')= " + input.lastIndexOf(".")
        );
        console.warn("INPUT-NUMBERS input.length - 3= " + (input.length - 3));
      }
      displayed.value = previous.value;
      return;
    }
  }
  //>>== Validate User Input ===================================<<//
  // Strip symbols & parse string to number...

  let toParse = input.toString();
  if (props.diagnosticMode) {
    console.warn("INPUT-NUMBERS Strip symbols & parse string to number...");
    console.warn(`INPUT-NUMBERS let toParse= ${toParse}`);
  }
  if (input.charAt(0) === props.prefix.charAt(0)) {
    toParse = input.slice(props.prefix.length);
    if (props.diagnosticMode) {
      console.warn(`INPUT-NUMBERS toParse sliced= ${toParse}`);
    }
  }
  toParse = toParse.replace(",", "");
  if (props.diagnosticMode) {
    console.warn(`INPUT-NUMBERS toParse no commas= ${toParse}`);
  }
  let toEvaluate = Number(toParse);
  if (props.diagnosticMode) {
    console.warn(`INPUT-NUMBERS toEvaluate= ${toEvaluate}`);
  }
  if (toEvaluate > props.max) {
    isInvalid.value = false;
    displayed.value = format(props.max);
    previous.value = input;
    update();
    return;
  }
  if (Number.isNaN(toEvaluate)) {
    isInvalid.value = true;
    displayed.value = previous.value;
    update();
    return;
  }
  //>>== Successful Validation =================================<<//
  displayed.value = toEvaluate === 0 ? format(0) : format(toEvaluate);
  isInvalid.value = false;
  previous.value = displayed.value;
  update();
}
//function update(param = displayed.value): void {
function update(param = displayed.value ? displayed.value : ""): void {
  nextTick();
  if (props.diagnosticMode) {
    console.warn("\n\nINPUT-NUMBERS DIAGNOSTIC REPORT...update()");
    console.warn("INPUT-NUMBERS param= " + param);
    console.warn("INPUT-NUMBERS unformat(param)= " + unformat(param));
  }
  if (props.allowEmpty && displayed.value === "") {
    diagnosticEmitted.value = undefined;
    emits("update:modelValue", undefined);
    return;
  }
  diagnosticEmitted.value = unformat(param);
  emits("update:modelValue", unformat(param));
}
//===//===//===//===//===//===//===//===//===//===//===//===//===//===//===//
function handleBlur() {
  if (props.diagnosticMode) {
    console.warn(`\n\nINPUT-NUMBERS DIAGNOSTIC REPORT...@Blur`);
  }
  // Cut off trailing decimal...
  if (displayed.value.charAt(displayed.value.length - 1) === ".") {
    displayed.value = displayed.value.slice(0, -1);
    if (props.diagnosticMode) {
      console.warn(`INPUT-NUMBERS @Blur... Slice trailing decimal!`);
    }
  }
  // Check for empties...
  if (displayed.value === props.prefix || displayed.value === "") {
    if (props.diagnosticMode) {
      console.warn(`INPUT-NUMBERS @Blur... EMPTY!`);
    }
    displayed.value = props.allowEmpty ? "" : format(0);
    update();
    return;
  }
  if (!props.allowDecimal) {
    previous.value = displayed.value;
    update();
    return;
  }
  displayed.value = hundredthsFormatter.format(unformat(displayed.value));
  displayed.value = props.prefix.concat(displayed.value);

  previous.value = displayed.value;
  update();
  return;
}

//===//===//===//===//===//===//===//===//===//===//===//===//===//===//===//
const format = (param: number, isInitial = false): string => {
  if (props.diagnosticMode) {
    console.warn(`\n\nINPUT-NUMBERS DIAGNOSTIC REPORT...format('${param}')`);
  }
  //   const update = param.toLocaleString();
  //   if (update.charAt(0) !== props.prefix) {
  //     return props.prefix.concat(update);
  //   }
  //   return update;
  // };
  let update = param.toLocaleString();
  if (props.allowDecimal) {
    //Round off to hundreds if there are numbers after decimal...
    if (
      update.lastIndexOf(".") > 0 &&
      update.lastIndexOf(".") < update.length - 1
    ) {
      if (update.lastIndexOf(".") < update.length - 4) {
        update = update.slice(0, -1);
      }
      if (update.lastIndexOf(".") < update.length - 2) {
        update = tenthsFormatter.format(unformat(update));
      }
      if (update.lastIndexOf(".") < update.length - 3 || isInitial) {
        update = hundredthsFormatter.format(unformat(update));
      }
    }
  }
  if (props.prefix !== "" && update.charAt(0) !== props.prefix) {
    if (props.diagnosticMode) {
      console.warn(`INPUT-NUMBERS prefix= ${props.prefix}`);
    }
    return props.prefix.concat(update);
  }
  return update;
};
//===//===//===//===//===//===//===//===//===//===//===//===//===//===//===//
const unformat = (param: string): number => {
  if (props.diagnosticMode) {
    console.warn(`\n\nINPUT-NUMBERS DIAGNOSTIC REPORT...unformat('${param}')`);
  }
  let toParse = param;
  if (props.prefix !== "") {
    const isPrefixed = param.substring(0, props.prefix.length) == props.prefix;
    if (isPrefixed) {
      toParse = param.slice(props.prefix.length);
    }
    if (props.diagnosticMode) {
      console.warn(`INPUT-NUMBERS Prefix= '${props.prefix}' to be sliced.`);
      console.warn(`INPUT-NUMBERS Without prefix= '${toParse}'.`);
    }
  }
  if (toParse.indexOf(",") > 0) {
    toParse = toParse.replace(",", "");
    if (props.diagnosticMode) {
      console.warn(`INPUT-NUMBERS Commas removed= '${toParse}'.`);
    }
  }
  if (props.diagnosticMode) {
    console.warn(`INPUT-NUMBERS toParse= '${toParse}' (${typeof toParse}).`);
  }
  const asNumber = Number(toParse);
  if (props.diagnosticMode) {
    console.warn(`INPUT-NUMBERS asNumber= '${asNumber}' (${typeof asNumber}).`);
  }
  if (Number.isNaN(asNumber)) {
    if (props.diagnosticMode) {
      console.error(` Number.isNaN(asNumber)`);
    }
    return 0;
  }
  if (asNumber > props.max) return props.max;
  return asNumber;
};
const displayed = ref("");
const previous = ref(props.initialNumber ? format(props.initialNumber) : "");
const isInvalid = ref(false);
const diagnosticEmitted = ref<number | undefined>(undefined);

//===//===//===//===//===//===//===//===//===//===//===//===//===//===//===//
onMounted(() => {
  displayed.value = "";
  if (props.initialNumber) {
    if (props.allowDecimal) {
      displayed.value = format(props.initialNumber, true);
    } else {
      displayed.value = format(Math.round(props.initialNumber), true);
    }
  }
});
//
</script>
<style scoped lang="scss">
@use "../infra/styles.scss";
input {
  @extend .p-component, .p-input, .p-inputtext, .p-filled;
}
</style>
