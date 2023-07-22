import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Locations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://data.cityofnewyork.us/resource/sxx4-xhzg.json';

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Recycling Guide</h1>
      <ul>
        {data.map((item) => (
          <li key={item.mgp_bins}>
            Item: {item.mgp_bins}, Recycle Type: {item.site_location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
