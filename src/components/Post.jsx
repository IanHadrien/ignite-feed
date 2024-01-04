/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'Posto muito bacana'
  ]);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment () {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange() {
    setNewComment(event.target.value);
  }

  function deleleComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className="bg-ignite-gray800 rounded-lg p-10 mb-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src={author.avatarUrl} />
          <div>
            <strong className="block text-ignite-gray100">
              {author.name}
            </strong>
            <span className="block text-sm text-ignite-gray400">
              {author.role}
            </span>
          </div>
        </div>

        <time 
        className="text-sm text-ignite-gray400"
        title={publishedDateFormatted} 
        dateTime="2022-05-12">
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-6 text-ignite-gray300">
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content} className="mt-4">{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content} className="mt-4"><a className="font-bold text-green-green no-underline hover:text-green-light" href="">
              {line.content}
            </a></p>
          }
        })}
      </div>

      <form  
        onSubmit={handleCreateNewComment}
        className="w-full mt-6 pt-6 border-t border-ignite-gray600 focus-within:visible focus-within:max-h-none"
      >
        <strong className="text-ignite-gray100">
          Deixe seu feedback
        </strong>

        <textarea 
          name='comment'
          className="w-full bg-ignite-gray900 border-0 resize-none h-24 pt-4 px-4 rounded-lg text-ignite-gray100 mt-4"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
        />

        {/* <footer className="invisible max-h-0"> */}
          <button className="py-4 px-6 mt-4 rounded-lg border-0 bg-green-light text-white font-bold cursor-pointer transition hover:bg-green-green" type="submit">
            Publicar
          </button>
        {/* </footer> */}

        <div className="mt-4">
          {comments.map(comment => {
            return (
              <Comment 
                key={comment} 
                content={comment} 
                onDeleteComment={deleleComment}
              />
            )
          })}
        </div>
      </form>
    </article>
  );
}