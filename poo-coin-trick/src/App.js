import { useState } from "react";
import axios from "axios";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  const [listCoins, setListCoins] = useState([]);
  const fourthLastDigit = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const fetchCoin = () => {
    fourthLastDigit.forEach(async (el) => {
      await axios
        .get(`https://api1.poocoin.app/tokens?search=${el}${lastValue}`)
        .then((res) => {
          setListCoins((prev) => [...prev, ...res.data]);
        });
    });
  };

  return (
    <div>
      <input
        type="text"
        value={firstValue}
        onChange={(e) => setFirstValue(e.target.value)}
      />
      <input
        type="text"
        value={lastValue}
        onChange={(e) => setLastValue(e.target.value)}
      />

      <button onClick={fetchCoin}>Submit</button>
      <ul>
        {listCoins.length &&
          listCoins.map((item) => {
            return (
              <li>
                {item.name}
                {"  "} {item.address}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
