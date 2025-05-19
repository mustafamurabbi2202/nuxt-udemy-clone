<template>
 <div class="bg-white text-gray-900 font-sans p-6 ">
<div class="max-w-2xl mx-auto px-4 sm:mr-[5rem] md:mr-[10rem] lg:mr-[20rem] xl:mr-[40rem] 2xl:mr-[60rem] 3xl:mr-[80rem]">
   <div class="flex items-center space-x-2 mb-6">
    <i class="fas fa-star text-orange-500"></i>
    <p class="font-semibold text-gray-900 text-base sm:text-lg">
     {{ courseRating }} course rating
    </p>
    <span class="text-gray-600 font-semibold text-base sm:text-lg">·</span>
    <p class="font-semibold text-gray-900 text-base sm:text-lg">
     {{ totalRatings }} ratings
    </p>
   </div>

   <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 border-t border-gray-300 pt-6">
    <div v-for="(review, index) in reviews" :key="index">
     <div class="flex items-center space-x-3 mb-2">
      <template v-if="review.avatarUrl">
       <img
        :alt="`Reviewer avatar ${review.name} with dark background and initials ${review.initials}`"
        class="w-10 h-10 rounded-full object-cover"
        :src="review.avatarUrl"
        width="40"
        height="40"
       />
      </template>
      <template v-else>
       <div
        :aria-label="`Reviewer initials ${review.initials}`"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-semibold text-sm"
       >
        {{ review.initials }}
       </div>
      </template>

      <div>
       <p class="font-bold text-gray-900 text-sm sm:text-base">{{ review.name }}</p>
       <div class="flex items-center space-x-1 text-orange-500 text-xs sm:text-sm">
        <i
         v-for="starIndex in 5"
         :key="starIndex"
         :class="getStarClass(review.rating, starIndex)"
        ></i>
        <span class="text-gray-500 font-normal ml-2">{{ review.date }}</span>
       </div>
      </div>
      <button aria-label="More options" class="ml-auto text-gray-400 hover:text-gray-600">
       <i class="fas fa-ellipsis-v"></i>
      </button>
     </div>

     <p
      class="text-gray-800 text-xs sm:text-sm leading-relaxed mb-3"
      v-if="!review.showMore && review.text.length > 150"
     >
      {{ review.text.slice(0, 150) }}...
      <button
       class="font-semibold text-xs sm:text-sm text-gray-900"
       @click="review.showMore = true"
      >
       Show more
      </button>
     </p>

     <p
      class="text-gray-800 text-xs sm:text-sm leading-relaxed mb-3"
      v-else
     >
      {{ review.text }}
      <button
       v-if="review.text.length > 150"
       class="font-semibold text-xs sm:text-sm text-gray-900"
       @click="review.showMore = false"
      >
       Show less
      </button>
     </p>

     <div class="flex items-center space-x-3 text-gray-500 text-xs sm:text-sm">
      <span>Helpful?</span>
      <button aria-label="Like" class="hover:text-gray-700" @click="likeReview(index)">
       <i class="far fa-thumbs-up"></i>
      </button>
      <button aria-label="Dislike" class="hover:text-gray-700" @click="dislikeReview(index)">
       <i class="far fa-thumbs-down"></i>
      </button>
     </div>
    </div>
   </div>

   <button
    class="mt-6 px-5 py-2 border border-purple-700 text-purple-700 font-semibold rounded-md text-sm hover:bg-purple-700 hover:text-white transition-colors"
    @click="showAllReviews = !showAllReviews"
   >
    {{ showAllReviews ? 'Hide reviews' : 'Show all reviews' }}
   </button>
  </div>
 </div>
</template>

<script>
export default {
 data() {
    return {
     courseRating: 4.7,
     totalRatings: 50,
     showAllReviews: false,
     reviews: [
        {
         initials: "RA",
         name: "Ravi A.",
         rating: 4.5,
         date: "2 years ago",
         text: "Elementary explanation of using Coinbase. Probably the most annoying thing is that all the \"downloadable\" resources refer to pseudo bonuses or referrals, which I find quite unpleasant.",
         avatarUrl: null,
         showMore: false,
        },
        {
         initials: "AS",
         name: "Anjali S.",
         rating: 5,
         date: "3 years ago",
         text: "Very good explanation, I already had a good knowledge, so it was deepened and always handy for a refresher.",
         avatarUrl: null,
         showMore: false,
        },
        {
         initials: "VK",
         name: "Vikram K.",
         rating: 5,
         date: "3 years ago",
         text: "I was already familiar with using Coinbase, but a refresher is always helpful.",
         avatarUrl: null,
         showMore: false,
        },
        {
         initials: "IG",
         name: "Ishaan G.",
         rating: 5,
         date: "3 years ago",
         text: "Very positive, also having COINBASE as an exchange, it made me realize that in terms of fees, it's not very convenient. The discussion about the vault was interesting, I think the topic of...",
         avatarUrl: "https://storage.googleapis.com/a1aa/image/4fcd2997-dbad-4c73-9ef0-a73dbe12d814.jpg",
         showMore: false,
        },
     ],
    };
 },
 methods: {
  getStarClass(rating, starIndex) {
   // rating can have halves, e.g. 4.5
   if (rating >= starIndex) return "fas fa-star";
   if (rating + 0.5 >= starIndex) return "fas fa-star-half-alt";
   return "far fa-star";
  },
  likeReview(index) {
   // Add your logic here
   alert(`Liked review by ${this.reviews[index].name}`);
  },
  dislikeReview(index) {
   // Add your logic here
   alert(`Disliked review by ${this.reviews[index].name}`);
  },
 },
};
</script>

<style scoped>
/* You can add scoped styles if needed */
</style>
