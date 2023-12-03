<script setup lang="ts">
import IconImage from './IconImage.vue';
import { defineProps } from 'vue';

defineProps<{ imageName: string }>();
</script>

<template>
  <div class="flex items-center justify-start p-1">
    <IconImage>{{ imageName }}</IconImage>
    <p class="px-4"><slot></slot></p>
  </div>
</template>
