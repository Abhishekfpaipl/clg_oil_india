<template>
    <div class="container-fluid text-dark  pt-3 border-top border-bottom"
        style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
        <div class="row">
            <div class="col-12 col-md-4 mb-3 d-flex flex-column align-items-center justify-content-center">
                <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                    <img :src="img" style="width: 100%;object-fit: contain; filter: invert(1);">
                </router-link>

            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : info@clgoilindia.com</p>
                <!-- <p class="mb-2">Mob no. : 919711256073</p> -->
                <p class="mb-2">Address : HD-723, WeWork Enam Sambhav, C - 20, <br>G Block Rd, G-Block BKC, Bandra Kurla
                    Complex,<br> Bandra East, Mumbai, Maharashtra - 400051 </p>
                <div class="d-flex gap-2 justify-content-center">
                    <p class="fw-bold">Follow Us :</p>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 text-dark"
                            v-for="(link, index) in company" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 text-dark"
                            v-for="(link, index) in links" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-bg-dark py-2 d-flex justify-content-between px-md-4">
        <p class="mb-0">All rights reserved</p>
        <a href="https://www.covisor.in" class="text-white text-decoration-none">Copyright &copy; Covisor Infotech Pvt
            Ltd</a>
        <!-- <p>Copyright &copy; Covisor.in</p> -->
    </div>
    <!-- <FameFoot /> -->
</template>

<script>
// import FameFoot from '@/components/FameFoot.vue'
export default {
    name: 'FooterBar',
    components: {
        // FameFoot,
    },
    data() {
        return {
            img: 'https://clgoilindia.com/demo/assets/images/logo.png',
            company: [
                {
                    id: 4,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 42,
                    name: 'About Us',
                    link: '/about-us'
                },
                {
                    id: 3,
                    name: 'Dealership',
                    link: '/dealership'
                },
                {
                    id: 3,
                    name: 'Career',
                    link: '/career'
                },
            ],
            links: [
                {
                    id: 1,
                    name: 'Privacy Policy',
                    link: '/privacy-policy'
                },
                {
                    id: 12,
                    name: 'Terms & Conditions',
                    link: '/term-of-use'
                },
                {
                    id: 34,
                    name: 'OEM Solutions',
                    link: '/oem-solutions'
                },



            ],
        }
    },
}
</script>

<style></style>
