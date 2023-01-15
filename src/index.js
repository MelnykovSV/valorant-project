const section = document.querySelector('.decorated-section');
const container = document.querySelector('.test-container');
const title = document.querySelector('.test-h2');

// ====================First pseudoelement==========================

// --------vertical--------

const sectionHeight = section.offsetHeight;

const sectionPaddingTop = parseInt(
  window.getComputedStyle(section).getPropertyValue('padding-top')
);

const titleHeight = title.offsetHeight;
const deco1Height = sectionHeight - sectionPaddingTop - titleHeight;
section.style.setProperty('--test-height', deco1Height - 1 + 'px');

console.log(getComputedStyle(section).getPropertyValue('--test-height'));

section.style.setProperty(
  '--test-left',
  getComputedStyle(container).getPropertyValue('padding-left') + 'px'
);

// --------horisontal--------

section.style.setProperty('--test-width', title.offsetWidth + 'px');
section.style.setProperty('--test-top', titleHeight + 'px');

// ====================Second pseudoelement==========================
const aside = document.querySelector('.aside');

section.style.setProperty(
  '--second-pseudoelement-right',
  aside.offsetWidth / 3 +
    parseInt(getComputedStyle(container).getPropertyValue('padding-right')) +
    'px'
);

console.log(aside.offsetHeight);

section.style.setProperty(
  '--second-pseudoelement-h',
  sectionHeight -
    aside.offsetHeight -
    parseInt(getComputedStyle(aside).getPropertyValue('bottom')) -
    10 +
    'px'
);

console.log(0 - sectionPaddingTop);
section.style.setProperty(
  '--second-pseudoelement-top',
  0 - sectionPaddingTop + 'px'
);

aside.style.right =
  getComputedStyle(container).getPropertyValue('padding-right');

// --second-pseudoelement-right     --second-pseudoelement-h
