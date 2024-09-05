<template>
    <div class="container py-5">
        <div class=" mb-5">
            <h1 class="text-start text-capitalize">Products</h1>
            <p class="text-start">At CGL Oil India, our team of expert 'Grease Chefs,' 'Lube Technologists,' and 'Application Specialists'
                provides a holistic, client-centric approach to lubrication solutions. From formulation to final product
                delivery and beyond, we ensure your needs are met with precision and excellence.
            </p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(industry, index) in industries" :key="index" class="col mb-5">
                <div class="card rounded-0 h-100 position-relative">
                    <div class="position-absolute bg-warning p-3 px-4 ms-3" style="margin-top: -10%;">
                        <i class="bi bi-droplet-fill text-dark fs-1"></i>
                    </div>
                    <div class="card-body mt-5">
                        <h5 class="text-start">{{ industry.title }}</h5>
                        <p class="text-start text-ellipsis4">{{ industry.description }}</p>
                        <div class="d-flex justify-content-start">
                            <router-link to="" class="btn btn-outline-primary">Learn More</router-link>
                        </div>
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
            industries: [
                {
                    title: 'Auto Assembly',
                    description: 'We make speciality lubricants for companies involved in the manufacture of motor vehicles, including most components, such as engines and bodies.'
                },
                {
                    title: 'Auto Component',
                    description: 'We make lubricants for companies involved in the manufacture of auto components such as engine parts, drive transmission & steering parts, body and chassis.'
                },
                {
                    title: 'Cement',
                    description: 'We make range of specialty lubricants made as per the needs of the cement industry which is run under extreme environment in which drives, bearings, conveyors.'
                },
                {
                    title: 'Ceramic',
                    description: 'We make range of specialty lubricants for all ceramic manufacturing where electric motors, bearings for pumps or fan motors is subjected to humid, steamy, extreme.'
                },
                {
                    title: 'Paper Mill',
                    description: 'We make range of specialty lubricants for all your pulp and paper applications including the large open gears in the pulp production and the roller bearings at the wet.'
                },
                {
                    title: 'Plastic Industry',
                    description: 'We make range of specialty lubricants for plastic production processes like injection moulding, rotational moulding, blow moulding and extrusion which are complex and.'
                },
                {
                    title: 'Steel',
                    description: 'We make range of specialty lubricants for steel industry where equipment in today’s metal manufacturing plants require specialized lubricants that perform in the harshest environments, including high temperatures, heavy loads and wet conditions there by reducing maintenance issues and increasing uptime and business profit.'
                },
                {
                    title: 'Textile',
                    description: 'We make range of specialty lubricants for textile industry where changing atmospheric humidity, temperature fluctuations and high loads are just some of the challenges affecting textile production and our products are designed for the needs of the textile industry in compliance with these requirements.'
                },
                {
                    title: 'Engineering',
                    description: 'We make range of specialty lubricants for general engineering of Industrial, Electrical and mechanical maintenance. Our products caters to gears, bearings, slides, wire ropes, nuts & bolts and other engineering applications.'
                },
                {
                    title: 'Sugar',
                    description: 'We make range of specialty lubricants for sugar industry which is adaptable to both individualised as well as centralised lubrication systems such as Sugar Crushing Mill, Cane carrier, Pumps, Centrifuge, Open Gear drives, Enclosed Gearboxes, Air compressors.'
                },
                {
                    title: 'Mining',
                    description: "We make range of specialty lubricants for mining industry where equipment's are running under extreme conditions & high loads. Our products help to mitigate wear tear and reduce the lubricant consumption by good amount."
                }, 
                {
                    title: 'Tailored Grease Recommendations',
                    description: "Our seasoned technical experts are committed to recommending the most effective grease solutions for your machinery. We offer personalized, high-performance options to optimize your equipment’s efficiency and longevity."
                }, 
                {
                    title: 'Custom Trial Formulation',
                    description: "CGL OIl India excels in developing bespoke trial schemes for the evaluation of new greases across diverse machinery types. Our support is designed to ensure that your trials are thorough and yield actionable insights."
                }, 
                {
                    title: 'Expert Technical Support',
                    description: "Should you have any queries regarding our lubricants and greases, our dedicated technical team is readily available to provide comprehensive support and guidance. We aim to address all your concerns with prompt and expert advice."
                }, 
                {
                    title: 'Advanced Training Programs',
                    description: "Our state-of-the-art Training Centre offers specialized training programs for your Sales, Technical, and Marketing teams. We equip your personnel with in-depth knowledge of our products and services, enhancing their expertise and effectiveness in the Indian automotive industry."
                }, 
                {
                    title: 'Field Trial Planning and Execution',
                    description: "Our application experts are adept at planning and executing meticulous field trials. We work closely with you to ensure that trials are conducted effectively, providing valuable data for optimized performance."
                },
                {
                    title: 'Used Grease Testing, Analysis, & Condition Monitoring',
                    description: "CGL OIl India provides advanced condition monitoring services through regular sample testing of used greases and machinery. This proactive approach helps maintain peak operational performance and anticipates potential issues."
                },
                {
                    title: 'Application Engineering Support',
                    description: "We offer tailored application engineering support, working directly with your design and engineering teams. Our expertise is geared towards meeting your specific application and process requirements in the automotive sector."
                },
                {
                    title: 'Accurate Sample Testing',
                    description: "Our NABL-accredited laboratory offers precise testing services for lubricants and greases. We ensure that all testing procedures adhere to the highest standards, providing reliable and accurate results."
                },
                {
                    title: 'Innovative Product Development',
                    description: "Discover our latest innovations in grease technology, developed to meet the evolving needs of the Indian automotive industry. We are excited to introduce cutting-edge products designed to enhance performance and efficiency."
                },
                {
                    title: 'Comprehensive Consultancy Services',
                    description: "CGL OIl India provides expert consultancy for setting up or expanding your grease manufacturing operations. Our comprehensive guidance covers all aspects of plant development, helping you achieve your strategic objectives."
                },
                {
                    title: 'Educational and Faculty Support',
                    description: "Our highly experienced technical experts are available to offer faculty support to business schools, technical institutions, and educational programs focused on grease manufacturing. We also provide training platforms for research and development activities in the field of lubrication technology."
                },
                
            ] 
        };
    }, 
};
</script>

<style scoped>
.card-header i {
    font-size: 1.5rem;
}

.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}
</style>