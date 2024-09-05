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
import ImageSection from "@/components/ImageSection.vue";
import AboutSection from "@/components/AboutSection.vue";
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
    ImageSection,
    AboutSection,
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
      oils: [
        {
          "title": "Automotive lubricating oils",
          "description": "AP-3 Grease is a high-performance grease known for its superior lubrication properties. It is ideal for automotive and industrial applications, providing excellent resistance to water and corrosion.",
          "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
        },
        {
          "title": "Industrial lubricating oils",
          "description": "The AP-3 Grease Test Report details the comprehensive testing and performance metrics of AP-3 grease, ensuring its reliability in various industrial and automotive applications.",
          "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
        },
        {
          "title": "Specification based oils",
          "description": "Crusher Grease 2 is a high-performance grease designed for use in heavy-duty machinery. It offers excellent protection against extreme pressure and is ideal for use in crushers and other industrial equipment.",
          "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
        },

      ],
    }
  },
  computed:{
    greases(){
      return this.$store.getters['product/getGreases']
    }
  }
};
</script>
