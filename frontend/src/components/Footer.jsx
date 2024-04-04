const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen p-5 bg-slate-400">
      <div className="w-30">
        {" "}
        <h3>Hakim Livs</h3>
        <p>123 Stockholm Suburb St., Stockholm, Sweden</p>
        <a href="tel:+46701234567"></a>
        <a href={`mailto:hakimlivs@gmail.com`}>hakimlivs@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
