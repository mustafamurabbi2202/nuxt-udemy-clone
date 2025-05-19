<template>
<div class="max-w-2xl mx-auto px-4 sm:mr-[5rem] md:mr-[10rem] lg:mr-[20rem] xl:mr-[40rem] 2xl:mr-[60rem] 3xl:mr-[80rem]">
      <h2 class="font-semibold text-gray-900 text-base mb-4 px-4 pt-4">
        Students also bought
      </h2>
      <ul class="divide-y divide-gray-300">
        <li v-for="(course, index) in visibleCourses" :key="course.id" class="flex items-center px-4 py-3">
          <img
            :alt="course.alt"
            class="w-12 h-12 rounded-sm flex-shrink-0"
            height="48"
            :src="course.img"
            width="48"
          />
          <div class="flex flex-col ml-3 flex-grow min-w-0">
            <p class="font-semibold text-gray-900 text-sm leading-tight">
              {{ course.title }}
            </p>
            <div class="flex items-center space-x-2 text-xs font-medium">
              <span
                v-if="course.badge"
                :class="badgeClass(course.badge.type)"
                class="rounded px-2 py-0.5 flex items-center gap-1 text-white"
              >
                <i v-if="course.badge.icon" :class="course.badge.icon" class="text-[10px]"></i>
                {{ course.badge.label }}
              </span>
              <span class="text-green-700 font-semibold">
                {{ course.hours }} total hours
              </span>
              <span class="text-gray-600">
                · Updated {{ course.updated }}
              </span>
            </div>
          </div>
          <div class="flex flex-col items-end ml-3 flex-shrink-0 min-w-[72px]">
            <div class="flex items-center space-x-1 text-orange-600 font-semibold text-sm">
              <span>{{ course.rating }}</span>
              <i class="fas fa-star text-[14px]"></i>
            </div>
            <div class="flex items-center space-x-1 text-gray-600 text-xs mt-1">
              <i class="fas fa-user-friends"></i>
              <span>{{ course.students }}</span>
            </div>
          </div>
          <div class="flex flex-col items-end ml-4 flex-shrink-0 min-w-[72px]">
            <span class="font-semibold text-gray-900 text-sm">
              ₹{{ course.price }}
            </span>
            <span class="text-gray-400 text-xs line-through-custom" v-if="course.originalPrice">
              ₹{{ course.originalPrice }}
            </span>
          </div>
          <button
            :aria-label="`Add ${course.title} course to wishlist`"
            class="ml-4 w-8 h-8 rounded-full border border-purple-700 text-purple-700 flex items-center justify-center hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <i class="far fa-heart"></i>
          </button>
        </li>
      </ul>

      <div class="flex justify-center py-4 space-x-2">
        <button
          v-if="visibleCourses.length < courses.length"
          @click="showMore"
          class="w-full border border-purple-700 text-purple-700 text-xs font-semibold py-2 rounded-b-md hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600" 
        >
          Show More
        </button>
        <button
          v-if="visibleCourses.length > itemsPerPage"
          @click="showLess"
          class="w-full border border-purple-700 text-purple-700 text-xs font-semibold py-2 rounded-b-md hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Show Less
        </button>
      </div>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";

// Your courses data array
const courses = [
  {
    id: 1,
    title: "Crypto Condensed: The Complete Guide To Bitcoin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
    alt: "Man with Bitcoin coins, representing Crypto Condensed course",
    badge: { label: "Premium", type: "premium", icon: "fas fa-certificate" },
    hours: 7,
    updated: "2/2024",
    rating: 4.3,
    students: "31,381",
    price: 419,
    originalPrice: 3009,
  },
  {
    id: 2,
    title: "Blockchain and Bitcoin Fundamentals",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
    alt: "Bitcoin logo on wood background, representing Blockchain and Bitcoin Fundamentals course",
    badge: { label: "Bestseller", type: "bestseller" },
    hours: 3,
    updated: "5/2025",
    rating: 4.6,
    students: "133,276",
    price: 469,
    originalPrice: 4229,
  },
  {
    id: 3,
    title: "Bitcoin Advanced Level: Transactions",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
    alt: "Man with Bitcoin arrows icon, representing Bitcoin Advanced Level course",
    badge: { label: "Premium", type: "premium", icon: "fas fa-certificate" },
    hours: 1.5,
    updated: "5/2025",
    rating: 4.7,
    students: "5,914",
    price: 399,
    originalPrice: 2619,
  },
  {
    id: 4,
    title: "Bitcoin and Cryptocurrency Bootcamp",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&sg",
    alt: "Bitcoin and Cryptocurrency icon, representing Bitcoin and Cryptocurrency Bootcamp course",
    badge: { label: "Premium", type: "premium", icon: "fas fa-certificate" },
    hours: 8.5,
    updated: "6/2018",
    rating: 4.5,
    students: "10,770",
    price: 469,
    originalPrice: 4035,
  },
  {
    id: 5,
    title: "Introduction to Bitcoin & Crypto Assets",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
    alt: "Man in suit with orange background, representing Introduction to Bitcoin & Crypto Assets course",
    badge: { label: "Premium", type: "premium", icon: "fas fa-certificate" },
    hours: 1.5,
    updated: "12/2021",
    rating: 4.5,
    students: "3,998",
    price: 399,
    originalPrice: 2159,
  },
    {
        id: 6,
        title: "Bitcoin Trading Bot Robot Strong and Easy Money",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
        alt: "Robot hand pointing to Bitcoin symbol and Litecoin symbol on blue background",
        badge: { label: "Bestseller", type: "bestseller" },
        hours: 2.5,
        updated: "3/2024",
        rating: 4.1,
        students: "22",
        price: 399,
        originalPrice: 799,
    },
    {
        id: 7,
        title: "Litecoin Trading Bot Robot Strong and Easy Money",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
        alt: "Robot hand pointing to Litecoin symbol on blue background",
        badge: { label: "Bestseller", type: "bestseller" },
        hours: 2.5,
        updated: "3/2024",
        rating: 4.1,
        students: "22",
        price: 399,
        originalPrice: 799,
    },
    {
        id: 8,
        title: "Ethereum Trading Bot Robot Strong and Easy Money",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
        alt: "Robot hand pointing to Ethereum symbol on blue background",
        badge: { label: "Bestseller", type: "bestseller" },
        hours: 2.5,
        updated: "3/2024",
        rating: 4.1,
        students: "22",
        price: 399,
        originalPrice: 799,
    },
    {
        id: 9,
        title: "Dogecoin Trading Bot Robot Strong and Easy Money",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zs9qW4ptYaN4hvanVNrRLcfDCRL2Vcn8qA&s",
        alt: "Robot hand pointing to Dogecoin symbol on blue background",
        badge: { label: "Bestseller", type: "bestseller" },
        hours: 2.5,
        updated: "3/2024",
        rating: 4.1,
        students: "22",
        price: 399,
        originalPrice: 799,
    },
];

const itemsPerPage = 5;
const visibleCount = ref(itemsPerPage);

const visibleCourses = computed(() => courses.slice(0, visibleCount.value));

function showMore() {
  visibleCount.value = Math.min(visibleCount.value + itemsPerPage, courses.length);
}

function showLess() {
  visibleCount.value = itemsPerPage;
}

function badgeClass(type) {
  switch (type) {
    case "premium":
      return "bg-purple-700";
    case "bestseller":
      return "bg-teal-500";
    default:
      return "bg-gray-400";
  }
}
</script>

<style>
.line-through-custom {
  text-decoration: line-through;
}
</style>
