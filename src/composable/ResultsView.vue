<template>
  <div class="h-96 w-auto bg-light-red border-4 border-solid border-secundary rounded-md flex justify-center">
    <div class="flex flex-col items-center p-2">
      <h1 class="font-bold text-3xl flex justify-center pt-4 mb-16">
        {{ $t('view.to_see') }}
      </h1>
      <div class="flex flex-row justify-center items-center p-2">
        <LowestRevenueButton :isActive="activeButton === 'low'" @click="handleButtonClick('low')" :resultMessage="resultMessages.low" />
        <HighestRevenueButton :isActive="activeButton === 'high'" @click="handleButtonClick('high')" :resultMessage="resultMessages.high" />
        <AverageMonthlyButton :isActive="activeButton === 'average'" @click="handleButtonClick('average')" :resultMessage="resultMessages.average" />
      </div>
      <div class="flex flex-row justify-center items-center font-medium text-2xl p-4">
        <h3>{{ resultMessages[activeButton] }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import AverageMonthlyButton from '@/components/globals/buttons/AverageMonthlyButton.vue'
import HighestRevenueButton from '@/components/globals/buttons/HighestRevenueButton.vue'
import LowestRevenueButton from '@/components/globals/buttons/LowestRevenueButton.vue'
import dadosFaturamento from '@/data/dados.json'
import { ref } from 'vue'

const activeButton = ref(null)
const resultMessages = {
  low: ref(),
  high: ref(),
  average: ref(),
}

const handleButtonClick = (button) => {
  activeButton.value = button

  if (button === 'low') {
    const faturamentoFiltrado = dadosFaturamento.filter(item => item.valor > 0)
    const menorFaturamento = Math.min(...faturamentoFiltrado.map(item => item.valor))
    const diaMenorFaturamento = faturamentoFiltrado.find(item => item.valor === menorFaturamento).dia
    resultMessages.low = `Menor faturamento ocorreu no dia ${diaMenorFaturamento} com o valor de R$ ${menorFaturamento.toFixed(2)}`
  } else if (button === 'high') {
    const faturamentoFiltrado = dadosFaturamento.filter(item => item.valor > 0)
    const maiorFaturamento = Math.max(...faturamentoFiltrado.map(item => item.valor))
    const diaMaiorFaturamento = faturamentoFiltrado.find(item => item.valor === maiorFaturamento).dia
    resultMessages.high = `O maior faturamento ocorreu no dia ${diaMaiorFaturamento} com o valor de R$ ${maiorFaturamento.toFixed(2)}`
  } else if (button === 'average') {
    const faturamentoFiltrado = dadosFaturamento.filter(item => item.valor > 0)
    const totalFaturamento = faturamentoFiltrado.reduce((acc, item) => acc + item.valor, 0)
    const mediaFaturamento = totalFaturamento / faturamentoFiltrado.length
    resultMessages.average = `Faturamento médio foi de R$ ${mediaFaturamento.toFixed(2)}`
  }
}
</script>
