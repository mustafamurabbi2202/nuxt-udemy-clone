<script setup>
import { ref } from 'vue'

const showMore = ref(false)

const introParagraphs = [
  { text: "How does Coinbase work to buy Bitcoin and other cryptocurrencies to earn money?", bold: true },
  { text: "Watch this tutorial series to see how Coinbase works to buy, sell and transfer cryptocurrencies." },
  { text: "Also see how to earn with Coinbase Cryptocurrencies with Coinbase Earn: I'll explain it to you in a simple way." },
  { text: "Coinbase is a great easy way to get started with cryptocurrency so if you like, sign up for this course and follow the simple lessons." },
  { text: "Inside the course you will also find an invitation to earn and I will also teach you how to generate your own invitation." }
]

const courseTopics = [
  "Introduction: What is Coinbase and what is it used for?",
  "Here Are The Documents And Data That Will Be Required Of You At The Time Of Your Registration: How Should You Do It Step By Step?",
  "How to Sign Up for Free Step by Step at Coinbase?",
  "Check out Coinbase’s Initial Features Overview...",
  "What Will You See When You Log Into Coinbase?",
  "Visa Prepaid Credit Card: Here’s How To Apply In Coinbase?",
  "PAC: Cryptocurrency Savings Plan & Wallet In Coinbase",
  "In Practice: How To Do With Scheduled Purchases And Accumulation Plans In Coinbase?",
  "Buying Crypto With Current Accounts, IBAN, Bank Transfers or Prepaid Cards: How Do You Do It?",
  "Coinbase Pricing Card Features: What Can You Do With It?",
  "How Do You Transfer Cryptocurrency From Coinbase To Other External Wallets?",
  "How do you receive cryptocurrencies from other wallets outside of your Coinbase Wallet?",
  "Coinbase Vault: What Is It And What Can You Do With It?"
]

const courseAudience = [
  "Anyone Wants To Learn How To Use Coinbase Without Stress",
  "Anyone Wants To Learn The Easiest Way To Buy BITCOIN",
  "Anyone Wants To Learn The Easiest Way To Buy Other Cryptocurrencies"
]
</script>

<template>
<div class="max-w-2xl mx-auto px-4 sm:mr-[5rem] md:mr-[10rem] lg:mr-[20rem] xl:mr-[40rem] 2xl:mr-[60rem] 3xl:mr-[80rem]">
    <h2 class="text-xl font-semibold mb-4">Description</h2>

    <div class="space-y-2 text-sm text-gray-900">
      <p v-for="(p, index) in introParagraphs" :key="index" :class="p.bold ? 'font-bold' : ''">
        {{ p.text }}
      </p>
    </div>

    <div class="mt-4 text-sm text-gray-900" v-if="showMore">
      <p class="mb-2">Here are the topics you will see in this Coinbase course:</p>
      <ul class="list-disc list-inside mt-4 space-y-2 leading-[1.8]">
          <li
            v-for="(topic, index) in courseTopics"
            :key="'alt-' + index"
            :class="index % 2 === 0 ? 'font-bold' : 'font-light'"
          >
            {{ topic }}
          </li>
        </ul>

      <p class="mt-6">
        See you on the other side, sign up so you don’t make the same mistakes 90% of people make when starting out with Coinbase.
      </p>
      <p>See you on the other side in the first lesson!</p>

      <h3 class="mt-6 font-semibold text-base">Who this course is for:</h3>
      <ul class="list-disc list-inside mt-2 text-sm">
        <li v-for="(audience, index) in courseAudience" :key="index">{{ audience }}</li>
      </ul>
    </div>

    <button @click="showMore = !showMore" class="mt-4 text-purple-700 font-semibold text-sm flex items-center space-x-1">
      <span>{{ showMore ? 'Show less' : 'Show more' }}</span>
      <i :class="['fas', showMore ? 'fa-chevron-up' : 'fa-chevron-down', 'text-xs']"></i>
    </button>
  </div>
</template>
