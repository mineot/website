import { BrowserRouter, Routes } from "react-router-dom";
import { links, routeAnchors } from "./app.components";
import { TopBar, Sidebar } from "./app.widgets";
import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="topbar">
          <TopBar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
      <div className="body">
        <div className="container">
          <BrowserRouter>
            <Routes>{routeAnchors()}</Routes>
          </BrowserRouter>
          <div>{links()}</div>
        </div>
      </div>
    </div>
  );
}
