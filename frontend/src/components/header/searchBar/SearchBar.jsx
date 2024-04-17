import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import ReactDOM from "react-dom";
import * as shad from "@/components/ui/shadBarrel";
import ProductModal from "@/components/productList/productCards/ProductModal";
import { Cross1Icon } from "@radix-ui/react-icons";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [portalPosition, setPortalPosition] = useState({ top: 0, left: 0, width: 0 });
  const [showPortal, setShowPortal] = useState(false);
  const inputRef = useRef(null);
  const portalRef = useRef(null);
  const verticalOffset = 10;

  const searchProducts = debounce(async (query) => {
    if (!query) {
      setProducts([]);
      return;
    }
    try {
      const response = await axios.get(`${import.meta.env.VITE_BaseUrl}/api/search?query=${encodeURIComponent(query)}`);
      setProducts(response.data.length > 0 ? response.data : []);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
      console.error("Error fetching search results", err);
    }
  }, 300);

  useEffect(() => {
    searchProducts(query);
  }, [query]);

  const calculatePortalPosition = () => {
    const inputField = inputRef.current;
    if (inputField) {
      const inputRect = inputField.getBoundingClientRect();
      setPortalPosition({
        top: inputRect.bottom + verticalOffset,
        left: inputRect.left,
        width: inputRect.width,
      });
    }
  };

  useEffect(() => {
    calculatePortalPosition();
    window.addEventListener("resize", calculatePortalPosition);
    return () => {
      window.removeEventListener("resize", calculatePortalPosition);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (portalRef.current && !portalRef.current.contains(event.target)) {
        setShowPortal(false);
      }
    };

    if (showPortal) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showPortal]);

  const handleInputFocus = () => {
    setShowPortal(true);
  };

  const handleClearInput = () => {
    setQuery("");
    inputRef.current.focus();
  };

  const clearButton = query.length > 0 && (
    <button className="-ml-6 font-bold" onClick={handleClearInput}>
      <Cross1Icon />
    </button>
  );

  const resultsDropdown = (
    <div ref={portalRef} style={{ position: "absolute", top: portalPosition.top, left: portalPosition.left, width: portalPosition.width }}>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        products.map((product) => (
          <shad.Dialog key={product.id}>
            <shad.DialogTrigger asChild>
              <a className="grid bg-slate-50 items-end border grid-cols-7 grid-rows-2 cursor-pointer">
                <div className="flex justify-center row-span-2 col-span-1 ">
                  <img className="max-w-full max-h-20 object-contain p-1" src={product.image.url} alt={product.image.alt || "Product Image"} />
                </div>
                <h3 className="text-2xl row-span-1 col-span-6 row-start-1 col-start-2">{product.title}</h3>
                <h4 className="text-lg font-semibold col-span-6 row-start-2 col-start-2 pb-1">{product.brand}</h4>
                <h4 className="text-base font-normal col-span-6 row-start-2 col-start-3 pb-1">{product.category.title}</h4>
              </a>
            </shad.DialogTrigger>
            <shad.DialogContent className="sm:max-w-[800px] grid grid-cols-2 grid-rows-2">
              <ProductModal product={product} />
            </shad.DialogContent>
          </shad.Dialog>
        ))
      )}
    </div>
  );

  return (
    <div className="relative">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex">
          <shad.Input ref={inputRef} type="text" placeholder="Sök efter produkter..." value={query} onChange={(e) => setQuery(e.target.value)} onFocus={handleInputFocus} />
          {clearButton}
        </div>
      </form>
      {showPortal && ReactDOM.createPortal(resultsDropdown, document.getElementById("portal-root"))}
    </div>
  );
};

export default SearchBar;
