<template>
  <div id="motulCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button v-for="(slide, index) in slides" :key="'indicator-' + index" type="button" data-bs-target="#motulCarousel"
        :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0"
        :aria-label="'Slide ' + (index + 1)">
      </button>
    </div>
    <div class="carousel-inner">
      <div v-for="(slide, index) in slides" :key="'slide-' + index" class="carousel-item"
        :class="{ active: index === 0 }">
        <img :src="slide.image" class="d-block w-100" alt="clg oil india">
        <div class="carousel-caption d-none d-md-block text-start">
          <h1 class="display-4 fw-bold">{{ slide.title }}</h1>
          <p class="lead">{{ slide.description }}</p>
          <button class="btn btn-danger btn-lg">Discover</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#motulCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#motulCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>

  <div class="container" style="margin-top: -50px;" v-observe>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(card, index) in cards" :key="index">
        <router-link :to="card.link" class="text-decoration-none card rounded-0 text-white bg-danger h-100 overflow-hidden">
          <div class="card-img d-flex flex-column justify-content-between p-3 py-4 rounded-0"
            :style="{ backgroundImage: `url(${card.backgroundImage})` }">
            <div>
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <a href="#" class="text-white text-decoration-none">
                {{ card.linkText }} →
              </a>
              <i :class="card.icon" class="fs-3"></i>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      slides: [
        {
          image: 'https://clgoilindia.com/demo/assets/images/banner/silder-0032.jpg',
          alt: 'First slide',
          title: 'expirence the thrill of peak performance',
          description: 'The 7100 series offers a hassle-free high performance solution that protects your bike and guarantees smiles for miles!',
          button: 'discover',
        },
        {
          image: 'https://clgoilindia.com/demo/assets/images/banner/silder-0031.jpg',
          alt: 'Second slide',
          title: 'Second slide label',
          description: 'Some representative placeholder content for the second slide.'
        },
        {
          image: 'https://clgoilindia.com/demo/assets/images/banner/silder-0033.jpg',
          alt: 'Third slide',
          title: 'Third slide label',
          description: 'Some representative placeholder content for the third slide.'
        }
      ],
      cards: [
        {
          title: 'Lubricants',
          description: "Explore Motul's exciting products",
          linkText: 'Explore',
          icon: 'bi bi-box-seam',
          backgroundImage: '/img/serviceBanner/1.webp',
          link:'/',
        },
        {
          title: 'Greases',
          description: 'Choose the right oil for your vehicle',
          linkText: 'Choose',
          icon: 'bi bi-droplet',
          backgroundImage: '/img/serviceBanner/2.webp',
          link:'/',
        },
        {
          title: 'Services',
          description: 'Find your nearest Motul dealer',
          linkText: 'Find',
          icon: 'bi bi-geo-alt',
          backgroundImage: '/img/serviceBanner/3.webp',
          link:'/service-list',
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-item {
  height: 600px;
}

.carousel-indicators {
  top: 0 !important;
}

.carousel-item img {
  object-fit: cover;
  height: 100%;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
}

.card-img {
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-img {
  transform: scale(1.05);
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