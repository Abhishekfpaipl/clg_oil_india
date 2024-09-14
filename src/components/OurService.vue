<template>
    <div class="container my-5">
        <h1 class="text-center mb-5">Decades of Experience</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="product in products" :key="product.id">
                <div class="card rounded-3 shadow-sm">
                    <div class="image-wrapper">
                        <img :src="product.image" class="rounded-3" alt="Card image" style="">
                    </div>
                    <div class="content px-3 mt-4">
                        <h3 class="mt-4 pt-2">{{ product.name }}</h3>
                        <p v-if="product.description" class="text-ellipsis2">{{ product.description }}</p>
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
                    image: '/img/oilsplash.jpeg'
                },
                {
                    id: 2,
                    name: 'Heavy-Duty Grease',
                    description: 'Durable grease formulated for industrial and automotive equipment longevity',
                    image: '/img/grease.jpg'
                },
                {
                    id: 3,
                    name: 'Industry Solutions',
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
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column; 
    transition: 0.3s ease-in-out;
    text-align: center;
    overflow: hidden;
}

.image-wrapper {
    width: 100%;
    height: 200px;
}

.image-wrapper img {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* border-radius: 15px; */
}

.content {
    max-height: 0;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.3s ease-in-out;
}

.card:hover .content {
    max-height: 100px; /* Adjust this value based on content size */
    visibility: visible;
    opacity: 1;
}
</style>

