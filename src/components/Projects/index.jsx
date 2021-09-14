import classes from './index.module.scss';

import Project from './Project';
import GraphqlCountriesApi from '../../../public/images/graphql-countries-api.png';
import BookmarkingLandingPage from '../../../public/images/bookmark-landing-page.png';
import UrlShorteningPage from '../../../public/images/url-shortening-api.png';

function Projects() {
  const projects = [
    {
      image: GraphqlCountriesApi,
      id: 0,
    },
    {
      image: BookmarkingLandingPage,
      id: 1,
    },
    {
      image: UrlShorteningPage,
      id: 2,
    },
  ];

  return (
    <section className={ classes.projects }>
      <div className={ classes.container }>
        {projects.map(({ image, id }) => (
          <Project key={ id } image={ image } />
        ))}
      </div>
    </section>
  );
}

export default Projects;
