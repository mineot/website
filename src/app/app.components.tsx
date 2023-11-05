import { Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

const routes = [
  { key: 1, to: "/", text: "menu.about_me" },
  { key: 2, to: "/portfolio", text: "menu.portfolio" },
  { key: 3, to: "/service_pricing", text: "menu.services_prices" },
  { key: 4, to: "/resume", text: "menu.resume" },
  { key: 5, to: "/blog", text: "menu.blog" },
  { key: 6, to: "/contact", text: "menu.contact" },
];

function routeAnchors() {
  const { t } = useTranslation();

  return routes.map((item: any) => (
    <Route key={item.key} path={item.to} element={<h2>{t(item.text)}</h2>} />
  ));
}

function links() {
  const { t } = useTranslation();

  return routes.map((item: any) => (
    <div key={item.key} className="mb-2">
      <a href={item.to} className="btn btn-outline-primary">
        <span>{t(item.text)}</span>
      </a>
    </div>
  ));
}

export { links, routeAnchors };
