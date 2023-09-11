import { Sidebar } from "./sidebar";

export function OffCanvas() {
  return (
    <div
      id="offCanvasWebsite"
      className="offcanvas offcanvas-start bg-primary text-color"
      aria-labelledby="offcanvasExampleLabel"
    >
      <Sidebar showClose={true} />
    </div>
  );
}
