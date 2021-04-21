import React from 'react';

import classes from './Logo.module.css';
import LogoImg from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={LogoImg} alt="MyBurger" />
  </div>
);

export default logo;