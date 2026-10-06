import type {  ComponentPropsWithoutRef, ElementType } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
  icon?: ElementType;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300";

  const variants: Record<'primary' | 'secondary', string> = {
    // Botão Lilás destacado (Ver Projetos)
    primary: "bg-blue-400 text-[#0C0E14] hover:bg-blue-500 shadow-lg shadow-[#C0C1FF]/10",
    // Botão Escuro fosco (Baixar Currículo)
    secondary: "bg-[#282A30] text-[#E2E2EB] hover:bg-[#33343B] border border-[#33343B]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};