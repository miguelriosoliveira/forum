import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import QuestionLine from '../../components/QuestionLine';

export default function Home() {
  const [search, setSearch] = useState('');
  const [notAnswered, setNotAnswered] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('posts').then(response => setPosts(response.data));
  }, []);

  async function onSubmitSearch(event) {
    event.preventDefault();
    const response = await api.get('posts', {
      params: { search, notAnswered: notAnswered || null },
    });
    setPosts(response.data);
    setTitle('');
    setBody('');
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await api.post('posts', { title, body });
    setPosts([...posts, response.data]);
    setTitle('');
    setBody('');
  }

  return (
    <>
      {/* filtros */}

      <form onSubmit={onSubmitSearch}>
        <p>Buscar pergunta</p>
        <input
          placeholder="Buscar..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <input
          type="checkbox"
          id="notAnswered"
          checked={notAnswered}
          onChange={() => setNotAnswered(!notAnswered)}
        />
        <label for="notAnswered"> Sem respostas</label>
        <button type="submit">Buscar</button>
      </form>

      {/* <QuestionForm /> */}

      <form onSubmit={onSubmit}>
        <p>Qual é a sua dúvida?</p>
        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Insira aqui sua pergunta..."
          value={body}
          onChange={event => setBody(event.target.value)}
        />
        <button type="submit">Enviar!</button>
      </form>

      {/* <QuestionList /> */}

      <header>Lista de perguntas</header>
      <ul>
        {posts.map(({ _id, title, body, answers, likes, createdAt }) => (
          <QuestionLine
            key={_id}
            id={_id}
            title={title}
            body={body}
            answers={answers}
            likes={likes}
            createdAt={createdAt}
          />
        ))}
      </ul>
    </>
  );
}
