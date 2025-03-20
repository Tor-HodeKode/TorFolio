import { useState, useEffect } from "react";
import "../styles/Crypto.css"; // Importer den samme CSS-filen

const CryptoWidget = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("market_cap"); // Standard sortering

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        if (!response.ok) {
          throw new Error("Kunne ikke hente data");
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) return <p className="loading-message">Laster kryptodata...</p>;
  if (error) return <p className="error-message">Feil: {error}</p>;

  // Funksjon for å sortere data basert på valgt kriterium
  const sortedCrypto = [...cryptoData].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.current_price - b.current_price;
      case "price-desc":
        return b.current_price - a.current_price;
      case "alphabetical":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="crypto-widget">
      {/* Opprinnelig bildekilde */}
      <img src="../cryptosite.png" alt="Crypto Logo" className="crypto-logo" />

      {/* Sorteringsknapper */}
      <div className="sort-buttons">
        <button onClick={() => setSortBy("price-asc")}>Pris ↑</button>
        <button onClick={() => setSortBy("price-desc")}>Pris ↓</button>
        <button onClick={() => setSortBy("alphabetical")}>A-Å</button>
      </div>

      <ul className="crypto-list">
        {sortedCrypto.map((coin) => (
          <li key={coin.id} className="crypto-item">
            <img src={coin.image} alt={coin.name} width="20" className="crypto-icon" />
            {coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}
            <span className={`price-change ${coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}`}>
              ({coin.price_change_percentage_24h.toFixed(2)}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoWidget;
