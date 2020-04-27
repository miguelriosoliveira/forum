import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import RoutesConfig from '../../RoutesConfig';

export default function QuestionLine({ id, title, body, answers, likes, createdAt }) {
  return (
    <li>
      <Link to={RoutesConfig.questionDetails(id)}>{title}</Link>
      <br />
      <p>{body}</p>
      <span>Criado em {format(parseISO(createdAt), 'dd/MM/yyyy h:mm:ss')}</span>
      <i>
        {' '}
        - {answers.length} resposta{answers.length > 1 && 's'}
        {likes > 0 && ` - ${likes} likes`}
      </i>
    </li>
  );
}
