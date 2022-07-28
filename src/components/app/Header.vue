<template>
  <!-- <header :class="app$.IsScrolled ? 'shadow' : ''"> -->
  <header>
    <div class="header-wrapper">
      <!--=== Left Aligned ===---------------------------->
      <div class="header-left">
        <!-- <img
          alt="Logo"
          :src="facility.theme.logo"
          :class="facility.theme.logoSize"
        /> -->
        Logo
      </div>

      <div class="flex items-center">
        Links!
        <!-- <router-link class="px-3" :to="'/'"> Wizard </router-link>
        <span class="color-secondary">|</span>
        <router-link class="px-3" :to="'StyleGuide'"> Style Guide </router-link>
        <span class="color-secondary">|</span> -->
        <!-- <router-link class="px-3" :to="'FilePickers'"> -->
      </div>

      <!--=== Right Aligned ===---------------------------->
      <div class="header-right">
        <!-- <select-language /> -->
        Right Aligned
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
// import { ref } from "vue";
// import { useAppState } from "../../../stores/AppState";
// import { useWizardModule } from "../../../stores/WizardModule";
// import SelectLanguage from "../controls/SelectLanguage.vue";

// const app$ = useAppState();
// const wiz$ = useWizardModule();
// const facility = ref(wiz$.Facility._facilityConfig);

// const contact = wiz$.Facility._facilityConfig.contact!;
</script>
<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @apply w-full h-12
          flex justify-center items-center
          bg-white;
}
.header-wrapper {
  @apply w-full max-w-7xl flex px-1;
}
.header-left {
  @apply flex flex-col justify-center;
}
.header-right {
  @apply flex flex-grow flex-row-reverse;
}
</style>
