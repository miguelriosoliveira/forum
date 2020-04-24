import React, { useState } from 'react';

export default function AnswerForm() {
  const [answer, setAnswer] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    console.log({ answer });
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Responda a esta pergunta!"
        value={answer}
        onChange={event => setAnswer(event.target.value)}
      />
    </form>
  );
}
