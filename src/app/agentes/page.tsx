import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs } from '@/components/ui/tabs';
import { Plus, Search } from 'lucide-react';
import { MainLayout } from '@/components/templates/main-layout';
import { AgentCard } from '@/components/organisms/agent-card';

export const metadata: Metadata = {
  title: 'Meus Agentes | Agentes de Conversão',
};

export default function AgentsPage() {
  // Dados de exemplo
  const agents = [
    {
      id: '1',
      name: 'Assistente de Vendas',
      description: 'Agente especializado em converter leads e responder dúvidas sobre produtos',
      interactions: 12500,
      conversionRate: 8.4,
      lastUpdated: '23 Mai 2025',
      status: 'online' as const,
    },
    {
      id: '2',
      name: 'Suporte Técnico',
      description: 'Resolução de problemas e dúvidas técnicas sobre nossos produtos',
      interactions: 8750,
      conversionRate: 5.1,
      lastUpdated: '18 Mai 2025',
      status: 'online' as const,
    },
    {
      id: '3',
      name: 'Onboarding de Usuários',
      description: 'Guia novos usuários pelos primeiros passos da plataforma',
      interactions: 3200,
      conversionRate: 12.7,
      lastUpdated: '10 Mai 2025',
      status: 'maintenance' as const,
    },
    {
      id: '4',
      name: 'Agente de Reservas',
      description: 'Automatiza o processo de agendamento e reservas de serviços',
      interactions: 5400,
      conversionRate: 9.2,
      lastUpdated: '05 Mai 2025',
      status: 'offline' as const,
    },
  ];

  return (
    <MainLayout>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            Meus Agentes
          </h1>
          <p className="mt-1 text-neutral-500">
            Gerencie todos os seus agentes de conversão
          </p>
        </div>
        <Link href="/agentes/novo">
          <Button className="shrink-0 gap-1.5">
            <Plus className="h-4 w-4" />
            Criar Novo Agente
          </Button>
        </Link>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-xs flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-neutral-400" />
          </div>
          <Input
            type="search"
            placeholder="Buscar agentes..."
            className="pl-10"
          />
        </div>
        <div className="flex space-x-6">
          <button
            className="relative py-3 text-sm font-medium text-brand-600"
            aria-current="page"
          >
            Todos
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-600" />
          </button>
          <button
            className="relative py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            Online
          </button>
          <button
            className="relative py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            Offline
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>
    </MainLayout>
  );
}