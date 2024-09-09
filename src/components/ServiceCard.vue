<template>
    <div class="py-5 text-bg-white">
        <div class="container">
            <p class="text-center text-uppercase mb-0">{{ title }}</p>
            <h1 class="text-center text-uppercase mb-5">{{ subtitle }}</h1>

            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 mt-5 pt-3">
                <div class="col mb-5 pb-2" v-for="(service, index) in products" :key="index">
                    <router-link :to="service.route + service.sid"
                        class="card text-decoration-none card h-100 border"  style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
                        <div class="card-body d-flex flex-column">
                            <div class="text-center mb-3" style="margin-top: -80px;">
                                <img :src="service.icon" alt="Service Icon" style="height: 120px;">
                            </div>
                            <h5 class="card-title text-center">{{ service.title }}</h5>
                            <p class="card-text flex-grow-1 smaller text-ellipsis3">{{ service.description }}</p>
                        </div>
                        <div class="card-footer p-0">
                            <button class="w-100 rounded-top-0 btn btn-sm" style="background-color: var(--bg-secondary)">MORE <i
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
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    },
};
</script>