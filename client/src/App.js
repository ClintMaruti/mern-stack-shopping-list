import React from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Provider } from "react-redux"
import store from "./store"

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <br />
      <br />
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
