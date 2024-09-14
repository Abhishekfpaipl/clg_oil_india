<template>
    <div class="container my-4">
        <div class="row">
            <!-- Left Card - Oil Recommender -->
            <div class="col-md-6 mb-3" v-observe>
                <div class="card text-white rounded-0  card-hover" style="background-color: #F78C17 !important;">
                    <div class="background-image p-3" style="background-image: url('/img/map.png');">
                        <div class="overlay"></div>
                        <div class="row no-gutters py-5">
                            <div class="col-md-6 d-flex flex-column justify-content-end" style="height: 290px;">
                                <div class="text-white position-relative">
                                    <h5 class="text-start">Check Dealership</h5>
                                    <p class="text-start">
                                        CGL has an extensive dealer network across India.  
                                    </p>
                                    <div class="d-flex justify-content-start">
                                        <router-link to="/check-dealership" class="btn rounded-0"
                                            style="background-color: var(--bg-secondary)">Check </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Card - Dealer Locator -->
            <div class="col-md-6 mb-3" v-observe>
                <div class="card text-white  rounded-0 card-hover" style="background-color: #F78C17 !important;">
                    <div class="background-image p-3"
                        style="background-image: url('https://png.pngtree.com/png-clipart/20230820/original/pngtree-engine-oil-bottle-car-industry-picture-image_8116555.png');">
                        <div class="overlay"></div>
                        <div class="row no-gutters py-5">
                            <div class="col-md-6 d-flex flex-column justify-content-end" style="height: 290px;">
                                <div class="text-white position-relative">
                                    <h5 class="text-start">Product Recommender</h5>
                                    <p class="text-start">
                                        Find the perfect motor oil solution for your vehicle and enjoy a satisfying
                                        on-road
                                        experience!
                                    </p>
                                    <div class="d-flex justify-content-start">
                                        <router-link to="/product-recommender" class="btn rounded-0"
                                            style="background-color: var(--bg-secondary)">Discover</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageSection',
    // mounted() {
    //     const image = this.$refs.motorbikeImage;
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     image.classList.add("scale-up");
    //                 }
    //             });
    //         },
    //         { threshold: [0.1] }
    //     );

    //     observer.observe(image);
    // },
};
</script>

<style scoped>
.card-hover {
    position: relative;
    overflow: hidden;
}

.background-image {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 100%;
    width: 100%;
}

.overlay {
    background: var(--bg-third);
    opacity: 70%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.card-body {
    position: relative;
    z-index: 10;
}

.card-hover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Scale the image on hover */
.card-hover:hover .hover-scale {
    transform: scale(1.1);
}

/* Smooth transition for the scaling effect */
.hover-scale {
    transition: transform 0.5s ease;
}


/* Initial scale set to 0 */
.scale-0 {
    transform: scale(0);
    transition: transform 1.5s ease-in-out;
    /* Smooth scaling transition */
}

/* This class will be added when the image is in view */
.scale-up {
    transform: scale(1);
}
</style>
