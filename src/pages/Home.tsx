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
    <div className="min-h-screen bg-primary-foreground dark:bg-background">
      <div className="sticky top-0 z-10 w-full border-b md:border-none bg-primary-foreground dark:bg-background">
        <div className="max-w-4xl mx-auto h-16 flex items-center justify-between px-4">
          <ModeToggle />
          <LocalSelect />
        </div>
      </div>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center pt-16 md:pt-0">
          <h1 className="text-6xl font-bold mb-4 text-primary">
            {t("home.title")}
          </h1>

          <p className="text-xl mb-8 max-w-xl md:text-2xl mx-auto">
            {t("home.subtitle")}
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Button
              onClick={() => navigate("/create")}
              size="lg"
              className="text-lg px-8 py-6 shadow-lg w-60"
            >
              {t("home.createGame")}
            </Button>

            <Button
              onClick={() => navigate("/create")}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 shadow-lg w-60"
            >
              {t("home.joinGame")}
            </Button>
          </div>

          <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex flex-col items-center gap-3">
              <Gamepad2 className="text-primary size-10" strokeWidth={1.7} />
              <h3 className="font-semibold text-xl">
                {t("home.steps.create.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("home.steps.create.description")}
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex flex-col items-center gap-3">
              <Link className="text-primary size-10" strokeWidth={1.7} />
              <h3 className="font-semibold text-xl">
                {t("home.steps.share.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("home.steps.share.description")}
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex flex-col items-center gap-3">
              <Zap className="text-primary size-10" strokeWidth={1.7} />
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
    </div>
  );
}
