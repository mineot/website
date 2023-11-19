import { NavLink, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

const elements = [
  { key: 1, to: "/", text: "menu.about_me" },
  { key: 2, to: "/portfolio", text: "menu.portfolio" },
  { key: 3, to: "/service_pricing", text: "menu.services_prices" },
  { key: 4, to: "/resume", text: "menu.resume" },
  { key: 5, to: "/blog", text: "menu.blog" },
  { key: 6, to: "/contact", text: "menu.contact" },
];

function routes(): any {
  const { t } = useTranslation();

  return elements.map((el: any) => (
    <Route key={el.key} path={el.to} element={<h4>{t(el.text)}</h4>} />
  ));
}

function links(): any {
  const { t } = useTranslation();

  return elements.map((el: any) => (
    <div className="mb-2" key={el.key}>
      <NavLink
        to={el.to}
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline-primary active"
            : "btn btn-outline-primary"
        }
      >
        <span>{t(el.text)}</span>
      </NavLink>
    </div>
  ));
}

export { routes, links };
