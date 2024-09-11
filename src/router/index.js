import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue"),
    meta: {
      pageTitle: "About Us",
    }
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue"),
    meta: {
      pageTitle: "Contact Us",
    }
  },
  // {
  //   path: "/return-refund",
  //   name: "ReturnRefund",
  //   component: () => import("@/pages/ReturnRefund.vue")
  // },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue"),
    meta: {
      pageTitle: "Privacy Policy",
    }
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import("@/pages/CareerPage.vue"),
    meta: {
      pageTitle: "Career",
    }
  },
  {
    path: "/dealership",
    name: "DealershipPage",
    component: () => import("@/pages/DealershipPage.vue"),
    meta: {
      pageTitle: "Dealership",
    }
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import("@/pages/TermOfUse.vue"),
    meta: {
      pageTitle: "Term & Conditions",
    }
  }, 
  {
    path: "/faqs-page",
    name: "faqs-page",
    component: () => import('@/pages/faqs-page.vue')
  },
  {
    path: "/product-detail/:productId/:subproductId",
    name: "ProductDetailPage",
    component: () => import('@/pages/ProductDetailPage.vue')
  },
  {
    path: "/grease-list/:productId",
    name: "GreaseListPage",
    component: () => import('@/pages/GreaseListPage.vue')
  },
  {
    path: "/oil-detail/:productId/:subproductId",
    name: "OilDetailPage",
    component: () => import('@/pages/OilDetailPage.vue')
  },
  {
    path: "/oil-list/:productId",
    name: "OilListPage",
    component: () => import('@/pages/OilListPage.vue')
  },
  {
    path: "/service",
    name: "ServiceListPage",
    component: () => import('@/pages/ServiceListPage.vue')
  },
  {
    path: "/dealer-locator",
    name: "DealerLocator",
    component: () => import('@/pages/DealerLocator.vue'),
    meta: {
      pageTitle: "Dealer Locator"
    }
  },
  {
    path: "/industry",
    name: "IndustriesPage",
    component: () => import('@/pages/IndustriesPage.vue')
  },
  {
    path: "/industry-list/:productId",
    name: "IndustriesListPage",
    component: () => import('@/pages/IndustriesListPage.vue')
  },
  {
    path: "/product",
    name: "ProductListPage",
    component: () => import('@/pages/ProductListPage.vue')
  },
  {
    path: "/industry-detail/:productId/:subproductId",
    name: "IndustryDetailPage",
    component: () => import('@/pages/IndustryDetailPage.vue')
  },
  {
    path: "/gallery",
    name: "GalleryPage",
    component: () => import('@/pages/GalleryPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
