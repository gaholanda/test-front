import React, { Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import routes from "./routes";
import { Tabs, Context } from "./components";
import { Grid, Loading } from "./styles";
import { GetPurchase } from "./api";

function App(props) {
  const { Provider, Consumer } = Context;
  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    GetPurchase().then(({ data }) =>
      setPurchase({
        products: data.items,
        info: {
          subTotal: data.subTotal,
          shippingTotal: data.shippingTotal,
          discount: data.discount,
          total: data.total,
        },
      })
    );
    return () => {
      setPurchase({});
    };
  }, []);

  return (
    <Grid>
      <Tabs />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/cart" />} />
          <Provider value={purchase}>
            <Consumer>
              {(purchase) =>
                routes.map((route) => (
                  <Route
                    key={route.id}
                    path={route.path}
                    exact={route.exact}
                    component={() => (
                      <route.component purchase={purchase} {...props} />
                    )}
                  />
                ))
              }
            </Consumer>
          </Provider>
        </Switch>
      </Suspense>
    </Grid>
  );
}

export default withRouter(App);
