import PhonesPage from "./phonesPage.js";
import Cart from "./cart.js";
import Sort from "./sort.js";

const app = new PhonesPage({element: document.querySelector(".phones-page")});
const shoppingCart = new Cart ({element: document.querySelector(".shopping-cart")});
const sort = new Sort({element:document.querySelector(".sort")});