import { Offcanvas } from "./offcanvas";

export function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-secondary" href="/">
          Website
        </a>
        <button
          className="navbar-toggler border border-secondary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvas"
          aria-controls="navbarOffcanvas"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-secondary toggle"></i>
        </button>
        <Offcanvas />
      </div>
    </nav>
  );
}
