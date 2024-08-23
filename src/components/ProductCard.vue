<template>
    <div class="card h-100">
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart() {
            console.log(`Added ${this.product.name} to cart`);
            this.$emit('add-to-cart', this.product);
        }
    }
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