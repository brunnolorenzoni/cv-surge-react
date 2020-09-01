
import React from 'react';

import './index.scss';

function ResumeSection() {
  return (
    <section className="resumeSection">
      <h2>Experiências</h2>
      <article>
          <h3>[2020 - Atual] Unicred do Brasil - Zallpy (Outsorcing)</h3>
          <p>Programador Front End</p>
          <p>Tecnologias utilizadas: HTML, CSS, Javascript, JQuery, SQL;</p>
      </article>
      <article>
          <h3>[2017 - 2020] GRUPO RBS PARTICIPAÇÃO S/A - ZERO HORA</h3>
          <p>Programador/Web Designer em Zero Hora/GaúchaZH</p>
          <p>Tecnologias utilizadas: Javascript, JQuery, PHP, React, NodeJs, MariaDB; Pacote Adobe;</p>
      </article>

      <article>
        <h3>[2016 - 2017] GRUPO RBS PARTICIPAÇÃO S/A - Diário Gaúcho</h3>
        <p>Assistente em Diário Gaúcho - Programador</p>
        <p>Tecnologias utilizadas: Javascript, JQuery, HTML, CSS</p>
      </article>

      <div className="div-hr"></div>

      <h2>Educação</h2>
      <article>
          <h3>[2015 - 2021] Faculdade Senac POA</h3>
          <p>Tecnólogo em Sistemas para Internet</p>
      </article>

      <div className="div-hr"></div>

    </section>
  );
}

export default ResumeSection;
