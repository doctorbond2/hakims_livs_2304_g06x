import * as shad from "@/components/ui/shadBarrel";
import CategoryListItem from "./CategoryListItem";
import CategoryAddModal from "./CategoryAddModal";
const CategoryList = ({ categoryList, handleDeleteCategory }) => {
  return (
    <>
      <shad.Dialog>
        {
          <>
            <div className="flex justify-center pt-10">
              <shad.Table className="w-[65vw] shadow">
                <shad.TableHeader>
                  <shad.TableRow>
                    <shad.TableHead>Titel </shad.TableHead>
                    <shad.TableHead>Antal</shad.TableHead>
                    <shad.TableHead>
                      <shad.DialogTrigger>
                        <shad.Button className={"bg-gray-400"}>+</shad.Button>
                      </shad.DialogTrigger>
                    </shad.TableHead>
                  </shad.TableRow>
                </shad.TableHeader>
                <shad.TableBody>
                  {categoryList &&
                    categoryList.map((category, index) => {
                      return (
                        <CategoryListItem
                          key={"c-" + index}
                          {...{
                            category,
                            handleDeleteCategory,
                            index,
                          }}
                        />
                      );
                    })}
                </shad.TableBody>
              </shad.Table>
            </div>
            <shad.DialogContent>
              <CategoryAddModal {...{}} />
            </shad.DialogContent>
          </>
        }
      </shad.Dialog>
    </>
  );
};
export default CategoryList;
