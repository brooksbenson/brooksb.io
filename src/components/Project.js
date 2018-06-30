import React from 'react';
import YouTube from 'react-youtube';

export default props => {
  return (
    <article className="project">
      <header className="project__header">
        <a href={props.url}>
          <h3 className="project__heading">{props.title}</h3>
        </a>
        <div className="project__tech">{props.techLogos}</div>
      </header>
      <div className="project__video-wrapper">
        <YouTube
          className="project__video"
          videoId={props.videoId}
          onReady={e => {
            e.target.pauseVideo();
          }}
        />
      </div>
      <div className="project__about">
        <div className="project__links">
          <a className="project__link" href={props.url}>
            {props.title}
          </a>
          <a className="project__link" href={props.repo}>
            Github Repository
          </a>
        </div>
        <div className="project__description">
          <h4 className="project__description-heading"> Description </h4>
          {props.description}
        </div>
      </div>
    </article>
  );
};
