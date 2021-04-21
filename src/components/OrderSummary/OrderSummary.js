import React from 'react';

import Aux from '../../hoc/Auxillary';
import Button from '../UI/Button/Button';

const ordeSummary = (props) => {

  const ingredientsSummary = Object.keys(props.ingredients).map( igkey => {
    return (
      <li key={igkey}>
        <span style={{textTransform: 'capitalize'}}>{igkey} : {props.ingredients[igkey]}</span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Selected ingredients in Burger are </p>
      {ingredientsSummary}
      <p><strong>Total Price : ${props.price.toFixed(2)} </strong> </p>
      <p>Proceed To Checkout</p>
      <Button btnType="Success" clicked={props.continuePurchase}>Continue</Button>
      <Button btnType="Danger" clicked={props.cancelPurchase}>Cancel</Button>
    </Aux>
  );
};

export default ordeSummary;