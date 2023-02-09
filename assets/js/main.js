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

function backend(){
    var img01 = document.querySelector('#box01');
    var img02 = document.querySelector('#box02');

    img01.innerHTML = '<img id="img01"  src="./assets/img/icon-javascript.png" alt="">'
    img02.innerHTML = '<img id="img02"  src="./assets/img/icon-python.png" alt="">'
}

function frontend(){
    var img01 = document.querySelector('#box01');
    var img02 = document.querySelector('#box02');
    
    img01.innerHTML = '<img id="img03" src="./assets/img/icon-frontend.jpg" alt="">'
    img02.innerHTML = '<img id="img04" src="./assets/img/icon-react.png" alt="">'
}

function datascience(){
    var img01 = document.querySelector('#box01');
    var img02 = document.querySelector('#box02');

    img01.innerHTML = '<img id="img05" src="./assets/img/inco-mysql.png" alt="">'
    img02.innerHTML = '<img id="img06" src="./assets/img/icon-powerbi.png" alt="">'
}