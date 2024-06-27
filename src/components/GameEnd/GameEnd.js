import React from 'react';

function GameEnd({ gameStatus, numGuesses, answer, resetGame }) {
  const endGameText = {
    won: {
      className: 'happy banner',
      message: (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses}</strong> guesses.
        </p>
      )
    },
    lost: {
      className: 'sad banner',
      message: (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      )
    }
  };

  return (
    <div>
      {gameStatus && (
        <div className={`${endGameText[gameStatus].className}`}>
          {endGameText[gameStatus].message}
          <button onClick={resetGame}>Play Again!</button>
        </div>
      )}
    </div>
  );
}

export default GameEnd;
