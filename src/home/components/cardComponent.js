export let cardComponent = (product) => {
  return ` <div class="col-12 col-md-6 col-lg-3 shadow-sm rounded-4 p-3">
        <div class="text-center" id="${product.id}">
          <img
          class=" object-fit-contain"
            id="img"
            src=${product.image}
            alt=""
            width="300px"
            height="200px"
          />
        </div>
        <div class="p-1">
          <h3 class="text-primary text-truncate" onclick="goto(${product.id})">${product.title}</h3>
          <p class="text-secondary">${product.category}</p>
          <div class="d-flex justify-content-between">  
            <span class="h4 text-secondary">${product.price} $</span>
            <button class=" p-2 bg-primary text-white border-0 rounded-circle" id="${product.id}" onclick="addToCart(this)">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>`;
};

// /productdetials/
