import { Navbar } from "./widgets/navbar";
import { RoutePoints } from "./core/routes";
import { LeftBar } from "./widgets/leftbar";
import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <div className="header bg-body-tertiary">
        <div className="topbar">
          <Navbar />
        </div>
        <div className="sidebar bg-body-tertiary">
          <LeftBar />
        </div>
      </div>
      <div className="body">
        <div className="container pt-2">
          <RoutePoints />
        </div>
      </div>
    </div>
  );
}
