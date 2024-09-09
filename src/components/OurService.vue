<template>
    <div class="container my-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="product in products" :key="product.id">
                <div class="card h-100">
                    <img :src="product.image" class="card-img-top" style="min-height: 300px;object-fit: cover;"
                        :alt="product.name">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Premium Motor Oil',
                    description: 'Advanced synthetic oil designed for peak engine performance and protection',
                    image: '/img/update.jpg'
                },
                {
                    id: 2,
                    name: 'Heavy-Duty Grease',
                    description: 'Durable grease formulated for industrial and automotive equipment longevity',
                    image: '/img/grease.jpg'
                },
                {
                    id: 2,
                    name: 'Industry',
                    description: 'Reliable solutions tailored for various industrial machinery and heavy-duty applications.',
                    image: '/img/industry.jpg'
                },
            ]
        }
    },
}
</script>
<style scoped>
.card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>