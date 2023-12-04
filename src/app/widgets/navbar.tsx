import { useTranslation } from "react-i18next";
import { Sidebar } from "./sidebar";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand">{t("app.title")}</a>
        <button
          className="btn btn-lg btn-link text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#appSidebar"
        >
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
      <Sidebar />
    </nav>
  );
}
