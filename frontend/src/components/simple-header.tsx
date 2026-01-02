import LocalSelect from "./local-select";
import { ModeToggle } from "./mode-toggle";

export default function SimpleHeader() {
  return (
    <div className="sticky top-0 z-10 w-full border-b md:border-none bg-primary-foreground dark:bg-background">
      <div className="max-w-4xl mx-auto h-16 flex items-center justify-between px-4">
        <ModeToggle />
        <LocalSelect />
      </div>
    </div>
  );
}
