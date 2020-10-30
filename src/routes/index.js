// eslint-disable-next-line
import React, { lazy } from "react";

export const routes = [
  {
    id: "cart",
    path: "/cart",
    exact: true,
    component: lazy(() => import("./_Cart")),
  },
  {
    id: "payment",
    path: "/payment",
    exact: true,
    component: lazy(() => import("./_Payment")),
  },
  {
    id: "success",
    path: "/success",
    exact: true,
    component: lazy(() => import("./_Success")),
  },
];

export default routes;
