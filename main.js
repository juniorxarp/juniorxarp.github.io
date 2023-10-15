
function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        },75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);


// function para selecionar as linhas
var menuItem = document.querySelectorAll('.item-menu')

function select(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', select)
)
// function para expander

var nyexp = document.querySelector('#btn-menu')
var menuIcon = document.querySelector('#menu-mobile')
var overlay = document.querySelector('#overlay-menu')

nyexp.addEventListener('click', function(){
    menuIcon.classList.add('expandir')
})

menuIcon.addEventListener('click', function(){
    menuIcon.classList.remove('expandir')
})

overlay.addEventListener('click', function(){
    menuIcon.classList.remove('expandir')
})


// rolagem 
// var RolarEsp = document.querySelector('#esp')
// var RolarSobre = document.querySelector('#sobre')

// RolarEsp.addEventListener('click', ()=>{
//     document.getElementById('especialidades').scrollIntoView({
//         behavior:'smooth'
//     })
// })




// document.addEventListener('DOMContentLoaded', function() {
//     const irAte = document.getElementById('especialidades');

//    irAte.addEventListener('click', function() {
//         // Rolar suavemente para a âncora do topo
//         document.getElementById('especialidades').scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
