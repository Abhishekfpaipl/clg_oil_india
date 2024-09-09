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
    component: () => import("@/pages/AboutUs.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue")
  },
  {
    path: "/return-refund",
    name: "ReturnRefund",
    component: () => import("@/pages/ReturnRefund.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue")
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import("@/pages/CareerPage.vue")
  },
  {
    path: "/dealership",
    name: "DealershipPage",
    component: () => import("@/pages/DealershipPage.vue")
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import("@/pages/TermOfUse.vue")
  },
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/pages/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/pages/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/pages/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/reset-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/pages/auths/ResetPasswordPage.vue')
  },
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/pages/auths/EmailVerificationPage.vue')
  },
  {
    path: "/other-services",
    name: "OtherServices",
    component: () => import('@/pages/OtherServices.vue')
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
    path: "/service-list",
    name: "ServiceListPage",
    component: () => import('@/pages/ServiceListPage.vue')
  },
  {
    path: "/dealer-locator",
    name: "DealerLocator",
    component: () => import('@/pages/DealerLocator.vue')
  },
  {
    path: "/industry-list",
    name: "IndustriesListPage",
    component: () => import('@/pages/IndustriesListPage.vue')
  },
  {
    path: "/product-list",
    name: "ProductListPage",
    component: () => import('@/pages/ProductListPage.vue')
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
