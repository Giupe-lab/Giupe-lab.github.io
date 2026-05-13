// NAVBAR PREMIUM GV FLEET CONSULTING

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("navbar");

  const activateNavbar = () => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

 let lastScrollTop = 0;

const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {

  const currentScroll =
  window.pageYOffset ||
  document.documentElement.scrollTop;

  /* effetto background */

  if(currentScroll > 40){

    navbar.classList.add('scrolled');

  }else{

    navbar.classList.remove('scrolled');

  }

  /* scomparsa navbar */

  if(currentScroll > lastScrollTop && currentScroll > 120){

    navbar.style.transform = 'translateY(-100%)';

  }else{

    navbar.style.transform = 'translateY(0)';

  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  };

  if (mount) {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((html) => {
        mount.innerHTML = html;
        activateNavbar();
      })
      .catch(() => {
        activateNavbar();
      });
  } else {
    activateNavbar();
  }
});
