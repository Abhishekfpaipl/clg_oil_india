<template>
    <div>
        <SectionTopBanner/>
        <div class="my-5">
            <ServiceCard :products="greases" title="LUBRICATING" subtitle="Greases" v-observe />
        </div>
        <div class="my-5">
            <ServiceCard :products="oils" title="LUBRICATING" subtitle="OILS" v-observe />
        </div>
    </div>
</template>
<script>
import ServiceCard from "@/components/ServiceCard.vue";
import SectionTopBanner from "@/components/SectionTopBanner.vue";
export default {
    name: "ProductListPage",
    components: {
        ServiceCard,
        SectionTopBanner
    },
    computed: {
        greases() {
            return this.$store.getters['product/getGreases']
        },
        oils() {
            return this.$store.getters['product/getOils']
        }
    }
}
</script>
<style lang="">

</style>