<template>
    <div class="position-relative" style="width: 100%; overflow: hidden;">
        <img src="/img/productBanner.jpg" alt="" style="width: 100%; height: 400px; object-fit: cover;">

        <!-- Overlay -->
        <div
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); display: flex; justify-content: center; align-items: center;">
            <!-- Centered Text -->
            <h1 class="text-white text-uppercase fw-bold text-center" style="">Products / Industries</h1>
        </div>
    </div>

    <div class="py-5 text-bg-white">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                <div class="col" v-for="(service, index) in product.products" :key="index">
                    <router-link :to="'/product-detail/' + service.id" class="card text-decoration-none card h-100 border text-bg-light"
                        @mouseenter="hover(index)" @mouseleave="unhover(index)">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-center text-capitalize">{{ service.title }}</h5>
                            <div class="text-center mb-3">
                                <img :src="service.icon" alt="Service Icon" style="height: 120px;">
                            </div>
                            <p class="card-text flex-grow-1 text-ellipsis3">{{ service.description }}</p>
                            <p class="fw-bold mt-auto btn btn-dark">READ MORE <i class="bi bi-chevron-double-right"></i>
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters['product/getOil'](productId);
        },
    },
    methods: {
        hover(index) {
            this.product.products[index].isHovered = true;
        },
        unhover(index) {
            this.product.products[index].isHovered = false;
        }
    }
};
</script>

<style scoped></style>