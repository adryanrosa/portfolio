import classes from './index.module.scss';

function Footer() {
  return (
    <footer className={ classes.footer }>
      <div className={ classes.container }>
        <div className={ classes.flex }>
          Email:
          <a href="mailto:adryan.lmrosa@gmail.com">adryan.lmrosa@gmail.com</a>
        </div>
        <div className={ classes.flex }>
          Phone:
          <a href="tel:+5504142999767555">+55 041 42 999767555</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
