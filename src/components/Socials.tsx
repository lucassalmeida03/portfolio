import React from 'react';
import githubSvg from "../assets/github.svg"
import linkedinSvg from "../assets/linkedin.svg"

export interface SocialLink {
  id: string | number;
  name: string;
  handle: string;
  url: string;
  icon: string;
}

const socialsData: SocialLink[] = [
  {
    id: 1,
    name: 'GitHub',
    handle: '@lucassalmeida03',
    url: 'https://github.com/lucassalmeida03',
    icon: githubSvg,
  },
  {
    id: 2,
    name: 'LinkedIn',
    handle: 'in/lucas-almeida',
    url: 'https://www.linkedin.com/in/lucas-almeida-5546a0264/',
    icon: linkedinSvg,
  },
];

export const Socials: React.FC = () => {
  return (
    <section id="redes" className="bg-[#0C0E14] text-[#E2E2EB] py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#8083FF] font-mono text-sm tracking-wider">
            04.
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#FFFFFF] tracking-tight whitespace-nowrap">
            Redes Sociais
          </h2>
          <div className="h-px w-full bg-linear-to-r from-[#1E1F26] via-[#282A30] to-transparent ml-2" />
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          {socialsData.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 bg-[#111319] border border-[#1E1F26] hover:border-[#282A30] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:translate-y-0.5 group shadow-lg shadow-black/20"
              >
              
                <div className="w-12 h-12 rounded-xl bg-[#1E1F26]/60 border border-[#282A30]/50 flex items-center justify-center text-[#E2E2EB] group-hover:text-[#60A5FA] group-hover:border-[#60A5FA]/30 transition-colors duration-200 shrink-0">
                  <img src={Icon} alt={Icon} />
                </div>


                <div className="flex flex-col overflow-hidden">
                  <span className="text-base font-semibold text-[#FFFFFF] group-hover:text-[#60A5FA] transition-colors duration-200">
                    {social.name}
                  </span>
                  <span className="text-xs font-mono text-[#908FA0] truncate">
                    {social.handle}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Socials;