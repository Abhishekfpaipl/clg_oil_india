<template>
    <div>
        <SectionTopBanner />
        <div class="">
            <!-- <div class="my-3 row" v-for="(text, index) in texts" :key="index">
                <div>
                    <p class="text-start fs-1 fw-bold p-2 bg-warning text-capitalize">{{ text.heading }}</p>
                    <div class="row">
                        <p class="text-start" :class="{ 'col-md-6': text.image, 'col-12': !text.image }">{{ text.text }}
                        </p>
                        <div v-if="text.image" class="col-md-6">
                            <img :src="text.image" :alt="text.heading" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="container my-3 pt-4">
                <p class="text-center">Our Equipment Builder Partnership fosters a collaborative and close-knit
                    relationship with engineering specialists across diverse industry sectors. These dynamic
                    partnerships are not just transactional—they drive innovation and lead to the development of
                    cutting-edge lubrication products tailored to the evolving needs of our clients. Just as Original
                    Equipment Manufacturers (OEMs) rely on us to provide unparalleled lubrication expertise throughout
                    the entire life cycle of their equipment—from design and testing to operation and maintenance—we, in
                    turn, depend on their valuable insights and feedback. This collaboration allows us to continuously
                    improve and refine our lubricants and related services to ensure they meet the highest standards of
                    performance, efficiency, and reliability.By working hand-in-hand with OEMs, we stay ahead of
                    emerging trends and challenges, enabling us to offer solutions that not only optimize the
                    performance of today’s equipment but also anticipate the future needs of the industries we serve.
                    Our mutual commitment to excellence and innovation ensures that together, we deliver products and
                    services that maximize equipment uptime, enhance productivity, and reduce operational costs,
                    ultimately driving long-term success for our partners.
                </p>

            </div>
            <div class="d-none d-md-flex justify-content-center align-items-center gap-3">
                <button class="btn w-25" style="border:1px solid rgba(255, 162, 0, 1) !important;" @click="share">
                    <i class="bi bi-share me-2"></i>
                    <span>Share</span>
                </button>
                <button class="btn d-flex justify-content-center align-items-center w-25"
                    style="background-color:rgba(255, 206, 86, 1); border:1px solid rgba(255, 162, 0, 1) !important;"
                    data-bs-toggle="modal" data-bs-target="#enquirymodal"><span> Enquiry </span><i
                        class="bi bi-arrow-right ms-2"></i>
                </button>
            </div>
            <div class="position-fixed bottom-0 w-100 btn-group d-flex d-md-none" style="z-index:10">
                <button class="btn btn-dark w-25 rounded-0" @click="share"><i class="bi bi-share fs-2"></i></button>
                <button class="btn btn-warning w-75 rounded-0 d-flex align-items-center justify-content-between"
                    data-bs-toggle="modal" data-bs-target="#enquirymodal">
                    <span class="ms-3 fs-5 text-uppercase">Enquiry Now</span>
                    <i class="bi bi-arrow-right ms-2 fs-1"></i>
                </button>
            </div>
            <div class="container my-5">
                <h1 class="text-center mb-5 fw-bold">Unlock Strategic Resources to Elevate Your Brand</h1>
                <div class="row">
                    <div v-for="(step, index) in steps" :key="index" class="col-md-3 mb-4">
                        <div class="d-flex gap-2 align-items-center border rounded-5 border-start-0"
                            style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;border-radius: 3rem !important;">
                            <div class="bg-dark text-warning border d-flex justify-content-center align-items-center fs-1 rounded-circle"
                                style="min-width: 80px; height: 80px;">{{ index + 1 }}</div>
                            <p class="text-start mb-0 small">{{ step.title }}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <p class="text-center fs-1 fw-bold p-2  text-capitalize">What is genuine oil?</p>
                <p class="text-start">Genuine Oil is a highly specialized, tailor-made lubricant, meticulously developed
                    after extensive field trials to meet the precise requirements of specific engines. It is engineered
                    to deliver exceptional performance in areas such as reduced engine component wear, extended engine
                    rebuild life, and prolonged drain service intervals, ensuring superior protection and efficiency.
                </p>

            </div>


            <div class="container">
                <p class="text-center fs-1 fw-bold p-2   text-capitalize">Why Genuine oil?</p>
                <div class="row">
                    <p class="text-start col-md-6">
                        A common misconception is that all oils are essentially the same. While they may look
                        similar, their performance capabilities are vastly different. The true value of oil lies in
                        its ability to protect and optimize engine performance, and this is where Genuine Oil stands
                        out. Typically, the performance characteristics of engine oils are indicated on the
                        container through standards like API service categories (e.g., API CC/SC, CD/SF, CF4/SF,
                        CH4/SJ) or specifications such as IS E-DL1, E-DL3, E-DL5, and others. These labels refer to
                        national and international standards that most oil marketers follow, providing a general
                        indication of the oil's performance capabilities. However, Genuine Oil is formulated to
                        exceed these basic specifications. It is tailored to meet the specific needs of particular
                        engines and equipment, often offering enhanced protection, reduced wear, extended service
                        intervals, and optimized performance that generic oils may not provide. This precision in
                        formulation is the key reason why Original Equipment Manufacturers (OEMs) recommend Genuine
                        Oil—it's designed specifically for their engines, offering superior reliability and
                        longevity, which in turn can lead to reduced maintenance costs and improved overall
                        performance for the user.
                    </p>
                    <div class="col-md-6">
                        <img src="/img/about/oilpouring.jpeg" alt="text.heading"
                            class="img-fluid" />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6" v-for="(data, index) in datas" :key="index">
                        <div class="p-2 data-overlay" style="background-image:url('/img/gear.png')">
                            <h2 class="text-start fs-1 fw-bold p-2 text-capitalize">{{ data.title }}</h2>
                            <ul v-if="data.points" class="text-start">
                                <li v-for="(point, index) in data.points" :key="index" class="mb-2">{{ point }}</li>
                            </ul>
                        </div>
                    </div>
                    <p class="text-center my-5">With the growing customer expectations in terms of longer equipment
                        life,
                        fuel economy, reliability
                        in service and complying with prevalent emission norms, it has become necessary particularly for
                        prestigious OEMs. OEMs recommend use of their Genuine Oils as it reduces warranty claims and
                        enhances brand equity.</p>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
