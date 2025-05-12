'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { MainLayout } from '@/components/templates/main-layout';

export default function CreateAgentPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('basic');
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    category: '',
    initialMessage: 'Olá! Como posso ajudar você hoje?',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui normalmente seria feita uma chamada API para salvar o agente
    console.log('Formulário enviado:', formState);
    
    // Redirecionar para a lista de agentes após a criação bem-sucedida
    router.push('/agentes');
  };

  const tabs = [
    {
      id: 'basic',
      label: 'Informações Básicas',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="Nome do Agente"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Ex: Assistente de Vendas"
              required
            />
            <Input
              label="Categoria"
              name="category"
              value={formState.category}
              onChange={handleChange}
              placeholder="Ex: Vendas, Suporte, Atendimento"
            />
          </div>
          
          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-900">
              Descrição
            </label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              placeholder="Descreva a função deste agente..."
            />
          </div>
          
          <div>
            <Input
              label="Mensagem Inicial"
              name="initialMessage"
              value={formState.initialMessage}
              onChange={handleChange}
              placeholder="Mensagem exibida quando o usuário inicia uma conversa"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'flow',
      label: 'Fluxo de Conversação',
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-600">
            Desenhe o fluxo de conversação do seu agente conectando nós de intenção, mensagens, ações e condicionais.
          </p>
          <div className="flex items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
            <div>
              <p className="mb-2 text-neutral-600">Editor de fluxo será exibido aqui</p>
              <p className="text-sm text-neutral-500">
                Componente FlowEditor será integrado nesta área
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'knowledge',
      label: 'Base de Conhecimento',
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-600">
            Selecione as bases de conhecimento que seu agente pode utilizar para responder perguntas.
          </p>
          <div className="flex items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
            <div>
              <p className="mb-2 text-neutral-600">Seletor de conhecimento será exibido aqui</p>
              <p className="text-sm text-neutral-500">
                Componente KnowledgeSelector será integrado nesta área
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'integrations',
      label: 'Integrações',
      content: (
        <div>
          <p className="mb-4 text-sm text-neutral-600">
            Conecte seu agente a sistemas externos para acessar dados ou executar ações.
          </p>
          <div className="flex items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
            <div>
              <p className="mb-2 text-neutral-600">Seletor de integrações será exibido aqui</p>
              <p className="text-sm text-neutral-500">
                Componente IntegrationSelector será integrado nesta área
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          Criar Novo Agente
        </h1>
        <p className="mt-1 text-neutral-500">
          Configure todas as propriedades do seu agente de conversão
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Configuração do Agente</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </CardContent>
          <CardFooter className="flex justify-between border-t border-neutral-200 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancelar
            </Button>
            <Button type="submit">Criar Agente</Button>
          </CardFooter>
        </Card>
      </form>
    </MainLayout>
  );
}