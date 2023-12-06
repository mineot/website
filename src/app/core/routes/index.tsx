import { NavLink, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { elements, Element } from "./elements";

export function RoutePoints(): any {
  const { t } = useTranslation();

  return (
    <Routes>
      {elements.map((el: Element) => (
        <Route key={el.uuid} path={el.to} element={t(el.element)} />
      ))}
    </Routes>
  );
}

export function Menus(): any {
  const { t } = useTranslation();

  function navClass({ isActive }: any) {
    return isActive ? "btn btn-primary" : "btn btn-outline-secondary";
  }

  return (
    <div className="d-grid gap-2">
      {elements.map((el: Element) => (
        <NavLink key={el.uuid} to={el.to} className={navClass}>
          <span>{t(el.text)}</span>
        </NavLink>
      ))}
    </div>
  );
}
