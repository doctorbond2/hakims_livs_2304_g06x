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

  function handleAddressDetails(e) {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      address: { ...newOrder.address, [name]: value },
    });
    console.log(name, "name");
    console.log(value, "value");
  }

  function handleCustomerDetails(e) {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      customer: { ...newOrder.customer, [name]: value },
    });
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
      <shad.Label className="block">
        Gatuadress
        <shad.Input
          type="text"
          placeholder="Gatuaddress"
          name="street"
          className="w-full mt-1"
          value={newOrder.address.street}
          onChange={handleAddressDetails}
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
          value={newOrder.address.city}
          onChange={handleAddressDetails}
          required
        />
      </shad.Label>
      <shad.Label className="block">
        Län
        <shad.Input
          type="text"
          placeholder="Län"
          name="state"
          className="w-full mt-1"
          value={newOrder.address.state}
          onChange={handleAddressDetails}
          required
        />
      </shad.Label>
      <shad.Label className="block">
        Postnummer
        <shad.Input
          type="text"
          placeholder="Postnummer"
          name="zip"
          className="w-full mt-1"
          value={newOrder.address.zip}
          onChange={handleAddressDetails}
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
          value={newOrder.address.country}
          onChange={handleAddressDetails}
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
          onChange={handleCustomerDetails}
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
          onChange={handleCustomerDetails}
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
          onChange={handleCustomerDetails}
          required
        />
      </shad.Label>

      <h2 className="text-2xl font-bold">Betalningsuppgifter</h2>
      <shad.Label className="block">
        Kortnummer
        <shad.Input
          type="text"
          placeholder="Kortnummer"
          name="cardNumber"
          className="w-full mt-1"
          pattern="^\d{16}$"
          value={newOrder.payment.cardNumber}
          onChange={handlePaymentChange}
          required
        />
      </shad.Label>
      <shad.Label className="block">
        Utgångsdatum (MM/YY)
        <shad.Input
          type="text"
          placeholder="Utgångsdatum (MM/YY)"
          name="expiration"
          className="w-full mt-1"
          pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
          value={newOrder.payment.expiration}
          onChange={handlePaymentChange}
          required
        />
      </shad.Label>
      <shad.Label className="block">
        Kortinnehavarens namn
        <shad.Input
          type="text"
          placeholder="Kortinnehavarens namn"
          name="cardHolder"
          className="w-full mt-1"
          value={newOrder.payment.cardHolder}
          onChange={handlePaymentChange}
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
          value={newOrder.payment.cvv}
          onChange={handlePaymentChange}
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
  );
}

export default OrderForm;
