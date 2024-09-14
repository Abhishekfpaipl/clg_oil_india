<template>
    <div class="container my-5">
        <h1 class="text-center text-uppercase mb-5">Testimonial </h1>
        <div class="row justify-content-center align-items-center">
            <div class="col-12">
                <div class="position-relative">
                    <div class="card border-0 shadow text-dark">
                        <div class="card-body">
                            <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                                <!-- <img :src="currentStory.image" alt="Seller" class="rounded-circle me-3" width="60"
                                    height="60"> -->
                                    
                                <div class="w-100 d-flex justify-content-between align-items-center">
                                    <button class="btn rounded-circle shadow py-2"
                                        style="background-color: var(--brand-color) !important;" @click="prevStory"><i
                                            class="bi bi-chevron-left"></i></button>
                                    <div class="">
                                        <h5 class="card-title mb-0">{{ currentStory.name }}</h5>
                                        <p class="card-text">{{ currentStory.company }}</p>
                                    </div>
                                    <button class="btn rounded-circle shadow py-2"
                                        style="background-color: var(--brand-color) !important;" @click="nextStory"><i
                                            class="bi bi-chevron-right"></i></button>
                                </div>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>{{ currentStory.quote }}</p>
                            </blockquote>
                        </div>
                    </div>
                    <!-- <div class="position-absolute top-50 translate-middle" style="left: 0%;">
                        <button class="btn rounded-circle shadow py-2"
                            style="background-color: var(--brand-color) !important;" @click="prevStory"><i
                                class="bi bi-chevron-left"></i></button>
                    </div>
                    <div class="position-absolute top-50 translate-middle" style="right: -3%;">
                        <button class="btn rounded-circle shadow py-2"
                            style="background-color: var(--brand-color) !important;" @click="nextStory"><i
                                class="bi bi-chevron-right"></i></button>
                    </div> -->
                </div>
                <div class="text-center mt-3">
                    <span v-for="(story, index) in stories" :key="index" class="dot mx-1"
                        :class="{ 'active': index === currentIndex }"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            stories: [
                {
                    name: "Arvind Patel",
                    company: "Lubritech Solutions",
                    image: "img/users/1.png",
                    quote: "With the support of CGL OIL INDIA Pvt Ltd., our grease manufacturing process has seen tremendous improvement. From optimizing production efficiency to enhancing product quality, they've played a key role in our success."
                },
                {
                    name: "Meera Joshi",
                    company: "IndoGrease Industries",
                    image: "img/users/2.png",
                    quote: "CGL OIL INDIA Pvt Ltd.'s expertise helped us streamline our production and meet stringent quality standards. Their commitment to innovation and growth has been pivotal in expanding our market reach."
                },
                {
                    name: "Rajesh Kumar",
                    company: "Precision Lubricants",
                    image: "img/users/3.png",
                    quote: "Thanks to CGL OIL INDIA Pvt Ltd., we’ve expanded our product line and improved our production output. Their hands-on approach and industry insights have significantly boosted our presence in the grease manufacturing sector."
                },
                {
                    name: "Sunita Sharma",
                    company: "Reliance Lubricants",
                    image: "img/users/4.png",
                    quote: "CGL OIL INDIA Pvt Ltd.'s solutions helped us increase our manufacturing capacity while maintaining top-notch quality. Their expert team guided us through the entire process, resulting in enhanced customer satisfaction."
                },
                {
                    name: "Sanjay Verma",
                    company: "Supreme Grease Works",
                    image: "img/users/5.png",
                    quote: "Collaborating with CGL OIL INDIA Pvt Ltd. transformed our operations. We’ve improved efficiency, reduced waste, and introduced innovative grease formulations that have set us apart in the market."
                },
                {
                    name: "Anita Desai",
                    company: "Alpha Lubricants",
                    image: "img/users/6.png",
                    quote: "CGL OIL INDIA Pvt Ltd. helped us adopt new technologies and scale up our production. Their tailored solutions were exactly what we needed to stay competitive in the grease industry."
                },
                {
                    name: "Raghav Rao",
                    company: "Duratech Lubes",
                    image: "img/users/7.png",
                    quote: "The expertise and support provided by CGL OIL INDIA Pvt Ltd. were game-changers for our company. We’ve seen significant growth in production, product diversity, and market penetration."
                },
                {
                    name: "Pooja Nair",
                    company: "Zenith Greases",
                    image: "img/users/8.png",
                    quote: "Thanks to CGL OIL INDIA Pvt Ltd.'s innovation and process improvements, our grease formulations are now among the best in the industry. Their focus on quality and performance has made a real difference."
                },
                {
                    name: "Vikas Jain",
                    company: "Fusion Lubricants",
                    image: "img/users/9.png",
                    quote: "CGL OIL INDIA Pvt Ltd.’s dedicated team worked closely with us to overcome production challenges and meet our goals. Their proactive approach has helped us expand into new markets efficiently."
                },
                {
                    name: "Manisha Gupta",
                    company: "Everglide Oils",
                    image: "img/users/10.png",
                    quote: "CGL OIL INDIA Pvt Ltd. played an essential role in upgrading our manufacturing process. Their expertise allowed us to increase output, reduce downtime, and maintain high-quality standards in our grease products."
                }
            ],
        }
    },
    computed: {
        currentStory() {
            return this.stories[this.currentIndex];
        }
    },
    methods: {
        nextStory() {
            this.currentIndex = (this.currentIndex + 1) % this.stories.length;
        },
        prevStory() {
            this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
        }
    }
}
</script>

<style scoped>
.dot {
    height: 10px;
    width: 10px;
    background-color: #000;
    border-radius: 50%;
    display: inline-block;
}

.dot.active {
    background-color: var(--brand-color);
}
</style>