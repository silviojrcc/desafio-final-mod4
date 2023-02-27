function card(el){
    const cardEl = document.createElement("div");
    cardEl.innerHTML = `
    <article class="my-services__card">
        <img class="my-services__card-img" src="./images/Course Website Landing Page Thumbnail 1.png" alt="">
        <h3 class="my-services__card-title">Desarrollador de páginas web</h3>
        <p class="my-services__card-description">Creacion de paginas webs, totalmente responsive y mobile first. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
    `

    el.appendChild(cardEl);
}