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
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABGlBMVEUyP0s4RVAxPkoqN0MpN0MtO0cuO0coMz4wOUQqNUEmMj8iLjohLzkjMDslMj0tOkMmMj1gMDaALC5SMkFNZHU1TWMsSTuRlZJCV3CHblBjODhnNDqVMzRXNUNVboA6U2owTkCanZlGXHWPdVVnOjkvOUQ4QEwrNkE0QE0qNkMxP0kyQEstOkU3Q0wmND8pOEQkMj0rOUQlMz4pNUEnNEAmMz4rOEQjMTxLLjV5NDJQNT1PTGEuQVo/WnhXcpAyMkE2NjIyKzIvIidMJxozKzY0SnY1T3Bae6GJpshZQVOPZm1gNz4oNUAlMz8vQFAmNkUxQlExQlMyOUVJSFIvND8qN0IwPkoyP0opNkEuO0YpN0IwP0olMj7///8PPfTKAAAAAWJLR0Rdnd8wAQAAAAd0SU1FB+UJDhY1JZYM/OAAAAB2SURBVAjXY2BgZGJmZmZhZmVjYOfg5OLm4eXjF2AQFBIWERUTl5CUYpCWkZWTV1BUUlZhUFVT19DU0tbRZWfQ0zcwNDI2MTUzZ7CwtLK2sbWzd3BkcHJ2cXVz9/D08mbwMfT18w8IDAoOYQgN8wmPiDSMio4BAHY4EXVJgvlGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA5LTE0VDIyOjUzOjI2KzAwOjAwrMdMywAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOS0xNFQyMjo1MzoyNiswMDowMN2a9HcAAAAASUVORK5CYII=',
      title: 'GraphQL Countries API with color theme switcher',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo eligendi dolores odio minus laboriosam rem expedita similique dicta quo!',
      tools: ['Next', 'Sass', 'BEM', 'Gulp', 'PostCSS', 'Webpack'],
      github: 'https://github.com/adryanrosa/graphql-countries-api-with-color-theme-switcher',
      live: 'https://graphql-countries-api-with-color-theme-switcher-adryanrosa.vercel.app/',
    },
    {
      id: 1,
      image: BookmarkingLandingPage,
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEX9/v/19fj8/P3////+/v79/v7++vr/4eD/+/v+/v/y8vXm6O3m5uzl4ujy8vT9/f3t7vDr6+7u7/H6+vq4vdeUoNaQndaMmtK0utH8/Pze3+Pi4+bx8fP4+PnZ2eDr6vDv8fnp6vSjq9D9/f7q7Pfz9Pj7+/v6+vva2t/t7fH5+fr09PWKlsv6+/7R2Pbr7fnU1NjBv8ymrMyiqMlre8Lk5/KuuOekr+Wms+r6+/vz8/Tz8/X8/f1lw7HTAAAAAWJLR0QDEQxM8gAAAAd0SU1FB+UJDhYzBmIxKhQAAABoSURBVAjXY2BgZGJmZmFlY+dgYOZkZmbm4ubh5WPgFxAUEhYRFROXYJCUkpaRlZNXUFRiUFZRVVPX0NTS1mHQ1dPnZzEwNDI2YWAGAS1TM3MLMFOSCUQCmSyWVtaWLGAms426Oj+QAgCpnQhxZcTfqwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOS0xNFQyMjo1MDo1OCswMDowMB0KhYwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDktMTRUMjI6NTA6NTgrMDA6MDBsVz0wAAAAAElFTkSuQmCC',
      title: 'Bookmark landing page',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium, modi quisquam at porro eum quibusdam earum veritatis quidem dolorem.',
      tools: ['React', 'Sass', 'CSS Modules'],
      github: 'https://github.com/adryanrosa/bookmark-landing-page',
      live: 'https://bookmark-landing-page-adryanrosa.vercel.app/',
    },
    {
      id: 2,
      image: UrlShorteningPage,
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/1BMVEX+/v7u7u76+vr////2/f3Z9fb9///+/v/y8fTw7/Ly8fP9/f749Pfq7vLi7PL5+vzT0dnGws3DwMvW1Nv+/f3Q6et2yM2Dt8Pu8fbm6u3f4ubl4+jJ7+Vyzs5MsbiMxMzt8ff+///I8vLN8/Oe49eO1NWcsLqs19vq8Pb7/v77/f3i9/bk8vXu7vPz9Pn3+Pv19fe1scCyrb2zrr6xrbuzrrywrL2Wp7mpscL39vjm5u2Zk6yinbOloLWkn7Shm62SkaRahJh4jaXn5u3u7vTg4Onc2+Xb2uTY1+HW1t/Z2eHc2uPh4Ont7vTv8PXw8fbx8vbo6e7a2uDZ2d/x8vdA7obkAAAAAWJLR0QDEQxM8gAAAAd0SU1FB+UJDhYzBfs4e64AAAB0SURBVAjXY2BgZGIGAhZWNgZ2Dk5OLm4eXj5+BgYBQSFhEVExcQkGdkkpaS4ZWTl5BQZFJWVmZhVVNXUNBmZNLQZmbR1dPX0GA0MjYxNTM3MLSwYraxtbO3sHRydnBhdXN3cPTy9vH18GP/+AwKDgwBB/PwADlA8Q2JQ1qwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOS0xNFQyMjo1MDo1NiswMDowME01/tEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDktMTRUMjI6NTA6NTYrMDA6MDA8aEZtAAAAAElFTkSuQmCC',
      title: 'URL shortening API landing page',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia corporis ducimus cupiditate expedita officiis, repellendus est officia inventore fugit sunt modi, hic esse nulla.',
      tools: ['React', 'Sass', 'BEM'],
      github: 'https://github.com/adryanrosa/url-shortening-api-landing-page',
      live: 'https://url-shortening-api-landing-page-alpha.vercel.app/',
    },
  ];

  return (
    <section className={ classes.projects }>
      <div className={ classes.container }>
        {projects.map(({ id, image, placeholder, title, tools, text, github, live }) => (
          <Project
            key={ id }
            image={ image }
            placeholder={ placeholder }
            title={ title }
            tools={ tools }
            text={ text }
            github={ github }
            live={ live }
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
