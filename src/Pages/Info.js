import React from 'react'
import "../Css/Info.css"
// import Recycle from "./recycle.jpg"
import wasteSorting from "./wasteSorting.jpeg"

export default function Info() {
  return (
    <div className='Info'>
      <h1>How To Recycle</h1>
      New York City has a robust recycling program that aims to reduce waste sent to landfills and promote a more sustainable environment. As a resident or visitor, you can participate in recycling by following these guidelines:
      <br />
      <br />
      <div className='img-container'>
        1. Recyclable Materials: NYC's curbside recycling program accepts the following materials:
        <br />
        <br />
          - Paper: Newspapers, magazines, office paper, cardboard, paperboard (cereal boxes, shoeboxes, etc.).
          <br />
          - Metal: Aluminum cans, steel cans, empty aerosol cans.
          <br />
          - Glass: Bottles and jars (please remove caps and lids).
          <br />
          - Plastic: Plastic bottles and jugs labeled with recycling codes 1, 2, 3, 4, 5, or 7 (rinsed and with caps removed).
          <br />
          <br />
        2. Sorting and Preparation: It's essential to separate recyclables from regular trash. Rinse containers to remove any food residue, and flatten cardboard boxes to save space. Keeping recyclables clean and free from contamination is crucial for effective recycling.
        <br />
        <br />
        3. Recycling Bins: NYC provides blue recycling bins to residents for curbside recycling. Place all recyclable materials together in the bin, and put the bin out on designated recycling collection days.
        <br />
        <br />
        4. Collection Schedule: Recycling is collected on specific days depending on your location. Visit the NYC Department of Sanitation (DSNY) website or use the "NYC Recycling" app to find your recycling schedule.
        <br />
        <br />
        5. Recycling Drop-Off Locations: In addition to curbside recycling, NYC has various recycling drop-off locations throughout the city for electronics, clothing, and other materials. Check the DSNY website for the nearest drop-off site.
        <br />
        <br />
        6. Electronic Waste (E-Waste) Recycling: NYC prohibits disposing of electronic waste in the trash. Instead, you can recycle electronics through special e-waste collection events or drop-off locations. This includes items such as computers, TVs, printers, and cell phones.
        <br />
        <br />
        7. Textile Recycling: Don't throw old clothing and textiles in the trash. NYC provides textile recycling options through drop-off locations and special collection events.
        <br />
        <br />
        8. Composting: While not currently available citywide, NYC has been piloting organics recycling programs for food waste. Check with DSNY for updates on composting initiatives in your area.
        <br />
        <br />
        <img src={wasteSorting} alt="Logo" />
        
      </div>
      <div className='info-text'>
        Remember, recycling is a collective effort, and everyone's participation makes a significant impact on reducing waste and protecting the environment. By recycling properly, you contribute to the sustainability and cleanliness of New York City.

        For more detailed and up-to-date information on recycling in NYC, you can visit: <a href="https://www1.nyc.gov/assets/dsny/">NYC Department of Sanitation (DSNY) Website</a>
      </div>
    </div>
  )
}
