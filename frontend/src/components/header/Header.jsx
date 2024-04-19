import * as shad from "@/components/ui/shadBarrel";
import ShoppingCartSheet from "./shoppingCart/ShoppingCartSheet";
import LoginDialog from "../login/LoginDialog";
import { Link } from "react-router-dom";
import { useAuth } from "@/utils/hooks/AuthContext";
import SearchBar from "./searchBar/SearchBar";
import NavSheetTrigger from "./nav/NavSheetTrigger";
const Header = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <>
      <header className="w-full p-4 bg-slate-700 z-50 fixed">
        <div className="grid grid-cols-6 items-center">
          <div className="col-start-2 col-end-3 flex justify-center">
            <div className="w-52">
              <Link to="/" className="w-full">
                <img
                  className="w-full h-auto object-cover"
                  src="/HakimOnlineLogo2.png"
                  alt="HakimLogo"
                />
              </Link>
            </div>
          </div>{" "}
          <div className="col-start-3 col-end-5">
            <SearchBar />
          </div>
          <nav className="col-start-5 col-end-7 flex justify-end items-center space-x-4">
            <ul className="flex space-x-4 items-center pr-5">
              <li>
                <Link to="/about" className="text-white font-bold">
                  Om oss
                </Link>
              </li>
              <li>
                {loggedIn?.admin_access ? (
                  <Link to="/admin" className="text-white">
                    Admin Panel
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li>
                <LoginDialog {...{ loggedIn, logout }} />
              </li>
              <li>
                <NavSheetTrigger />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
