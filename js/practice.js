const containers = document.querySelectorAll('.match-word-box');

containers.forEach((container) => {
  const submitButton = container.querySelector('.button button');
  const radioButtons = container.querySelectorAll('.custom-radio input');

  submitButton.addEventListener('click', () => {
    const checkedRadioButton = container.querySelector('.custom-radio input:checked');
    if (checkedRadioButton) {
      const nextContainer = container.nextElementSibling;

      container.parentNode.scrollTo({
        left: nextContainer.offsetLeft,
        behavior: 'smooth'
      });
    }
  });
});
