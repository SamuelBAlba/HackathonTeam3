import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Css/LocationDetails.css'


const LocationDetails = () => {
  const { borough } = useParams();
  const [boroughData, setBoroughData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://data.cityofnewyork.us/resource/sxx4-xhzg.json?dsny_zone=${borough}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setBoroughData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [borough]);

  if (!boroughData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="heading">{boroughData.dsny_zone} Recycling Details</h1>
      <p className="details">Site Type: {boroughData.site_type}</p>
      <p className="details">District: {boroughData.dsny_district}</p>
      <p className="details">Partner: {boroughData.partner}</p>
      <p className="details">Metal, glass and plastic bins: {boroughData.mgp_bins}</p>
      <p className="details">Paper bins: {boroughData.paper_bins}</p>
    </div>
  );
};

export default LocationDetails;
