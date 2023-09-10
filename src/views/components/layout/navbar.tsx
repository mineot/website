export function Navbar() {
  return (
    <div>
      <span>Head</span>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="offcanvas"
        data-bs-target="#offCanvasWebsite"
        aria-controls="offCanvasWebsite"
      >
        Open Offcanvas
      </button>
    </div>
  );
}
