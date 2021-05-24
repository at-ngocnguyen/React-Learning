import { Clock, Hobby, Pagination, Todo, Product } from "container/Index";
import Error404 from "share/404/404";
import Login from "admin/Login";
import Order from "admin/Order";
import Home from "share/home/home";
import Color from "components/color";

export const routing = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/clock",
    component: Clock,
  },
  {
    path: "/color",
    component: Color,
  },
  {
    path: "/hobby",
    component: Hobby,
  },
  {
    path: "/pagination",
    component: Pagination,
  },
  {
    path: "/todo",
    component: Todo,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "*",
    component: Error404,
  },
];
