const btn = document.getElementById('btnChangeTheme')


function changeColor() {

    if(document.body.style.backgroundColor === 'var(--cinza-fundo)') {
        document.body.style.backgroundColor = 'var(--preto-fundo)'       
    } else {
        document.body.style.backgroundColor = 'var(--cinza-fundo)'
    }


}

btn.addEventListener('click', function() {

    changeColor()

})
