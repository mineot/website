import "./app.scss";
// import { BrowserRouter, Routes } from "react-router-dom";
// import { links, routeAnchors } from "./app.components";

export default function App() {
  const tests = [];
  for (let i = 0; i < 100; i++) {
    tests.push(<div key={i}>Test {i}</div>);
  }

  return (
    <div className="app">
      <div className="header">
        <div className="topbar">Topbar</div>
        <div className="sidebar">Sidebar {tests} </div>
      </div>
      <div className="body">
        <div className="container">Container {tests}</div>
      </div>
    </div>
  );
}
