fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.querySelectorAll("#navbar").forEach(el => {
      el.innerHTML = data;
    });
  });
