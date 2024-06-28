import React from 'react';

function Banner({ status, resetGame, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button onClick={resetGame} id="play-again">
        <div style={{ textEmphasis: 'filled sesame' }}>Play again!</div>
      </button>
    </div>
  );
}

export default Banner;
