/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import Image from 'next/image';

import classes from './index.module.scss';
import Code from '../public/images/code.svg';
import Button from '../src/UI/Button';

export default function Home() {
  return (
    <main className={ classes.hero }>
      <div className={ classes.container }>
        <div className={ classes.grid }>
          <div>
            <h1>
              Hey,
              <br />
              I&apos;m Adryan
            </h1>

            <h2>Front End Developer</h2>

            <div className={ classes.icons }>
              <Image src="/icons/github.svg" width={ 24 } height={ 24 } alt="Github" />
              <Image src="/icons/linkedin.svg" width={ 24 } height={ 24 } alt="Linkedin" />
            </div>
          </div>

          <div>
            <Image src={ Code } alt="Code thinking" />
          </div>
        </div>

        <div className={ classes.buttons }>
          <Button>View Projects</Button>
          <Button>Download Resume</Button>
        </div>
      </div>
    </main>
  );
}
