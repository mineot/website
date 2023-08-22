import { Sidebar } from "./sidebar";

export function Offcanvas() {
  return (
    <div
      id="navbarOffcanvas"
      className="offcanvas offcanvas-start bg-primary"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <Sidebar showClose={true} />
    </div>
  );
}
