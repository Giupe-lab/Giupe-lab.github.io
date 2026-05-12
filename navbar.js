document.getElementById("navbar").innerHTML = `

<nav class="nav">

  <div class="container nav-inner">

    <a class="logo" href="index.html">
      <img src="logo.png" alt="GV Fleet Consulting">
      <span>GV Fleet Consulting</span>
    </a>

    <div class="nav-links">

      <a href="index.html">Home</a>

      <a href="fleet.html">La mia flotta</a>

      <a href="simulatore.html">Simulatore</a>

      <a href="case-study.html">Case Study</a>

      <a href="storychisiamo.html">Chi siamo</a>

      <a href="contatti.html">Contatti</a>

      <a
        class="btn-whatsapp"
        href="https://api.whatsapp.com/send?text=Ciao%2C%20vorrei%20informazioni"
        target="_blank"
      >
        WhatsApp
      </a>

    </div>

  </div>

</nav>

`;



/* =========================
   ACTIVE LINK
========================= */

const links = document.querySelectorAll(".nav-links a");

const currentPage =
window.location.pathname.split("/").pop();

links.forEach(link => {

  const linkPage = link.getAttribute("href");

  if(linkPage === currentPage){

    link.classList.add("active");

  }

});



/* =========================
   SCROLL EFFECT
========================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    nav.classList.add("scrolled");

  }else{

    nav.classList.remove("scrolled");

  }

});
