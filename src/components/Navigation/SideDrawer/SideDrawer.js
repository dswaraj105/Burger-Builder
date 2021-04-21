import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../.././../hoc/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <div className={classes.Backdrop}>
      <Backdrop show={props.open} clicked={props.closed}/>
      </div>
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;