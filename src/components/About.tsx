import React from "react";

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-[#0C0E14] text-[#E2E2EB] py-10 px-6 sm:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#8083FF] font-mono text-sm tracking-wider">
            01.
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-[#FFFFFF] tracking-tight whitespace-nowrap">
            Quem sou eu
          </h2>

          <div className="h-px w-full bg-linear-to-r from-[#1E1F26] via-[#282A30] to-transparent ml-2" />
        </div>

        <div className="max-w-2xl space-y-6 text-[#908FA0] text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Meu nome é Lucas, tenho 23 anos e moro em Sorocaba-SP. Recentemente,
            consolidei minha transição para a área de tecnologia após mais de
            dois anos de estudos intensos, conquistando minha primeira
            oportunidade como desenvolvedor de software. Hoje, trabalho com a
            stack TypeScript, React, Express e MongoDB. Antes disso, atuei por
            quatro anos com manutenção e automação industrial, garantindo a
            eficiência e o funcionamento de linhas de produção. Essa bagagem me
            deu uma base sólida em resolução de problemas complexos, algo que
            agora aplico diretamente na escrita de códigos eficientes.
          </p>

          <p>
            Apaixonado por lógica e resolução de problemas, busco evolução
            constante para construir uma carreira sólida e de alto impacto no
            desenvolvimento de tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
