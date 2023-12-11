import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.contact")}</h1>
      <h5>{t("app.construction")}</h5>
    </div>
  );
}
