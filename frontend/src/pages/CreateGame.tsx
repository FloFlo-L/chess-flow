import SimpleHeader from "@/components/simple-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChessKing, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ColorChoice = "white" | "black" | "random" | null;

export default function CreatePage() {
  const { t } = useTranslation();
  const [playerName] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorChoice>("random");

  const handleCreateGame = () => {
    if (!selectedColor || !playerName.trim()) return;
    console.log(
      "Creating game with name:",
      playerName,
      "color:",
      selectedColor
    );
  };

  return (
    <div className="bg-primary-foreground dark:bg-background">
      <SimpleHeader />
      <main className="min-h-[calc(100vh-4rem)] container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-md mx-auto">
          {/* Title Section */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
              {t("createGame.title")}
            </h1>
            <p className="text-base text-muted-foreground mb-4">
              {t("createGame.subtitle")}
            </p>
            <Link
              to="/join"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              {t("createGame.joinLink")}
            </Link>
          </div>

          <Card className="p-6 max-w-125 mx-auto">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                {t("createGame.yourName")}
              </Label>
              <Input type="text" className="h-10" />
            </div>
            <div>
              <Label className="text-sm font-medium mb-2 block">
                {t("createGame.roomName")}
              </Label>
              <Input type="text" className="h-10" />
            </div>

            {/* Color Selection */}
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium text-muted-foreground block">
                {t("createGame.iPlayAs")}
              </Label>

              <div className="flex gap-3 justify-center">
                {/* White Option */}
                <Button
                  type="button"
                  onClick={() => setSelectedColor("white")}
                  variant={selectedColor === "white" ? "default" : "outline"}
                  size="icon-lg"
                >
                  <ChessKing className="size-5" strokeWidth={1.7} />
                </Button>

                {/* Random Option */}
                <Button
                  type="button"
                  onClick={() => setSelectedColor("random")}
                  variant={selectedColor === "random" ? "default" : "outline"}
                  size="icon-lg"
                >
                  <HelpCircle className="size-5" strokeWidth={1.7} />
                </Button>

                {/* Black Option */}
                <Button
                  type="button"
                  onClick={() => setSelectedColor("black")}
                  variant={selectedColor === "black" ? "default" : "outline"}
                  size="icon-lg"
                >
                  <ChessKing className="size-5" strokeWidth={1.7} fill="true" />
                </Button>
              </div>
            </div>

            {/* Create Button */}
            <Button onClick={handleCreateGame}>
              {t("createGame.buttonCreate")}
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
