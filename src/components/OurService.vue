<template>
    <div class="container my-5">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4 d-flex align-items-center">
            <div class="col my-0" v-for="(fair, index) in packages" :key="index">
                <router-link :to="'/trade-detail/' + fair.sid"
                    class="text-decoration-none my-1 card border position-relative rounded-0 overflow-hidden">
                    <div class="card-img-container">
                        <img :src="fair.image" class="card-img-top rounded-0" alt="..."
                            style="object-fit: fill;height: 150px;">

                    </div>
                    <div class="card-body p-2">
                        <div class="d-flex justify-content-center align-items-center fw-bold text-ellipsis2 text-center small"
                            style="min-height: 50px">{{ fair.title }}</div>
                        <p class="small my-0 text-ellipsis2">{{ fair.date }}</p>

                        <div class="d-flex justify-content-around align-items-center mt-2 overflow-x-scroll"
                            id="scroll">
                            <div class="d-flex flex-column justify-content-center align-items-center "
                                v-for="(icon, index) in fair.icons" :key="index">
                                <img :src="icon.image" :alt="icon.name"
                                    style="width:16px; height: 16px;object-fit: contain;">
                                <small class="text-capitalize" style="font-size: 9px">{{ icon.name }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute text-center start-0 ms-0" style="top: 0px;">
                        <span class="text-dark  p-1 pt-0 rounded-end-3"
                            style="background-color:rgba(255, 206, 86, 1); border:1px solid rgba(255, 162, 0, 1) !important;">₹
                            {{ fair.price }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TradeFair",
    data() {
        return {
            packages: [
                {
                    id: 1,
                    title: "SIGN & LED China 2024",
                    package: 'flight services',
                    sid: "SIGN-&-LED-China-2024",
                    date: "19-21 Sept 2024",
                    country: "USA",
                    price: "1,09,000",
                    image: "/img/services/1.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 2,
                    title: "RubberTech China 2024",
                    sid: "RubberTech-China-2024",
                    package: 'flight services',
                    date: "19-21 Sept 2024",
                    country: "India",
                    price: "1,09,000",
                    image: "/img/services/2.png",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 3,
                    title: "Wire & Tube China 2024",
                    sid: "Wire-&-Tube-China-2024",
                    package: 'educational tour',
                    date: "25-28 Sept 2024",
                    country: "Japan",
                    price: "1,20,000",
                    image: "/img/services/3.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 4,
                    title: "CPHI Milan 2024",
                    sid: "CPHI-Milan-2024",
                    package: 'honeymoon tour',
                    date: "8-10 Oct 2024",
                    country: "France",
                    price: "1,13,000",
                    image: "/img/services/4.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 5,
                    title: "CMEF China 2024",
                    sid: "CMEF-China-2024",
                    package: 'visa services',
                    date: "12-15 Oct 2024",
                    country: "Germany",
                    price: "1,00,000",
                    image: "/img/services/1.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 6,
                    title: "ITMA ASIA & CITME 2024",
                    sid: "ITMA-ASIA-&-CITME-2024",
                    package: 'other services',
                    date: "14-18 Oct 2024",
                    country: "USA",
                    price: "1,06,000",
                    image: "/img/services/2.png",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 7,
                    title: "Canton Fair China 2024",
                    sid: "Canton-Fair-China-2024",
                    package: 'domestic tour',
                    date: "15-19 23-27 Oct 2024",
                    price: "1,15,000",
                    country: "India",
                    image: "/img/services/3.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 8,
                    title: "Fenestration Bau 2024",
                    sid: "Fenestration-Bau-2024",
                    package: 'international tour',
                    date: "16-19 Oct 2024",
                    price: "1,07,000",
                    country: "Germany",
                    image: "/img/services/4.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 9,
                    title: "Glasstec Dusseldorf 2024",
                    sid: "Glasstec-Dusseldorf-2024",
                    package: 'trade fair',
                    date: "22-24 Oct 2024",
                    price: "1,06,000",
                    country: "USA",
                    image: "/img/services/1.jpg",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
                {
                    id: 10,
                    title: "Medica Düsseldorf 2024",
                    sid: "Medica-Düsseldorf-2024",
                    package: 'trade fair',
                    date: "10-15 10-17 Nov 2024",
                    price: " 2,10,000",
                    country: "France",
                    image: "/img/services/2.png",
                    icons: [
                        { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
                        { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
                        { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
                        { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
                        { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
                    ],
                },
            ],
        }
    },
    computed: {
        trades() {
            return this.$store.getters.getPackage;
        }
    },
    methods: {
        enquiry(fair) {
            console.log(fair.title)
            const phoneNumber = '918318599577';
            const message = `Hello, I'm interested in ${fair.title}. Please confirm`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        },
    }
}
</script>

<style scoped>
.card-img-container {
    overflow: hidden;
    /* height: 200px; */
}

.card-img-top {
    transition: transform 0.3s ease;
}

.card:hover .card-img-top {
    transform: scale(1.1);
}
</style>
