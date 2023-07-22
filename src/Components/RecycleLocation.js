import axios from "axios";
import { useState, useEffect } from 'react'

function RecyclingLocation() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      axios.get("https://data.cityofnewyork.us/resource/sxx4-xhzg.json")
        .then((response) => setItems(response.data))
        .catch((err) => console.warn("catch", err));
    }, []);
  
    return (
      <div className="RecyclingGuide">
        <table className="RecyclingItems">
          <thead>
            <tr>
              <th className="RecyclingItems-header">Material</th>
              <th className="RecyclingItems-header">Recycling Information</th>
              <th className="RecyclingItems-header">Acceptable Items</th>
              <th className="RecyclingItems-header">Additional Information</th>
            </tr>
          </thead>
          <tbody>
            {items
              ? items.map((item) => {
                  return <RecyclingItem key={item.material} item={item} />;
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default RecyclingLocation;
  