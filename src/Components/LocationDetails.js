import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{boroughData.dsny_zone} Recycling Details</h1>
      <p>Metal, Glass, and Plastic Bins: {boroughData.mgp_bins}</p>
      <p>Paper Bins: {boroughData.paper_bins}</p>
      <p>Address: {boroughData.site_location}</p>
    </div>
  );
};

export default LocationDetails;
