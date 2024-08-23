<template>
    <div class="py-5 text-bg-dark">
        <div class="container">
            <h1 class="text-center mb-5">Our Services</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                <div class="col" v-for="(service, index) in services" :key="index">
                    <div class="card h-100 border-0 text-bg-dark" @mouseenter="hover(index)"
                        @mouseleave="unhover(index)">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-center">{{ service.title }}</h5>
                            <div class="text-center mb-3">
                                <img :src="service.icon" alt="Service Icon" style="height: 120px;">
                            </div>
                            <p class="card-text flex-grow-1">{{ service.description }}</p>
                            <p class="fw-bold mt-auto">READ MORE <i class="bi bi-chevron-double-right"></i></p>
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
            "services": [
                {
                    "title": "Ap-3 Grease Report",
                    "description": "AP-3 Grease is a high-performance grease known for its superior lubrication properties. It is ideal for automotive and industrial applications, providing excellent resistance to water and corrosion.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Ap-3 Grease Test Report",
                    "description": "The AP-3 Grease Test Report details the comprehensive testing and performance metrics of AP-3 grease, ensuring its reliability in various industrial and automotive applications.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Crusher Grease 2",
                    "description": "Crusher Grease 2 is a high-performance grease designed for use in heavy-duty machinery. It offers excellent protection against extreme pressure and is ideal for use in crushers and other industrial equipment.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Crusher Grease Test Report",
                    "description": "The Crusher Grease Test Report provides detailed analysis and performance evaluations of Crusher Grease, highlighting its ability to withstand high pressures and protect machinery components.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Ep2 Special Grease 2",
                    "description": "EP2 Special Grease 2 is a versatile, multipurpose grease fortified with extreme pressure additives. It offers excellent protection against wear, rust, and corrosion, making it suitable for a wide range of applications.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Ep2 Special Grease Test Report",
                    "description": "The EP2 Special Grease Test Report outlines the testing results and confirms the grease's suitability for applications requiring high-load carrying capacity and durability.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Lithium Red Gel Test Report",
                    "description": "The Lithium Red Gel Test Report provides insights into the performance of lithium-based red gel grease, known for its superior lubricating properties and resistance to water washout.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Mp3 Grease",
                    "description": "MP3 Grease is a premium quality multi-purpose grease designed to provide excellent lubrication under various operating conditions, offering enhanced protection against rust and corrosion.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Sparkle Grease Test Report",
                    "description": "The Sparkle Grease Test Report details the performance characteristics of Sparkle Grease, known for its extreme pressure properties and ability to protect equipment under harsh conditions.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Hv 54 Grease",
                    "description": "HV 54 Grease is a high viscosity grease formulated for use in heavy-duty industrial applications. It provides exceptional protection under high loads and extreme pressure conditions.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Gs-270 Grease",
                    "description": "GS-270 Grease is a high-performance grease that offers excellent resistance to oxidation and thermal degradation. It is suitable for use in a variety of industrial and automotive applications.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Gs-Lm-180 Grease",
                    "description": "GS-LM-180 Grease is a lithium-based grease designed for heavy-duty applications. It provides outstanding protection against wear and corrosion, ensuring the longevity of machinery components.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                },
                {
                    "title": "Sil-88 Compound",
                    "description": "Sil-88 Compound is a premium silicone-based grease that offers excellent lubrication and protection in high-temperature environments. It is ideal for use in bearings and other high-stress components.",
                    "icon": "https://clgoilindia.com/demo/assets/images/resource/oil-01.png"
                }
            ]

        };
    },
    methods: {
        hover(index) {
            this.services[index].isHovered = true;
        },
        unhover(index) {
            this.services[index].isHovered = false;
        }
    }
};
</script>

<style scoped></style>