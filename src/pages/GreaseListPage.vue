<template>
    <SectionTopBanner />
    <div class="py-5 text-bg-white" v-observe>
        <div class="container">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 mt-5 pt-3">
                <div class="col mb-5 pb-2" v-for="(service, index) in product.products" :key="index">
                    <router-link
                        :to="{ name: 'ProductDetailPage', params: { productId: product.sid, subproductId: service.sid } }"
                        class="card text-decoration-none card h-100 border"
                        style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;" v-observe>
                        <div class="card-body d-flex flex-column">
                            <div class="text-center mb-3" style="margin-top: -80px;">
                                <img :src="service.icon" alt="Service Icon" style="height: 120px;">
                            </div>
                            <h5 class="card-title text-center">{{ service.title }}</h5>
                            <p class="card-text flex-grow-1 smaller text-ellipsis3">{{ service.description }}</p>
                        </div>
                        <div class="card-footer p-0">
                            <button class="w-100 rounded-top-0 btn btn-sm"
                                style="background-color: var(--bg-secondary)">MORE <i
                                    class="bi bi-chevron-double-right"></i>
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    components: {
        SectionTopBanner
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters['product/getGrease'](productId);
        },
    },
};
</script>

<style scoped></style>