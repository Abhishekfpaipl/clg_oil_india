<template>
    <div>
        <SectionTopBanner />
        <div class="container mb-5 pb-5" style="margin-top: -50px;" v-observe>
            <div class="text-white p-4" style="background-color:var(--bg-secondary);">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <select v-model="selectedIndustry" class="form-select">
                            <option value="" disabled selected>Industry</option>
                            <option v-for="industry in industries" :key="industry" :value="industry">{{ industry }}</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <select v-model="selectedProduct" class="form-select">
                            <option value="" disabled selected>Products</option>
                            <option v-for="product in products" :key="product" :value="product">{{ product }}</option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <textarea v-model="note" rows="1" id="" class="form-control" placeholder="Specifications"></textarea>
                    </div>
                    <div class="col-md-1 mb-3">
                        <button @click="locateDealers"   class="btn btn-dark">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Show the image and message only after submission -->
        <div v-if="submitted" class="my-5 pb-5">
            <div class="d-flex justify-content-center align-items-center">
                <img src="/img/cg.svg" class="d-md-block d-none" style="width: 500px" alt="">
                <img src="/img/cg.svg" class="d-md-none d-flex justify-content-center align-items-center" style="width: 100%;" alt="">
            </div>
            <p class="display-5 fw-bold" style="color:black !important">Thank you for your query, we will get in touch with you shortly.</p>
            <router-link to="/products" class="btn text-white fs-4 text-capitalize mt-3" style="background-color:var(--bg-secondary)">Click here to explore our products</router-link>
        </div>
        <router-link to="/contact-us" class="text-muted ">
            <p class="mb-5 pb-5">
                Kindly contact us for any other kind of query .
            </p>
        </router-link>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    name: 'ProductRecommender',
    components: {
        SectionTopBanner
    },
    data() {
        return {
            industries: ['Steel', 'Mining', 'Paper', 'Cement', 'Sugar', 'Aluminium Cable', 'Stone Crusher', 'Engineering', 'Food & Pharma', 'Biodegradable', 'Wind Milds', 'Other'],
            products: ['Oils', 'Greases', 'Others'],
            selectedIndustry: '',
            selectedProduct: '',
            note: '', // Track user's specific note input
            submitted: false, // Track if form is submitted
        }
    },
    methods: {
        locateDealers() {
            // if (!this.selectedIndustry || !this.selectedProduct) {
            //     alert('Please select both Industry and Product.');
            //     return;
            // }

            // // Construct the WhatsApp message
            // const message = `Hello, I am interested in the following:\nIndustry: ${this.selectedIndustry},\nProduct: ${this.selectedProduct},\nNote: ${this.note}`;

            // // Encode the message and create a WhatsApp URL
            // const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;

            // // Open WhatsApp with the pre-filled message
            // window.open(whatsappURL, '_blank');

            // Set the submitted flag to true
            this.submitted = true;
        }
    }
}
</script>
