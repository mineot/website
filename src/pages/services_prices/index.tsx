import { useTranslation } from "react-i18next";

export function ServicesPrices() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.services_prices")}</h1>
      <h5>{t("app.construction")}</h5>
    </div>
  );
}
