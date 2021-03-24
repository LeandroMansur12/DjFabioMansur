let imagens = document.querySelectorAll('.small_img');
let mod = document.querySelector('.fundo');
let imagemModal = document.querySelector('#modal_img');
let botClose = document.querySelector('.bt_close');
let srcVal ="";

for(let i=0; i< imagens.length;i++){

    imagens[i].addEventListener('click', function(){

        srcVal = imagens[i].getAttribute('src');
        imagemModal.setAttribute('src', srcVal);
        mod.classList.toggle('modal_active');
    })
}

botClose.addEventListener('click', function(){

    mod.classList.toggle('modal_active');
})



