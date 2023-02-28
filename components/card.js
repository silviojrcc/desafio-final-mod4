function card(el, service){
    const cardEl = document.createElement("div");
    cardEl.classList.add("my-services__card-container")
    cardEl.innerHTML = `
    <article class="my-services__card">
        <img class="my-services__card-img" src="${service.image}" alt="">
        <h3 class="my-services__card-title">${service.title}</h3>
        <p class="my-services__card-description">${service.description}</p>
    </article>
    `

    el.appendChild(cardEl);
}