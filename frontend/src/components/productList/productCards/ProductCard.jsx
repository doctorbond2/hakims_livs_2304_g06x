import * as shad from "@/components/ui/shadBarrel";

const CardTest = ({ product }) => {
  return (
    <>
      {" "}
      <shad.Card className="w-[250px] h-[350px] grid grid-rows-3">
        <shad.CardContent className="flex row-span-2 items-center">
          <img style={{ height: "150px" }} src="/HakimOnlineLogo.png" alt="HakimLogo" />
        </shad.CardContent>
        <div>
          <shad.CardTitle className="flex justify-center content-end">5000kr</shad.CardTitle>
          <shad.CardTitle className="flex justify-center content-end">Create project</shad.CardTitle>
          <shad.CardDescription className="flex justify-center content-end">Deploy your new project in one-click.</shad.CardDescription>
          <shad.CardFooter className="p-0 content-end">
            <shad.Button className="w-[250px] p-0">Köp</shad.Button>
          </shad.CardFooter>
        </div>
      </shad.Card>
    </>
  );
};

export default CardTest;
