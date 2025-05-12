import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

// Carregando a fonte Inter como substituta da OpenAI Sans
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // Ajustando os pesos para melhor similaridade com OpenAI Sans
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Agentes de Conversão | Crie e implemente agentes de IA especializados',
  description: 'Plataforma para criação de agentes de IA personalizados para aumento de conversões e automação de processos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="min-h-screen bg-neutral-50 font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}