import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GameEnd from '../GameEnd/GameEnd';
// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

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
    setGuesses([...guesses, newGuess]);
    updateGameStatus(newGuess);
  };

  const updateGameStatus = (newGuess) => {
    const isGameWon = newGuess.guessStatus.every(
      ({ status }) => status === 'correct'
    );

    debugger;

    isGameWon && setGameStatus('won');
    !isGameWon &&
      guesses.length === NUM_OF_GUESSES_ALLOWED - 1 &&
      setGameStatus('lost');
  };

  return (
    <div>
      {[...guesses, ...Array(NUM_OF_GUESSES_ALLOWED - guesses.length)].map(
        (guess, index) => (
          <Guess key={index} guessResult={guess} />
        )
      )}
      {/* <GuessesList guesses={guesses} /> */}
      <GuessInput
        updateGuessesList={updateGuessesList}
        disabled={gameStatus === 'won' || gameStatus === 'lost'}
      />
      <GameEnd
        gameStatus={gameStatus}
        numGuesses={guesses.length}
        answer={answer}
        resetGame={resetGame}
      />
    </div>
  );
}

export default Game;
