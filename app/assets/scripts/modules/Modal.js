import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this)); // bind se koristi kako bi se zadrzao kontekst za this koji je vazio pri pozivanje ove funkcije (kako bi this u openModal metodi imao isti kontekst kao i pri pozivanju te iste metode)

    // clicking the x modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    // return false ima ulogu da spreci defaul ponasanje
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
