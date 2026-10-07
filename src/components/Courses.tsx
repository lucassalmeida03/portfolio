import React from 'react';


export interface Course {
  id: string | number;
  institution: string;
  status: 'concluido' | 'em_andamento';
  statusText?: string; 
  title: string;
  description: string;
  duration: string; 
  type: string;     
  period: string;   
}


const coursesData: Course[] = [
  {
    id: 1,
    institution: 'Fatec Votorantim',
    status: 'em_andamento',
    statusText: 'em andamento',
    title: 'Desenvolvimento de Software Multiplataforma',
    description: 'Fundamentos sólidos de lógica, algoritmos e estruturas de dados aplicados a ambientes web, mobile e nuvem.',
    duration: '3 anos',
    type: 'Graduação',
    period: '2024 — 2027',
  },
  {
    id: 2,
    institution: 'Rocketseat',
    status: 'concluido',
    statusText: 'Concluído',
    title: 'Especialização Full Stack Web ',
    description: 'Imersão completa no ecossistema Node.js, React com foco em projetos práticos de alto padrão de mercado.',
    duration: '190 horas',
    type: 'Intensivo',
    period: '2025',
  },
  {
    id: 3,
    institution: 'Senai Gaspar Ricardo Júnior',
    status: 'concluido',
    statusText: 'Concluído',
    title: 'Eletricista de Manutenção Eletroeletrônica',
    description: 'Fundamentos sólidos de eletricidade e eletrônica industrial com domínio na interpretação de diagramas e diagnóstico de falhas em circuitos CC e CA.',
    duration: '2 anos',
    type: 'CAI',
    period: '2021 - 2022',
  },
  {
    id: 4,
    institution: 'CCBEU',
    status: 'concluido',
    statusText: 'Concluído',
    title: 'Inglês A1 e A2',
    description: 'Conclusão de curso de inglês regular abrangendo os níveis A1 e A2 para o desenvolvimento de competências essenciais de comunicação e leitura.',
    duration: '200 horas',
    type: 'Curso de idiomas',
    period: '2023',
  },
];

export const Courses: React.FC = () => {
  return (
    <section id="formação" className="bg-[#0C0E14] text-[#E2E2EB] py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        

        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#8083FF] font-mono text-sm tracking-wider">
            02.
          </span>
          <h2 className="min-w-0 text-3xl sm:text-4xl font-semibold text-[#FFFFFF] tracking-tight leading-tight sm:whitespace-nowrap">
            <span>Formação e Cursos</span>
        
          </h2>
          <div className="hidden sm:block h-px flex-1 min-w-0 bg-linear-to-r from-[#1E1F26] via-[#282A30] to-transparent ml-2" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div 
              key={course.id}
              className="bg-[#111319] border border-[#1E1F26] hover:border-[#282A30] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-0.5 group"
            >
              <div>
           
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-[#908FA0] truncate">
                    {course.institution}
                  </span>


                  {course.status === 'concluido' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#4EDEA3]/10 text-[#4EDEA3] border border-[#4EDEA3]/20">
                      {course.statusText || 'Concluído'}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#FFB783]/10 text-[#FFB783] border border-[#FFB783]/20">
                      {course.statusText || 'Em andamento'}
                    </span>
                  )}
                </div>


                <h3 className="text-lg font-semibold text-[#FFFFFF] group-hover:text-blue-400 transition-colors duration-200 mb-3 leading-snug">
                  {course.title}
                </h3>

            
                <p className="text-sm text-[#908FA0] leading-relaxed mb-8">
                  {course.description}
                </p>
              </div>


              <div className="flex items-center justify-between pt-4 border-t border-[#1E1F26]/60 text-xs font-mono text-[#908FA0]">
                <span>
                  {course.duration} <span className="mx-1">•</span> {course.type}
                </span>
                <span>{course.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;