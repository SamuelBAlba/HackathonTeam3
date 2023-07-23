import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Locations.css'

const Locations = () => {
  const [data, setData] = useState([]);
  const [selectedBorough, setSelectedBorough] = useState("All");


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
      <section>
        <h1>Recycling Guide</h1>
        <div className='Sort'>
          <button onClick={() => setSelectedBorough("BX")}>Bronx</button>
          <button onClick={() => setSelectedBorough("MAN")}>Manhatten</button>
          <button onClick={() => setSelectedBorough("BK")}>Brooklyn</button> 
          <button onClick={() => setSelectedBorough("QN")}>Queens</button>
          <button onClick={() => setSelectedBorough("SI")}>Staten Island</button> 
          <button onClick={() => setSelectedBorough("All")}>All</button>
        </div>
        <div className='table-container'>
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
              {data.filter((item) => {
                if (selectedBorough === "All") {
                  return true; // Show all items when "All" is selected
                } else if (selectedBorough === "BK") {
                  return item.dsny_zone === "BKN" || item.dsny_zone === "BKS";
                } else if (selectedBorough === "QN") {
                  return item.dsny_zone === "QW" || item.dsny_zone === "QE";
                } else {
                  return item.dsny_zone === selectedBorough;
                }
              }).map((item) => (
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
      </section>
    </div>
  );
};

export default Locations;
