<template>
  <div :class="['tyh-card', { [`tyh-card-shadow-${shadow}`]: shadow }]">
    <div v-if="$slots.title || $slots.subtitle" class="tyh-card-header">
      <span v-if="$slots.title" class="tyh-card-title">
        <slot name="title" />
      </span>
      <span v-if="$slots.subtitle" class="tyh-card-subtitle">
        <slot name="subtitle" />
      </span>
    </div>
    <div class="tyh-card-body" :style="bodyStyle"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import { cardProps } from './props.ts'
defineProps(cardProps)
</script>
