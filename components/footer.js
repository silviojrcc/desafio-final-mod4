function footer(el){
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `
    <footer class="footer">
        <div class="footer__logo"><h3>Mi logo</h3></div>
        <div class="footer__links">
            <a href="./index.html" class="footer__link"><span class="footer_link-ico"><i class="fa-solid fa-house"></i></span>Home</a>
            <a href="./my-services.html" class="footer__link"><span class="footer_link-ico"><i class="fa-regular fa-user"></i></span>Servicios</a>
            <a href="./contact-me.html" class="footer__link"><span class="footer_link-ico"><i class="fa-solid fa-phone"></i></span>Contacto</a>
        </div>
        <div class="footer__socials">
            <a href="" class="footer__social-link"><img src="./images/social-linkdin.png" alt=""></a>
            <a href="" class="footer__social-link"><img src="./images/social-github.png" alt=""></a>
            <a href="" class="footer__social-link"><img src="./images/social-twitter.png" alt=""></a>
        </div>
        <a href="" class="footer__copyright">©2022 - https://apx.school</a>
    </footer>
    `
    el.appendChild(footerEl);
}