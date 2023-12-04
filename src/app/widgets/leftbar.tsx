import { Menus } from "@/app/core/routes";
import { useTranslation } from "react-i18next";

export function LeftBar() {
  const { t } = useTranslation();
  const test = Array(100)
    .fill("Item")
    .map((t: string, index: number) => (
      <div key={index}>{`${t} ${index}`}</div>
    ));

  return (
    <div className="h-100 px-3 py-2">
      <div>{t("app.title")}</div>
      {test}
      <div className="d-none">
        <Menus />
      </div>
    </div>
  );
}
