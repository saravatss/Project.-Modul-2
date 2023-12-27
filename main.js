const buttonOpen = document.querySelectorAll('.button-open');

buttonOpen.forEach(function(el) {
el.addEventListener('click', function () {
      const target = this.dataset.target;
      const accordeon = document.querySelector(target);

      accordeon.classList.toggle('open');
  });
});




