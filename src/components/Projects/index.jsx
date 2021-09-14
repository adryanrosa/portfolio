/* eslint-disable max-len */
import classes from './index.module.scss';

import Project from './Project';
import GraphqlCountriesApi from '../../../public/images/graphql-countries-api.gif';
import BookmarkingLandingPage from '../../../public/images/bookmark-landing-page.gif';
import UrlShorteningPage from '../../../public/images/url-shortening-api.gif';

function Projects() {
  const projects = [
    {
      id: 0,
      image: GraphqlCountriesApi,
      title: 'GraphQL Countries API with color theme switcher',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo eligendi dolores odio minus laboriosam rem expedita similique dicta quo!',
      tools: ['Next', 'Webpack', 'Sass', 'BEM', 'Gulp', 'PostCSS'],
    },
    {
      id: 1,
      image: BookmarkingLandingPage,
      title: 'Bookmark landing page',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium, modi quisquam at porro eum quibusdam earum veritatis quidem dolorem.',
      tools: ['React', 'Sass', 'CSS Modules'],
    },
    {
      id: 2,
      image: UrlShorteningPage,
      title: 'URL shortening API landing page',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia corporis ducimus cupiditate expedita officiis, repellendus est officia inventore fugit sunt modi, hic esse nulla.',
      tools: ['React', 'Sass', 'BEM'],
    },
  ];

  return (
    <section className={ classes.projects }>
      <div className={ classes.container }>
        {projects.map(({ id, image, title, tools, text }) => (
          <Project
            key={ id }
            image={ image }
            title={ title }
            tools={ tools }
            text={ text }
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
