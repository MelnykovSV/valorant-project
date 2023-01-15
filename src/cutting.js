addEventListener('resize', cutter);

addEventListener('load', cutter);

function cutter() {
  const sections = document.querySelectorAll('.cut');

  [...sections].map(sec => {
    const container = sec.querySelector('.container-new');
    const cutElementWidth =
      (document.body.clientWidth - container.offsetWidth) / 2 +
      parseInt(getComputedStyle(container).getPropertyValue('padding-right'));
    sec.style.setProperty('--cutting-element-width', cutElementWidth + 'px');
  });
}
