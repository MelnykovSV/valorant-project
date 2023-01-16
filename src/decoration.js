addEventListener('resize', decoration);
addEventListener('load', decoration);

function decoration() {
  const sections = document.querySelectorAll('.decorated-section');

  console.log(window.innerWidth);

  if (window.innerWidth >= 882) {
    [...sections].map(sec => {
      // ====================First pseudoelement==========================

      // --------vertical--------
      const container = sec.querySelector('.container-new');
      const title = sec.querySelector('.decorated-title');
      const aside = sec.querySelector('.decorated-aside');
      console.log(container, title, aside);

      const sectionHeight = sec.offsetHeight;

      const sectionPaddingTop = parseInt(
        window.getComputedStyle(sec).getPropertyValue('padding-top')
      );

      const titleHeight = title.offsetHeight;
      const deco1Height = sectionHeight - sectionPaddingTop - titleHeight;
      sec.style.setProperty(
        '--first-pseudoelement-height',
        deco1Height - 1 + 'px'
      );

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
          parseInt(
            getComputedStyle(container).getPropertyValue('padding-right')
          ) +
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
        parseInt(
          getComputedStyle(container).getPropertyValue('padding-right')
        ) -
        12 +
        'px';
    });
  }
}

// =================EXAMPLE OF SECTION TO BE DECORATED================

/* <section class="section decorated-section">
  <div class="container">
    <h2 class="decorated-title">Title of random length fghjjfgjhgjjhgjhjhgj</h2>
    <p class="test-p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure
      pariatur a excepturi, velit incidunt perferendis illum, distinctio
      delectus voluptatum reprehenderit ducimus dignissimos. Voluptas
      voluptatibus velit adipisci amet quaerat omnis, sed esse. Illum nulla
      blanditiis quidem eum laboriosam obcaecati aliquam. Modi laboriosam
      voluptatum dignissimos sint distinctio incidunt? Amet quia molestias,
      nulla enim ab dolor maiores dolores quisquam aspernatur, nesciunt
      assumenda labore quidem deserunt vero accusamus, eum debitis voluptates.
      Dolore aliquam, est tempore corrupti libero a nihil, non cumque neque enim
      doloremque rerum sed possimus? Ipsa inventore, ea pariatur dolores omnis
      labore optio accusantium aspernatur natus at incidunt magni quidem qui
      impedit praesentium debitis odit. Ut, magni officia corrupti accusamus
      omnis sint mollitia cupiditate velit, tenetur laborum ducimus repellat
      libero, expedita provident impedit nihil tempore delectus! Veritatis, nemo
      eius voluptatibus modi quibusdam, voluptatem, non vero id adipisci quos
      veniam fugiat deserunt! Eligendi excepturi illo corporis harum aut unde
      blanditiis provident optio, molestias natus ipsum exercitationem cumque
      autem quibusdam quos omnis soluta debitis minima velit ducimus est,
      voluptate pariatur facere temporibus? Non est, deserunt velit voluptates
      nihil, odit inventore excepturi ea quasi adipisci maiores animi? Porro
      illum enim sit ex necessitatibus, eos impedit tempora facere rerum ducimus
      veritatis voluptatibus tempore fugiat repudiandae consequuntur, quos
      assumenda debitis reprehenderit quam eveniet vero et! Iusto, commodi?
      Expedita laudantium rerum suscipit perspiciatis maxime, omnis excepturi
      ipsum voluptates eum tenetur voluptatum. Porro atque blanditiis cum
      tempora vero! Culpa possimus ullam porro iure minima, obcaecati eum
    </p>
  

    <p class="decorated-aside">Lorem ipsum dolor</p>
  </div>
</section> */

// } else {
//   const sections = document.querySelectorAll('.decorated-section');
//   [...sections].map(sec => {
//     sec.style.setProperty('--first-pseudoelement-height', 0);
//     sec.style.setProperty('--first-pseudoelement-left', 0);
//     sec.style.setProperty('--first-pseudoelement-top', 0);
//     sec.style.setProperty('--first-pseudoelement-width', 0);

//     sec.style.setProperty('--second-pseudoelement-height', 0);
//     sec.style.setProperty('--second-pseudoelement-right', 0);
//     sec.style.setProperty('--second-pseudoelement-top', 0);
//   });
