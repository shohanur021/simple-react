import React from 'react';
import './player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {pic,name,age,playingRole,playingStyle,totalPlayed,salary} = props.player;
    
    return (
        <div className="showPlayersInfo">
           <img className="plyerPicture" src={pic} alt=""></img>
           <div>
           <h3>Name : {name}</h3>
           <p>Age : {age}</p>
           <p>Playing Role : {playingRole}</p>
           <p>Playin gStyle : {playingStyle}</p>
           <p><small>Total test match played : {totalPlayed}</small></p>
           <h4>Monthly Salary : <span style={{color:"#a71d1d"}}>{salary}</span></h4>
           <button className="addButton" onClick={() => props.addPlayerHandle(props.player)}><FontAwesomeIcon icon={faPlusCircle}/>  Add To Club</button>
           </div>
        </div>
    );
};

export default Player;