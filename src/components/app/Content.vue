<template>
  <div>
    <form-focus-dialog v-if="focus$.IsActive" class="fixed flex w-full"></form-focus-dialog>
    <slot name="content"></slot>
  </div>
</template>
<script setup lang="ts">
import { useFocussedInputModule } from "../../state/FocussedInputModule";
const focus$ = useFocussedInputModule();
</script>
