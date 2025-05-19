<template>
<div class="bg-white text-gray-900 font-sans p-6 ">
<div class="max-w-2xl mx-auto px-4 sm:mr-[5rem] md:mr-[10rem] lg:mr-[20rem] xl:mr-[40rem] 2xl:mr-[60rem] 3xl:mr-[80rem]">
    <h2 class="text-lg font-semibold mb-6">
      More Courses by
      <span class="text-purple-700">ACI69 | Trading ™</span>
    </h2>
    <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="sm:w-1/3"
      >
        <img
          :src="course.image"
          :alt="course.alt"
          class="w-full h-[160px] object-cover"
          width="320"
        />
        <h3 class="mt-3 font-bold text-gray-900 text-base leading-tight line-clamp-2">
          {{ course.title }}
        </h3>
        <p class="text-xs text-gray-500 mt-1">
          {{ course.instructor }}
        </p>
        <div class="flex items-center space-x-1 mt-1 text-sm font-semibold text-orange-600">
          <span>{{ course.rating }}</span>
          <template v-for="i in 5">
              <i
                v-if="i < Math.floor(course.rating)"
                :key="`full-${i}`"
                class="fas fa-star"
              ></i>
              <i
                v-else-if="i - course.rating <= 0.5"
                :key="`half-${i}`"
                class="fas fa-star-half-alt"
              ></i>
              <i
                v-else
                :key="`empty-${i}`"
                class="far fa-star"
              ></i>
          </template>
          <span class="text-gray-400 text-xs">({{ course.reviews }})</span>
        </div>
        <p class="text-xs text-gray-600 mt-1">
          {{ course.meta }}
        </p>
        <p class="mt-1 font-bold text-gray-900 text-base">
          ₹{{ course.price }}
          <span class="line-through text-gray-400 font-normal">₹{{ course.originalPrice }}</span>
        </p>
      </div>
    </div>
    <button
      class="mt-8 w-full border border-purple-700 text-purple-700 font-semibold text-sm py-2 rounded hover:bg-purple-50 transition"
      type="button"
    >
      Report abuse
    </button>
  </div>
  </div>
</template>

<script setup>
const courses = [
  {
    title: 'Bitcoin Trading Bot Robot Strong and Easy Money…',
    instructor: 'ACI69 Trading, ACI69 | Trading ™',
    image: 'https://storage.googleapis.com/a1aa/image/a06e0107-e350-43f8-5a2b-d7d8202ad1de.jpg',
    alt: 'Robot hand pointing to Bitcoin symbol and Litecoin symbol on blue background',
    rating: 4.1,
    reviews: 22,
    meta: '2.5 total hours · 27 lectures · Intermediate',
    price: 399,
    originalPrice: 799
  },
  {
    title: 'Amazon Power: How To Get Free Products Online?',
    instructor: 'ACI69 | Trading ™, ACI69 Trading',
    image: 'https://storage.googleapis.com/a1aa/image/df5d8cc7-f410-4442-ed1c-ecd8c802cdbf.jpg',
    alt: 'Person holding Amazon Prime boxes',
    rating: 3.7,
    reviews: 37,
    meta: '3.5 total hours · 27 lectures · All Levels',
    price: 399,
    originalPrice: 1919
  },
  {
    title: 'Bitcoin corso di TRADING Semplice™ Parte 1 con…',
    instructor: 'ACI69 Trading, ACI69 | Trading ™',
    image: 'https://storage.googleapis.com/a1aa/image/171494ec-63c8-4f25-0c7d-0ac175f5b9b7.jpg',
    alt: 'Seagull with open beak in front of stock market charts',
    rating: 4.7,
    reviews: 229,
    meta: '7.5 total hours · 48 lectures · Intermediate',
    price: 399,
    originalPrice: 799
  }
];
</script>

<style scoped>
.star-half {
  position: relative;
  display: inline-block;
  color: #f59e0b; /* amber-500 */
}
.star-half::before {
  content: "\f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  position: absolute;
  overflow: hidden;
  width: 50%;
  color: #f59e0b;
  left: 0;
  top: 0;
  z-index: 1;
}
.star-half::after {
  content: "\f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #d1d5db; /* gray-300 */
  margin-left: 0;
  z-index: 0;
}
</style>
