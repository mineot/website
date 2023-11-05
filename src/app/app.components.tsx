import { Route } from "react-router-dom";

const routeItems = [
  { key: 1, to: "/", text: "About Me" },
  { key: 2, to: "/portfolio", text: "Portfolio" },
  { key: 3, to: "/service_pricing", text: "Services & Prices" },
  { key: 4, to: "/resume", text: "Resume" },
  { key: 5, to: "/blog", text: "Blog" },
  { key: 6, to: "/contact", text: "Contact" },
];

const routeAnchors = routeItems.map((item: any) => (
  <Route key={item.key} path={item.to} element={<h4>{item.text}</h4>} />
));

const links = routeItems.map((item: any) => (
  <div key={item.key} className="mb-2">
    <a href={item.to} className="btn btn-outline-primary">
      <span>{item.text}</span>
    </a>
  </div>
));

export { links, routeAnchors };
