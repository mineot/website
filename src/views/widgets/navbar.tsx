import { document } from "@/core/doc";
import { Offcanvas } from "./offcanvas";

export function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-secondary" href="/">
          {document.name}
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvas"
          aria-controls="navbarOffcanvas"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-three-dots-vertical text-secondary"></i>
        </button>
        <Offcanvas />
      </div>
    </nav>
  );
}
