import SimpleHeader from "@/components/simple-header";
import { AuroraIcon } from "@/components/ui/aurora-icon";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChessQueen, Link, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-primary-foreground dark:bg-background">
      <SimpleHeader />
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center pt-16 md:pt-0">
          <h1 className="text-6xl font-bold mb-4 text-primary">
            <AuroraText>{t("home.title")}</AuroraText>
          </h1>

          <p className="text-xl mb-8 max-w-xl md:text-2xl mx-auto">
            {t("home.subtitle")}
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Button
              onClick={() => navigate("/create")}
              size="lg"
              className="w-60"
            >
              {t("home.createGame")}
            </Button>

            <Button
              onClick={() => navigate("/join")}
              variant="outline"
              size="lg"
              className="w-60"
            >
              {t("home.joinGame")}
            </Button>
          </div>

          <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <Card className="items-center p-6 gap-3">
              <AuroraIcon
                icon={ChessQueen}
                className="size-10"
                strokeWidth={1.7}
              />
              <h3 className="font-semibold text-xl">
                {t("home.steps.create.title")}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {t("home.steps.create.description")}
              </p>
            </Card>

            <Card className="items-center p-6 gap-3">
              <AuroraIcon icon={Link} className="size-10" strokeWidth={1.7} />
              <h3 className="font-semibold text-xl">
                {t("home.steps.share.title")}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {t("home.steps.share.description")}
              </p>
            </Card>

            <Card className="items-center p-6 gap-3">
              <AuroraIcon icon={Zap} className="size-10" strokeWidth={1.7} />
              <h3 className="font-semibold text-xl">
                {t("home.steps.play.title")}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {t("home.steps.play.description")}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
