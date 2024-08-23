<template>
    <div class="py-5 text-bg-dark">
        <div class="container">
            <h1 class="text-center mb-5">Our Services</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">
                <div class="col" v-for="(service, index) in services" :key="index">
                    <div class="card h-100 border-0 text-bg-dark" @mouseenter="hover(index)" @mouseleave="unhover(index)">
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
            services: [
                {
                    title: "Ap-3 Grease Report",
                    description: "We are engaged in offering a wide range of Ap-3 Grease Report to our clients. Our firm handles a large range of oil, lubricant and grease for automotive and industrial sectors.",
                    icon: "https://clgoilindia.com/demo/assets/images/resource/oil-01.png",
                    isHovered: false
                },
                {
                    title: "Crusher Grease",
                    description: "Crusher Greases are high performance greases formulated with highly refined base oil & fortified with performance additives to give additional Extreme Pressure (EP) properties.",
                    icon: "https://clgoilindia.com/demo/assets/images/resource/oil-01.png",
                    isHovered: false
                },
                {
                    title: "EP2 Special Grease",
                    description: "EP2 Special Grease is a multipurpose grease consisting of a complex mixture of soaps and graphite exhibiting anti-friction, anti-rust, and anti-wear properties.",
                    icon: "https://clgoilindia.com/demo/assets/images/resource/oil-01.png",
                    isHovered: false
                },
                {
                    title: "Mp3 Grease",
                    description: "We are engaged in offering Auto Shakti Mp3 Grease to our clients. We are engaged in offering a wide range of good Quality to our clients. Our range of all products.",
                    icon: "https://clgoilindia.com/demo/assets/images/resource/oil-01.png",
                    isHovered: false
                },
                {
                    title: "Crusher Grease",
                    description: "Crusher Greases are high performance greases formulated with highly refined base oil & fortified with performance additives to give additional Extreme Pressure (EP) properties.",
                    icon: "https://clgoilindia.com/demo/assets/images/resource/oil-01.png",
                    isHovered: false
                },
                {
                    title: "Sparkle Grease",
                    description: "Sparkle Grease it provides excellent lubrication and protection to the bearing parts over a wide temperature & pressure range, under normal as well as adverse mechanical conditions.",
                    icon: "https://clgoilindia.com/demo/assets/images/resource/oil-01.png",
                    isHovered: false
                },
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

<style scoped>
 
</style>