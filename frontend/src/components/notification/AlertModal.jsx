import React from "react";
import * as shad from "@/components/ui/shadBarrel";
const AlertModal = ({ content }) => {
  return (
    <>
      <shad.Card>
        <shad.CardContent> {content}</shad.CardContent>
        <shad.Button>Ok</shad.Button>
      </shad.Card>
    </>
  );
};

export default AlertModal;
