import Image from 'next/image';

import classes from './index.module.scss';
import Button from '../../../UI/Button';

import Github from '../../../../public/icons/github.svg';
import Live from '../../../../public/icons/display.svg';

function Project({ image, title, tools, text }) {
  return (
    <div className={ classes.project }>
      <div>
        <Image src={ image } />
      </div>

      <div>
        <h2>{title}</h2>

        <div className={ classes.buttons }>
          {tools.map((tool) => <Button key={ tool }>{tool}</Button>)}
        </div>

        <p>{text}</p>
        <p>{text}</p>

        <div className={ classes.icons }>
          <Image
            src={ Github }
            alt="Github"
            width={ 24 }
            height={ 24 }
          />
          <Image
            src={ Live }
            alt="Live Site"
            width={ 24 }
            height={ 24 }
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
