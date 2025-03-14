let casa = document.querySelector('#home');

let above = document.querySelector('#sobre-mi');
let xperience = document.querySelector('#experiencia');

let cajita = document.querySelectorAll('aside>a>div');

// console.log(cajita);
console.log(casa);

casa.addEventListener('mouseover', ()=>{
    console.log('hola');
    cajita[0].classList.add('circulo');
});

casa.addEventListener('mouseleave', ()=>{
    console.log('adios');
    cajita[0].classList.remove('circulo');
});

above.addEventListener('mouseover', ()=>{
    console.log('hola');
    cajita[1].classList.add('circulo');
});

above.addEventListener('mouseleave', ()=>{
    console.log('adios');
    cajita[1].classList.remove('circulo');
});

xperience.addEventListener('mouseover', ()=>{
    console.log('hola');
    cajita[2].classList.add('circulo');
});

xperience.addEventListener('mouseleave', ()=>{
    console.log('adios');
    cajita[2].classList.remove('circulo');
});