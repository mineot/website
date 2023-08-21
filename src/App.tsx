import { Router } from "@/core/router";
import { useTranslation } from "@/core/i18n";

export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Website: Vite + React + TS</h1>
      <h2>{t("welcome")}</h2>
      <Router />
    </div>
  );
}
