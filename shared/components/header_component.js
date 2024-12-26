import { getCartItems, getUser } from "../functions.js";

// function Logout(){
// }

export let header_component = () => {
  console.log("header_component called");
  let CartLength = getCartItems().length;

  let user = getUser();

  return `
  <nav class="navbar navbar-expand-lg bg-body-white">
  <div class="container-fluid">
    <a class="text-decoration-none" href="/src/home/home.html">
  <svg
    id="logo-35"
    width="50"
    height="39"
    viewBox="0 0 50 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
      class="ccompli1"
      fill="#007AFF"
    ></path>
    <path
      d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
      class="ccustom"
      fill="#312ECB"
    ></path>
  </svg>
   <span>Ecomma</span>
 </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="ms-auto navbar-nav me-5">
        <a class="nav-link active" aria-current="page" href="#"> Products</a>
        <a class="nav-link" href="#">Contact Us</a>
        <a class="nav-link" href="#">Products</a>
      </div>
       ${
         user
           ? `<a onclick="logoutFunc()" class="nav-link" href="/src/Auth/register/register.html"><button class="btn btn-primary">Logout</button></a>`
           : `<a class="nav-link" href="/src/Auth/register/register.html"><button class="btn btn-primary">Register</button></a>`
       }
    </div>
      
  </div>
</nav>
  `;
};

// window  - > shared.js  - > all pages -> link

window.logoutFunc = () => {
  console.log("ddada");
  localStorage.removeItem("cart");
  localStorage.removeItem("user");
  window.location.href = "/src/Auth/Login/login.html";
  // localStorage.setItem("cart",json.stringify([]));
};

/* <nav class="navbar navbar-expand-sm bg-light ">

<div class="container-fluid">
  <!-- Links -->
  <ul class="navbar-nav row">
 <li class="nav-item">
      <a class="text-decoration-none" href="/src/home/home.html">
  <svg
    id="logo-35"
    width="50"
    height="39"
    viewBox="0 0 50 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
      class="ccompli1"
      fill="#007AFF"
    ></path>
    <path
      d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
      class="ccustom"
      fill="#312ECB"
    ></path>
  </svg>
   <h2 >Ecomma</h2>
 </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Products</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Products</a>
    </li>
    <li class="nav-item">
      <a class="text-decoration-none" href="/src/cart/cart.html">
<i class="fa-solid fa-cart-shopping"></i>
<span>Cart</span>
</a>
    </li>
<li class="nav-item">

    </li>
<li class="nav-item">
   <h3>Alaa</h3>
    </li>
  </ul>
</div>

</nav> */
