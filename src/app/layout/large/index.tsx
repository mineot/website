import { Menus, RoutePoints } from "@/app/core/routes";

export function LayoutLarge() {
  return (
    <div className="position-absolute w-100 h-100 overflow-hidden d-flex flex-row">
      <div
        className="h-100 overflow-y-auto overflow-x-hidden border-end p-2"
        style={{ minWidth: "280px" }}
      >
        <h5>Website</h5>
        <Menus></Menus>
      </div>
      <div className="flex-grow-1 h-100 overflow-y-auto overflow-x-hidden pt-2 container-fluid">
        <RoutePoints></RoutePoints>
      </div>
    </div>
  );
}
