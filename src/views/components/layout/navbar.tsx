import { document } from "@/core/doc";

export function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-secondary">
          <span>{document.name}</span>
        </a>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-lg btn-link text-secondary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasWebsite"
            aria-controls="offCanvasWebsite"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
