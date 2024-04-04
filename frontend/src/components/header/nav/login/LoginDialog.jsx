import * as shad from "@/components/ui/shadBarrel";
import LoginTab from "./LoginTab";
export default function LoginDialog() {
  return (
    <shad.Dialog>
      <shad.DialogTrigger asChild>
        <shad.Button variant="outline">Logga in</shad.Button>
      </shad.DialogTrigger>
      <shad.DialogContent className="sm:max-w-[450px] flex">
        <LoginTab />
      </shad.DialogContent>
    </shad.Dialog>
  );
}
