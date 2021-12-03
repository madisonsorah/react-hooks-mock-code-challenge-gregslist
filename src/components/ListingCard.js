import React, { useState } from "react";

function ListingCard({listing, handleDelete}) {
  const [clicked, setClick] = useState(false);

  const onDelete = () => {
    handleDelete(listing.id)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        <button 
          onClick={() => setClick(!clicked)} 
          className={ `emoji-button favorite ${clicked ? "active" : ""}` }
        >{clicked ? "★" : "☆" }</button>
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={onDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
