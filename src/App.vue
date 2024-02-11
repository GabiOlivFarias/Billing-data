<template>
  <div class="relative m-10 min-h-180 min-w-90 bg-light-red border-4 border-solid border-secundary rounded-md p-7 flex flex-col justify-center items-center">
    <img class="hidden lg:block absolute top-0 right-0 w-1/6 px-4 mt-4 mr-4" src="../public/images/logo.png" />
    <div class="pb-24">
      <h1 class="flex justify-center font-bold text-6xl">
        {{ $t('tittle') }}
      </h1>
      <p class="flex justify-center font-medium text-3xl"> 
        {{ $t('subtittle') }}
      </p>
    </div>
    <ResultsView />
  </div>
</template>

<script setup>
import ResultsView from '@/composable/ResultsView.vue'
</script>
