document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("navbar");
  if (!el) return;

  el.innerHTML = `
    <nav class="nav">
      <div class="nav-inner container">

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
             href="https://api.whatsapp.com/send?text=Ciao%20vorrei%20informazioni%20sulla%20flotta"
             target="_blank">
            WhatsApp
          </a>
        </div>

      </div>
    </nav>
  `;

  // evidenzia pagina attiva
  const page = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) {
      a.classList.add("active");
    }
  });

  // effetto scroll navbar
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 80);
  });
});
