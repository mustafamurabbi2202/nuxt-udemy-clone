<template>
  <div class="bg-white text-gray-900 font-sans p-6 ">
<div class="max-w-2xl mx-auto px-4 sm:mr-[5rem] md:mr-[10rem] lg:mr-[20rem] xl:mr-[40rem] 2xl:mr-[60rem] 3xl:mr-[80rem]">
      <h2 class="font-semibold text-lg leading-6 mb-1">Course content</h2>
      <p class="text-sm text-gray-600 mb-4">
        {{ summary }}
        <a href="#" class="text-purple-700 font-semibold ml-6 hover:underline" @click.prevent="expandAll">Expand all sections</a>
      </p>

      <section
        v-for="(section, idx) in visibleSections"
        :key="section.title"
        :class="[
          'border border-t-0 border-gray-300',
          idx === 0 ? 'rounded-t-sm' : '',
          idx === visibleSections.length - 1 ? 'rounded-b-sm' : ''
        ]"
      >
        <div
          class="min-h-[3rem] flex justify-between items-center border-b border-gray-300 px-4 py-2 cursor-pointer select-none"
          :class="section.isOpen ? 'bg-gray-50' : 'bg-[#f6f7f9]'"
          @click="toggleSection(section)"
        >
          <button :aria-expanded="section.isOpen" class="text-gray-900 font-bold text-xs flex items-center gap-1">
            <i :class="['fas', section.isOpen ? 'fa-chevron-up' : 'fa-chevron-down', 'text-[10px]']"></i>
            {{ section.title }}
          </button>
          <span class="text-xs text-gray-600">{{ section.meta }}</span>
        </div>

        <ul v-if="section.isOpen && section.lectures" class="px-4 py-2 text-xs text-gray-700 space-y-1">
          <li v-for="(lecture, lIdx) in section.lectures" :key="lIdx" class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <i class="far fa-file-video text-gray-600 text-[12px]"></i>
              <a v-if="lecture.link" :href="lecture.link" class="text-purple-700 hover:underline">{{ lecture.title }}</a>
              <span v-else>{{ lecture.title }}</span>
            </div>
            <span class="text-gray-600">{{ lecture.duration }}</span>
          </li>
        </ul>
      </section>

      <button
        v-if="remainingSections > 0"
        type="button"
        class="w-full mt-3 border border-purple-700 text-purple-700 text-xs font-semibold rounded-sm py-2 hover:bg-purple-50"
        @click="showAll = true"
      >
        {{ remainingSections }} more sections
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const showAll = ref(false)

const summary = '13 sections · 22 lectures · 2h 5m total length'

const sections = reactive([
    {
        title: 'Introduction to Vue.js',
        meta: '4 lectures · 15min',
        isOpen: true,
        lectures: [
            { title: 'What is Vue.js?', duration: '03:45', link: '#' },
            { title: 'Setting up the Environment', duration: '04:15', link: '#' },
            { title: 'Vue Instance Basics', duration: '03:30', link: '#' },
            { title: 'Template Syntax', duration: '03:30', link: '#' }
        ]
    },
    {
        title: 'Components in Vue.js',
        meta: '3 lectures · 12min',
        isOpen: false,
        lectures: [
            { title: 'Introduction to Components', duration: '04:00', link: '#' },
            { title: 'Props and Events', duration: '04:00', link: '#' },
            { title: 'Slots in Vue.js', duration: '04:00', link: '#' }
        ]
    },
    {
        title: 'Vue Router Basics',
        meta: '2 lectures · 10min',
        isOpen: false,
        lectures: [
            { title: 'Setting up Vue Router', duration: '05:00', link: '#' },
            { title: 'Dynamic Routing', duration: '05:00', link: '#' }
        ]
    },
    {
        title: 'State Management with Vuex',
        meta: '3 lectures · 18min',
        isOpen: false,
        lectures: [
            { title: 'What is Vuex?', duration: '06:00', link: '#' },
            { title: 'State and Getters', duration: '06:00', link: '#' },
            { title: 'Mutations and Actions', duration: '06:00', link: '#' }
        ]
    },
    {
        title: 'Building a Vue.js Project',
        meta: '5 lectures · 25min',
        isOpen: false,
        lectures: [
            { title: 'Project Setup', duration: '05:00', link: '#' },
            { title: 'Creating Components', duration: '05:00', link: '#' },
            { title: 'Using Vue Router', duration: '05:00', link: '#' },
            { title: 'State Management', duration: '05:00', link: '#' },
            { title: 'Deploying the Project', duration: '05:00', link: '#' }
        ]
    },
    {
        title: 'Advanced Vue.js Concepts',
        meta: '4 lectures · 20min',
        isOpen: false,
        lectures: [
            { title: 'Mixins and Custom Directives', duration: '05:00', link: '#' },
            { title: 'Render Functions', duration: '05:00', link: '#' },
            { title: 'Vue 3 Composition API', duration: '05:00', link: '#' },
            { title: 'Performance Optimization', duration: '05:00', link: '#' }
        ]
    },
    {
        title: 'Testing Vue.js Applications',
        meta: '3 lectures · 15min',
        isOpen: false,
        lectures: [
            { title: 'Unit Testing with Jest', duration: '05:00', link: '#' },
            { title: 'End-to-End Testing with Cypress', duration: '05:00', link: '#' },
            { title: 'Mocking Dependencies', duration: '05:00', link: '#' }
        ]
    },
    {
        title: 'Integrating Vue.js with Backend',
        meta: '3 lectures · 18min',
        isOpen: false,
        lectures: [
            { title: 'Using Axios for API Calls', duration: '06:00', link: '#' },
            { title: 'Authentication and Authorization', duration: '06:00', link: '#' },
            { title: 'Real-time Communication with WebSockets', duration: '06:00', link: '#' }
        ]
    },
    {
        title: 'Deploying Vue.js Applications',
        meta: '2 lectures · 10min',
        isOpen: false,
        lectures: [
            { title: 'Building for Production', duration: '05:00', link: '#' },
            { title: 'Deploying to Cloud Platforms', duration: '05:00', link: '#' }
        ]
    },
    {
        title: 'Vue.js Ecosystem and Tools',
        meta: '3 lectures · 15min',
        isOpen: false,
        lectures: [
            { title: 'Vue CLI and Plugins', duration: '05:00', link: '#' },
            { title: 'Nuxt.js for Server-Side Rendering', duration: '05:00', link: '#' },
            { title: 'Vue DevTools', duration: '05:00', link: '#' }
        ]
    }
])

const visibleSections = computed(() => (showAll.value ? sections : sections.slice(0, 10)))
const remainingSections = computed(() => sections.length - visibleSections.value.length)

const toggleSection = (section) => {
  section.isOpen = !section.isOpen
}

const expandAll = () => {
  sections.forEach(section => {
    section.isOpen = true
  })
}
</script>

<style scoped>
i.fas,
i.far {
  width: 12px;
}
</style>
