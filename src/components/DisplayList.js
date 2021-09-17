import React from 'react';

const DisplayList = ({ items, onRemoveButtonClick }) => {
  return (
    <div>
      <ul>
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 15,
                width: 200,
              }}
            >
              <li key={item + index}>{item}</li>
              <button onClick={() => onRemoveButtonClick(item)}>
                - Remove
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default DisplayList;
