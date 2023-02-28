function footer(el){
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `
    <footer class="footer">
        <div class="footer__logo"><a href="./index.html"><h3>Mi logo</h3></a></div>
        <div class="footer__links">
            <a href="./index.html" class="footer__link"><span class="footer_link-ico"><i class="fa-solid fa-house"></i></span>Home</a>
            <a href="./my-services.html" class="footer__link"><span class="footer_link-ico"><i class="fa-regular fa-user"></i></span>Servicios</a>
            <a href="./contact-me.html" class="footer__link"><span class="footer_link-ico"><i class="fa-solid fa-phone"></i></span>Contacto</a>
        </div>
        <div class="footer__socials">
            <a href="https://www.linkedin.com/in/silvioruiz/" class="footer__social-link"><img src="./images/social-linkdin.png" alt=""></a>
            <a href="https://github.com/silviojrcc" class="footer__social-link"><img src="./images/social-github.png" alt=""></a>
            <a href="https://twitter.com/fabiansatodev/status/1440094020416544769/photo/1" class="footer__social-link"><img src="./images/social-twitter.png" alt=""></a>
        </div>
        <a href="https://apx.school" class="footer__copyright">©2022 - https://apx.school</a>
    </footer>
    `
    el.appendChild(footerEl);
}