import * as shad from "@/components/ui/shadBarrel";
import CategoryListItem from "./CategoryListItem";
import AddCategoryModal from "./AddCategoryModal";
const CategoryList = ({
  categoryList,
  handleDeleteCategory,
  handleAddCategory,
}) => {
  console.log(categoryList);

  return (
    <>
      <shad.Dialog>
        <div className="flex justify-center pt-10">
          <shad.Table className="w-[500px] shadow">
            <shad.TableHeader>
              <shad.TableRow>
                <shad.TableHead>KATEGORIER</shad.TableHead>
                <shad.TableHead>
                  <shad.DialogTrigger>
                    <shad.Button
                      className={"bg-gray-400"}
                      onClick={handleAddCategory}
                    >
                      +
                    </shad.Button>
                  </shad.DialogTrigger>
                </shad.TableHead>
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
        </div>
        <shad.DialogContent>
          <AddCategoryModal {...{ handleAddCategory }} />
        </shad.DialogContent>
      </shad.Dialog>
    </>
  );
};
export default CategoryList;
