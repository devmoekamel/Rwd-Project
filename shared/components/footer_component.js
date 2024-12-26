export let footer_component = () => {
  console.log("footer called");
  return ` <footer class="my-3">
      <div id="footer-contianer" class="row justify-content-around align-items-center gy-3">
      <div class="col-12 col-md-6 col-lg-4 ">
        <a href="/src/home/home.html" class=" ">
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
            ></path></svg
        ></a>
         <span class="h3"> Ecomma</span>
        </div>
        <p class="col-md-4">&copy; 2024 Your Company Name. All rights reserved.</p>
        <div class="col-md-4 row gy-3" id="icon-contianer">
          <i class="fa-brands fa-facebook col-md-3"></i>
          <i class="fa-brands fa-twitter col-md-3"></i>
          <i class="fa-brands fa-instagram col-md-3 ></i>
          <i class="fa-brands fa-youtube col-md-3"></i>
        </div>
      </div>
    </footer>`;
};

