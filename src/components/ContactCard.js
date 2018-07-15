import React from 'react';
import ImageParagraph from './ImageParagraph';

const ContactCard = () => (
  <section className="contact-section">
    <ImageParagraph
      className="contact-section__about-me"
      imgUrl="../images/me.jpg"
      imgAlt="An image of me"
    >
      Hey, my name is Brooks, and this is my portfolio; thanks so much for
      checking it out. Below you'll find some demos of my personal projects. If
      you want to connect, try my{' '}
      <a href="https://www.linkedin.com/in/brooks-benson/">LinkedIn</a> profile,
      or if you want to see some code, try my{' '}
      <a href="https://github.com/brooksbenson/">Github</a>. Hope you have an
      awesome day.
    </ImageParagraph>
  </section>
);

export default ContactCard;
