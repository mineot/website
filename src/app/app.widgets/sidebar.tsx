import { useTranslation } from "react-i18next";

export function Sidebar() {
  const { t } = useTranslation();

  return <h2>{t("app.title")}</h2>;
}
