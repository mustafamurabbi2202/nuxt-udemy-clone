<template>
  <TopBar />
  <Navbar />
  <main>
    <slot />
  </main>
  <FloatingCart />
  <Footer />
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
import Navbar from '~/components/Navbar.vue'
import FloatingCart from '~/components/FloatingCart.vue'
import Footer from '~/components/Footer.vue'
</script>
