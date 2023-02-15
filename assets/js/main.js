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

// Botão Back End
function backend(){
    var img01 = document.querySelector('#box01');
    var img02 = document.querySelector('#box02');

    img01.innerHTML = '<img id="img01"  src="./assets/img/icon-javascript.png" alt="">'
    img02.innerHTML = '<img id="img02"  src="./assets/img/icon-python.png" alt="">'
}

// Botão Front End
function frontend(){
    var img01 = document.querySelector('#box01');
    var img02 = document.querySelector('#box02');
    
    img01.innerHTML = '<img id="img03" src="./assets/img/icon-frontend.jpg" alt="">'
    img02.innerHTML = '<img id="img04" src="./assets/img/icon-react.png" alt="">'
}

// Botão Data Science
function datascience(){
    var img01 = document.querySelector('#box01');
    var img02 = document.querySelector('#box02');

    img01.innerHTML = '<img id="img05" src="./assets/img/inco-mysql.png" alt="">'
    img02.innerHTML = '<img id="img06" src="./assets/img/icon-powerbi.png" alt="">'
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