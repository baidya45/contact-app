import React from "react";

function card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.image} alt="avatar_img" className="circle-img" />
      </div>
      <div className="bottom">
        <p className="info">{props.mob}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}

export default card;
