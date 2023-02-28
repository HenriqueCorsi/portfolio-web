// Nav Bar
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

// Oculta Botão Scroll
function ocultarBtnTop(){
    const btn = document.querySelector('.btn-top');

    if(window.scrollY > 10){
        btn.style.display = 'flex';
    }else{
        btn.style.display = 'none';
    }
}

// Botão de Scroll
function btnTop(){
    const btn = document.querySelector('.btn-top');

    btn.addEventListener('click', function(){
        window.scrollTo(0, 0);
    })

    document.addEventListener('scroll', ocultarBtnTop);
}