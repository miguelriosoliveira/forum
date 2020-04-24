import React from 'react';

import AnswerForm from '../../components/AnswerForm';

export default function QuestionDetails({ history }) {
  // Nesta segunda tela, deverá ser exibida uma única pergunta com todas suas respostas;
  // Nesta mesma tela, deve haver um formulário onde seja possível inserir uma resposta à pergunta em evidência;

  const title = 'Pergunta X';
  const body =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const answers = [
    { id: 1, text: body },
    { id: 2, text: body },
    { id: 3, text: body },
  ];

  return (
    <>
      <button onClick={history.goBack}>Voltar</button>

      <h4>{title}</h4>

      <p>{body}</p>

      <AnswerForm />

      <ul>
        {answers.map(answer => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
    </>
  );
}
