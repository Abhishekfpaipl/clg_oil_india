<template>
  <div class="container mt-4 text-start">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="(category, index) in product.industries" :key="index" >
        <router-link to="/product-list/123" class="card text-decoration-none">
          <p class="text-center card-header fs-4">
            <img v-if="category.img" :src="category.img" style="width: 30px;" alt="">
            <i v-if="category.icon" :class="category.icon"></i>
            <i v-if="!category.img && !category.icon" class="bi bi-globe"></i>
          </p>
          <div class="card-body text-center">
            <p class="card-text text-capitalize my-1 fw-bold">{{ category.name }}</p>
            <p v-if="category.description" class="card-text text-capitalize my-1  text-ellipsis3">{{
              category.description }}
            </p>
            <p v-else class="card-text text-capitalize my-1  text-ellipsis3">Lorem ipsum dolor sit amet
              consectetur
              adipisicing
              elit.
              Alias, quae!</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductIndustries',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>