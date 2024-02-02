import React from 'react';
import './ToDOList.css';

function ToDOTable({ items }) {
  console.log(items)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {items && items.map((item, index) => (
              <tr className='border-row' key={index}>
                
                <td>{item.date}</td>

                <td>{item.description}</td>
              </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDOTable;
