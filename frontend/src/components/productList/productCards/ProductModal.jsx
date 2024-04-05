import * as shad from "@/components/ui/shadBarrel";
import ProductCard from "./ProductCard";

export default function DialogDemo() {
  return (
    <shad.Dialog>
      <shad.DialogTrigger asChild>
        <a>
          <ProductCard product={product}></ProductCard>
        </a>
      </shad.DialogTrigger>
      <shad.DialogContent className="sm:max-w-[425px]">
        <shad.DialogHeader>
          <shad.DialogTitle>Edit profile</shad.DialogTitle>
          <shad.DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </shad.DialogDescription>
        </shad.DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <shad.Label htmlFor="name" className="text-right">
              Name
            </shad.Label>
            <shad.Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <shad.Label htmlFor="username" className="text-right">
              Username
            </shad.Label>
            <shad.Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <shad.DialogFooter>
          <shad.Button type="submit">Save changes</shad.Button>
        </shad.DialogFooter>
      </shad.DialogContent>
    </shad.Dialog>
  );
}
