<template>
    <div class="banner-container">
        <img src="/img/productBanner.jpg" alt="Product Banner" class="banner-image">
        <div class="overlay">
            <h1 class="banner-title">{{ pageName }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     title: {
    //         type: String,
    //         required: true
    //     }
    // },
    data() {
        return {
            pageName: ''
        };
    },
    mounted() {
        let pageName = this.$route.path.split('/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
    },
    // mounted() {
    //     // Get the full path from the route
    //     let path = this.$route.path;

    //     // Check if the route has a productId param
    //     let productId = this.$route.params.productId;

    //     if (productId) {
    //         // If productId exists, get the part of the path before productId
    //         // Assume the format of the path is "/grease-list/:productId"
    //         let pathParts = path.split('/');
    //         this.pageName = pathParts[pathParts.length - 2]; // This will get "grease-list"
    //     } else {
    //         // If no productId exists, use the last segment of the path
    //         let pageName = path.split('/').pop();
    //         this.pageName = pageName.replace(/-/g, ' ');
    //     }
    // }
};
</script>

<style scoped>
.banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-third);
    opacity: 90%;
    /* Opacity with transparency */
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-title {
    font-size: 4rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    /* Improved readability */
}
</style>