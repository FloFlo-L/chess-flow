import SimpleHeader from "@/components/simple-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function JoinGame() {
  const { t } = useTranslation();
  const [playerName, setPlayerName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const handleJoinGame = () => {
    if (!playerName.trim() || !roomCode.trim()) return;
    console.log("Joining game with name:", playerName, "code:", roomCode);
  };

  return (
    <div className="bg-primary-foreground dark:bg-background">
      <SimpleHeader />
      <main className="min-h-[calc(100vh-4rem)] container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-md mx-auto">
          {/* Title Section */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
              {t("joinGame.title")}
            </h1>
            <p className="text-base text-muted-foreground mb-4">
              {t("joinGame.subtitle")}
            </p>
            <Link
              to="/create"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              {t("joinGame.createLink")}
            </Link>
          </div>

          <Card className="p-6 max-w-125 mx-auto">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                {t("joinGame.yourName")}
              </Label>
              <Input
                type="text"
                className="h-10"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-2 block">
                {t("joinGame.roomCode")}
              </Label>
              <Input
                type="text"
                className="h-10"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
            </div>

            {/* Join Button */}
            <Button onClick={handleJoinGame} className="w-full">
              {t("joinGame.buttonJoin")}
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
