function cargarComponentes() {
  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);
  const footerContainer = document.querySelector(".footer-container");
  footer(footerContainer);
  const contactMeContainer = document.querySelector(".contact-me-container");
  contactMe(contactMeContainer);
}

function main() {
  cargarComponentes();
  const infoAboutMe = document.querySelector(".about-me");
  aboutMe(infoAboutMe);
}

main();
