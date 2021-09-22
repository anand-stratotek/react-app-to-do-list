import React, { useState, useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import SearchComponent from './SearchComponent';

const SecondPage = () => {
  const [searchKey, setsearchKey] = useState('');
  const [roboData, setroboData] = useState([]);
  const onSearchFunction = (value) => {
    setsearchKey(value);
  };

  useEffect(() => {
    const uri = 'https://jsonplaceholder.typicode.com/users';
    fetch(uri)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log('DATA=>', data);
        setroboData(data);
      });
  }, []);

  //   console.log('SEARCH KEY=>', searchKey);
  return (
    <div>
      <Header />
      <div class='container'>
        <SearchComponent
          onSearchFunction={onSearchFunction}
          searchKey={searchKey}
        />
        <div>
          <Card roboData={roboData} />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
