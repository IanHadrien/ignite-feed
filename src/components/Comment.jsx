/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className="mt-6 flex rounded-lg">
      <div className="rounded-lg">
        <Avatar src="https://github.com/IanHadrien.png" />
      </div>

      <div className="flex-1">
        <div className="bg-ignite-gray700 rounded-lg p-4">
          <header className='flex items-start justify-between'>
            <div className="auAnTi">
              <strong className='block text-sm'>Ian Hadrien</strong>
              <time 
                className="block text-sm text-ignite-gray400"
                title="11 de maio as 8 e 13" 
                dateTime="2022-05-12">
                  cerca de 1h atrás
              </time>
            </div>

            <button 
              onClick={handleDeleteComment}
              className='bg-transparent border-0 text-ignite-gray400 cursor-pointer rounded-sm transition hover:text-red-redDanger'
              title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p className='mt-4 text-ignite-gray300'>{content}</p>
        </div>

        <footer className='mt-4 IDFooter'>
          <button 
            onClick={() => setLikeCount(likeCount + 1)}
            className='bg-transparent border-0 text-ignite-gray400 cursor-pointer flex items-center hover:text-ignite-gray300'
          >
            <ThumbsUp />
            aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}