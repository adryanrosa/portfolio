/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import Image from 'next/image';

import classes from './index.module.scss';
import Code from '../public/images/code.svg';

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
          </div>

          <div>
            <Image src={ Code } alt="Code thinking" />
          </div>
        </div>

        <div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque, dolore cum nulla reiciendis iste ea consequuntur ad adipisci saepe quas accusamus delectus asperiores, non earum vel officiis neque dicta.</h3>
        </div>
      </div>
    </main>
  );
}
