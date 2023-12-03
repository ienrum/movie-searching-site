<script setup lang="ts"></script>

<template>
  <Teleport to="body">
    <div
      class="fixed left-0 top-0 z-30 flex h-screen w-screen flex-grow items-center justify-center backdrop-blur-sm">
      <img
        class="h-1/2 align-middle"
        src="/loading-cat.gif"
        alt="loading cat" />
    </div>
  </Teleport>
</template>
