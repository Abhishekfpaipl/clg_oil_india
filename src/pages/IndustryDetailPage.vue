<template>
    <div v-if="subproduct">
        <SectionTopBanner />
        <div class="container my-3">
            <div class="my-4">{{ subproduct.description }}</div>
            <div class="d-none d-md-flex justify-content-center align-items-center gap-3">
                <button class="btn w-25" style="border:1px solid rgba(255, 162, 0, 1) !important;" @click="share">
                    <i class="bi bi-share me-2"></i>
                    <span>Share</span>
                </button>
                <button class="btn d-flex justify-content-center align-items-center w-25"
                    style="background-color:rgba(255, 206, 86, 1); border:1px solid rgba(255, 162, 0, 1) !important;"
                    data-bs-toggle="modal" data-bs-target="#industryEnquiry"><span> Enquiry </span><i
                        class="bi bi-arrow-right ms-2"></i>
                </button>
            </div>
        </div>

        <div class="sticky-nav my-4">
            <div class="d-flex justify-content-center align-items-center p-3 py-2 overflow-x-scroll" id="scroll"
                style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
                <div v-for="(section, index) in sections" :key="index">
                    <a :href="'#' + section.id" class="nav-link text-dark" @click.prevent="scrollToSection(section.id)"
                        :class="{ active: activeSection === section.id }">
                        {{ section.name }}
                    </a>
                </div>
            </div>
        </div>

        <div class="container">
            <section v-for="(section, index) in sections" :key="index" :id="section.id" class="section"
                style="padding-top:30px">
                <h3 class="p-2 text-center my-4 cutout">
                    <span>{{ section.name }}</span>
                </h3>
                <component :is="section.component" :product="subproduct" v-observe></component>
            </section>
        </div>

        <div class="position-fixed bottom-0 w-100 btn-group d-flex d-md-none" style="z-index:10">
            <button class="btn btn-dark w-25 rounded-0" @click="share"><i class="bi bi-share fs-2"></i></button>
            <button class="btn btn-warning w-75 rounded-0 d-flex align-items-center justify-content-between"
                data-bs-toggle="modal" data-bs-target="#industryEnquiry">
                <span class="ms-3 fs-5 text-uppercase">Enquiry Now</span>
                <i class="bi bi-arrow-right ms-2 fs-1"></i>
            </button>
        </div>
        <div class="modal fade" id="industryEnquiry" tabindex="-1" aria-labelledby="industryEnquiryLabel"
            aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content position-relative">
                    <div class="modal-header border-0 pt-4">
                        <h1 class="modal-title fs-5" id="industryEnquiryLabel">{{ pageName }}</h1>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 bg-danger text-white px-2 p-1 end-0"
                        data-bs-dismiss="modal" style="top: -3%;">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="sendToWhatsApp()" class="row g-3 needs-validation" novalidate>
                            <div class="w-100 form-floating my-2">
                                <input type="text" class="form-control" placeholder="" v-model="name" required>
                                <label for="floatingInput" class="text-muted ms-2">Name</label>
                            </div>
                            <div class="w-100 form-floating my-2">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                    v-model="note"></textarea>
                                <label for="floatingTextarea" class="ms-2 text-muted">Notes...</label>
                            </div>
                            <button
                                class="d-flex justify-content-center align-items-center btn btn-success text-uppercase p-0 py-1"
                                data-bs-dismiss="modal"><i class="bi bi-whatsapp fs-5 me-4"></i> <span class="fs-5">
                                    Enquiry Now</span></button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="">
        products loading....
    </div>
</template>

<script>
import ProductTableSection from "@/components/ProductTableSection.vue"
import TradeFairTermsSection from "@/components/TradeFairTermsSection.vue"
import ProductBenefitSection from "@/components/ProductBenefitSection.vue"
import ItinerarySection from "@/components/ItinerarySection.vue"
import SectionTopBanner from "@/components/SectionTopBanner.vue"
import TradeDetailsSection from "@/components/TradeDetailsSection.vue"
export default {
    name: "TradeFairPage",
    components: {
        ProductTableSection,
        TradeFairTermsSection,
        ProductBenefitSection,
        ItinerarySection,
        SectionTopBanner,
        TradeDetailsSection,
    },
    data() {
        return {
            pageName: "",
            date: '',
            sections: [
                { id: 'Reports', name: 'Reports', component: 'ProductTableSection' },
                { id: 'ISO', name: 'ISO', component: 'TradeFairTermsSection' },
                { id: 'Benefits', name: 'Benefits', component: 'ProductBenefitSection' },
                { id: 'Facilities', name: 'Facilities', component: 'ItinerarySection' },
                { id: 'OEM ', name: 'OEM ', component: 'TradeDetailsSection' },
            ],
            activeSection: '',
            navbarDark: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        const productId = this.$route.params.productId;
        const subproductId = this.$route.params.subproductId;
        // Remove unnecessary console logs if they are no longer needed
        console.log(productId, subproductId);
        console.log(this.subproduct);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        subproduct() {
            const productId = this.$route.params.productId;
            const subproductId = this.$route.params.subproductId; // Convert to number
            const product = this.$store.getters['industry/getIndustry'](productId);

            // Ensure the product and products array are valid
            return product && Array.isArray(product.products)
                ? product.products.find(p => p.sid === subproductId)
                : null;
        },
    },
    methods: {
        isActive(id) {
            return this.$route.hash === "#" + id;
        },
        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop - 200) {
                    this.activeSection = section.id;
                }
            });
        },
        sendToWhatsApp() {
            const phoneNumber = '919711256073';
            const message = `Name: ${this.name}%0A
            Note: ${this.note}`;

            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
        },
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
}
</script>
<style scoped>
.nav-link {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
}

.nav-link.active {
    border-bottom: 2px solid black;
}

.sticky-nav {
    position: sticky;
    top: 0px !important;
    z-index: 2;
    background-color: white;
}
</style>