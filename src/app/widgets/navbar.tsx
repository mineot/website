import { useTranslation } from "react-i18next";
import { Sidebar } from "./sidebar";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{t("app.title")}</a>
        <button
          className="btn btn-link"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#appSidebar"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      <Sidebar />
    </nav>
  );
}
