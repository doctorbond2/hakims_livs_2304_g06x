import React, { useEffect } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import { useFetch } from "@/utils/hooks/requestHooks";
const CategoryModal = (category) => {
  const { data, loading, error } = useFetch();

  return <>Kommer snart!</>;
};

export default CategoryModal;
