import * as shad from "@/components/ui/shadBarrel";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import OrderConfirmation from "./OrderConfirmation";
import { useCart } from "../header/shoppingCart/CartContext";

function OrderForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const defaultOrder = {
    shippingAddress: {
      streetAddress: "",
      city: "",
      county: "",
      postalCode: "",
      country: "",
    },
    customer: {
      firstName: "",
      lastName: "",
      email: "",
    },
    paymentDetails: {
      cardNumber: "",
      expDate: "",
      cardName: "",
      cvv: "",
    },
    items: [],
  };
  const { clearCart } = useCart();

  const [orderDetails, setOrderDetails] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [newOrder, setNewOrder] = useState(defaultOrder);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    const cartDataJSON = localStorage.getItem("shoppingCart");
    if (cartDataJSON) {
      setCartData(JSON.parse(cartDataJSON));
      const formattedCartData = JSON.parse(cartDataJSON).map((item) => ({
        product: item.id,
        quantity: item.cartQuantity,
        price: item.price,
        title: item.title,
      }));

      setCartData(formattedCartData);

      const total = formattedCartData.reduce((totalSum, item) => {
        return totalSum + item.price * item.quantity;
      }, 0);
      setNewOrder((prevOrder) => ({ ...prevOrder, total: total }));

      setNewOrder((prevOrder) => ({
        ...prevOrder,
        items: formattedCartData,
        total: total,
      }));
    }
  }, []);

  function handleShippingAddressChange(e) {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      shippingAddress: { ...prevOrder.shippingAddress, [name]: value },
    }));
  }

  function handleCustomerDetailsChange(e) {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      customer: { ...prevOrder.customer, [name]: value },
    }));
  }

  function handlePaymentDetailsChange(e) {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      paymentDetails: { ...prevOrder.paymentDetails, [name]: value },
    }));
  }

  useEffect(() => {
    console.log(newOrder, "newOrder");
    console.log("newOrder.items", newOrder.items);
  }, [newOrder]);

  async function fetchOrderDetails() {
    try {
      const response = await GET_REQUEST("/api/order/");
      if (response && response.data) {
        setOrderDetails(response.data);
        // console.log("Order details fetched successfully:", response.data);
        alert("Order details fetched successfully!");
      }
    } catch (err) {
      console.error("Failed to fetch order details:", err.message);
      alert("Failed to fetch order details. Please try again.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const isValidEmail = (email) => {
      // Enkel validering av e-postadress med regex
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const formData = newOrder;

    if (!isValidEmail(formData.customer.email)) {
      setErrorMessage("Ange en giltig e-postadress.");
      return;
    }

    try {
      const response = await POST_REQUEST("/api/order/create", newOrder);
      if (response) {
        alert("Order placed successfully!");
        // localStorage.removeItem("shoppingCart");
        console.log("NEW ORDER: ", newOrder);
        console.log("ORDER DETAILS: ", orderDetails);
        clearCart();
        setOrderDetails(newOrder);
        setNewOrder(defaultOrder);
        setOrderComplete(true);
        // window.location.reload();
        // alert(orderComplete);
      }
    } catch (error) {
      console.error(error.message);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <>
      {" "}
      {!orderComplete ? (
        <shad.Card className="w-100">
          <form className="space-y-6 w-100 p-10" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold">Leveransadress</h2>
            <shad.Label className="block">
              Gatuadress
              <shad.Input
                type="text"
                placeholder="Gatuaddress"
                name="streetAddress"
                className="w-full mt-1"
                value={newOrder.shippingAddress.streetAddress}
                onChange={handleShippingAddressChange}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Stad
              <shad.Input
                type="text"
                placeholder="Stad"
                name="city"
                className="w-full mt-1"
                value={newOrder.shippingAddress.city}
                onChange={handleShippingAddressChange}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Ange giltig stad (endast bokstäver).")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Län
              <shad.Input
                type="text"
                placeholder="Län"
                name="county"
                className="w-full mt-1"
                value={newOrder.shippingAddress.county}
                onChange={handleShippingAddressChange}
                pattern="[A-Za-z]+"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Ange giltigt län (enbart bokstäver).")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Postnummer
              <shad.Input
                type="text"
                placeholder="Postnummer"
                name="postalCode"
                className="w-full mt-1"
                value={newOrder.shippingAddress.postalCode}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Ange ett giltigt postnummer i formatet XXX XX (5 siffror)."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                onChange={handleShippingAddressChange}
                pattern="^\d{3}\s?\d{2}$"
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Land
              <shad.Input
                type="text"
                placeholder="Land"
                name="country"
                className="w-full mt-1"
                value={newOrder.shippingAddress.country}
                onChange={handleShippingAddressChange}
                pattern="[A-Za-z]+"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Ange giltigt land (enbart bokstäver).")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>

            <h2 className="text-2xl font-bold">Kunduppgifter</h2>
            <shad.Label className="block">
              Förnamn
              <shad.Input
                type="text"
                placeholder="Förnamn"
                name="firstName"
                className="w-full mt-1"
                value={newOrder.customer.firstName}
                onChange={handleCustomerDetailsChange}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Ange endast bokstäver i för- och efternamn."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                pattern="[A-Za-z]+"
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Efternamn
              <shad.Input
                type="text"
                placeholder="Efternamn"
                name="lastName"
                className="w-full mt-1"
                value={newOrder.customer.lastName}
                onChange={handleCustomerDetailsChange}
                pattern="[A-Za-z]+"
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Ange endast bokstäver i för- och efternamn."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              E-post
              <shad.Input
                type="email"
                placeholder="E-post"
                name="email"
                className="w-full mt-1"
                value={newOrder.customer.email}
                onChange={handleCustomerDetailsChange}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Ange en giltig e-postadress.")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <h2 className="text-2xl font-bold">Betalningsuppgifter</h2>
            <shad.Label className="block">
              Kortnummer
              <shad.Input
                type="text"
                placeholder="Kortnummer"
                name="cardNumber"
                className="w-full mt-1"
                pattern="^\d{16}$"
                value={newOrder.paymentDetails.cardNumber}
                onChange={handlePaymentDetailsChange}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Ange ett giltigt kortnummer i formatet XXXX XXXX XXXX XXXX (16 siffror)."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Utgångsdatum (MM/YY)
              <shad.Input
                type="text"
                placeholder="Utgångsdatum (MM/YY)"
                name="expDate"
                className="w-full mt-1"
                pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                value={newOrder.paymentDetails.expDate}
                onChange={handlePaymentDetailsChange}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Ange ett giltigt utgångsdatum i formatet MM/YY."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              Kortinnehavarens namn
              <shad.Input
                type="text"
                placeholder="Kortinnehavarens namn"
                name="cardName"
                className="w-full mt-1"
                value={newOrder.paymentDetails.cardName}
                onChange={handlePaymentDetailsChange}
                required
              />
            </shad.Label>
            <shad.Label className="block">
              CVV
              <shad.Input
                type="text"
                placeholder="CVV"
                name="cvv"
                className="w-full mt-1"
                pattern="^\d{3}$"
                value={newOrder.paymentDetails.cvv}
                onChange={handlePaymentDetailsChange}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Ange ett giltigt CVV i formatet XXX (3 siffror)."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </shad.Label>

            <shad.Button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded"
            >
              Skicka
            </shad.Button>
          </form>
        </shad.Card>
      ) : (
        <h1 className="text-2xl font-bold">Tack för din beställning!</h1> && (
          <OrderConfirmation orderDetails={orderDetails} />
        )
      )}
    </>
  );
}

export default OrderForm;
