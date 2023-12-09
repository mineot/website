import { Route, Routes } from "react-router-dom";
import { elements, Element } from "./elements";
import { Menus } from "./menus";

export function RoutePoints(): any {
  const routes = elements.map((el: Element) => (
    <Route key={el.uuid} path={el.to} element={el.element} />
  ));

  return <Routes>{routes}</Routes>;
}

export { Menus };
