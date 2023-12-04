import { Menus } from "@/app/core/routes";
import { useTranslation } from "react-i18next";

export function LeftBar() {
  const { t } = useTranslation();

  return (
    <div className="h-100 px-3 py-2">
      <h2>{t("app.title")}</h2>
      <Menus />
    </div>
  );
}
