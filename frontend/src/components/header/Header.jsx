import * as shad from "@/components/ui/shadBarrel";
import ShoppingCartSheet from "./shoppingCart/ShoppingCartSheet";
import LoginDialog from "./nav/login/LoginDialog";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="w-full bg-slate-500 p-4">
        <div className="grid grid-cols-6 items-center">
          <div className="col-start-2 col-end-3">
            <Link to="/" className="text-white text-lg font-bold flex justify-end pr-5">
              <img style={{ width: "150px" }} src="/HakimOnlineLogo.png" alt="HakimLogo" />
            </Link>
          </div>{" "}
          <div className="col-start-3 col-end-5">
            <shad.Input type="text" placeholder="Sök..." />
          </div>
          <nav className="col-start-5 col-end-7 flex justify-end items-center space-x-4">
            <ul className="flex space-x-4 items-center pr-5">
              <li>
                <Link to="/products" className="text-white">
                  Product List
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-white">
                  Admin Panel
                </Link>
              </li>
              <li>
                <LoginDialog />
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
