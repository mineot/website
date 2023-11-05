import { BrowserRouter, Routes } from "react-router-dom";
import { links, routeAnchors } from "./app.components";

export default function App() {
  return (
    <div className="app">
      <div className="header">Header</div>
      <div className="body">Body</div>
    </div>
    // <div className="container pt-2">
    //   <div className="mb-4">
    //     <h1>Current Page</h1>
    //     <BrowserRouter>
    //       <Routes>{routeAnchors}</Routes>
    //     </BrowserRouter>
    //   </div>
    //   {links}
    // </div>
  );
}
