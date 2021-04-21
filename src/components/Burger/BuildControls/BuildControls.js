import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngredients(ctrl.type)}
        removed={() => props.removeIngredients(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
