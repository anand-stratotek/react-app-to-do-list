import React, { useState } from 'react';
import DisplayList from './DisplayList';

const ToDoList = () => {
  const [input, setinput] = useState('');
  const [data, setData] = useState([]);
  const onButtonClick = () => {
    if (input) {
      setData([...data, input]);
      setinput('');
    }
  };

  const onRemoveButtonClick = (item) => {
    const filteredData = data.filter((dataItem, index) => dataItem !== item);
    // console.log('FILTERED DATA=>', filteredData);
    setData(filteredData);
  };

  return (
    <div style={{ margin: '30px' }}>
      <input
        value={input}
        onChange={(e) => setinput(e.target.value)}
        name='input'
      />
      <button style={{ marginLeft: 10 }} onClick={onButtonClick}>
        Add
      </button>
      {data.length > 0 ? (
        <DisplayList items={data} onRemoveButtonClick={onRemoveButtonClick} />
      ) : (
        <div>Please add items to-do list</div>
      )}
    </div>
  );
};

export default ToDoList;
