import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function QuestionDetails({ history, match }) {
  const postId = match.params.id;

  const [post, setPost] = useState({ answers: [] });
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    api.get(`posts/${postId}`).then(response => setPost(response.data));
  }, [postId]);

  async function onSubmit(event) {
    event.preventDefault();
    const response = await api.post(`posts/${postId}/answer`, { text: answer });
    setPost(response.data);
    setAnswer('');
  }

  async function handleLike() {
    const response = await api.post(`posts/${postId}/like`);
    setPost({ ...post, likes: response.data.likes });
  }

  async function handleLikeAnswer(id) {
    const response = await api.post(`posts/${postId}/answer/${id}/like`);
    setPost(response.data);
  }

  return (
    <>
      <button onClick={history.goBack}>Voltar</button>

      <h4>{post.title}</h4>

      <p>{post.body}</p>

      <i>
        {post.answers.length > 0 ? post.answers.length : 'Nenhuma'} resposta
        {post.answers.length > 1 ? 's' : ''}
        {post.likes > 0 && ` - ${post.likes} likes`}
      </i>
      <button onClick={handleLike}>Like</button>

      <form onSubmit={onSubmit}>
        <input
          placeholder="Responda a esta pergunta!"
          value={answer}
          onChange={event => setAnswer(event.target.value)}
        />
      </form>

      <ul>
        {post.answers.map(({ _id, text, likes }) => (
          <li key={_id}>
            {text}
            {likes > 0 && ` - ${likes} likes`}
            <button onClick={() => handleLikeAnswer(_id)}>Like</button>
          </li>
        ))}
      </ul>
    </>
  );
}
