<template>
    <div>
        <SectionTopBanner />
        <div class="my-2">
            <IndustriesSection v-observe />
        </div>
    </div>
</template>
<script>
import IndustriesSection from "@/components/IndustriesSection.vue";
import SectionTopBanner from "@/components/SectionTopBanner.vue";
export default {
    name: "IndustriesListPage",
    components: {
        IndustriesSection,
        SectionTopBanner,
    },
}
</script>
<style lang="">

</style>