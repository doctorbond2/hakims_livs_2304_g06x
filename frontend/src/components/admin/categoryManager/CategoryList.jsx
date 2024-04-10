import * as shad from "@/components/ui/shadBarrel";
import CategoryListItem from "./CategoryListItem";
const CategoryList = ({ categoryList, handleDeleteCategory }) => {
  console.log(categoryList);
  return (
    <>
      <div className="flex justify-center pt-10">
        <shad.Table className="w-[500px] shadow">
          <shad.TableHeader>
            <shad.TableRow>
              <shad.TableHead>KATEGORIER</shad.TableHead>
            </shad.TableRow>
          </shad.TableHeader>
          <shad.TableBody>
            {categoryList.map((category, index) => {
              return <CategoryListItem key={"c-" + index} {...{ category, handleDeleteCategory, index }} />;
            })}
          </shad.TableBody>
        </shad.Table>
      </div>
    </>
  );
};
export default CategoryList;
