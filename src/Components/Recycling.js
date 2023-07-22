import React from 'react';

const Recycling = ({ item }) => {
  return (
    <tr>
      <td>{item.material}</td>
      <td>{item.recycling_information}</td>
      <td>{item.acceptable_items}</td>
      <td>{item.additional_information}</td>
    </tr>
  );
};

export default Recycling;
