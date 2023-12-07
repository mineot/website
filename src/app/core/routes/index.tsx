import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { elements, Element } from "./elements";
import { Menus } from "./menus";

export function RoutePoints(): any {
  const { t } = useTranslation();

  const routes = elements.map((el: Element) => (
    <Route key={el.uuid} path={el.to} element={t(el.element)} />
  ));

  return <Routes>{routes}</Routes>;
}

export { Menus };
