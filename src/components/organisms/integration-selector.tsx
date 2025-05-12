import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, CheckCircle } from 'lucide-react';

// Componente simplificado para seleção de integrações
export function IntegrationSelector() {
  // Dados de exemplo para integrações disponíveis
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>([
    'google-calendar',
  ]);
  
  const availableIntegrations = [
    {
      id: 'google-calendar',
      name: 'Google Calendar',
      description: 'Permite ao agente agendar eventos e consultar disponibilidade',
      icon: '📅',
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Conecte seu agente a milhares de aplicativos',
      icon: '⚡',
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Processamento de pagamentos e faturamento',
      icon: '💳',
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      description: 'Integração com CRM para gestão de leads',
      icon: '🏢',
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Notificações e comunicação em canais',
      icon: '💬',
    },
    {
      id: 'sheets',
      name: 'Google Sheets',
      description: 'Leitura e gravação de dados em planilhas',
      icon: '📊',
    },
  ];
  
  const toggleIntegration = (id: string) => {
    if (activeIntegrations.includes(id)) {
      setActiveIntegrations(activeIntegrations.filter((intId) => intId !== id));
    } else {
      setActiveIntegrations([...activeIntegrations, id]);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-neutral-900">Integrações</h3>
          <p className="text-sm text-neutral-500">
            Conecte seu agente a ferramentas e serviços externos
          </p>
        </div>
        <Button size="sm" variant="outline" className="gap-1">
          <Plus className="h-4 w-4" />
          Nova Integração
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {availableIntegrations.map((integration) => {
          const isActive = activeIntegrations.includes(integration.id);
          
          return (
            <Card
              key={integration.id}
              className={`relative cursor-pointer p-5 transition-all duration-200 ${
                isActive ? 'border-brand-500 bg-brand-50' : 'hover:border-neutral-300'
              }`}
              onClick={() => toggleIntegration(integration.id)}
            >
              {isActive && (
                <div className="absolute right-3 top-3">
                  <CheckCircle className="h-5 w-5 text-brand-500" />
                </div>
              )}
              
              <div className="mb-2 text-2xl">{integration.icon}</div>
              <h4 className="mb-1 font-medium text-neutral-900">{integration.name}</h4>
              <p className="text-sm text-neutral-600">{integration.description}</p>
              
              {isActive && (
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800">
                    Ativo
                  </span>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}