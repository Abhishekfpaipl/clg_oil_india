<template>
    <div class="text-light mt-5" style="background-color: #101010 !important">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img src="/img/barrel.jpg" alt="Oil pouring" class="img-fluid w-100 rounded">
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center text-center text-md-start  ">
                    <div class="mb-4 mt-5 mt-md-0">
                        <h1 class="display-4 fw-bold text-light"> <span style="color:#DCB32F !important">Contact</span>
                            Us</h1>
                    </div>
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <input type="text" class="form-control bg-dark text-light" placeholder="Your Full Name"
                                v-model="fullName">
                        </div>
                        <div class="d-flex gap-2">
                            <div class="mb-3 w-50">
                                <input type="email" class="form-control bg-dark text-light"
                                    placeholder="Your Email Address" v-model="email">
                            </div>
                            <div class="mb-3 w-50">
                                <input type="number" class="form-control bg-dark text-light"
                                    placeholder="Your Mobile Number" v-model="phone">
                            </div>
                        </div>
                        <div class="mb-3">
                            <select class="form-select bg-dark text-light" v-model="selectedService">
                                <option value="" disabled selected>Select Your Service</option>
                                <option value="Oils">Oils</option>
                                <option value="Greases">Greases</option>
                                <option value="Lubricants">Lubricants</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control bg-dark text-light" rows="1" placeholder="Write Message"
                                v-model="message"></textarea>
                        </div>
                        <button type="submit" class="btn text-dark fw-bold px-4 py-2 w-100 mb-5"
                            style="background-color: #DCB32F !important">SEND MESSAGE <i
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
            phone: '',
            selectedService: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            //         const phoneNumber = '919711256073';
            //         const message = `Name: ${this.fullName}%0A 
            // Service: ${this.selectedService}%0A
            // Number: ${this.phone}%0A
            // Email: ${this.email}%0A
            // Note: ${this.message}%0A `;

            //         const url = `https://wa.me/${phoneNumber}?text=${message}`;
            //         window.open(url, '_blank');
            console.log('send')
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