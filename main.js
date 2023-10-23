// menu-botton
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// menu-botton-end

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeout(){
    setInterval(loader, 3000);
}
window.onload = fadeout;


