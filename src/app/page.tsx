import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-brand-600">
              Agentes de Conversão
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Entrar
            </Link>
            <Link href="/registro">
              <Button size="sm">Criar conta</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                Crie Agentes de IA Especializados para Aumentar suas Conversões
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Plataforma completa para criar, treinar e implementar agentes baseados em IA que automatizam
                processos de conversão e aumentam seus resultados.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/registro">
                  <Button size="lg">Começar agora</Button>
                </Link>
                <Link 
                  href="#como-funciona" 
                  className="flex items-center text-sm font-semibold leading-6 text-neutral-900"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section id="como-funciona" className="bg-neutral-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold uppercase tracking-wide text-brand-600">
                Como funciona
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Três passos simples para criar seu agente de conversão
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Nossa plataforma foi projetada para ser simples e eficiente, permitindo que você
                crie agentes poderosos em minutos, sem necessidade de conhecimentos técnicos.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-neutral-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                      <span className="text-lg font-medium text-white">1</span>
                    </div>
                    Configure seu agente
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                    <p className="flex-auto">
                      Defina o objetivo do seu agente, personalize sua aparência e configure suas capacidades
                      de acordo com suas necessidades específicas.
                    </p>
                  </dd>
                </div>
                
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-neutral-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                      <span className="text-lg font-medium text-white">2</span>
                    </div>
                    Treine com seus dados
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                    <p className="flex-auto">
                      Alimente seu agente com sua base de conhecimento, documentos, FAQs e histórico
                      de conversas para torná-lo especializado no seu negócio.
                    </p>
                  </dd>
                </div>
                
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-neutral-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                      <span className="text-lg font-medium text-white">3</span>
                    </div>
                    Implemente e analise
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                    <p className="flex-auto">
                      Integre seu agente ao seu site, WhatsApp ou outras plataformas e acompanhe seu
                      desempenho em tempo real com analytics detalhados.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <p className="text-center text-sm text-neutral-500">
                &copy; 2025 Agentes de Conversão. Todos os direitos reservados.
              </p>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-sm text-neutral-500">
                Feito com ❤️ no Brasil
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}