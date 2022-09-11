<template>
  <div>
    <dialog-mask v-if="focus$.IsActive" class="fixed flex w-full"></dialog-mask>
    <slot name="content"></slot>
  </div>
</template>
