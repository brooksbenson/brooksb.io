import React from 'react';
import ImageParagraph from './ImageParagraph';

export default () => (
  <main className="contact-page content-offset">
    <h2 className="contact-page__heading"> Contact </h2>
    <ImageParagraph
      className="contact-page__about-me"
      imgUrl="../images/me.jpg"
      imgAlt="An image of me"
    >
      Thanks so much for checking out my webpage, it means a lot to me. If you
      want to connect , here's a link to my{' '}
      <a href="https://www.linkedin.com/in/brooks-benson/">LinkedIn</a> profile,
      and here's a link to my{' '}
      <a href="https://github.com/brooksbenson/">Github</a> profile. Hope you
      have an awesome day.
    </ImageParagraph>
  </main>
);
