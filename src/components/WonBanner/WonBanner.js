import React from 'react';

import Banner from '../Banner/Banner';

function WonBanner({ numGuesses, resetGame }) {
  return (
    <Banner status="happy" resetGame={resetGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
        </strong>
        !
      </p>
    </Banner>
  );
}

export default WonBanner;
