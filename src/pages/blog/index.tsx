import { useTranslation } from "react-i18next";

export function Blog() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu.blog")}</h1>
      <h5>{t("app.construction")}</h5>
    </div>
  );
}
