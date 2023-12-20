import { I18NKeys } from "@/core/i18n";
import { useTranslation } from "react-i18next";

export function ServicesPrices() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(I18NKeys.pages.services_prices.title)}</h1>
      <h5>{t(I18NKeys.app.construction)}</h5>
    </div>
  );
}
