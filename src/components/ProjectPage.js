import React from 'react';
import Project from './Project';
import ReactLogo from '../svgs/react.svg';
import ReduxLogo from '../svgs/redux.svg';
import FirebaseLogo from '../svgs/firebase.svg';
import WebpackLogo from '../svgs/webpack.svg';
import SassLogo from '../svgs/sass.svg';
import JestLogo from '../svgs/jest.svg';
import projectData from '../data/projects';

const nameToLogo = name => {
  switch (name) {
    case 'react':
      return <ReactLogo key={name} height={25} width={25} />;
    case 'redux':
      return <ReduxLogo key={name} height={25} width={25} />;
    case 'firebase':
      return <FirebaseLogo key={name} height={25} width={25} />;
    case 'webpack':
      return <WebpackLogo key={name} height={25} width={25} />;
    case 'sass':
      return <SassLogo key={name} height={25} width={25} />;
    case 'jest':
      return <JestLogo key={name} height={25} width={25} />;
  }
};

export default () => (
  <section className="project-section content-offset">
    <div className="project-section__content">
      <h2 className="project-section__heading">Projects</h2>
      {projectData.map(p => (
        <Project
          key={p.title}
          title={p.title}
          videoId={p.videoId}
          techLogos={p.tech.map(nameToLogo)}
          url={p.url}
          repo={p.repo}
          description={p.description}
        />
      ))}
    </div>
  </section>
);
