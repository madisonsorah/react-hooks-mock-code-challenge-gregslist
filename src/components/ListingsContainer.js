import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, handleDelete}) {
  
  
  const listingCards = listingData.map((listing) => (
    <ListingCard 
    listing={listing} 
    key={listing.id} 
    handleDelete={handleDelete} />))

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
