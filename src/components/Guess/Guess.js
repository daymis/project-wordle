import React from 'react';

function EmptyCell() {
  return (
    <>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </>
  );
}

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
          <EmptyCell />
        )}
      </p>
    </div>
  );
}

export default Guess;
