import * as shad from "@/components/ui/shadBarrel";
import { POST_REQUEST } from "@/utils/helpers/request.helper";
import axios from "axios";
import { useState, useEffect } from "react";

function OrderForm() {
  const [cartData, setCartData] = useState([]);
  const [newOrder, setNewOrder] = useState({
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    customer: {
      firstName: "",
      lastName: "",
      email: "",
    },
    payment: {
      cardNumber: "",
      expiration: "",
      cardHolder: "",
      cvv: "",
    },
    items: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
    console.log(name, "name");
    console.log(value, "value");
  }

  function handlePaymentChange(e) {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      payment: { ...newOrder.payment, [name]: value },
    });
  }

  useEffect(() => {
    console.log(newOrder, "newOrder");
  }, [newOrder]);

  useEffect(() => {
    const storedCartData = localStorage.getItem("shoppingCart");
    const cartData = JSON.parse(storedCartData) || [];
    console.log("Loaded cart data:", cartData);
    setCartData(cartData);
  }, []);

  function handleSubmit() {
    return async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      try {
        await POST_REQUEST("/api/order/create", newOrder);
        alert("Order placed successfully!");
        localStorage.removeItem("shoppingCart");
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    };
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Leveransadress</h2>
      <shad.Input
        type="text"
        placeholder="Gatuaddress"
        name="street"
        className="w-full"
        value={newOrder.address.street}
        id="street"
        onChange={handleChange}
        required
      />
      <shad.Input type="text" placeholder="Stad" className="w-full" required />
      <shad.Input type="text" placeholder="Län" className="w-full" required />
      <shad.Input
        type="text"
        placeholder="Postnummer"
        className="w-full"
        pattern="^\d{3}\s?\d{2}$"
        required
      />
      <shad.Input type="text" placeholder="Land" className="w-full" required />

      <h2 className="text-2xl font-bold">Kunduppgifter</h2>
      <shad.Input
        type="text"
        placeholder="Förnamn"
        className="w-full"
        required
      />
      <shad.Input
        type="text"
        placeholder="Efternamn"
        className="w-full"
        required
      />
      <shad.Input
        type="email"
        placeholder="E-post"
        className="w-full"
        required
      />

      <h2 className="text-2xl font-bold">Betalningsuppgifter</h2>
      <shad.Input
        type="text"
        placeholder="Kortnummer"
        className="w-full"
        pattern="^\d{16}$"
        name="cardNumber"
        value={newOrder.payment.cardNumber}
        onChange={handlePaymentChange}
        required
      />
      <shad.Input
        type="text"
        placeholder="Utgångsdatum (MM/YY)"
        className="w-full"
        pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
        required
      />
      <shad.Input
        type="text"
        placeholder="Kortinnehavarens namn"
        className="w-full"
        required
      />
      <shad.Input
        type="text"
        placeholder="CVV"
        className="w-full"
        pattern="^\d{3}$"
        required
      />

      <shad.Button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded"
      >
        Skicka
      </shad.Button>
    </form>
  );
}

export default OrderForm;
