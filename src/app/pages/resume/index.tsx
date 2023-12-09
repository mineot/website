import { useTranslation } from "react-i18next";

export function Resume() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.resume")}</h1>
      <h5>{t("app.construction")}</h5>
    </div>
  );
}
