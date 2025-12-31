import { Button } from "@/components/ui/button";
import { ChessKing } from "lucide-react";

export default function StyleGuide() {
  return (
    <div className="flex flex-col gap-6 max-w-75 mx-auto mt-10">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button size="icon">
        <ChessKing />
      </Button>
    </div>
  );
}
