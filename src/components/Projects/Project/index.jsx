import Image from 'next/image';

import classes from './index.module.scss';

function Project({ image }) {
  return (
    <div className={ classes.project }>
      <Image src={ image } />
    </div>
  );
}

export default Project;
