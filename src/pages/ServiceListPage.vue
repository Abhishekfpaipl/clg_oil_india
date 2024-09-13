<template>
    <SectionTopBanner />
    <div class="container py-5">
        <div class=" mb-5">
            <h1 class="text-start text-capitalize">Services</h1>
            <p class="text-start">At CGL Oil India, our team of expert 'Grease Chefs,' 'Lube Technologists,' and
                'Application Specialists'
                provides a holistic, client-centric approach to lubrication solutions. From formulation to final product
                delivery and beyond, we ensure your needs are met with precision and excellence.
            </p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(industry, index) in industries" :key="index" class="col mb-5">
                <div class="card rounded-0 h-100 position-relative">
                    <div class="position-absolute bg-white shadow-sm ms-3" style="margin-top: -10%; width: 100px; height:100px;">
                        <img src="/img/services-icon.png" alt="" style="height: 100%;width: 100%;">
                        <!-- <i class="bi bi-droplet-fill text-dark fs-1"></i> -->
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
import SectionTopBanner from "@/components/SectionTopBanner.vue"
export default {
    components: {
        SectionTopBanner
    },
    data() {
        return {
            industries: [
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