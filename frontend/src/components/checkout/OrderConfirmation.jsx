import { Card } from "@/components/ui/shadBarrel";

export default function OrderConfirmation({ orderDetails }) {
  if (!orderDetails) {
    return <p>Loading your order details...</p>;
  }

  return (
    <Card className="bg-white p-10 rounded-lg shadow space-y-2 w-96">
      <h2 className="text-2xl font-bold text-center">
        Tack för din beställning!
      </h2>
      <ul className="space-y-1">
        {orderDetails.items.map((item) => (
          <li key={item.product}>
            <strong>{item.productName}:</strong> {item.quantity} st ×{" "}
            {item.price} SEK
          </li>
        ))}
      </ul>
      <p className="text-right font-bold">Totalt: {orderDetails.total} SEK</p>
      <div className="mt-4">
        <p>
          <strong>Leveransadress:</strong>{" "}
          {orderDetails.shippingAddress.streetAddress},{" "}
          {orderDetails.shippingAddress.city},{" "}
          {orderDetails.shippingAddress.county},{" "}
          {orderDetails.shippingAddress.postalCode},{" "}
          {orderDetails.shippingAddress.country}
        </p>
        <p>
          <strong>Kund:</strong> {orderDetails.customer.firstName}{" "}
          {orderDetails.customer.lastName}
        </p>
        <p>
          <strong>E-post:</strong> {orderDetails.customer.email}
        </p>
      </div>
    </Card>
  );
}
