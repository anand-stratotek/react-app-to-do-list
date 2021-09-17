import React from 'react';

const DisplayList = ({ items, onRemoveButtonClick }) => {
  return (
    <div>
      <ul>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 15,
                width: 200,
              }}
            >
              <li>{item}</li>
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
