import React, { useState } from 'react';

function GuessInput({ updateGuessesList, disabled }) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuessesList(userInput);
    setUserInput('');
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          value={userInput}
          minLength={5}
          maxLength={5}
          pattern="[A-Z]{5,5}"
          title="5 letter word"
          disabled={disabled}
          onChange={(event) => setUserInput(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
