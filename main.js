
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

nyexp.addEventListener('click', function(){
    menuIcon.classList.add('expandir')
})

menuIcon.addEventListener('click', function(){
    menuIcon.classList.remove('expandir')
})


