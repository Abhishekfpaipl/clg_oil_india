<template>
  <DashboardNav />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar />
</template>
<script>
import DashboardNav from "@/components/TopNav.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "App",
  components: {
    DashboardNav,
    FooterBar
  },
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --bg-primary: #EB5B00;
  --bg-secondary: #E0B229;
  --bg-third: #481E14;

  --bg-forth: rgba(255, 206, 86, 0.2);
  --brand-color: #ffa907 !important;
  --bg-light: #FFF5DD !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

}

.text-ellipsis7 {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.smaller {
  font-size: 12px;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.cutout {
  overflow: hidden;
  text-align: center;
}

.cutout>span {
  position: relative;
  display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 900px;
  /* Adjust width as needed */
  margin: 0 20px;
}

.cutout>span:before {
  right: 100%;
  border-bottom: 2px solid;
  border-image: linear-gradient(to left, black 0, transparent 10%);
  border-image-slice: 1;
}

.cutout>span:after {
  left: 100%;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, black 0, transparent 10%);
  border-image-slice: 1;
}


.before-enter {
  opacity: 0;
  transform: translateY(80px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>
