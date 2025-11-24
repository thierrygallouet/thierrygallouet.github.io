<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- <MathsBackground/> -->
    <div class="relative z-10">
    <Header />
    <main class="flex-1">
      <Courses/>
      <Books/>
      <Research/>
      <Contact/>
    </main>
  </div>
  </div>
</template>

<style>
@import "~/assets/css/tailwind.css";

html { scroll-behavior: smooth; }
</style>
