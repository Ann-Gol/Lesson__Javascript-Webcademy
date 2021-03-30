

//Нашли все заголовки тфбов по атрибуту

const tabHeaders = document.querySelectorAll('[data-tab]');

// Нашли все контент боксы

const contentBoxes = document.querySelectorAll('[data-tab-content]');



tabHeaders.forEach(function (item){
    item.addEventListener('click', function (){          
      
      // 1. Скрыть все contentBox и скрыть

      contentBoxes.forEach(function(item){
          item.classList.add('hidden');
      });
      
      // 2. Выбрать нужный contentBox и показать

      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('hidden')
    })
})

