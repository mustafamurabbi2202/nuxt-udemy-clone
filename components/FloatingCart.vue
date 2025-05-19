<template>
  <transition name="slide-fade" appear>
    <div
      v-if="shouldShowFloatingCard"
      class="fixed top-40 right-20 max-w-xs w-full bg-white border border-gray-300 rounded-md overflow-hidden shadow-2xl drop-shadow-2xl z-50 transition-transform duration-300
        md:mr-[5rem] lg:mr-[8rem] xl:mr-[10rem] 2xl:mr-[30rem] 3xl:mr-[40rem]"
    >
    <!-- Video preview section -->
        <div class="relative bg-yellow-400" v-if="shouldShowPreview">
        <iframe
            class="w-full h-[180px]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <div
            class="absolute bottom-2 left-1/2 -translate-x-1/2 text-white font-semibold text-sm drop-shadow-md select-none"
        >
            Preview this course
        </div>
        </div>

    <!-- Pricing and buttons -->
    <div class="px-5 pt-4 pb-6">
      <div class="flex items-baseline space-x-2 mb-3">
        <span class="font-extrabold text-lg">₹399</span>
        <span class="text-gray-500 line-through text-sm" style="text-decoration-thickness: 2px;">₹799</span>
        <span class="text-gray-700 text-sm font-normal">50% off</span>
      </div>

      <button
        class="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded mb-2"
      >
        Add to cart
      </button>
      <button
        class="w-full border border-purple-700 text-purple-700 font-semibold py-2 rounded mb-4 hover:bg-purple-50"
      >
        Buy now
      </button>

      <p class="text-center text-xs text-gray-500 mb-5">
        30-Day Money-Back Guarantee
      </p>

      <!-- Course includes -->
      <div class="text-sm font-semibold mb-3">This course includes:</div>
      <ul class="text-gray-700 text-xs space-y-2 mb-6">
        <li class="flex items-center">
          <i class="far fa-file-video mr-2 text-gray-600"></i>2 hours on-demand video
        </li>
        <li class="flex items-center">
          <i class="far fa-file-alt mr-2 text-gray-600"></i>1 article
        </li>
        <li class="flex items-center">
          <i class="far fa-file-archive mr-2 text-gray-600"></i>2 downloadable resources
        </li>
        <li class="flex items-center">
          <i class="fas fa-tv mr-2 text-gray-600"></i>Access on mobile and TV
        </li>
        <li class="flex items-center">
          <i class="fas fa-infinity mr-2 text-gray-600"></i>Full lifetime access
        </li>
        <li class="flex items-center">
          <i class="fas fa-certificate mr-2 text-gray-600"></i>Certificate of completion
        </li>
      </ul>

      <!-- Share, Gift, Apply Coupon -->
      <div
        class="flex space-x-4 text-xs font-semibold text-gray-700 mb-3 select-none"
      >
        <button class="hover:underline" type="button">Share</button>
        <button class="hover:underline" type="button">Gift this course</button>
        <button class="hover:underline" type="button">Apply Coupon</button>
      </div>

      <!-- Coupon form -->
      <form class="mb-6" @submit.prevent>
        <input
        type="text"
        value="CP130525 is applied"
        disabled
        class="w-full mb-1 px-2 py-3 border-2 border-dashed border-gray-200 rounded text-xs text-gray-400 cursor-not-allowed bg-transparent"
        />
        <div class="text-xs text-gray-400 mb-2">Udemy coupon</div>
        <div class="flex space-x-2">
          <input
            type="text"
            placeholder="Enter Coupon"
            class="flex-grow border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            class="bg-purple-700 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-purple-800"
          >
            Apply
          </button>
        </div>
      </form>

      <!-- Training 5 or more people -->
      <div class="border-t border-gray-300 pt-3">
        <div class="font-semibold text-sm mb-1">Training 5 or more people?</div>
        <div class="text-xs text-gray-700 mb-3">
          Get your team access to 30,000+ top Udemy courses anytime, anywhere.
        </div>
        <button
          class="w-full border border-purple-700 text-purple-700 font-semibold py-2 rounded hover:bg-purple-50 text-xs"
        >
          Try Udemy Business
        </button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useFooterStore } from '~/stores/footerStore'
import { storeToRefs } from 'pinia'

const isAtTop = ref(true)
const isScrolling = ref(false)
let scrollTimeout = null

function onScroll() {
  const scrollY = window.scrollY || window.pageYOffset
  isAtTop.value = scrollY < 10
  isScrolling.value = true

  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isScrolling.value = false
  }, 300)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (scrollTimeout) clearTimeout(scrollTimeout)
})

// For preview (unchanged)
const shouldShowPreview = computed(() => isAtTop.value && !isScrolling.value)

// For floating card visibility (hide if footer is visible)
const footerStore = useFooterStore()
const { isFooterVisible } = storeToRefs(footerStore)
const shouldShowFloatingCard = computed(() => !isFooterVisible.value)
</script>


<style>
.line-through {
  text-decoration-thickness: 2px;
}

/* Transition classes for slide and fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>