<template>
    <div>
        <div class="my-2">
            <ServiceCard :products="greases" title="LUBRICATING" subtitle="Greases" v-observe />
        </div>
        <div class="my-2">
            <ServiceCard :products="oils" title="LUBRICATING" subtitle="OILS" v-observe />
        </div>
    </div>
</template>
<script>
import ServiceCard from "@/components/ServiceCard.vue";
export default {
    name: "ProductListPage",
    components: {
        ServiceCard,
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