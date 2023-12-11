import { useTranslation } from "react-i18next";

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.portfolio")}</h1>
      <h5>{t("app.construction")}</h5>
    </div>
  );
}
