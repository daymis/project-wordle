import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [answer, setAnswer] = useState(() => sample(WORDS));

  console.info(`DVA: ${answer}`);

  const resetGame = () => {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    setGuesses([]);
    setGameStatus('');
  };

  const updateGuessesList = (userInput) => {
    const newGuess = {
      guessStatus: checkGuess(userInput, answer),
      guess: userInput,
      id: crypto.randomUUID()
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    updateGameStatus(newGuess, newGuesses.length);
  };

  const updateGameStatus = (newGuess, numGuesses) => {
    const isGameWon = newGuess.guessStatus.every(
      ({ status }) => status === 'correct'
    );

    isGameWon && setGameStatus('won');
    !isGameWon &&
      numGuesses === NUM_OF_GUESSES_ALLOWED &&
      setGameStatus('lost');
  };

  return (
    <div>
      {[...guesses, ...Array(NUM_OF_GUESSES_ALLOWED - guesses.length)].map(
        (guess, index) => (
          <Guess key={index} guessResult={guess} />
        )
      )}
      <GuessInput
        updateGuessesList={updateGuessesList}
        disabled={gameStatus === 'won' || gameStatus === 'lost'}
      />
      {gameStatus === 'won' && (
        <WonBanner numGuesses={guesses.length} resetGame={resetGame} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner resetGame={resetGame} answer={answer} />
      )}
    </div>
  );
}

export default Game;
