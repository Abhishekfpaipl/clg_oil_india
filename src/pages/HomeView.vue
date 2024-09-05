<template>
  <div class="home">
    <div class="">
      <CarouselBanner />
    </div>
    <div class="my-2">
      <OurService />
    </div>
    <div class="my-2">
      <ImageSection />
    </div>
    <div class="my-2">
      <AboutSection />
    </div>
    <div class="my-2">
      <ServiceCard :products="greases" title="LUBRICATING GREASE" />
    </div>
    <div class="my-2">
      <ServiceCard :products="oils" title="LUBRICATING OILS" />
    </div>
    <div class="my-2">
      <TestimonialSection />
    </div> 
    <div class="my-2">
      <AutoScrolling />
    </div>
    <div class="">
      <CounterSection />
    </div>
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
import CounterSection from "@/components/CounterSection.vue"; 
import ImageSection from "@/components/ImageSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
export default {
  name: "HomeView",
  components: {
    CarouselBanner,
    OurService,
    ServiceCard,
    AutoScrolling,
    GetUpdate,
    CounterSection, 
    ImageSection,
    AboutSection,
    TestimonialSection,
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
  computed:{
    greases(){
      return this.$store.getters['product/getGreases']
    },
    oils(){
      return this.$store.getters['product/getOils']
    }
  }
};
</script>
