function contactMe(el){
    const contacMeEl = document.createElement("div");
    contacMeEl.innerHTML = `
    <section class="contact">
            <h2 class="contact__title">Escribime</h2>
                <form class="contact__form">
                    <label>
                        <h3 class="contact-form__label">Nombre</h3>
                        <input class="contact-form__input" placeholder="Tu nombre" type="text">
                    </label>
                    <label>
                        <h3 class="contact-form__label">Email</h3>
                        <input class="contact-form__input" placeholder="tu@mail.com" type="email">
                    </label>
                    <label>
                        <h3 class="contact-form__label">Mensaje</h3>
                        <textarea class="contact-form__input"></textarea>
                    </label>
                    <div class="contact-form__submit-cont">
                        <button class="contact-form__submit-button">Enviar <i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                  </form>
        </section>
    `
    el.appendChild(contacMeEl);
}