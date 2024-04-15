import * as shad from "@/components/ui/shadBarrel";

function OrderForm() {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold">Leveransadress</h2>
      <shad.Input
        type="text"
        placeholder="Gatuaddress"
        className="w-full"
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
