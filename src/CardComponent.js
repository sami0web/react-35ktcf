import React from 'react';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <div className="card">
      <img  className="img-card"
        src="https://randomuser.me/api/portraits/men/61.jpg"
        alt="test"
      />
      <h3>User Name :{props.Name}</h3>
      
      <p>User Phone: {props.Phone}</p>
      <p>User Email : {props.Email}</p>
    </div>
  );
}

export default CardComponent;
