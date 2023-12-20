import { Menus, RoutePoints } from "@/core/routes";
import { useDocument } from "@/doc";

export function Large() {
  const document = useDocument();

  return (
    <div className="position-absolute w-100 h-100 overflow-hidden d-flex flex-row">
      <div
        className="h-100 overflow-y-auto overflow-x-hidden border-end p-2"
        style={{ minWidth: "280px" }}
      >
        <h5>{document?.name}</h5>
        <Menus></Menus>
      </div>
      <div className="flex-grow-1 h-100 overflow-y-auto overflow-x-hidden pt-2 container-fluid">
        <RoutePoints></RoutePoints>
      </div>
    </div>
  );
}
