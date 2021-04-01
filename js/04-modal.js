const modalButtons = document.querySelectorAll("[data-modal-button]");

const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

const allModal = document.querySelectorAll("[data-modal]");

// Кнопки - Открыть модалку

modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector("#" + modalId);
    modal.classList.remove("hidden");
   // Находим внутри открываемой модалки блок Modal Window  и запрещаем ему передавать клики "наверх"
   modal.querySelector('.modal-window').addEventListener('click', function(event){
        event.stopPropagation();
   })
  });
});

// Кнопки - Закрыть модалку

modalCloseButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = this.closest("[data-modal]");
    modal.classList.add("hidden");
  });
});

// Закрытие модалок по фейду

allModal.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
