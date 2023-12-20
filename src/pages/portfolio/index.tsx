import { I18NKeys } from "@/core/i18n";
import { useTranslation } from "react-i18next";

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(I18NKeys.pages.portfolio.title)}</h1>
      <h5>{t(I18NKeys.app.construction)}</h5>
    </div>
  );
}
