import React from 'react';

import QuestionLine from './QuestionLine';

export default function QuestionList() {
  const questions = [
    { id: 1, title: 'titulo 1', answers: 12 },
    { id: 2, title: 'titulo 2', answers: 2 },
    { id: 3, title: 'titulo 3', answers: 1 },
    { id: 4, title: 'titulo 4', answers: 0 },
  ];

  return (
    <>
      <header>Lista de perguntas</header>

      <ul>
        {questions.map(({ id, title, answers }) => (
          <QuestionLine key={id} id={id} title={title} answers={answers} />
        ))}
      </ul>
    </>
  );
}
