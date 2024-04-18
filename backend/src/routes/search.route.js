import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { query } = req.query;
  try {
    const searchResults = await Product.aggregate([
      {
        $search: {
          index: "searchProducts",
          text: {
            query: query,
            path: ["title", "brand"],
            fuzzy: {
              maxEdits: 1,
              prefixLength: 0,
            },
          },
        },
      },
      {
        $addFields: {
          discountedPrice: {
            $round: [{ $subtract: ["$price", { $multiply: ["$price", { $divide: ["$discountRate", 100] }] }] }, 0],
          },
        },
      },
      {
        $addFields: {
          comparePrice: {
            $cond: {
              if: { $gt: ["$quantity", 0] },
              then: {
                $round: [{ $divide: ["$discountedPrice", "$quantity"] }, 0],
              },
              else: "$discountedPrice",
            },
          },
        },
      },
      {
        $addFields: {
          savings: {
            $round: [{ $subtract: ["$price", "$discountedPrice"] }, 0],
          },
        },
      },
      {
        $limit: 5,
      },
    ]);
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
