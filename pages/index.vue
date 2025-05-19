<script setup>
definePageMeta({
  layout: 'default'
})

import Hero from '~/components/Hero.vue'
import CourseDetail from '~/components/CourseDetail.vue'
import CourseContent from '~/components/CourseContent.vue'
import Requirements from '~/components/Requirements.vue'
import StudentCourse from '~/components/StudentCourse.vue'
import Instructor from '~/components/Instructor.vue'
import Reviews from '~/components/Reviews.vue'
import CourseList from '~/components/CourseList.vue'
</script>

<template>
  <Hero />
  <CourseDetail />
  <CourseContent />
  <Requirements />
  <StudentCourse />
  <Instructor />
  <Reviews />
  <CourseList />
</template>
