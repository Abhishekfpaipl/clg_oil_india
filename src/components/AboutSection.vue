<template>
    <div class="about-us-section py-5">
        <div class="container-fluid">
            <!-- About Us Header -->
            <div class="row justify-content-center text-center mb-3">
                <div class="col-md-10">
                    <h1 class="fw-bold">ABOUT <span class="" style="color: var(--bg-secondary)">US</span></h1>
                    <p class="mt-3">
                        On the back of an illustrious 25-year legacy, CGL is a Indian lubricants company
                        that enjoys global recognition as 'The specialist in synthetic lubricants'.
                        Among the oldest, most respected lubricant brands in the world, CGL has become
                        synonymous with high-performance motoring.
                    </p>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 text-start ps-5 text-white py-5" style="background-color: var(--bg-secondary)"
                    v-observe>
                    <div class="d-flex gap-2 align-items-center">
                        <h1 class="display-3 fw-bold">25+</h1>
                        <p class="h4 display-3">Experience</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <h1 class="display-3 fw-bold">100+</h1>
                        <p class="h4 display-3">Employees</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <h1 class="display-3 fw-bold">250+</h1>
                        <p class="h4 display-3">Dealerships</p>
                    </div>
                </div>
                <div class="col-md-6 text-end" v-observe>
                    <p class="text-start ps-4">
                        CLG Oil India Private Limited embarked on its journey over two and a half decades ago, in 2000,
                        making its mark by introducing high-quality greases for both automotive and industrial
                        applications. These products are marketed under various leading brands, earning the company a
                        strong reputation in the industry. Over the years, CLG Oil has grown into one of the foremost
                        grease manufacturers in India, with a production capacity ranging between 2,200 to 2,700 MT per
                        month. This impressive output meets more than 15-20% of India's demand for premium greases,
                        underscoring the company’s pivotal role in the market. In addition to greases, CLG Oil India
                        Private Limited has diversified its product range to Lubricants and oils also, such as engine
                        oils and industrial oils, catering to the automotive and industrial sectors both within India
                        and internationally.
                    </p>
                    <router-link to="/about-us" class="btn text-white"
                        style="background-color: var(--bg-secondary)">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs",

    methods: {
        imageClass(position) {
            return {
                'before-enter-right': position === 'right',
                'before-enter-left': position === 'left'
            };
        },
    }
};
</script>

<style scoped>
.about-us-section {
    background-color: #f4f4f4;
}
 
</style>