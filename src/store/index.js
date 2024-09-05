import { createStore } from "vuex";
import about from "./about";
import product from "./product";
export default createStore({
  state: {
    packages: [
      {
        id: 1,
        title: "SIGN & LED China 2024",
        package: 'flight services',
        sid: "SIGN-&-LED-China-2024",
        date: "19-21 Sept 2024",
        country: "USA",
        price: "1,09,000",
        image: "/img/services/1.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 2,
        title: "RubberTech China 2024",
        sid: "RubberTech-China-2024",
        package: 'flight services',
        date: "19-21 Sept 2024",
        country: "India",
        price: "1,09,000",
        image: "/img/services/2.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 3,
        title: "Wire & Tube China 2024",
        sid: "Wire-&-Tube-China-2024",
        package: 'educational tour',
        date: "25-28 Sept 2024",
        country: "Japan",
        price: "1,20,000",
        image: "/img/services/3.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 4,
        title: "CPHI Milan 2024",
        sid: "CPHI-Milan-2024",
        package: 'honeymoon tour',
        date: "8-10 Oct 2024",
        country: "France",
        price: "1,13,000",
        image: "/img/services/4.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 5,
        title: "CMEF China 2024",
        sid: "CMEF-China-2024",
        package: 'visa services',
        date: "12-15 Oct 2024",
        country: "Germany",
        price: "1,00,000",
        image: "/img/services/1.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 6,
        title: "ITMA ASIA & CITME 2024",
        sid: "ITMA-ASIA-&-CITME-2024",
        package: 'other services',
        date: "14-18 Oct 2024",
        country: "USA",
        price: "1,06,000",
        image: "/img/services/2.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 7,
        title: "Canton Fair China 2024",
        sid: "Canton-Fair-China-2024",
        package: 'domestic tour',
        date: "15-19 23-27 Oct 2024",
        price: "1,15,000",
        country: "India",
        image: "/img/services/3.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 8,
        title: "Fenestration Bau 2024",
        sid: "Fenestration-Bau-2024",
        package: 'international tour',
        date: "16-19 Oct 2024",
        price: "1,07,000",
        country: "Germany",
        image: "/img/services/4.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 9,
        title: "Glasstec Dusseldorf 2024",
        sid: "Glasstec-Dusseldorf-2024",
        package: 'trade fair',
        date: "22-24 Oct 2024",
        price: "1,06,000",
        country: "USA",
        image: "/img/services/1.jpg",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
      {
        id: 10,
        title: "Medica Düsseldorf 2024",
        sid: "Medica-Düsseldorf-2024",
        package: 'trade fair',
        date: "10-15 10-17 Nov 2024",
        price: " 2,10,000",
        country: "France",
        image: "/img/services/2.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
      },
    ],
  },
  getters: {
    getPackage: state => state.packages,
    getSinglePackage: (state) => (packagesId) => {
      let index = state.packages.findIndex(product => product.sid == packagesId);
      return state.packages[index];
    },
  },
  mutations: {
    // createProduct(state, product) {
    //   state.products.push(product);
    // },
    // editProduct(state, updatedProduct) {
    //   const index = state.products.findIndex(product => product.id === updatedProduct.id);
    //   if (index !== -1) {
    //     state.products.splice(index, 1, updatedProduct);
    //   }
    // },
  },
  actions: {
    createProduct({ commit }, product) {
      commit('createProduct', product);
    },
    editProduct({ commit }, product) {
      commit('editProduct', product);
    }
  },
  modules: {
    about: about,
    product: product,
  },
});
