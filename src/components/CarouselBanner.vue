<template>
  <div class="">
    <router-link to="/products" class="text-decoration-none text-dark">
      <img src="/img/banners/desk1.jpg" class="d-md-block d-none w-100" style="height: 600px;object-fit: cover;object-position: center;" alt="">
      <img src="/img/banners/mob1.jpg" class="d-md-none d-block w-100" alt="">
    </router-link>
  </div>
  <div class="container" style="margin-top: -50px;" v-observe>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(card, index) in cards" :key="index">
        <router-link :to="card.link"
          class="text-decoration-none card rounded-0 text-white bg-dark h-100 overflow-hidden">
          <div class="card-img d-flex flex-column justify-content-between  rounded-0"
            :style="{ backgroundImage: `url(${card.backgroundImage})` }">
            <div class="p-3 py-4 overlay">
              <div>
                <h5 class="card-title">{{ card.title }}</h5>
                <p class="card-text">{{ card.description }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="text-white text-decoration-none">
                  {{ card.linkText }} →
                </a>
                <i v-if="card.icon" :class="card.icon" class="fs-3"></i>
              </div>
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
          image: '/img/banners/banner1.jpg',
          alt: 'First slide',
          title: 'expirence the thrill of peak performance',
          description: 'The 7100 series offers a hassle-free high performance solution that protects your bike and guarantees smiles for miles!',
          button: 'discover',
        },
        {
          image: '/img/banners/banner2.jpg',
          alt: 'Second slide',
          title: 'Second slide label',
          description: 'Some representative placeholder content for the second slide.'
        },
        {
          image: '/img/banners/banner3.jpg',
          alt: 'Third slide',
          title: 'Third slide label',
          description: 'Some representative placeholder content for the third slide.'
        }
      ],
      cards: [
        {
          title: 'Products',
          description: "Explore CLG's exciting products",
          linkText: 'Explore',
          icon: 'bi bi-droplet',
          backgroundImage: '/img/update.jpg',
          link: '/products',
        },
        {
          title: 'Services',
          description: 'Choose the right service as per your requirement',
          linkText: 'Choose',
          backgroundImage: '/img/grease.jpg',
          icon: 'bi bi-tools',
          link: '/services',
        },
        {
          title: 'Industries',
          description: "Explore from CLG's industry specfic",
          linkText: 'Find',
          icon: 'bi bi-buildings',
          backgroundImage: '/img/industry.jpg',
          link: '/industry',
        }
      ]
    };
  }
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 90%;
}

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
</style>