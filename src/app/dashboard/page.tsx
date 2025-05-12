import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, TrendingUp, Users, MessageSquare, Plus } from 'lucide-react';
import { MainLayout } from '@/components/templates/main-layout';

export const metadata: Metadata = {
  title: 'Dashboard | Agentes de Conversão',
};

// Componente para métricas de performance
function PerformanceMetric({ 
  title, 
  value, 
  change, 
  icon 
}: { 
  title: string; 
  value: string; 
  change: number; 
  icon: React.ReactNode 
}) {
  const isPositive = change >= 0;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold">{value}</p>
          </div>
          <div className="rounded-full bg-neutral-100 p-2">{icon}</div>
        </div>
        <div className="mt-4 flex items-center">
          <span
            className={`mr-1 text-sm font-medium ${
              isPositive ? 'text-success' : 'text-error'
            }`}
          >
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="text-xs text-neutral-500">vs. último período</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente para a tabela de agentes recentes
function RecentAgentsTable() {
  const agents = [
    {
      id: '1',
      name: 'Assistente de Vendas',
      interactions: 12500,
      conversionRate: 8.4,
      status: 'online',
    },
    {
      id: '2',
      name: 'Suporte Técnico',
      interactions: 8750,
      conversionRate: 5.1,
      status: 'online',
    },
    {
      id: '3',
      name: 'Onboarding de Usuários',
      interactions: 3200,
      conversionRate: 12.7,
      status: 'maintenance',
    },
  ];
  
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-neutral-50 text-xs uppercase text-neutral-700">
          <tr>
            <th scope="col" className="px-6 py-3">Nome do Agente</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Interações</th>
            <th scope="col" className="px-6 py-3">Taxa de Conversão</th>
            <th scope="col" className="px-6 py-3 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="border-b border-neutral-200 bg-white">
              <td className="px-6 py-4 font-medium text-neutral-900">{agent.name}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    agent.status === 'online'
                      ? 'bg-green-100 text-success'
                      : agent.status === 'maintenance'
                      ? 'bg-amber-100 text-warning'
                      : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {agent.status === 'online'
                    ? 'Online'
                    : agent.status === 'maintenance'
                    ? 'Em manutenção'
                    : 'Offline'}
                </span>
              </td>
              <td className="px-6 py-4">{agent.interactions.toLocaleString()}</td>
              <td className="px-6 py-4">{agent.conversionRate}%</td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/agentes/${agent.id}`}
                  className="font-medium text-brand-600 hover:text-brand-700"
                >
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componente para o gráfico do dashboard
function DashboardChart({ period }: { period: string }) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">Performance dos Agentes</h3>
        <p className="text-sm text-neutral-500">Mostrando dados dos últimos {period === '7d' ? '7 dias' : period === '30d' ? '30 dias' : '90 dias'}</p>
      </div>
      <div className="mt-6 h-80 w-full bg-neutral-100 flex items-center justify-center">
        <p className="text-neutral-500">Gráfico de performance será exibido aqui</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-neutral-500">
            Acompanhe o desempenho dos seus agentes de conversão
          </p>
        </div>
        <Link href="/agentes/novo">
          <Button className="shrink-0 gap-1.5">
            <Plus className="h-4 w-4" />
            Criar Novo Agente
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <PerformanceMetric
          title="Total de Interações"
          value="45.7K"
          change={12.5}
          icon={<MessageSquare className="h-5 w-5 text-brand-600" />}
        />
        <PerformanceMetric
          title="Conversões"
          value="3.2K"
          change={23.1}
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
        <PerformanceMetric
          title="Taxa de Conversão"
          value="7.1%"
          change={4.3}
          icon={<BarChart className="h-5 w-5 text-purple-600" />}
        />
        <PerformanceMetric
          title="Usuários Únicos"
          value="18.3K"
          change={-2.4}
          icon={<Users className="h-5 w-5 text-orange-500" />}
        />
      </div>

      <div className="mt-8">
        <Card className="overflow-hidden">
          <DashboardChart period="7d" />
        </Card>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">
            Agentes Recentes
          </h2>
          <Link href="/agentes">
            <Button variant="ghost" size="sm" className="gap-1">
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
        <Card>
          <RecentAgentsTable />
        </Card>
      </div>
    </MainLayout>
  );
}