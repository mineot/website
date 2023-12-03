import { Navbar } from "./widgets/navbar";
import { RoutePoints, Menus } from "./core/routes";
import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="topbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Menus />
        </div>
      </div>
      <div className="body">
        <div className="container">
          <RoutePoints />
        </div>
      </div>
    </div>
  );
}
