import * as shad from "@/components/ui/shadBarrel";

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
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
