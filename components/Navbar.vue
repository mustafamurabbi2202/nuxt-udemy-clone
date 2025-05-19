<template>
  <div
    class="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 border-b border-gray-200"
  >
    <div class="flex items-center space-x-2">
      <img
        alt="Udemy logo black U letter on white background"
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        class="h-12 max-w-full object-contain"
      />
      <a class="text-xs font-normal text-gray-700 select-none" href="#">Explore</a>
    </div>

    <form class="flex-grow max-w-2xl mx-6" role="search" aria-label="Site search">
      <label class="sr-only" for="search">Search for anything</label>
      <div class="relative">
        <input
          id="search"
          type="search"
          placeholder="Search for anything"
          class="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        </span>
      </div>
    </form>

    <nav class="flex items-center space-x-4 text-xs text-gray-700 select-none relative" aria-label="Main navigation">
      <a class="hover:underline" href="#">Plans &amp; Pricing</a>

      <!-- Udemy Business with dropdown -->
  <!-- Udemy Business with dropdown -->
    <div
        class="relative"
        @mouseenter="activeMenu = 'business'"
        @mouseleave="activeMenu = null"
    >
        <button
        class="focus:outline-none h-10 px-3 py-1 rounded transition bg-transparent hover:bg-purple-200 text-gray-700"
        aria-haspopup="true"
        :aria-expanded="activeMenu === 'business'"
        type="button"
        >
        Udemy Business
        </button>
        <div
        v-if="activeMenu === 'business'"
        class="absolute top-full mt-2 right-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-6 z-50"
        style="z-index: 9999;"

        >
        <p class="text-center text-gray-900 font-semibold text-base mb-4 leading-snug">
            Get your team access to over<br />
            <span class="font-bold">30,000 top Udemy courses,</span><br />
            anytime, anywhere.
        </p>
        <button
            class="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition"
            type="button"
        >
            Try Udemy Business
        </button>
        </div>
    </div>

    <!-- Teach on Udemy with dropdown -->
    <div
        class="relative"
        @mouseenter="activeMenu = 'teach'"
        @mouseleave="activeMenu = null"
    >
        <button
        class="focus:outline-none h-10 px-3 py-1 rounded transition bg-transparent hover:bg-purple-200 text-gray-700"
        aria-haspopup="true"
        :aria-expanded="activeMenu === 'teach'"
        type="button"
        >
        Teach on Udemy
        </button>
        <div
        v-if="activeMenu === 'teach'"
        class="absolute top-full mt-2 right-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-6 z-50"
        style="z-index: 9999;"

        >
        <p class="text-center text-gray-900 font-semibold text-base mb-4 leading-snug">
            Turn what you know into an<br />
            <span class="font-bold">opportunity and reach</span><br />
            millions around the world.
        </p>
        <button
            class="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition"
            type="button"
        >
            Try Udemy Business
        </button>
        </div>
    </div>

      <button
        aria-label="Shopping cart"
        class="text-gray-700 hover:text-gray-900"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5h12m-7 0a2 2 0 11-4 0m6 0a2 2 0 104 0"
          />
        </svg>
      </button>

      <button
        class="text-purple-700 border border-purple-700 rounded px-4 py-1 text-sm font-semibold hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
        type="button"
      >
        Log in
      </button>

      <button
        class="bg-purple-700 text-white rounded px-4 py-1 text-sm font-semibold hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
        type="button"
      >
        Sign up
      </button>

      <button
        aria-label="Language selector"
        class="border border-gray-300 rounded p-1 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
        type="button"
      >
        <i class="fas fa-globe"></i>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Track which menu is open: 'business', 'teach', or null
const activeMenu = ref(null)

function toggleMenu(menu) {
  if (activeMenu.value === menu) {
    activeMenu.value = null
  } else {
    activeMenu.value = menu
  }
}

function closeMenu() {
  activeMenu.value = null
}
</script>

<style scoped>
/* Optional: add any custom styling here */
</style>
