import React from 'react';
import { Link } from 'react-router-dom';

import RoutesConfig from '../../RoutesConfig';

export default function QuestionLine({ id, title, answers }) {
  return (
    <li>
      <Link to={RoutesConfig.questionDetails(id)}>
        <p>{title}</p>
      </Link>

      <i>
        {answers > 0 ? answers : 'Nenhuma'} resposta{answers > 1 ? 's' : ''}
      </i>
    </li>
  );
}
