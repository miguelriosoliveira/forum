import React, { useState } from 'react';

export default function QuestionForm() {
  const [question, setQuestion] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    console.log({ question });
  }

  return (
    <form onSubmit={onSubmit}>
      <p>Qual é a sua dúvida?</p>

      <input
        placeholder="Insira aqui sua pergunta..."
        value={question}
        onChange={event => setQuestion(event.target.value)}
      />
    </form>
  );
}
