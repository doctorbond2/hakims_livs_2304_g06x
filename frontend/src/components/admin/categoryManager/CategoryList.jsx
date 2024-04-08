import * as shad from "@/components/ui/shadBarrel";

const CategoryList = ({ categoryList }) => {
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
          {categoryList &&
            categoryList.map((category) => (
              <shad.TableRow>
                <shad.TableCell className="font-medium">{category.name}</shad.TableCell>
                <shad.TableCell>100pcs</shad.TableCell>
                <shad.TableCell>
                  <shad.Button variant="secondary" className="">
                    Edit
                  </shad.Button>
                </shad.TableCell>
                <shad.TableCell className="text-right">
                  <shad.Button variant="destructive" className="">
                    Delete
                  </shad.Button>
                </shad.TableCell>
              </shad.TableRow>
            ))}
        </shad.TableBody>
      </shad.Table>
    </>
  );
};
export default CategoryList;
