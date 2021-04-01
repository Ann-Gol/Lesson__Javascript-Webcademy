

// Находим нужные элементы: копка модалки, модалка и кнопка закрытия /////

const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');


// прослушиваеи клик на кнопке открытия и открываем модалку  //
button.addEventListener('click', function(){    
    modal.classList.remove('hidden');  
}); 


// прослушиваем  клик на кнопке закрытия и закрываем //


   buttonClose.addEventListener('click', function(){        
    modal.classList.add('hidden');
});


modal.addEventListener('click', function(){
    modal.classList.add('hidden');
})


modal.querySelector('.modal-window').addEventListener('click', function(event){
  event.stopPropagation();
})