import React, { Component } from "react";

import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    total: 4,
    purchasable: false,
    purchasing: false,
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Your Order is placed");
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((key) => ingredients[key])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (item) => {
    let count = this.state.ingredients[item];
    count++;
    const ingredients = { ...this.state.ingredients };
    ingredients[item] = count;
    const newPrice = this.state.total + INGREDIENT_PRICES[item];
    this.setState({ ingredients: ingredients, total: newPrice });
    this.updatePurchaseState(ingredients);
  };

  removeIngredientHandler = (item) => {
    let count = this.state.ingredients[item];

    if (count === 0) {
      return;
    }

    count--;
    const ingredients = { ...this.state.ingredients };
    ingredients[item] = count;
    const newPrice = this.state.total - INGREDIENT_PRICES[item];
    this.setState({ ingredients: ingredients, total: newPrice });
    this.updatePurchaseState(ingredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] ? false : true;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.total}
            continuePurchase={this.purchaseContinueHandler}
            cancelPurchase={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.total}
          ordered={this.purchasingHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
