import classes from './index.module.scss';

function Button({ children }) {
  return (
    <button className={ classes.button } type="button">
      {children}
    </button>
  );
}

export default Button;
