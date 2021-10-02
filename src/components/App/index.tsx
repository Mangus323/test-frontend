import React from "react";
import styles from "./styles.m.styl";
import Navbar from "../Navbar";
import OrdersList from "../../screens/Orders/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStateProvider, GlobalState } from "~/screens/globalState";
import OrdersShow from "~/screens/Orders/Show";

function Index(): JSX.Element {
  const [globalState] = React.useState(new GlobalState());
  if (window.location.pathname === "/") window.location.href = window.location.origin + "/orders?page=1"



  return (
    <GlobalStateProvider value={globalState}>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route path="/orders/:id">
              <OrdersShow />
            </Route>
            <Route path="/orders" component={OrdersList } />
          </Switch>
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default Index;
