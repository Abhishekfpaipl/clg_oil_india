<template>
    <div class="container my-4">
        <div class="row">
            <!-- Left Card - Oil Recommender -->
            <div class="col-md-6 mb-3" v-observe>
                <div class="card text-white p-3 rounded-0 bg-dark card-hover">
                    <div class="background-image" style="background-image: url('https://motulindia.com/assets/images/home/oil-recommender-bg.webp');">
                        <div class="overlay"></div>
                        <div class="row no-gutters py-5">
                            <div class="col-md-6 overflow-hidden">
                                <img src="https://png.pngtree.com/png-clipart/20230820/original/pngtree-engine-oil-bottle-car-industry-picture-image_8116555.png"
                                    class="card-img hover-scale" alt="Oil Bottles"
                                    style="object-fit: contain; height: 100%;">
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
            </div>

            <!-- Right Card - Dealer Locator -->
            <div class="col-md-6 mb-3" v-observe>
                <div class="card text-white p-3 rounded-0 bg-danger card-hover">
                    <div class="background-image" style="background-image: url('/img/map.png');">
                        <div class="overlay"></div>
                        <div class="row no-gutters py-5">
                            <div class="col-md-6 d-flex flex-column justify-content-center" style="height: 290px;">
                                <div class="card-body">
                                    <h5 class="text-start">Check Dealership Availability</h5>
                                    <p class="text-start">
                                        CGL has an extensive dealer network across India. Locate your nearest one for
                                        maximum
                                        convenience.
                                    </p>
                                    <div class="d-flex justify-content-start">
                                        <router-link to="/dealer-locator" class="btn btn-dark rounded-0">Discover</router-link>
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
    name: 'OilDealerComponent',
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
    position: relative;
    height: 100%;
    width: 100%;
}

.overlay {
    background: rgba(255, 0, 0, 0.5); /* Yellow overlay with 50% opacity */
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
