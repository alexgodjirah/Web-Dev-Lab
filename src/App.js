import CommunityCard from "./components/CommunityCard";
import PlayerHands from "./components/PlayerHands";

// App is the table
function App() {
  return (
    <div className="App">
      <h1>Welcome to React-Poker</h1>
      <CommunityCard />
      
      <PlayerHands />
    </div>
  );
}

export default App;
