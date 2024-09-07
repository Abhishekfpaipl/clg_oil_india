<template>
    <div>
        <div class="position-relative" style="width: 100%; overflow: hidden;">
            <img src="/img/productBanner.jpg" alt="" style="width: 100%; height: 400px; object-fit: cover;">
            <div
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.75); display: flex; justify-content: center; align-items: center;">
                <h1 class="text-white text-uppercase fw-bold text-center">Dealer Locator</h1>
            </div>
        </div>
        <div class="container" style="margin-top: -50px;" v-observe>
            <div class="bg-danger text-white p-4">
                <h2 class="mb-4">FIND DEALER NEAR YOU</h2>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <select v-model="selectedState" @change="updateCities" class="form-select">
                            <option value="" disabled selected>State</option>
                            <option v-for="state in states" :key="state.name" :value="state.name">{{ state.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <select v-model="selectedCity" @change="updatePincodes" class="form-select">
                            <option value="" disabled selected>City</option>
                            <option v-for="city in filteredCities" :key="city.name" :value="city.name">{{ city.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <select v-model="selectedPincode" class="form-select">
                            <option value="" disabled selected>Pincode</option>
                            <option v-for="pincode in pincodes" :key="pincode" :value="pincode">{{ pincode }}</option>
                        </select>
                    </div>
                    <div class="col-md-1 mb-3">
                        <button @click="locateDealers" :disabled="!isButtonEnabled" class="btn btn-dark">Locate</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showDealers" class="my-5">
            <p class="display-5 fw-bold">Dealers Available at your place... </p>
        </div>
        <div class="container my-5 bg-danger text-white">
            <div class="row align-items-center">
                <div class="col-md-2 bg-dark p-4">
                    <i class="bi bi-envelope fs-1"></i>
                </div>
                <div class="col-md-6 bg-danger">
                    <div class="d-flex gap-3">
                        <p class="mb-2 fs-5 fw-bold text-start">SUBSCRIBE TO THE NEWSLETTER</p>
                        <p class="text-dark">{{ captchaText }}</p>
                    </div>
                    <form @submit.prevent="submitSubscription" class="d-flex">
                        <input v-model="email" type="email" class="form-control me-2 w-100" placeholder="Email address"
                            required>
                        <input v-model="captcha" type="text" class="form-control me-2" placeholder="" required>
                        <button type="button" @click="refreshCaptcha"
                            class="btn btn-outline-light me-2 bi bi-arrow-repeat"></button>
                        <button type="submit" class="btn btn-light">Subscribe</button>
                    </form>
                </div>
                <div class="col-md-4">
                    <img src="https://motulindia.com/assets/images/home/motul-car.webp" class="w-100" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DealerLocator',
    data() {
        return {
            selectedState: '',
            selectedCity: '',
            selectedPincode: '',
            cities: [],
            pincodes: [],
            filteredCities: [],
            email: '',
            captcha: '',
            captchaText: 'U7tgfZB', // This should be generated server-side in a real application
            showDealers: false // Added data property to control visibility
        }
    },
    computed: {
        states() {
            return this.$store.getters['states/getStates']
        },
        isButtonEnabled() {
            // Enable button only if all required inputs have values
            return this.selectedState && this.selectedCity && this.selectedPincode;
        }
    },
    methods: {
        updateCities() {
            const selectedState = this.states.find(state => state.name === this.selectedState);
            this.filteredCities = selectedState ? selectedState.cities : [];
            this.selectedCity = '';
            this.selectedPincode = '';
            this.pincodes = [];
        },
        updatePincodes() {
            const selectedState = this.states.find(state => state.name === this.selectedState);
            const selectedCity = selectedState ? selectedState.cities.find(city => city.name === this.selectedCity) : null;
            this.pincodes = selectedCity ? selectedCity.pincodes : [];
            this.selectedPincode = '';
        },
        locateDealers() {
            // Implement dealer location logic here
            console.log('Locating dealers with:', {
                state: this.selectedState,
                city: this.selectedCity,
                pincode: this.selectedPincode
            });
            // Set showDealers to true to display the dealers section
            this.showDealers = true;
            // You would typically make an API call here with the selected values
        },
        submitSubscription() {
            if (this.captcha === this.captchaText) {
                // Implement subscription logic here
                console.log('Subscribing email:', this.email);
                // You would typically make an API call here to subscribe the email
                this.email = '';
                this.captcha = '';
                this.refreshCaptcha();
            } else {
                alert('Invalid captcha. Please try again.');
            }
        },
        refreshCaptcha() {
            // In a real application, this would request a new captcha from the server
            this.captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
            this.captcha = '';
        }
    }
}
</script>

<style>
.envelope-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
}
</style>
