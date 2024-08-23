<template>
  <div class="home">
    <div class="">
      <CarouselBanner />
    </div>
    <div class="my-2">
      <OurService />
    </div>
    <div class="my-2">
      <ServiceCard />
    </div>
    <div class="my-2">
      <OurProducts />
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
import OurProducts from "@/components/OurProducts.vue";
export default {
  name: "HomeView",
  components: {
    CarouselBanner,
    OurService,
    ServiceCard,
    AutoScrolling,
    GetUpdate,
    CounterSection,
    OurProducts,
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
  }
};
</script>
