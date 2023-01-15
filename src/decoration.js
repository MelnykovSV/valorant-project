const sections = document.querySelectorAll('.decorated-section');

[...sections].map(sec => {
  // const section = document.querySelector('.decorated-section');
  const container = sec.querySelector('.test-container');
  const title = sec.querySelector('.test-h2');
  const aside = sec.querySelector('.aside');
  console.log(container, title, aside);

  const sectionHeight = sec.offsetHeight;

  const sectionPaddingTop = parseInt(
    window.getComputedStyle(sec).getPropertyValue('padding-top')
  );

  const titleHeight = title.offsetHeight;
  const deco1Height = sectionHeight - sectionPaddingTop - titleHeight;
  sec.style.setProperty('--first-pseudoelement-height', deco1Height - 1 + 'px');

  sec.style.setProperty(
    '--first-pseudoelement-left',
    getComputedStyle(container).getPropertyValue('padding-left') + 'px'
  );

  // --------horisontal--------

  sec.style.setProperty(
    '--first-pseudoelement-width',
    title.offsetWidth + 'px'
  );
  sec.style.setProperty('--first-pseudoelement-top', titleHeight + 'px');

  // ====================Second pseudoelement==========================

  sec.style.setProperty(
    '--second-pseudoelement-right',
    aside.offsetWidth / 3 +
      parseInt(getComputedStyle(container).getPropertyValue('padding-right')) +
      'px'
  );

  sec.style.setProperty(
    '--second-pseudoelement-height',
    sectionHeight -
      aside.offsetHeight -
      parseInt(getComputedStyle(aside).getPropertyValue('bottom')) -
      10 +
      'px'
  );

  sec.style.setProperty(
    '--second-pseudoelement-top',
    0 - sectionPaddingTop + 'px'
  );

  aside.style.right =
    getComputedStyle(container).getPropertyValue('padding-right');
});

// ====================First pseudoelement==========================

// --------vertical--------
