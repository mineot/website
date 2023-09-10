import { Sidebar } from "./sidebar";

export function OffCanvas() {
  return (
    <div
      id="offCanvasWebsite"
      className="offcanvas offcanvas-start bg-primary"
      aria-labelledby="offcanvasExampleLabel"
    >
      <Sidebar />
    </div>
  );
}
