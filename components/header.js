function showMenu() {
  const headerLinks = document.querySelector(".header__hidden-links");
  const navbarButton = document.querySelector(".navbar__button");
  const navbarCloseButton = document.querySelector(".header__links-button");

  navbarButton.addEventListener("click", () => {
    headerLinks.style.display = "inherit";
  });

  navbarCloseButton.addEventListener("click", () => {
    headerLinks.style.display = "none";
  });
}

function header(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
    <div class="header">
            <div class="navbar__logo"><h3>Mi Logo</h3></div>
            <button class="navbar__button"><i class="fa-solid fa-bars"></i></button>
            <div class="header__hidden-links">
                <div class="header__links-button">X</div>
                <div class="links">
                    <a href="./portfolio.html">Portfolio</a>
                    <a href="./my-services.html">Servicios</a>
                    <a href="./contact-me.html">Contacto</a>
                </div>
            </div>
    </div>
    `;

  el.appendChild(headerEl);
  showMenu();
}
