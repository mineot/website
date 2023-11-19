import "./app.scss";
import { Routes } from "react-router-dom";
import { routes, links } from "./widgets/routes";

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="topbar">Topbar</div>
        <div className="sidebar">{links()}</div>
      </div>
      <div className="body">
        <div className="container">
          <Routes>{routes()}</Routes>
        </div>
      </div>
    </div>
  );
}
