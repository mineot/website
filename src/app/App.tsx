import { BrowserRouter, Route, Routes } from "react-router-dom";

const items = [
  { to: "/", text: "About Me" },
  { to: "/portfolio", text: "Portfolio" },
  { to: "/service_pricing", text: "Services & Prices" },
  { to: "/resume", text: "Resume" },
  { to: "/blog", text: "Blog" },
  { to: "/contact", text: "Contact" },
];

export default function App() {
  const routes = items.map((item: any) => (
    <Route path={item.to} element={<h4>{item.text}</h4>} />
  ));

  const links = items.map((item: any) => (
    <div className="mb-2">
      <a href={item.to} className="btn btn-outline-primary">
        <span>{item.text}</span>
      </a>
    </div>
  ));

  return (
    <div className="container pt-2">
      <div className="mb-4">
        <h1>Current Page</h1>
        <BrowserRouter>
          <Routes>{routes}</Routes>
        </BrowserRouter>
      </div>
      {links}
    </div>
  );
}
