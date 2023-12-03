import { NavLink, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

const elements = [
  { key: 1, to: "/", text: "menu.about_me" },
  { key: 2, to: "/portfolio", text: "menu.portfolio" },
  { key: 3, to: "/service_pricing", text: "menu.services_prices" },
  { key: 4, to: "/resume", text: "menu.resume" },
  { key: 5, to: "/blog", text: "menu.blog" },
  { key: 6, to: "/contact", text: "menu.contact" },
];

export function RoutePoints(): any {
  const { t } = useTranslation();

  return (
    <Routes>
      {elements.map((el: any) => (
        <Route key={el.key} path={el.to} element={<h4>{t(el.text)}</h4>} />
      ))}
    </Routes>
  );
}

export function Menus(): any {
  const { t } = useTranslation();

  return elements.map((el: any) => (
    <div key={el.key}>
      <NavLink
        to={el.to}
        data-bs-dismiss="offcanvas"
        className={({ isActive }) =>
          isActive ? "btn btn-link text-primary" : "btn btn-link text-light"
        }
      >
        <span>{t(el.text)}</span>
      </NavLink>
    </div>
  ));
}
