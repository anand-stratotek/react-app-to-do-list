import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  const [name, setname] = useState('');
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log('NAME=>', name);
    localStorage.setItem('userName', name);
    history.push('/secondPage');
  };

  return (
    <div class='main'>
      <Header name={name} />
      <h1>Welcome To RoboFriends</h1>
      <form onSubmit={onFormSubmit} id='myf'>
        <input
          type='text'
          name='name'
          placeholder='ENTER YOUR NAME'
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button type='submit' class='btn' onSubmit={onFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
