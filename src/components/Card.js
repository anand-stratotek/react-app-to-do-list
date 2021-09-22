import React from 'react';

const Card = ({ roboData }) => {
  const renderRobots = (robos) => {
    if (robos.length > 0) {
      return robos.map((robo, index) => {
        return (
          <div key={robo?.id}>
            <div>{robo?.name}</div>
            <div>{robo?.email}</div>
          </div>
        );
      });
    } else {
      return <div> NO ROBOTS</div>;
    }
  };

  return <div>{renderRobots(roboData)}</div>;
};

export default Card;
