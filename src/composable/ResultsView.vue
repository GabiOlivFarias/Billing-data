<template>
  <div class="h-96 w-auto bg-light-red border-4 border-solid border-secundary rounded-md flex justify-center">
    <div class="flex flex-col items-center p-2">
      <h1 class="font-bold text-3xl flex justify-center pt-4 mb-16">
        O que deseja ver?
      </h1>
      <div class="flex flex-row justify-center items-center p-2">
        <LowestRevenueButton />
        <HighestRevenueButton />
        <AverageMonthlyButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import AverageMonthlyButton from '@/components/globals/buttons/AverageMonthlyButton.vue';
import HighestRevenueButton from '@/components/globals/buttons/HighestRevenueButton.vue';
import LowestRevenueButton from '@/components/globals/buttons/LowestRevenueButton.vue';

</script>
