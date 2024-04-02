import * as shad from "@/components/ui/shadBarrel";

export function TabsDemo() {
  return (
    <shad.Tabs defaultValue="account" className="w-[400px]">
      <shad.TabsList className="grid w-full grid-cols-2">
        <shad.TabsTrigger value="account">Logga in</shad.TabsTrigger>
        <shad.TabsTrigger value="password">Skapa nytt konto</shad.TabsTrigger>
      </shad.TabsList>
      <shad.TabsContent value="account">
        <shad.Card>
          <shad.CardHeader>
            <shad.CardTitle>VÄLKOMMEN!</shad.CardTitle>
            <shad.CardDescription>Logga in för att få handla av Hakim!</shad.CardDescription>
          </shad.CardHeader>
          <shad.CardContent className="space-y-2">
            <div className="space-y-1">
              <shad.Label htmlFor="username">Användarnamn</shad.Label>
              <shad.Input id="username" defaultValue="Michey" />
            </div>
            <div className="space-y-1">
              <shad.Label htmlFor="password">Lösenord</shad.Label>
              <shad.Input id="password" defaultValue="" />
            </div>
          </shad.CardContent>
          <shad.CardFooter>
            <shad.Button>Logga in</shad.Button>
          </shad.CardFooter>
        </shad.Card>
      </shad.TabsContent>
      <shad.TabsContent value="password">
        <shad.Card>
          <shad.CardHeader>
            <shad.CardTitle>Registrera</shad.CardTitle>
            <shad.CardDescription>Maxa dina besparingar med Hakim!</shad.CardDescription>
          </shad.CardHeader>
          <shad.CardContent className="space-y-2">
          <div className="space-y-1">
              <shad.Label htmlFor="username">Användarnamn</shad.Label>
              <shad.Input id="username" defaultValue="" />
            </div>
            <div className="space-y-1">
              <shad.Label htmlFor="password">Lösenord</shad.Label>
              <shad.Input id="password" defaultValue="" />
            </div>
          </shad.CardContent>
          <shad.CardFooter>
            <shad.Button>Skapa konto!</shad.Button>
          </shad.CardFooter>
        </shad.Card>
      </shad.TabsContent>
    </shad.Tabs>
  );
}

export default TabsDemo;
