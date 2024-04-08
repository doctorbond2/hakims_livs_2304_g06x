import Category from "../models/category.model.js";

export async function createCategory(req, res) {
  console.log("Category test");

  if (!req.body) {
    return res.status(400).json({ message: "Request BODY not found" });
  }

  try {
    let category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
}

export async function getCategories(req, res) {
  try {
    let categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCategoryByName(req, res) {
  console.log("Category by name test");

  if (!req.params.name) {
    return res.status(400).json({
      message: "Category name not found",
    });
  }

  try {
    let category = await Category.findOne({ name: req.params.name });
    res.status(200).json(category);
  } catch (err) {
    console.log(err.message);
  }
}

export async function getCategoryById(req, res) {
  console.log("Category by ID test");

  if (!req.params.id) {
    return res.status(400).json({ message: "Category ID not found" });
  }

  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }

  try {
    let category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
}

export const updateCategoryById = async (req, res) => {
  console.log("test update category by id");

  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }

  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }

  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate({ _id: id }, req.body);
    if (category) {
      res.status(200).json({
        message: `Category ${category.name} updated successfully`,
        updated_category: category,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

export const deleteCategoryById = async (req, res) => {
  console.log("test delete category by id");

  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }

  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete({ _id: id }, req.body);

    if (category) {
      res.status(200).json({
        message: `Category ${category.name} deleted successfully`,
        deleted_category: category,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

// import express from "express";
// import Category from "../models/category.model.js"; // Adjust the path according to your structure

// const router = express.Router();

// router.get("/categories-with-count", async (req, res) => {
//   try {
//     const categoriesWithCount = await Category.aggregate([
//       {
//         $lookup: {
//           from: "products", // the collection to join
//           localField: "_id", // field from the categories collection
//           foreignField: "category", // field from the products collection matching localField
//           as: "products", // the array field name where matched documents will be placed
//         },
//       },
//       {
//         $addFields: {
//           productCount: { $size: "$products" },
//         },
//       },
//       {
//         $project: {
//           products: 0, // Exclude the products array from the final output if you just want the count
//         },
//       },
//     ]);

//     res.json(categoriesWithCount);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// export default router;
