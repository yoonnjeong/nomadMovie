import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [coinValue, setCoinValue] = useState(1);

  const onChange = (e) => {
    setMoney(e.target.value);
  };

  const onCoinValue = (e) => {
    setCoinValue(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The all Coins {loading ? "" : `(${coins.length})`} ~ !</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h2>💰 How much your Coin? Select the Coin!!</h2>
          <input
            type="number"
            value={money}
            onChange={onChange}
            placeholder="Write your money!"
          />
          $
          <hr />
          <select onChange={onCoinValue}>
            <option>Select Option</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <h3>Get Coin {money / coinValue}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
