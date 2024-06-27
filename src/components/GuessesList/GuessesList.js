import React from 'react';

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => (
        <p key={id}>{guess}</p>
      ))}
    </div>
  );
}

export default GuessesList;
