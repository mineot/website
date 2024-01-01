import { Menus, RoutePoints } from "@/core/routes";
import { CardBig } from "@/components/user/card-big";

export function Large() {
  return (
    <div className="position-absolute w-100 h-100 overflow-hidden d-flex flex-row">
      <div
        className="h-100 overflow-y-auto overflow-x-hidden border-end p-2 d-flex flex-column gap-3"
        style={{ minWidth: "280px" }}
      >
        <CardBig></CardBig>
        <Menus></Menus>
      </div>
      <div className="flex-grow-1 h-100 overflow-y-auto overflow-x-hidden pt-2 container-fluid">
        <RoutePoints></RoutePoints>
      </div>
    </div>
  );
}
