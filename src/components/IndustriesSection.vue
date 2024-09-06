<template>
    <div class="container my-5">
        <p class="text-center text-uppercase mb-0">We serve</p>
        <h1 class="text-center mb-5 text-uppercase">Industries</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div class="col" v-for="(category, index) in categories" :key="index">
                <router-link to="/product-list/123" class="card text-decoration-none">
                    <p class="text-center card-header fs-4">
                        <img v-if="category.img" :src="category.img" style="width: 30px;" alt="">
                        <i v-else class="bi bi-globe"></i>
                    </p>
                    <div class="card-body text-center">
                        <p class="card-text text-capitalize my-1 fw-bold">{{ category.name }}</p>
                        <p v-if="category.description" class="card-text text-capitalize my-1  text-ellipsis3">{{ category.description }}
                        </p>
                        <p v-else class="card-text text-capitalize my-1  text-ellipsis3">Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit.
                            Alias, quae!</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "IndustriesSection",
    data() {
        return {
            categories: [
                {
                    name: 'Auto Assembly',
                    description: 'We make speciality lubricants for companies involved in the manufacture of motor vehicles, including most components, such as engines and bodies.'
                },
                {
                    name: 'Auto Component',
                    description: 'We make lubricants for companies involved in the manufacture of auto components such as engine parts, drive transmission & steering parts, body and chassis.'
                },
                {
                    name: 'Cement',
                    description: 'We make range of specialty lubricants made as per the needs of the cement industry which is run under extreme environment in which drives, bearings, conveyors.'
                },
                {
                    name: 'Ceramic',
                    description: 'We make range of specialty lubricants for all ceramic manufacturing where electric motors, bearings for pumps or fan motors is subjected to humid, steamy, extreme.'
                },
                {
                    name: 'Paper Mill',
                    description: 'We make range of specialty lubricants for all your pulp and paper applications including the large open gears in the pulp production and the roller bearings at the wet.'
                },
                {
                    name: 'Plastic Industry',
                    description: 'We make range of specialty lubricants for plastic production processes like injection moulding, rotational moulding, blow moulding and extrusion which are complex and.'
                },
                {
                    name: 'Steel',
                    description: 'We make range of specialty lubricants for steel industry where equipment in today’s metal manufacturing plants require specialized lubricants that perform in the harshest environments, including high temperatures, heavy loads and wet conditions there by reducing maintenance issues and increasing uptime and business profit.'
                },
                {
                    name: 'Textile',
                    description: 'We make range of specialty lubricants for textile industry where changing atmospheric humidity, temperature fluctuations and high loads are just some of the challenges affecting textile production and our products are designed for the needs of the textile industry in compliance with these requirements.'
                },
                {
                    name: 'Engineering',
                    description: 'We make range of specialty lubricants for general engineering of Industrial, Electrical and mechanical maintenance. Our products caters to gears, bearings, slides, wire ropes, nuts & bolts and other engineering applications.'
                },
                {
                    name: 'Sugar',
                    description: 'We make range of specialty lubricants for sugar industry which is adaptable to both individualised as well as centralised lubrication systems such as Sugar Crushing Mill, Cane carrier, Pumps, Centrifuge, Open Gear drives, Enclosed Gearboxes, Air compressors.'
                },
                {
                    name: 'Mining',
                    description: "We make range of specialty lubricants for mining industry where equipment's are running under extreme conditions & high loads. Our products help to mitigate wear tear and reduce the lubricant consumption by good amount."
                },
                { id: 1, img: '/img/categories/Assembly.svg', name: "Assembly" },
                { id: 2, img: '/img/categories/Automobiles.svg', name: "Automobiles" },
                // { id: 3, img: '/img/categories/Boostore.svg', name: "Boostore" },
                // { id: 4, img: '/img/categories/Business.svg', name: "Business" },
                { id: 5, img: '/img/categories/Distribution.svg', name: "Distribution" },
                // { id: 6, img: '/img/categories/Education.svg', name: "Education" },
                { id: 7, img: '/img/categories/Electronics.svg', name: "Electronics" },
                // { id: 8, img: '/img/categories/FMCG.svg', name: "FMCG" },
                { id: 9, img: '/img/categories/Footwear.svg', name: "Footwear" },
                { id: 10, img: '/img/categories/Garments.svg', name: "Garments" },
                { id: 11, img: '/img/categories/Import n Export.svg', name: "Import n Export" },
                { id: 12, img: '/img/categories/Manufacturing.svg', name: "Manufacturing" },
                // { id: 13, img: '/img/categories/Pharmaceuticals.svg', name: "Pharmaceuticals" },
                // { id: 14, img: '/img/categories/Restraunts.svg', name: "Restaurants" },
                // { id: 15, img: '/img/categories/Retail Shop.svg', name: "Retail Shop" },
                // { id: 16, img: '/img/categories/Retail.svg', name: "Retail" },
                { id: 17, img: '/img/categories/Salon.svg', name: "Salon" },
                { id: 18, img: '/img/categories/Services.svg', name: "Services" },
                // { id: 19, img: '/img/categories/Subscription.svg', name: "Subscription" },
                // { id: 20, img: '/img/categories/Supermart.svg', name: "Supermart" },
                { id: 21, img: '/img/categories/Supply Chain.svg', name: "Supply Chain" },
                { id: 22, img: '/img/categories/Textiles.svg', name: "Textiles" },
                { id: 23, img: '/img/categories/Warehouse.svg', name: "Warehouse" },

            ],
        };
    },
};
</script>