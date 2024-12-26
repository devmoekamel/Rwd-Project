// let base_url = "https://fakestoreapi.in/api/";

import { header_component } from "../../../shared/components/header_component.js";

// import { header_component } from "/shared/components/header_component.js";
let productId = location.href.split("=")[1];
let productDetails_element = document.getElementById("product-section");
let product_detials;

document.body.insertAdjacentHTML("afterbegin", header_component());

let getProductById = async () => {
  try {
    let request = await fetch("https://fakestoreapi.com/products/" + productId);
    // let product = await JSON.parse(await request.text()).product;
    let product = await JSON.parse(await request.text());
    product_detials = product;
    return product;
  } catch (error) {
    console.log("jkj");
  }
};

let productDetial = (product) => {
  return `
  <div class="container mt-5">
    <div class="row row-gap-5" id="product-details">
        <div class="image-container col-12 col-md-12 col-lg-6 text-center ">
          <img  class="p-3 shadow-lg rounded-4" id="img" width="450" height  src="${product.image}" alt="" />
        </div>
        <div class="detials-contianer  col-12 col-md-6 col-lg-6">
          <div class="text-text-center">
            <h2 class="text-body-tertiary">Product Name : <span class="text-primary"> ${product.title} </span></h2>
            <h2 class="text-body-tertiary">Price : <span class="text-primary">${product.price}</span></h2>
            <h2 class="text-body-tertiary"> Category : <span class="text-primary">${product.category}</span></h2>
        
          </div>
          <button class="add-to-cart-btn mt-3 px-5 py-2 bg-primary text-white border-0 rounded-4 text-center" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
    </div>
    </div>
    `;
  s;
};

getProductById().then((product) => {
  console.log(product);
  productDetails_element.classList.value = "";
  console.log(product);
  productDetails_element.innerHTML = productDetial(product);
});
function getCart() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

window.addToCart = (event) => {
  // localStorage.setItem("cart",JSON.stringify());
  // let product = allProducts[event.id - 1];
  let cartItems = getCart();
  let flag = false;
  let productId;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title == product_detials.title) {
      flag = true;
      productId = i;
      break;
    }
  }

  if (!flag) {
    console.log("addedd");
    product_detials.count = 1;
    cartItems.push(product_detials);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // location.reload();
  } else {
    console.log("addedd");

    cartItems[productId].count++;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // location.reload();
  }

  // console.log(allProducts[event.id - 1]);
  // console.log(event.id);
};
