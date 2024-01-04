import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className="bg-ignite-gray800 rounded-lg overflow-hidden">
      <img 
        className="w-full h-16 object-cover"
        src="https://images.unsplash.com/photo-1695653422287-81cfeeb96ade?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className="flex flex-col items-center -mt-8">
        <Avatar hasBorder src="https://github.com/IanHadrien.png" />

        <strong className="mt-4 text-ignite-gray400">Ian Hadrien</strong>
        <span className="text-sm text-ignite-gray600">Web Develop</span>
      </div>

      <footer className="border-t border-t-ignite-gray600 mt-6 py-6 px-8">
        <a className="bg-transparent transition text-green-green border border-green-green rounded-lg h-12 py-0 px-6 font-bold no-underline flex items-center justify-center hover:bg-green-green hover:text-white" href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}