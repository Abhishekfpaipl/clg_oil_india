<template>
  <div class="container" v-observe>
   
    <div class="my-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
      <div class="col" v-for="(image, index) in images" :key="index" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        <div class="card rounded-0 border-0 overflow-hidden">
          <img :src="image" alt="Gallery" class="w-100">
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-transparent">
        <div class="modal-body">
          <div class="d-flex justify-content-end">
            <i class="bi bi-x text-white fs-1" data-bs-dismiss="modal" aria-label="Close"></i>
            <!-- <button type="button" class="btn-close btn-white text-white" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button v-for="(image, index) in images" :key="'indicator-' + index" type="button"
                :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index"
                :class="{ 'active': index === activeIndex }" :aria-current="index === activeIndex ? 'true' : undefined"
                :aria-label="'Slide ' + (index + 1)"></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(image, index) in images" :key="'carousel-item-' + index" class="carousel-item"
                :class="{ 'active': index === activeIndex }">
                <img :src="image" class="vh-100 vw-100" alt="..." style="object-fit: contain;">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GallerySection",
  data() {
    return {
      images: [
        "/img/gallery/banner1.jpg",
        "/img/gallery/banner2.jpg",
        "/img/gallery/banner3.jpg",
        "/img/gallery/banner4.jpg",
        "/img/gallery/banner5.jpg",
        "/img/gallery/banner6.jpg",
        // "/img/gallery/banner7.jpg",
        "/img/gallery/banner8.jpg",
      ],
      activeIndex: 0
    }
  },
};
</script>

<style scoped>
.card:hover img {
  transform: scale(1.1);
  transition: transform 0.5s ease;
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
