<template>
    <!-- Desktop version -->
    <div class="d-lg-block d-none w-100" style="z-index: 10; border-bottom:1px solid rgba(255, 206, 86, 1) !important;"
        :style="{ backgroundColor: containerBackgroundColor }">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container-fluid d-flex justify-content-center align-items-center">
                <router-link to="/" class="d-flex align-items-center w-25 text-decoration-none">
                    <img src="https://clgoilindia.com/demo/assets/images/logo.png"
                        style="width: 50%; filter: invert(1);">
                    <!-- <div class="d-flex flex-column text-start">
                        <span class="ms-2 text-dark text-capitalize">Clg oil india pvt ltd.</span>
                        <span class="text-uppercase text-dark smaller ms-2">automotive and industrial sector</span>
                    </div> -->
                </router-link>

                <div class="w-75 d-flex justify-content-between align-items-center ">
                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                        <li v-for="(cat, index) in menuCategories" :key="index"   class="category d-inline position-relative">
                            <router-link :to="cat.path" class="title px-2 text-decoration-none text-dark">
                                {{ cat.title }}
                            </router-link> 
                        </li>
                    </ul>
                    <div class="">
                        <button class="btn btn-dark">Get Quote</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <!-- Mobile version -->
    <div class="d-flex justify-content-between d-lg-none p-2 w-100 bg-light py-3 border-bottom" style="z-index: 8;">
        <router-link to="/" class="text-decoration-none ">
            <img src="https://clgoilindia.com/demo/assets/images/logo.png" style="height: 40px; filter: invert(1);"> 
        </router-link>
        <i class="bi bi-list fs-1 text-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"></i>

        <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" style="">
            <div class="offcanvas-header border-bottom">
                <img src="https://clgoilindia.com/demo/assets/images/logo.png" style="height:40px; filter: invert(1);" alt=""> 
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body "
                style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
                <ul class="nav nav-pills flex-column mb-auto">
                    <router-link :to="link.path" v-for="(link, index) in menuCategories" :key="index"
                        class="nav-item my-1 text-decoration-none"
                        style="border-bottom:1px solid rgba(255, 206, 86, 1) !important;">
                        <button @click="selectMenu(index)" data-bs-dismiss="offcanvas"
                            class="btn rounded border-0 w-100 d-flex align-items-center p-0 py-1">
                            <div class="btn-toggle collapsed" data-bs-toggle="collapse"
                                :data-bs-target="'#home-collapse' + index" aria-expanded="false">
                                <div class="d-flex align-items-center">
                                    <!-- <i class="bi pe-2 fs-5 lh-1 bi-arrow-right"></i> -->
                                    <span>{{ link.title }}</span>
                                </div>
                            </div>
                        </button>
                        <div class="ms-3 ps-3 collapse show" :id="'home-collapse' + index">
                            <ul class="btn-toggle-nav list-unstyled">
                                <li v-for="(sub, subIndex) in link.subCat" :key="subIndex" class="mt-1">
                                    <button class="btn rounded border-0 w-100 p-0 py-1" @click="handleLinkClick"
                                        data-bs-dismiss="offcanvas">
                                        <router-link :to="sub.path"
                                            style="border-top:1px solid rgba(255, 206, 86, 1) !important;"
                                            class="pt-2 pb-0 d-flex align-items-center text-capitalize text-decoration-none text-dark">
                                            <i class="bi pe-2 fs-5 lh-1 bi-chevron-right"></i>
                                            <span>{{ sub.name }}</span>
                                        </router-link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            hoveredCategoryIndex: -1,
            selectedMenu: null,
            selectedSubMenu: null,
            menuCategories: [
                {
                    id: 2,
                    title: 'Home',
                    path: '/',
                },
                {
                    id: 1,
                    title: 'Services',
                    path: '/services',
                    bgColor: '#FFF5DD',
                },
                {
                    id: 1,
                    title: 'Product',
                    path: '/products',
                    bgColor: '#FFF5DD',
                },
                {
                    id: 1,
                    title: 'Industry',
                    path: '/industry',
                    bgColor: '#FFF5DD',
                },
                {
                    id: 3,
                    title: 'Contact Us',
                    path: '/contact-us',
                },
                {
                    id: 4,
                    title: 'About Us',
                    path: '/about-us',
                },
                {
                    id: 5,
                    title: 'Gallery',
                    path: '/gallery',
                }, 
                {
                    id: 6,
                    title: 'Dealership',
                    path: '/dealership',
                }, 
                {
                    id: 7,
                    title: 'OEM Solutions',
                    path: '/oem-solutions',
                }, 
                // {
                //     id: 4,
                //     title: 'Certificates',
                //     path: '/',
                // },
            ],
        };
    },
    computed: {
        mainMenu() {
            return this.$store.getters.mainMenu
        },
        containerBackgroundColor() {
            if (this.hoveredCategoryIndex !== -1) {
                return this.menuCategories[this.hoveredCategoryIndex].bgColor;
            }
            return '#FFF5DD';
        },
    },
    methods: {
        toggleMainMenu() {
            this.$store.dispatch('toggleMainMenu');
        },
        setHoveredCategory(index) {
            this.hoveredCategoryIndex = index;
        },
        clearHoveredCategory() {
            this.hoveredCategoryIndex = -1;
        },
        selectMenu(index) {
            this.selectedMenu = index;
        },
    },
}
</script>

<style scoped>
.mega-menu {
    display: none;
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 3;
    width: 100vw;
}

.category:hover .title {
    color: rgb(255, 162, 0) !important;
    border-bottom: 2px solid rgb(255, 162, 0) !important;
}

.sub-title:hover {
    color: rgb(255, 162, 0) !important;
    border-bottom: 2px solid rgb(255, 162, 0) !important;
}

.category:hover .mega-menu {
    display: block;
}

.accordion-button:focus {
    box-shadow: none !important
}

.accordion-button:not(.collapsed) {
    background-color: transparent;
    box-shadow: none;
}

.accordion-button::after {
    display: none;
}

.accordion-item .accordion-button {
    background-color: transparent;
}
</style>