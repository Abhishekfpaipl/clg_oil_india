<template>
    <div class="container my-4">
        <div class="row">
            <!-- Left Card - Oil Recommender -->
            <!-- <div class="col-md-6 mb-3" v-observe :class="imageClass('left')"> -->
            <div class="col-md-6 mb-3" v-observe>
                <div class="card text-white p-3 rounded-0 bg-dark py-5 card-hover"
                    style="background-image: url('https://motulindia.com/assets/images/home/oil-recommender-bg.webp');">
                    <div class="row no-gutters">
                        <div class="col-md-6 overflow-hidden">
                            <img src="https://png.pngtree.com/png-clipart/20230820/original/pngtree-engine-oil-bottle-car-industry-picture-image_8116555.png"
                                class="card-img hover-scale" alt="Oil Bottles" style="object-fit: contain; height: 100%;">
                        </div>
                        <div class="col-md-6 d-flex flex-column justify-content-center">
                            <div class="card-body">
                                <h5 class="text-start">Oil Recommender</h5>
                                <p class="text-start">
                                    Find the perfect motor oil solution for your vehicle and enjoy a satisfying on-road
                                    experience!
                                </p>
                                <div class="d-flex justify-content-start">
                                    <router-link to="" class="btn btn-dark rounded-0">Discover</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Card - Dealer Locator -->
            <!-- <div class="col-md-6 mb-3" v-observe :class="imageClass('right')"> -->
            <div class="col-md-6 mb-3" v-observe>
                <div class="card text-white p-3 rounded-0 bg-danger py-5 card-hover"
                    style="background-image: url('https://motulindia.com/assets/images/home/dealer-locator-bg.webp');">
                    <div class="row no-gutters">

                        <div class="col-md-6 d-flex flex-column justify-content-center" style="height: 290px;">
                            <div class="card-body">
                                <h5 class="text-start">Dealer Locator</h5>
                                <p class="text-start">
                                    CGL has an extensive dealer network across India. Locate your nearest one for
                                    maximum
                                    convenience.
                                </p>
                                <div class="d-flex justify-content-start">
                                    <router-link to="" class="btn btn-dark rounded-0">Discover</router-link>
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
    name: 'OilDealerComponent',
    // methods: {
    //     imageClass(position) {
    //         return {
    //             'before-enter-right': position === 'right',
    //             'before-enter-left': position === 'left'
    //         };
    //     },
    // }
};
</script>

<style scoped> 
.card-hover {
    overflow: hidden;
    position: relative;
}

/* Scale the image on hover */
.card-hover:hover .hover-scale {
    transform: scale(1.1);
}

/* Smooth transition for the scaling effect */
.hover-scale {
    transition: transform 0.5s ease;
}

/* Prevent text or buttons from scaling, only the image scales */
.card-hover .card-body {
    z-index: 10;
    position: relative;
}

.card-hover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.before-enter-left {
    opacity: 0;
    transform: translateX(-80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.before-enter-right {
    opacity: 0;
    transform: translateX(80px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
    opacity: 1;
    transform: translateX(0);
}
</style>
