import { Menus, RoutePoints } from "./core/routes";

export function LayoutSmall() {
  const navbar = (
    <nav className="navbar fixed-top sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Website
        </a>
        <button
          className="btn btn-lg btn-link text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#appSidebar"
        >
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </nav>
  );

  const sidebar = (
    <div
      className="offcanvas offcanvas-start"
      id="appSidebar"
      aria-labelledby="appSidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="appSidebarLabel">
          Website
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <Menus></Menus>
      </div>
    </div>
  );

  return (
    <div>
      {navbar}
      {sidebar}
      <div className="container">
        <RoutePoints></RoutePoints>
      </div>
    </div>
  );
}
