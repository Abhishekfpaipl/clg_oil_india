<template>
  <div class="home">
    <div class="">
      <CarouselBanner />
    </div>

    <div class="my-5">
      <ServiceCard :products="greases" title="LUBRICATING" subtitle="Greases" v-observe />
    </div>
    <div class="my-5">
      <ServiceCard :products="oils" title="LUBRICATING" subtitle="OILS" v-observe />
    </div>
    <div class="my-5">
      <IndustriesSection v-observe />
    </div>
    <div class="my-5">
      <OurService v-observe />
    </div>
    <div class="my-5">
      <ImageSection v-observe />
    </div>
    <div class="my-5">
      <AboutSection v-observe />
    </div>
    <div class="my-5">
      <TestimonialSection v-observe />
    </div>
    <div class="my-5">
      <AutoScrolling v-observe />
    </div>
    <!-- <div class="my-5">
      <CareerSection v-observe />
    </div> -->
    <div class="">
      <GetUpdate v-observe />
    </div>
  </div>
</template>

<script>
import CarouselBanner from "@/components/CarouselBanner.vue";
import OurService from "@/components/OurService.vue";
import ServiceCard from "@/components/ServiceCard.vue";
import AutoScrolling from "@/components/AutoScrolling.vue";
import GetUpdate from "@/components/GetUpdate.vue";
import ImageSection from "@/components/ImageSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import IndustriesSection from "@/components/IndustriesSection.vue";
// import CareerSection from "@/components/CareerSection.vue";
export default {
  name: "HomeView",
  components: {
    CarouselBanner,
    OurService,
    ServiceCard,
    AutoScrolling,
    GetUpdate,
    ImageSection,
    AboutSection,
    TestimonialSection,
    IndustriesSection,
    // CareerSection,
  },
  data() {
    return {
      whychooseUs: [
        {
          title: 'Expertise and Experience',
          icon: 'bi-headset'
        },
        {
          title: 'Personalized Service',
          icon: 'bi-thumbs-up'
        },
        {
          title: "Exclusive Offers",
          icon: 'bi-currency-ruppee'
        },
        {
          title: "Safety and Trust",
          icon: 'bi-journal'
        },
        {
          title: "Comprehensive Services",
          icon: 'bi-stars'
        },
        {
          title: "Value for Money",
          icon: 'bi-stars'
        },
        {
          title: "Sustainability and Responsibility",
          icon: 'bi-stars'
        },
        {
          title: "Unique Experiences",
          icon: 'bi-stars'
        },
        {
          title: "Technological Advantage",
          icon: 'bi-stars'
        },
        {
          title: "Flexibility and Convenience",
          icon: 'bi-stars'
        },
      ],
    }
  },
  computed: {
    greases() {
      return this.$store.getters['product/getGreases']
    },
    oils() {
      return this.$store.getters['product/getOils']
    }
  }
};
</script>
