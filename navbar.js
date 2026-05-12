document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
<nav class="nav">
  <div class="container nav-inner">
    <a class="logo" href="index.html">
      <img src="logo.png" alt="GV Fleet Consulting">
      <span>Fleet Consulting</span>
    </a>

    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="fleet.html">La mia flotta</a>
      <a href="simulatore.html">Simulatore</a>
      <a href="case-study.html">Case Study</a>
      <a href="storychisiamo.html">Chi siamo</a>
      <a href="contatti.html">Contatti</a>

      <a class="btn whatsapp"
         href="https://api.whatsapp.com/send?text=Ciao%2C%20vorrei%20informazioni"
         target="_blank" rel="noopener">
        WhatsApp
      </a>
    </div>
  </div>
</nav>
`;

  document.getElementById("navbar").innerHTML = navbar;

  const nav = document.querySelector(".nav");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const current = window.pageYOffset;

    if (current > 80) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");

    if (current > lastScroll && current > 140) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }

    lastScroll = current;
  });

  const links = document.querySelectorAll(".nav-links a");
  const page = window.location.pathname.split("/").pop();

  links.forEach(a => {
    if (a.getAttribute("href") === page ||
        (page === "" && a.getAttribute("href") === "index.html")) {
      a.classList.add("active");
    }
  });
});
