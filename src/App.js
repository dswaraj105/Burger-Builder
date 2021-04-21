import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import BurgerBuider from "./containers/BurgerBuilder/BurgerBuilder";

import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuider />
        </Layout>
      </div>
    );
  }
}

export default App;
