import * as shad from "@/components/ui/shadBarrel";
import CategoryListItem from "./CategoryListItem";
const CategoryList = ({ categoryList, handleDeleteCategory }) => {
  console.log(categoryList);
  return (
    <>
      <shad.Table className="w-[500px] shadow">
        <shad.TableCaption>All available categories</shad.TableCaption>
        <shad.TableHeader>
          <shad.TableRow>
            <shad.TableHead className="w-[100px]">Category</shad.TableHead>
            <shad.TableHead>Product amount</shad.TableHead>
          </shad.TableRow>
        </shad.TableHeader>
        <shad.TableBody>
          {categoryList.map((category, index) => {
            return (
              <CategoryListItem
                key={"c-" + index}
                {...{ category, handleDeleteCategory, index }}
              />
            );
          })}
        </shad.TableBody>
      </shad.Table>
    </>
  );
};
export default CategoryList;
