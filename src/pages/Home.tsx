import LocalSelect from "@/components/local-select";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Gamepad2, Link, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-foreground dark:bg-background">
      <div className="fixed top-4 left-4">
        <ModeToggle />
      </div>
      <div className="fixed top-4  right-4">
        <LocalSelect />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary mt-24">
          {t("home.title")}
        </h1>

        <p className="text-xl mb-8 max-w-2xl mx-auto">{t("home.subtitle")}</p>

        <Button
          onClick={() => navigate("/create")}
          size="lg"
          className="text-lg px-8 py-6 shadow-lg"
        >
          {t("home.createGame")}
        </Button>

        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex flex-col items-center gap-3">
            <Gamepad2 className="text-primary size-10" />
            <h3 className="font-semibold text-xl">
              {t("home.steps.create.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("home.steps.create.description")}
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex flex-col items-center gap-3">
            <Link className="text-primary size-10" />
            <h3 className="font-semibold text-xl">
              {t("home.steps.share.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("home.steps.share.description")}
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex flex-col items-center gap-3">
            <Zap className="text-primary size-10" />
            <h3 className="font-semibold text-xl">
              {t("home.steps.play.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("home.steps.play.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
