import React, { useState, useEffect } from 'react';

function ToDOTable({ items, setLists }) {


  const deleteItem = (index) => {
    const updatedList = items.filter((todo, i) => i !== index);

    setLists(updatedList);
  };

  return (
    <div className='div_lists'>
      <div className='added_title'>
        <h4>Date</h4>
        <h4>Description</h4>

      </div>
      {items && items.map((item, index) => (
        <div className='added_points'>
          <div className='added_title' key={index}>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
          <p><button onClick={() => deleteItem(index)}>Delete</button></p>
        </div>
      ))}

    </div>
  );
}

export default ToDOTable;
