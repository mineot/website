import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { elements, Element } from "./elements";

function navClass({ isActive }: any): string {
  const styles: string[] = ["text-start", "btn"];
  if (isActive) {
    styles.push("btn-primary");
  } else {
    styles.push("btn-dark");
    styles.push("text-secondary");
  }
  return styles.join(" ");
}

function iconClass(icon: string): string {
  return `bi bi-${icon} me-2`;
}

export function Menus(): any {
  const { t } = useTranslation();

  const navs = elements.map((el: Element) => (
    <NavLink key={el.uuid} to={el.to} className={navClass}>
      <i className={iconClass(el.icon)}></i>
      <span>{t(el.text)}</span>
    </NavLink>
  ));

  return <div className="d-grid gap-1">{navs}</div>;
}
