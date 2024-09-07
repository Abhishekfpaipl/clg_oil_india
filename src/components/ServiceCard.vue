<template>
    <div class="py-5 text-bg-white">
        <div class="container">
            <p class="text-center text-uppercase mb-0">{{ title }}</p>
            <h1 class="text-center text-uppercase mb-5">{{ subtitle }}</h1>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                <div class="col" v-for="(service, index) in products" :key="index">
                    <router-link :to="service.route + service.id"
                        class="card text-decoration-none card h-100 border text-bg-light">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-center">{{ service.title }}</h5>
                            <div class="text-center mb-3">
                                <img :src="service.icon" alt="Service Icon" style="height: 120px;">
                            </div>
                            <p class="card-text flex-grow-1">{{ service.description }}</p>
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