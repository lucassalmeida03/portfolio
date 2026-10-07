import React from 'react';
import { Code } from 'lucide-react';

export interface Project {
  id: string | number;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    category: 'Front-end',
    title: 'Achamigos - Front-end',
    description: 'Uma interface moderna para adoção de animais acolhedora e responsiva, com foco em navegabilidade rápida, filtros precisos e cartões visuais que destacam as fotos e personalidades dos animais.',
    technologies: ['Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/luanzeraa-lab/Achamigos-FrontEnd-V4'
  },
  {
    id: 2,
    category: 'Back-end',
    title: 'Achamigos - Back-end',
    description: 'API RESTful responsável por gerenciar o catálogo de pets disponíveis para adoção com buscas otimizadas.',
    technologies: ['Node.js', 'Docker', 'MongoDB'],
    githubUrl: 'https://github.com/luanzeraa-lab/Achamigos-BackEnd-V4'
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="bg-[#0C0E14] text-[#E2E2EB] py-10 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        

        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#8083FF] font-mono text-sm tracking-wider">
            03.
          </span>
          <h2 className="min-w-0 text-3xl sm:text-4xl font-semibold text-[#FFFFFF] tracking-tight leading-tight sm:whitespace-nowrap">
            Projetos em Destaque
          </h2>
          <div className="hidden sm:block h-px flex-1 min-w-0 bg-linear-to-r from-[#1E1F26] via-[#282A30] to-transparent ml-2" />
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => {


            return (
              <div 
                key={project.id}
                className="bg-[#111319] border border-[#1E1F26] hover:border-[#282A30] rounded-2xl p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-0.5 group"
              >
                <div>
                 
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-3 py-1 rounded-md text-xs font-mono text-[#908FA0] bg-[#1E1F26]/60 border border-[#282A30]/50">
                      {project.category}
                    </span>

                  </div>


                  <h3 className="text-2xl font-semibold text-[#FFFFFF] group-hover:text-blue-400 transition-colors duration-200 mb-3">
                    {project.title}
                  </h3>


                  <p className="text-sm text-[#908FA0] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-[#908FA0] bg-[#1E1F26]/40 border border-[#282A30]/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl || '#'}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-[#1E1F26]/80 text-[#E2E2EB] hover:bg-[#282A30] border border-[#282A30] transition-all duration-200"
                  >
                    <Code className="w-3.5 h-3.5" />
                    Código (GitHub)
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;