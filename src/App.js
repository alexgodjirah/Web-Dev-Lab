import { useState, useEffect } from 'react';

function App() {
  const [suits, setSuits] = useState([...Array(2)]);
  const [cards, setCards] = useState([...Array(2)]);

  useEffect(() => {
    fetch('http://localhost:3001/suits')
      .then(response => response.json())
      .then(json => {
        const randomSuit1 = json[Math.floor(Math.random() * json.length)];
        const randomSuit2 = json[Math.floor(Math.random() * json.length)];
        setSuits([randomSuit1.key, randomSuit2.key]);
      });
  }, [setSuits]);

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(json => {
        const randomCard1 = json[Math.floor(Math.random() * json.length)];
        const randomCard2 = json[Math.floor(Math.random() * json.length)];
        setCards([randomCard1.key, randomCard2.key]);
      });
  }, [setCards]);
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      {
        cards.map((card, idx) => (
          suits.map((suit, idx) => (
            <div key={idx}>
              {card} of {suit}
            </div>
          ))
        ))
      }
    </div>
  );
}

export default App;
