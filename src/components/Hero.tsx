import { ArrowDown } from 'lucide-react';
import { Button } from './Button';
import lucasImage from '../assets/lucas.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0C0E14] text-[#E2E2EB] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#8083FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
    
        <div className="relative mb-8 group">
     
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#8083FF] to-[#4EDEA3] opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500" />
          
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border border-[#1E1F26] shadow-2xl bg-[#111319]">
            <img 
              src={lucasImage}
              alt="Imagem Principal" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

  
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight text-[#FFFFFF] mb-4">
          Olá, me chamo <span className="text-blue-400">Lucas Pires de Almeida</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#908FA0] max-w-2xl font-normal mb-10">
          Desenvolvedor de Software Full Stack
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button variant="primary" icon={ArrowDown}>
            Ver Projetos
          </Button>

          <Button variant="secondary">
            Ver minha formação
          </Button>
        </div>

      </div>
    </section>
  );
};