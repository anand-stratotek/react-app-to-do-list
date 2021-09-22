import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const Header = ({ name }) => {
  const history = useHistory();
  const userName = localStorage.getItem('userName');

  const [nameState, setnameState] = useState(null);

  useEffect(() => {
    if (userName) {
      setnameState(userName);
    }
  }, [userName]);

  const logout = () => {
    localStorage.removeItem('userName');
    setnameState(null);
    history.push('/');
  };

  return (
    <div>
      <header>
        <img
          src='https://i.pinimg.com/originals/a4/81/18/a48118b420ac1aa643560d589a74a2c2.png'
          alt=''
        />
        <h2>RoboFriends</h2>
        <span>{nameState && nameState}</span>

        {nameState && <button onClick={logout}>Logout </button>}
      </header>
    </div>
  );
};

export default Header;
