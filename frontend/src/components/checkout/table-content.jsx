import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import { CheckoutTable } from "./checkoutTable";
import * as shad from "@/components/ui/shadBarrel";

const tableContent = () => {
  return (
    <div className="">
      <CheckoutTable />
    </div>
  );
};

export default tableContent;
