import { useTranslation } from "react-i18next";

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.about_me")}</h1>
      <h5>{t("app.construction")}</h5>
    </div>
  );
}
