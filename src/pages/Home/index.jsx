import React from 'react';

import QuestionForm from '../../components/QuestionForm';
import QuestionList from '../../components/QuestionList';

export default function Home() {
  return (
    <>
      <QuestionForm />
      <QuestionList />
    </>
  );
}
