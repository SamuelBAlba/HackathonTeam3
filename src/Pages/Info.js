import React, { useState } from 'react';
import "../Css/Info.css";
import wasteSorting from "./wasteSorting.jpeg";

export default function Info() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionName) => {
    setExpandedSection((prevExpanded) => (prevExpanded === sectionName ? null : sectionName));
  };

  const renderSection = (sectionName, sectionContent) => {
    return (
      <div key={sectionName}>
        <button onClick={() => toggleSection(sectionName)}>
          {expandedSection === sectionName ? "▼ " : "▶ "}{sectionName}
        </button>
        {expandedSection === sectionName && <div className="section-content">{sectionContent}</div>}
      </div>
    );
  };

  return (
    <div className='Info'>
      <h1>How To Recycle</h1>
      New York City has a robust recycling program that aims to reduce waste sent to landfills and promote a more sustainable environment. As a resident or visitor, you can participate in recycling by following these guidelines:

      <div className='img-container'>
        {renderSection("1. Recyclable Materials", (
          <>
            - Paper: Newspapers, magazines, office paper, cardboard, paperboard (cereal boxes, shoeboxes, etc.).
            <br />
            - Metal: Aluminum cans, steel cans, empty aerosol cans.
            <br />
            - Glass: Bottles and jars (please remove caps and lids).
            <br />
            - Plastic: Plastic bottles and jugs labeled with recycling codes 1, 2, 3, 4, 5, or 7 (rinsed and with caps removed).
            <p><strong>
              These materials are commonly accepted for curbside recycling in NYC. By recycling these items, you help reduce landfill waste and conserve valuable resources.
            </strong></p>
          </>
        ))}

        {renderSection("2. Sorting and Preparation", (
          <>
            It's essential to separate recyclables from regular trash. Rinse containers to remove any food residue, and flatten cardboard boxes to save space. Keeping recyclables clean and free from contamination is crucial for effective recycling.
            <p><strong>
              Proper sorting and preparation of recyclables ensure that they can be processed efficiently and effectively. Contaminated materials may end up being disposed of as waste, undermining recycling efforts.
            </strong></p>
          </>
        ))}

        {renderSection("3. Recycling Bins", (
          <>
            NYC provides blue recycling bins to residents for curbside recycling. Place all recyclable materials together in the bin, and put the bin out on designated recycling collection days.
            <p><strong>
              The blue recycling bins provided by the city are designed to hold recyclable materials securely until collection day. Be sure to place the bin at the designated collection point for efficient pickup.
            </strong></p>
          </>

        ))}

        {renderSection("4. Collection Schedule", (
          <>
            Recycling is collected on specific days depending on your location. Visit the NYC Department of Sanitation (DSNY) website or use the "NYC Recycling" app to find your recycling schedule.
            <p><strong>
              Knowing the collection days helps ensure timely disposal of recyclable materials.
            </strong></p>
          </>
        ))}

        {renderSection("5. Recycling Drop-Off Locations", (
          <>
            In addition to curbside recycling, NYC has various recycling drop-off locations throughout the city for electronics, clothing, and other materials. Check the DSNY website for the nearest drop-off site.
            <p><strong>
              Properly disposing of these items ensures they can be recycled or repurposed. To find out more information, please check the link below this App.
            </strong></p>
          </>
        ))}

        {renderSection("6. Electronic Waste (E-Waste) Recycling", (
          <>
            NYC prohibits disposing of electronic waste in the trash. Instead, you can recycle electronics through special e-waste collection events or drop-off locations. This includes items such as computers, TVs, printers, and cell phones.
            <p><strong>
              Electronic waste, or e-waste, requires special recycling due to its potential environmental impact. Make use of designated e-waste collection events or drop-off locations to ensure responsible disposal and recycling of electronic devices.
            </strong></p>
          </>
        ))}

        {renderSection("7. Textile Recycling", (
          <>
            Don't throw old clothing and textiles in the trash. NYC provides textile recycling options through drop-off locations and special collection events.
            <p><strong>
              Textile recycling allows old clothing and fabrics to be reused or repurposed, reducing waste and promoting sustainability. Check with the DSNY or local organizations for drop-off locations and collection events.
            </strong></p>
          </>
        ))}

        {renderSection("8. Composting", (
          <>
            While not currently available citywide, NYC has been piloting organics recycling programs for food waste. Check with DSNY for updates on composting initiatives in your area.
            <p><strong>
              Composting food waste can divert a significant portion of trash from landfills and contribute to soil enrichment. Stay informed about composting programs and initiatives in your neighborhood to participate in the city's efforts to reduce organic waste.
            </strong></p>
          </>
        ))}
        <br />
        <img src={wasteSorting} alt="Logo" />
      </div>

      <div className='info-text'>
        Remember, recycling is a collective effort, and everyone's participation makes a significant impact on reducing waste and protecting the environment. By recycling properly, you contribute to the sustainability and cleanliness of New York City.
        <br />
        For more detailed and up-to-date information on recycling in NYC, you can visit: <a href="https://www.nyc.gov/assets/dsny/site/services">NYC Department of Sanitation (DSNY) Website</a>
      </div>
    </div>
  );
}
