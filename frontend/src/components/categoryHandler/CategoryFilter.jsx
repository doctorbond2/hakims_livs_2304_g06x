import React, { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import * as shad from "@/components/ui/shadBarrel";

const CategoryFilter = ({ handleSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await GET_REQUEST("/api/category");
        if (data) {
          setCategories(data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      {" "}
      {categories && (
        <div className=" mt-3">
          <shad.Card>
            <shad.ScrollArea className="border-r bg-slate-100 ">
              <shad.Button
                className="text-lg text-black-900 cursor-pointer bg-transparent hover:bg-green-100"
                onClick={handleSelectCategory}
              >
                Alla produkter
              </shad.Button>
              <div className="mb-5"></div>
              {categories.map((c) => (
                <>
                  <div className="mb-5">
                    <shad.Button
                      type="button"
                      onClick={handleSelectCategory}
                      className="text-lg text-black-900 cursor-pointer bg-transparent hover:bg-green-100"
                      value={c._id}
                    >
                      {c.title}
                    </shad.Button>
                  </div>
                </>
              ))}
            </shad.ScrollArea>
          </shad.Card>
        </div>
      )}
    </>
  );
};

export default CategoryFilter;
