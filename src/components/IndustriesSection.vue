<template>
    <div class="container my-5">
        <p class="text-center text-uppercase mb-0">We serve</p>
        <h1 class="text-center mb-5 text-uppercase">Industries</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div class="col" v-for="(category, index) in categories" :key="index">
                <router-link to="/product-list/123" class="card text-decoration-none">
                    <p class="text-center card-header fs-4">
                        <img v-if="category.img" :src="category.img" style="width: 30px;" alt="">
                        <i v-if="category.icon" :class="category.icon"></i>
                        <i v-if="!category.img && !category.icon" class="bi bi-globe"></i>
                    </p>
                    <div class="card-body text-center">
                        <p class="card-text text-capitalize my-1 fw-bold">{{ category.name }}</p>
                        <p v-if="category.description" class="card-text text-capitalize my-1  text-ellipsis3">{{
                            category.description }}
                        </p>
                        <p v-else class="card-text text-capitalize my-1  text-ellipsis3">Lorem ipsum dolor sit amet
                            consectetur
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
                    description: 'We make speciality lubricants for companies involved in the manufacture of motor vehicles, including most components, such as engines and bodies.',
                    icon: "bi bi-car-front-fill",
                },
                {
                    name: 'Auto Component',
                    description: 'We make lubricants for companies involved in the manufacture of auto components such as engine parts, drive transmission & steering parts, body and chassis.',
                    icon: "bi bi-speedometer2",
                },
                {
                    name: 'Cement',
                    description: 'We make range of specialty lubricants made as per the needs of the cement industry which is run under extreme environment in which drives, bearings, conveyors.',
                    icon: "bi bi-minecart",
                },
                {
                    name: 'Ceramic',
                    description: 'We make range of specialty lubricants for all ceramic manufacturing where electric motors, bearings for pumps or fan motors is subjected to humid, steamy, extreme.',
                    icon: "bi bi-cup-fill",
                },
                {
                    name: 'Paper Mill',
                    description: 'We make range of specialty lubricants for all your pulp and paper applications including the large open gears in the pulp production and the roller bearings at the wet.',
                    icon: "bi bi-book-half",
                },
                {
                    name: 'Plastic Industry',
                    description: 'We make range of specialty lubricants for plastic production processes like injection moulding, rotational moulding, blow moulding and extrusion which are complex and.',
                    icon: "bi bi-cup-straw",
                },
                {
                    name: 'Steel',
                    description: 'We make range of specialty lubricants for steel industry where equipment in today’s metal manufacturing plants require specialized lubricants that perform in the harshest environments, including high temperatures, heavy loads and wet conditions there by reducing maintenance issues and increasing uptime and business profit.',
                    icon: "bi bi-buildings",
                },
                {
                    name: 'Textile',
                    img: '/img/categories/Textiles.svg',
                    description: 'We make range of specialty lubricants for textile industry where changing atmospheric humidity, temperature fluctuations and high loads are just some of the challenges affecting textile production and our products are designed for the needs of the textile industry in compliance with these requirements.'
                },
                {
                    name: 'Engineering',
                    description: 'We make range of specialty lubricants for general engineering of Industrial, Electrical and mechanical maintenance. Our products caters to gears, bearings, slides, wire ropes, nuts & bolts and other engineering applications.',
                    icon: "bi bi-tools",
                },
                {
                    name: 'Sugar',
                    description: 'We make range of specialty lubricants for sugar industry which is adaptable to both individualised as well as centralised lubrication systems such as Sugar Crushing Mill, Cane carrier, Pumps, Centrifuge, Open Gear drives, Enclosed Gearboxes, Air compressors.',
                    icon: "bi bi-square-fill",

                },
                {
                    name: 'Mining',
                    description: "We make range of specialty lubricants for mining industry where equipment's are running under extreme conditions & high loads. Our products help to mitigate wear tear and reduce the lubricant consumption by good amount.",
                    icon: "bi bi-minecart-loaded",
                },
                {
                    "id": 1,
                    "img": "/img/categories/Assembly.svg",
                    "name": "Assembly",
                    "description": "We make range of specialty lubricants The Assembly category refers to businesses involved in assembling parts or components into finished products, typically in a production line setting."
                },
                {
                    "id": 2,
                    "img": "/img/categories/Automobiles.svg",
                    "name": "Automobiles",
                    "description": "We make range of specialty lubricants The Automobiles category includes companies and businesses related to the design, manufacturing, and sale of motor vehicles such as cars, trucks, and motorcycles."
                },
                {
                    "id": 5,
                    "img": "/img/categories/Distribution.svg",
                    "name": "Distribution",
                    "description": "We make range of specialty lubricants The Distribution category involves the movement of goods from manufacturers to retailers or end consumers, ensuring that products are available where they are needed."
                },
                {
                    "id": 7,
                    "img": "/img/categories/Electronics.svg",
                    "name": "Electronics",
                    "description": "We make range of specialty lubricants The Electronics category encompasses businesses related to the design, manufacturing, and sale of electronic devices such as computers, smartphones, and home appliances."
                },
                {
                    "id": 9,
                    "img": "/img/categories/Footwear.svg",
                    "name": "Footwear",
                    "description": "We make range of specialty lubricants The Footwear category refers to businesses involved in the design, manufacturing, and retail of shoes, sandals, boots, and other types of footwear."
                },
                {
                    "id": 10,
                    "img": "/img/categories/Garments.svg",
                    "name": "Garments",
                    "description": "We make range of specialty lubricants The Garments category covers companies involved in the design, production, and retail of clothing, including everyday wear, formal wear, and specialized apparel."
                },
                {
                    "id": 11,
                    "img": "/img/categories/Import n Export.svg",
                    "name": "Import n Export",
                    "description": "We make range of specialty lubricants The Import and Export category relates to businesses that trade goods across international borders, including companies specializing in the import or export of products."
                },
                {
                    "id": 12,
                    "img": "/img/categories/Manufacturing.svg",
                    "name": "Manufacturing",
                    "description": "We make range of specialty lubricants The Manufacturing category refers to companies involved in the production of goods using labor, machines, tools, and chemical or biological processing."
                },
                {
                    "id": 18,
                    "img": "/img/categories/Services.svg",
                    "name": "Services",
                    "description": "We make range of specialty lubricants The Services category includes businesses that offer non-tangible products, such as consulting, financial services, maintenance, and other professional services."
                },
                {
                    "id": 21,
                    "img": "/img/categories/Supply Chain.svg",
                    "name": "Supply Chain",
                    "description": "We make range of specialty lubricants The Supply Chain category involves companies responsible for the flow of goods, information, and finances through a production and distribution network from raw materials to the end consumer."
                },
                {
                    "id": 23,
                    "img": "/img/categories/Warehouse.svg",
                    "name": "Warehouse",
                    "description": "We make range of specialty lubricants The Warehouse category includes businesses that provide storage facilities for goods, ensuring the safe and organized handling of products before distribution."
                }


            ],
        };
    },
};
</script>