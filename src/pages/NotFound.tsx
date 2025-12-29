import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-foreground">
      <div className="text-center px-4">
        <div className="text-9xl mb-4">♟️</div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oups ! Cette page n'existe pas.
        </p>
        <Button onClick={() => navigate("/")} size="lg">
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
}
