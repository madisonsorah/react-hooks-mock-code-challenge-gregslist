import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingData, setListingData] = useState([]);
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
     .then((response) => response.json())
     .then((listings) => setListingData(listings))
  }, [])

  const handleDelete = (id) => {
    console.log(id)
    let updatedListings = listingData.filter((listing) => listing.id !== id)
    setListingData(updatedListings);
    const config = {
      method: "DELETE",
    }
    fetch(`http://localhost:6001/listings/${id}`, config)
  }

  const handleSearch = (query) => {
    setSearch(query)
  }

  const listingsToRender = listingData.filter((listing) => 
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch}/>
      <ListingsContainer listingData={listingsToRender} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
