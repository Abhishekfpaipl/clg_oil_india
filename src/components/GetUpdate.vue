<template>
    <div class="bg-dark text-light py-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="https://clgoilindia.com/demo/assets/images/resource/contact-1.jpg" alt="Oil pouring"
                        class="img-fluid rounded">
                </div>
                <div class="col-md-6 text-center text-md-start">
                    <div class="mb-4 mt-5 mt-md-0">
                        <h6 class="text-danger">
                            <i class="bi bi-droplet-fill me-2"></i>WHAT WE DO
                        </h6>
                        <h1 class="display-4 fw-bold">Get More Update</h1>
                        <h2 class="display-5">To Contact Us</h2>
                    </div>
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <input type="text" class="form-control bg-dark text-light" placeholder="Your Full Name"
                                v-model="fullName">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control bg-dark text-light" placeholder="Your Email Address"
                                v-model="email">
                        </div>
                        <div class="mb-3">
                            <select class="form-select bg-dark text-light" v-model="selectedService">
                                <option value="" disabled selected>Select Your Service</option>
                                <option value="service1">Service 1</option>
                                <option value="service2">Service 2</option>
                                <option value="service3">Service 3</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control bg-dark text-light" rows="4" placeholder="Write Message"
                                v-model="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning px-4 py-2">SEND MESSAGE <i
                                class="bi bi-arrow-right ms-2"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetUpdate',
    data() {
        return {
            fullName: '',
            email: '',
            selectedService: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted:', {
                fullName: this.fullName,
                email: this.email,
                selectedService: this.selectedService,
                message: this.message
            });
            // You can add API calls or other logic here
        }
    }
}
</script>

<style scoped>
.form-control,
.form-select {
    border: none;
    border-bottom: 1px solid #555;
}

.form-control::placeholder,
.form-select {
    color: #aaa;
}
</style>