import React, { useState } from 'react';
import "./room.css";
import on from './assets/bulb1.png';
import off from './assets/bulb.png';

function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(22);
    let [light, setLight] = useState(false);
    let [temp, setTemp] = useState(22);
    return (
        <div>
            <div className={`room  ${isLit ? "lit" : "dark"}`}>
                this room is: {isLit ? "lit" : "dark"}
                <br />
                Age: {age}
                <br />
                <button onClick={() => setLit(!isLit)}>toggle button</button>
                <br />
                <button onClick={() => {
                    setAge(++age);
                }}>increase in age</button>
                <br />
            </div>
            <div>
                <img src={`${light ? on : off}`} alt="bulb" />
                {/* light is : {light ? "on" : "off"}; */}
                <br />
                <button onClick={() => setLight(true)}>ON</button>
                <button onClick={() => setLight(false)}>Off</button>
            </div><br />
            <div>
                Temprature in Celsius : {temp}
                <br />
                <button onClick={() => setTemp(++temp)}>+</button>
                <button onClick={() => setTemp(--temp)}>-</button>
            </div>
        </div>

    );
}

export default Room;
