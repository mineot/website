import { NavLink, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { elements, Element } from "./elements";

export function RoutePoints(): any {
  const { t } = useTranslation();

  return (
    <Routes>
      {elements.map((el: Element) => (
        <Route key={el.uuid} path={el.to} element={t(el.element)} />
      ))}
    </Routes>
  );
}

export function Menus(): any {
  const { t } = useTranslation();

  function navClass({ isActive }: any): string {
    const styles: string[] = ["btn", "btn-link"];
    if (isActive) {
      styles.push("text-primary");
    } else {
      styles.push("text-secondary");
    }
    return styles.join(" ");
  }

  function iconClass(icon: string): string {
    return `bi bi-${icon} me-2`;
  }

  return (
    <div className="gap-2">
      {elements.map((el: Element) => (
        <div key={el.uuid}>
          <NavLink to={el.to} className={navClass}>
            <i className={iconClass(el.icon)}></i>
            <span>{t(el.text)}</span>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
