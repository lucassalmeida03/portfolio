import lucasImage from '../assets/lucas.jpeg';

export const Header = () => {
  const navItems = ['Sobre', 'Formação', 'Projetos', 'Redes'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0E14]/80 backdrop-blur-md border-b border-[#1E1F26]/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
     
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#908FA0] hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#282A30]">
          <img 
            src={lucasImage}
            alt="Foto de perfil" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};