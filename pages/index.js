function main() {

  const headerContainer = document.querySelector(".header-container");
  header(headerContainer);
  const footerContainer = document.querySelector(".footer-container");
  footer(footerContainer);
  const contactMeContainer = document.querySelector(".contact-me-container");
  
  contactMe(contactMeContainer);
  const cardContainers = document.querySelectorAll(".my-services__card-container");
  
  // for (const cardContainer of cardContainers) {
  //   card(cardContainer)
  // }

}

main();
