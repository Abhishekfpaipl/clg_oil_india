<template>
    <div class="container mt-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="product in products" :key="product.id">
                <ProductCard :product="product" @add-to-cart="handleAddToCart" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
    components: {
        ProductCard
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Premium Motor Oil',
                    description: 'High-performance synthetic motor oil for ultimate engine protection.',
                    image: 'https://clgoilindia.com/demo/assets/images/service/Grease-01.jpg'
                },
                {
                    id: 2,
                    name: 'Heavy-Duty Grease',
                    description: 'Long-lasting grease for industrial machinery and automotive applications.',
                    image: 'https://clgoilindia.com/demo/assets/images/service/Grease-02.jpg'
                },
                {
                    id: 2,
                    name: 'Heavy-Duty Grease',
                    description: 'Long-lasting grease for industrial machinery and automotive applications.',
                    image: 'https://clgoilindia.com/demo/assets/images/service/Grease-03.jpg'
                },
            ]
        }
    },
    methods: {
        handleAddToCart(product) {
            // Implement your cart logic here
            console.log(`Product added to cart:`, product);
        }
    }
}
</script>