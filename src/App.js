import { useState } from "react";
import axios from "axios";
import { fourthLastDigit } from "./utils";
import "./app.css";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  const [listCoins, setListCoins] = useState([]);

  const fetchCoin = () => {
    setListCoins([]);
    fourthLastDigit.forEach(async (el) => {
      await axios
        .get(`https://api1.poocoin.app/tokens?search=${el}${lastValue}`)
        .then((res) => {
          const filteredCoins = res.data.filter((coin) =>
            coin.address.startsWith(firstValue)
          );
          setListCoins((prev) => [...prev, ...filteredCoins]);
        });
    });
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridGap: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <input
          type="text"
          placeholder="First Few Characters"
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
          style={{ padding: 10 }}
        />
        <input
          type="text"
          placeholder="Last Few Characters"
          value={lastValue}
          onChange={(e) => setLastValue(e.target.value)}
          style={{ padding: 10 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <button onClick={fetchCoin} style={{ padding: 5 }}>
          Search
        </button>
      </div>
      {listCoins.length ? (
        <table>
          <tr>
            <th>Symbol</th>
            <th>Coin</th>
            <th>address</th>
          </tr>
          {listCoins.map((item) => {
            return (
              <tr>
                <td>{item.symbol}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </table>
      ) : null}
    </div>
  );
}

export default App;
