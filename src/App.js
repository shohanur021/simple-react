import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './Componnents/Data/data.json'
import Player from './Componnents/Player/Player';
import Cart from './Componnents/Cart/Cart';


function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
  }, [])

  const [cartPlayer,setCartPlayer] = useState([]);
  const addPlayerHandle = (player) => {
      if(!cartPlayer.includes(player)){
        const newPlayer =  [...cartPlayer,player];
        setCartPlayer(newPlayer);
      }
  }

  return (
    <div className="App">
      <h1 className="headerClass">Bangladesh Premier League (BPL)</h1>
      <div className="body">
        <div className="playerInfo">
          {
            players.map(plr => <Player player={plr} addPlayerHandle={addPlayerHandle} key={plr.id}></Player>)
          }
        </div>
        <Cart cartPlayer={cartPlayer} key={cartPlayer}></Cart>
      </div>
    </div>
  );
}

export default App;
