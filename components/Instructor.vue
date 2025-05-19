<template>
  <div class="bg-white text-gray-900 font-sans p-6">
    <div class="max-w-2xl mx-auto px-4 sm:mr-[5rem] md:mr-[10rem] lg:mr-[20rem] xl:mr-[40rem] 2xl:mr-[60rem] 3xl:mr-[80rem]">
      <h2 class="font-semibold text-lg mb-2">Instructor</h2>
      <a :href="instructor.profileLink" class="text-purple-700 font-semibold underline mb-1 inline-block">
        {{ instructor.name }}
      </a>
      <p class="text-gray-700 mb-3 text-sm">{{ instructor.title }}</p>

      <div class="flex items-center mb-3 space-x-4">
        <img :src="instructor.image" :alt="instructor.imageAlt" class="w-16 h-16 rounded-full flex-shrink-0" />
        <div class="space-y-1 text-xs text-gray-800">
          <div v-for="(stat, index) in instructor.stats" :key="index" class="flex items-center space-x-2">
            <i :class="stat.icon + ' text-black text-[13px]'"></i>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <p class="text-xs mb-1">{{ instructor.tagline }}</p>
      <p class="text-xs mb-3">{{ instructor.experience }}</p>

      <ul class="text-xs font-semibold mb-3 space-y-1">
        <li v-for="(item, index) in instructor.highlights" :key="index">✓ {{ item }}</li>
      </ul>

      <div v-if="!showMore">
        <button @click="showMore = true" class="text-purple-700 font-semibold text-xs flex items-center space-x-1">
          <span>Show more</span>
          <i class="fas fa-chevron-down text-[10px]"></i>
        </button>
      </div>

      <div v-else class="text-xs space-y-3">
        <p><strong>{{ instructor.intro }}</strong></p>
        <ul class="list-disc pl-4">
          <li><strong>{{ instructor.studentStats }}</strong></li>
          <li><strong>{{ instructor.reviewStats }}</strong></li>
          <li><strong>{{ instructor.viewStats }}</strong></li>
          <li><strong>{{ instructor.subscriberStats }}</strong></li>
        </ul>
        <p>
          Ho creato oltre <strong>{{ instructor.hoursOfContent }}</strong> (cioè <strong>{{ instructor.yearsCondensed }}</strong>)
        </p>
        <p>
          <strong>Perché dovresti fidarti?</strong><br />
          {{ instructor.trustReason }}
        </p>
        <p>
          <strong>Se vuoi davvero imparare un mestiere</strong>, ignora le informazioni sparse online e affidati a chi ha già fatto tutti gli errori per te.
        </p>
        <p>
          <strong>Iscriviti ai miei corsi</strong>: hai una <span class="text-green-600">garanzia soddisfatti o rimborsati</span>.<br />
          <strong class="text-purple-700">Supporto esclusivo</strong> solo per gli studenti.
        </p>
        <p>
          Non perdere tempo: <span class="text-purple-700 font-semibold">clicca e inizia ora</span>
        </p>
        <p>Ci vediamo dall'altra parte – {{ instructor.nameShort }}</p>

        <button @click="showMore = false" class="text-purple-700 font-semibold text-xs flex items-center space-x-1">
          <span>Show less</span>
          <i class="fas fa-chevron-up text-[10px]"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMore = ref(false)

const instructor = {
  name: 'ACI69 | Trading ™',
  nameShort: 'ACI69',
  profileLink: '#',
  title: '✓ Computer Engineer Best Seller – Learn and Earn!',
  image: 'https://storage.googleapis.com/a1aa/image/d4848e03-b130-45e3-597c-93d92cafacc6.jpg',
  imageAlt: "ACI69 logo with yellow background and text 'https://www.aci69.trading CRYPTO | TRADING | STAKING'",
  tagline: '★★★★★ Learn, Apply, Earn! ★★★★★',
  experience: 'I have been involved in online training for 18 years',
  highlights: [
    'no frills',
    'without pedestals of the cabbage',
    'without wasting time',
  ],
  stats: [
    { icon: 'fas fa-star', label: '4.5 Instructor Rating' },
    { icon: 'fas fa-map-marker-alt', label: '3,071 Reviews' },
    { icon: 'fas fa-user-friends', label: '14,762 Students' },
    { icon: 'fas fa-play-circle', label: '54 Courses' },
  ],
  intro: "Hi, I'm Leo, better known online as ACI69 Crypto Trading",
  studentStats: '14,000 students already trained',
  reviewStats: '3,000 verified reviews',
  viewStats: '4,350,000 views',
  subscriberStats: '32,000 subscribers between Udemy and YouTube',
  hoursOfContent: '500,000 hours of video content',
  yearsCondensed: "that's 57 years of training condensed",
  trustReason: 'Because my students get real results. They earn, improve and transform the skills learned in my courses into real opportunities.',
}
</script>
