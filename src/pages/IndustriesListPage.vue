<template>
    <div>
        <div class="my-2">
            <IndustriesSection v-observe />
        </div>
    </div>
</template>
<script>
import IndustriesSection from "@/components/IndustriesSection.vue";
export default {
    name: "IndustriesListPage",
    components: {
        IndustriesSection,
    },
}
</script>
<style lang="">

</style>