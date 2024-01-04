import igniteLogo from '../img/Ignite-simbol.svg';

export function Header() {
  return (
    <header className='bg-ignite-gray800 flex justify-center py-5'>
      <img 
        className='h-8'
        src={igniteLogo} 
        alt="Logotipo do Ignite" 
      />
      Ignite Feed
    </header>
  );
}