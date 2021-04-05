import React from 'react';
import './cart.css'

const Cart = (props) => {
    const player = props.cartPlayer;
    const totalPlayers = player.reduce(((sum,plr) => sum+plr.salary),0);
  
    return (
        <div className="cartStyle">
            <h2>Dhaka Vikings Club</h2>
            <h3>Cricketers Name :</h3>
            {
              player.map(plr => <li>{plr.name}</li>)
            }
            <p>Total Player : {player.length}</p>
            <h4>Total Cost : <span style={{color:"#a71d1d"}}>{totalPlayers}</span></h4>
        </div>
    );
};

export default Cart;
