import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import OLManagerItem from "./OLManagerItem";
export const OLManagerList = ({ orderList, handleDeleteOrder, updateOrder }) => {
  return (
    <>
      <shad.Dialog>
        <div className="flex justify-center pt-10">
          <shad.Table className="w-[65vw] shadow">
            <shad.TableHeader>
              <shad.TableRow>
                <shad.TableHead>Order ID</shad.TableHead>
                <shad.TableHead>Kundnamn</shad.TableHead>
                <shad.TableHead>Totalt</shad.TableHead>
                <shad.TableHead>Betalningsstatus</shad.TableHead>
                <shad.TableHead>Beställningsstatus</shad.TableHead>
              </shad.TableRow>
            </shad.TableHeader>
            <shad.TableBody>
              {orderList &&
                orderList.map((order, index) => {
                  return (
                    <>
                      <OLManagerItem
                        key={"pm-" + order._id}
                        {...{
                          index,
                          order,
                          orderList,
                          handleDeleteOrder,
                          updateOrder,
                        }}
                      />
                    </>
                  );
                })}
            </shad.TableBody>
          </shad.Table>
        </div>
      </shad.Dialog>
    </>
  );
};
export default OLManagerList;
