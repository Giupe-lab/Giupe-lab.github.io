// NAVBAR PREMIUM GV FLEET CONSULTING

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("navbar");

  const activateNavbar = () => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }

      if (currentScroll > lastScrollTop && currentScroll > 150) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
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
