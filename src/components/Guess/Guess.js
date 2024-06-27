import React from 'react';

function Guess({ guessResult }) {
  const guessStatus = guessResult?.guessStatus;
  return (
    <div className="guess-results">
      <p className="guess">
        {guessStatus ? (
          guessStatus.map(({ letter, status }, index) => (
            <span className={`cell ${status}`} key={index}>
              {letter}
            </span>
          ))
        ) : (
          <>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </>
        )}
      </p>
    </div>
  );
}

export default Guess;
