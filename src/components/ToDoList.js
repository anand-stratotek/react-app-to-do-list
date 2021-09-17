import React, { useState } from 'react';
import DisplayList from './DisplayList';

const ToDoList = () => {
  const [input, setinput] = useState('');
  const [data, setData] = useState([]);
  const onButtonClick = () => {
    if (input) {
      setData([...data, input]); // Updating my data
      setinput(''); // Ressiting my state to initial value
    }
  };

  // console.log(input);

  const onRemoveButtonClick = (item) => {
    const filteredData = data.filter((dataItem, index) => dataItem !== item);
    // console.log('FILTERED DATA=>', filteredData);
    setData(filteredData);
  };

  const someFunctionHere = (data) => {
    if (data.length > 0) {
      return (
        <DisplayList items={data} onRemoveButtonClick={onRemoveButtonClick} />
      );
    } else {
      return <div>Please add items to-do list</div>;
    }
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
      {someFunctionHere(data)}
      {/* {data.length > 0 ? (
        <DisplayList items={data} onRemoveButtonClick={onRemoveButtonClick} />
      ) : (
        <div>Please add items to-do list</div>
      )} */}
    </div>
  );
};

export default ToDoList;
