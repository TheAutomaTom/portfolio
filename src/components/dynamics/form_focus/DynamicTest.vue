<template>
    <!-- STRING INPUT -->
    <div
      class="flex items-center"    
    >

    <h4>Test Heading</h4>

    
    </div>

</template>

<script setup lang="ts">
import { ref, useAttrs } from "vue";
import { useFocussedInputModule } from "../../../state/FocussedInputModule";
import { IFocussed, ElementKind } from "../../../models/FocussedInputElements";
</script>
<script lang="ts">
export default { name: "DynamicTest" };
</script>