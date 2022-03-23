import React from 'react';

const Start = ({ onQuizStart, school }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start the quiz</h1>
          <h2>Topic : {school.name}</h2>
          <p>Good luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;