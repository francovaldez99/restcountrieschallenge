import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div className={`Card  ${props.Theme.dark?"cardDark":null}`}>
  
      <img src={props.flag} alt={props.name} width="267px" height="163px" style={{borderRadius: "10px 10px 0 0 "}}/>
      <h4 onClick={() => navigate(`/detail/${props.id}`)}>{props.name}</h4>
      <p>
   
        {props.population === 0 ? null : (
          <>
            <b>Population: </b>
            {props.population}
            <br />
          </>
        )}
        <b>Region: </b>
        {props.region}
        <br />
        {props.capital ? (
          <>
            <b>Capital: </b>
            {props.capital}
          </>
        ) : null}
      </p>
    </div>
  );
}

export default Card;
