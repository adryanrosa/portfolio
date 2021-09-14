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
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABI1BMVEUzPEw9RlU1P04rNUUsNkYsNkUwOkoxOkgnMUAtOUgqNUUkLTwkLDwiKzooMUAqNEUoMD8wKDZLJzM4KDkvLUgoKEEhNjs+SFMwM0hIPjktKjhfGyWdAgJxDyloYopGQ3IsXEOysa9XQ3e5YCxQIi9TISybERVkGS9WT3o+OmUqVUWOlJZNQmmXWzFFJTMqMUA4PEssMkI0OksrMkMyPUsvOkkwOUgzO0gnLjwyPEwoMkIzPUwqNEMxOkksNUUuN0YxO0omLjwmKTgwKjgqKjkpLkAjKT4lLkMmLkMjKjkiKjckKzlLHSieFAttISlsOWpCNGpjaqJyeK5EJTNMMyo3Iy8jGyU7FwAtFyc6FHxAL3h5gL6SmM+AKUG0SFlPISz/////+vl6AAAAAWJLR0Rgxbd8EAAAAAd0SU1FB+UJDhQrJDbOJ8cAAAB2SURBVAjXY2BgZGJmYWFhZWNn4ODk4uDm4eXjF2AQFBIWERUTl5CUYpCWkZWTV1BUUlZhUFVT19DU0tbR1WPQNzA0MjYxNTO3YOCztLK2sbWzd3BkcHJ2cXVz9/D08mbw8fXzDwgMCg4JZQgLj4iMio6JjYsHAIBtEe9GvQulAAAAJnRFWHRDcmVhdGlvbiBUaW1lAHRlciAxNCBzZXQgMjAyMSAxNzoyNDo0OHL+QvgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMTRUMjA6NDM6MTErMDA6MDBGPR8tAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTE0VDIwOjQzOjExKzAwOjAwN2CnkQAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAASUVORK5CYII=',
      title: 'GraphQL Countries API with color theme switcher',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo eligendi dolores odio minus laboriosam rem expedita similique dicta quo!',
      tools: ['Next', 'Webpack', 'Sass', 'BEM', 'Gulp', 'PostCSS'],
    },
    {
      id: 1,
      image: BookmarkingLandingPage,
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAz1BMVEX+/v/18vn7+/z////9/f37/Pz87/D/2tv8+/v8+/3+/v7///7///3//fn/9vP8/PvGttunh86kgM2miMzi3Onh3+XZ2N/j4uf19fbArNy4kOq2i+yuieDQxeDo5+v39/n4+Pne3eD08/D5+/vi3+uUXtX//v/z7/n18/j6+vvc2uLw7vX6+/3j3e2BPdH9/P/Pr/bi0ff9/vz8/PzQzdPPxdLNxtq9sNB7NM77+f79+/7o6eu7pNl9OM13LsyCMd/+/P/v4/3s3v3t4fv8+/xDbIFEAAAAAWJLR0QDEQxM8gAAAAd0SU1FB+UJDhQrJDbOJ8cAAABuSURBVAjXY2BgZGJmZmFlY+dgYObkYmbm5uHl42dgZubi4hIQFBIWYeASFROXkJSSlpFl4JKTk1dQVFJWUWVQU9fQVNDS1tHVY9A3MDQyNjE1M7dgYLa0Yma2trG1sweaAAIOjk7OYKamC5DgBgC9hAoR0woojwAAACZ0RVh0Q3JlYXRpb24gVGltZQB0ZXIgMTQgc2V0IDIwMjEgMTc6MjU6MDnZKdAPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA5LTE0VDIwOjQzOjEwKzAwOjAw4EoUmQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOS0xNFQyMDo0MzoxMCswMDowMJEXrCUAAAAZdEVYdFNvZnR3YXJlAGdub21lLXNjcmVlbnNob3TvA78+AAAAAElFTkSuQmCC',
      title: 'Bookmark landing page',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium, modi quisquam at porro eum quibusdam earum veritatis quidem dolorem.',
      tools: ['React', 'Sass', 'CSS Modules'],
    },
    {
      id: 2,
      image: UrlShorteningPage,
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/FBMVEX////s7Oz09PT8/Pz+/v7j+fnT+Pj9/Pz9/f3+/f78+vz49/v09/v7+/vf2uPRyNbQx9XZ0t79+/zj4eqez9m61eH29fje2OLIvs7Hvc3g2+T4/fuH4uMqusKbwM/x7/bt8/Xm7PDw7vL19/iU7Nw3x8g3rbef19/y8Pi48/Oq8fH+//////5x5tZ/z9SUrLqr3uTx8Pf6///5///G9vTV7fHn6PDv8vj29vrl4OjY0N3Y0d3Y0Nza0d3c0uDb0eDp4+2ijq+hja6mk7Kkkq6lkq6KhaU+eJyPlbX7+fvs6/KijrKVfaeZgqqYgaiSfZ9/c5VUbJKYlLbw7/XKg5FDAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UJDhQrJDbOJ8cAAABxSURBVAjXBcGFAsFQAEDRi4dhmmmT0zbdPc3U//+Lc8BmdwhwutwgSR6B1yf7IRAMhSPRWFyBRDKVzmRzeRUKxVK5UtVqdWg0W+1OVzd60B/AcDSeTBGz+WK5Wm+2AmW3P5jH0/ly5XZ/PK3X+/P9/QHahg3JwBYP7gAAACZ0RVh0Q3JlYXRpb24gVGltZQB0ZXIgMTQgc2V0IDIwMjEgMTc6MjU6MDCg9WirAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA5LTE0VDIwOjQzOjExKzAwOjAwRj0fLQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOS0xNFQyMDo0MzoxMSswMDowMDdgp5EAAAAZdEVYdFNvZnR3YXJlAGdub21lLXNjcmVlbnNob3TvA78+AAAAAElFTkSuQmCC',
      title: 'URL shortening API landing page',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia corporis ducimus cupiditate expedita officiis, repellendus est officia inventore fugit sunt modi, hic esse nulla.',
      tools: ['React', 'Sass', 'BEM'],
    },
  ];

  return (
    <section className={ classes.projects }>
      <div className={ classes.container }>
        {projects.map(({ id, image, placeholder, title, tools, text }) => (
          <Project
            key={ id }
            image={ image }
            placeholder={ placeholder }
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
