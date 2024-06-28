import React from 'react';

import Banner from '../Banner/Banner';

function LostBanner({ answer, resetGame }) {
  return (
    <Banner status="sad" resetGame={resetGame}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
