import { useTranslation } from "react-i18next";
import { Menus } from "../core/routes";

export function Sidebar() {
  const { t } = useTranslation();

  return (
    <div
      id="appSidebar"
      className="offcanvas offcanvas-start"
      aria-labelledby="offCanvasLabel"
    >
      <div className="offcanvas-header">
        <h2 className="offcanvas-title" id="offCanvasLabel">
          {t("app.title")}
        </h2>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <Menus />
      </div>
    </div>
  );
}
