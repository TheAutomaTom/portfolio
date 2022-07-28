<template>

  <div class="contact-div" v-if="contact">
    <p>{{ app$.Lang.phrasebook.ratherTalkToAdvisor }}</p>
    <p>{{ app$.Lang.phrasebook.weAreHereToHelp }}</p>
      <p class="p-2">
      <span v-if="contact.call">
        {{ app$.Lang.phrasebook.callUsAt }}
        <a :href="`tel:${contact.call}`" 
          >{{ contact.call }} </a
        >,
      </span>
      <span v-if="contact.text">
        &nbsp;{{ app$.Lang.phrasebook.text }} {{ contact.textCode }}
        {{ app$.Lang.phrasebook.to }}
        <a :href="`sms:${contact.text}`" >{{ contact.text }}</a>,
      </span>
      <span v-if="contact.website">
        {{ app$.Lang.phrasebook.or }}
        <a :href="contact.website" target="_blank" >{{
          app$.Lang.phrasebook.visitUsHere
        }}</a>
      </span>
      <p class="p-2">
        <button
          style="display: inline-block"
          class="mb-4 px-1 text-blue-500 font-medium text-sm flex justify-center items-center"
          @click="app$.SetModalVisible(ModalType.TermsAndConditions)"
        >
          <p>{{ app$.Lang.phrasebook.termsConditions }}</p>
        </button>
      </p>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAppState } from "../../../stores/AppState";
import { ModalType } from "../../../models/modals";
import { useWizardModule } from "../../../stores/WizardModule";
const app$ = useAppState();
const wiz$ = useWizardModule();
const contact = wiz$.Facility._facilityConfig.contact!;
</script>
<style scoped lang="scss">
@use '../../styles/dynamic.scss' as *;
.contact-div {
  @extend .font-primary;
  @apply w-full text-center mt-8 text-sm pb-32;
}

</style>
