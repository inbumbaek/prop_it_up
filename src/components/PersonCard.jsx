import React, { useState } from "react";

const PersonCard = (props) => {
    
    let {firstName, lastName, age, hairColor} = props;
    const [number, setNumber] = useState(age);
    const increaseNumber = () => {
        setNumber(number+1)
    }

    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {number}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseNumber}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PersonCard;