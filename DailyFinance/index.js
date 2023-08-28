let menuicon=document.getElementById('menu-icon');
let navbar=document.querySelector('.menulist');
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let menuitem=document.querySelectorAll('.menu-item');
menuitem.onclick=()=>{
    alert('gg');
    navbar.classList.remove('active');
}
window.onscroll=()=>{
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