import SectionTopBanner from "@/components/SectionTopBanner.vue"

export default {
    components: {
        SectionTopBanner,
    },
    data() {
        return {

            texts: [
                {
                    heading: "OEM solutions",
                    text: "Our Equipment Builder Partnership fosters a collaborative and close-knit relationship with engineering specialists across diverse industry sectors. These dynamic partnerships are not just transactional—they drive innovation and lead to the development of cutting-edge lubrication products tailored to the evolving needs of our clients. Just as Original Equipment Manufacturers (OEMs) rely on us to provide unparalleled lubrication expertise throughout the entire life cycle of their equipment—from design and testing to operation and maintenance—we, in turn, depend on their valuable insights and feedback. This collaboration allows us to continuously improve and refine our lubricants and related services to ensure they meet the highest standards of performance, efficiency, and reliability.By working hand-in-hand with OEMs, we stay ahead of emerging trends and challenges, enabling us to offer solutions that not only optimize the performance of today’s equipment but also anticipate the future needs of the industries we serve. Our mutual commitment to excellence and innovation ensures that together, we deliver products and services that maximize equipment uptime, enhance productivity, and reduce operational costs, ultimately driving long-term success for our partners.",
                },
                {
                    heading: "What is genuine oil?",
                    text: "Genuine Oil is a highly specialized, tailor-made lubricant, meticulously developed after extensive field trials to meet the precise requirements of specific engines. It is engineered to deliver exceptional performance in areas such as reduced engine component wear, extended engine rebuild life, and prolonged drain service intervals, ensuring superior protection and efficiency."
                },
                {
                    heading: "",
                    text: "",
                    image: "https://www.velvex.in/images/adBlue/goGreen/Why-Genuine-Oil.jpg",
                },
            ],
            datas: [
                {
                    title: "Performance Benefits of Genuine Oil",
                    points: [
                        "Enhances engine rebuild life",
                        "Ensures peak performance for long",
                        "Customized product to meet engine aptitude",
                        "Reduced maintenance cost",
                        "Strengthens brand equity",
                        "Extends drain service intervals",
                        "An all round the year oil",
                        "Total engine protection during working and idle period",
                        "Reduced down time and increased profits",
                    ]
                },
                {
                    title: "Our Offerings For OEM’s .",
                    points: [
                        "Lubrication Technology Consultation",
                        "Shared Technical Trends, Information",
                        "Consistent Worldwide Performance Standards",
                        "Field Engineering Support and Liaison",
                        "Reliable Nationwide Supply",
                        "Ethical Business Relationship",
                    ]
                }
            ],
            steps: [
                { title: 'Product and Market Knowledge', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
                { title: 'Assistance in Choosing Formulations', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
                { title: 'Product Development', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
                { title: 'Support with product and safety information', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
                { title: 'Brand Development, Design and Copywriting', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
                { title: 'Assistance in Choosing packaging', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
                { title: 'Logistics', icon: 'https://www.velvex.in/images/services/private-labeling/product-marketing-knowlegde.png' },
            ]
        };
    },
    methods: {
        share() {
            if (navigator.share) {
                navigator.share({
                    title: 'Share this content',
                    text: 'Check out this awesome content!',
                    url: window.location.href,
                }).then(() => {
                    console.log('Successful share');
                }).catch((error) => {
                    console.log('Error sharing', error);
                });
            } else {
                alert('Web Share API is not supported in your browser.');
            }
        },
    }
};
</script>

<style scoped>
.data-overlay {
    background-color: var(--bg-secondary);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 150px;
    /* Adjust this value to control the image size */
    position: relative;
    overflow: hidden;
}

.data-overlay::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the opacity for a darker overlay */
    z-index: 1;
}

.data-overlay h2,
.data-overlay ul {
    position: relative;
    z-index: 2;
    color: #fff;
    /* White text for better visibility */
}
</style>