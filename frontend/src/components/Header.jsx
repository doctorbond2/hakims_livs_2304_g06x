import * as shad from "@/components/ui/shadBarrel";
import ShoppingCartSheet from "./shoppingCart/ShoppingCartSheet";

const Header = () => {
  return (
    <>
      <header className="w-full bg-blue-500 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <a href="/" className="text-white text-lg font-bold">
              Brand Logo
            </a>
          </div>{" "}
          <div>
            <shad.Input type="text" placeholder="Sök" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white">
                  Product List
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Admin Panel
                </a>
              </li>
              <li>
                <shad.Button>Log in</shad.Button>
              </li>
              <li>
                <ShoppingCartSheet />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
