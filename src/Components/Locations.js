import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Locations.css'

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
      <table className='locations-table'>
        <thead>
          <tr>
            <th>Borough</th>
            <th>Metal, Glass, and Plastic Bins</th>
            <th>Paper Bins</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.dsny_zone}</td>
              <td>{item.mgp_bins}</td>
              <td>{item.paper_bins}</td>
              <td>{item.site_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Locations;
