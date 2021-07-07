import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TopNav from "./components/TopNav";
import ButtomNav from "./components/ButtomNav";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <TopNav />
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
        </main>
        <ButtomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
