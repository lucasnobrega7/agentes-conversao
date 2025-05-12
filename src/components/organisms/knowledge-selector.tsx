import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, File, Database, X } from 'lucide-react';

// Componente simplificado para seleção de base de conhecimento
export function KnowledgeSelector() {
  // Dados de exemplo para bases de conhecimento
  const [selectedSources, setSelectedSources] = useState<string[]>([
    'documentacao-produtos',
    'faq-geral',
  ]);
  
  const knowledgeBases = [
    {
      id: 'documentacao-produtos',
      name: 'Documentação de Produtos',
      documentsCount: 48,
      type: 'documents',
    },
    {
      id: 'faq-geral',
      name: 'FAQ Geral',
      documentsCount: 120,
      type: 'faq',
    },
    {
      id: 'base-atendimento',
      name: 'Base de Atendimento',
      documentsCount: 85,
      type: 'database',
    },
    {
      id: 'artigos-blog',
      name: 'Artigos do Blog',
      documentsCount: 32,
      type: 'web',
    },
  ];
  
  const toggleSource = (id: string) => {
    if (selectedSources.includes(id)) {
      setSelectedSources(selectedSources.filter((sourceId) => sourceId !== id));
    } else {
      setSelectedSources([...selectedSources, id]);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-neutral-900">Bases de Conhecimento</h3>
          <p className="text-sm text-neutral-500">
            Selecione as bases que seu agente pode utilizar para responder perguntas
          </p>
        </div>
        <Button size="sm" variant="outline" className="gap-1">
          <Plus className="h-4 w-4" />
          Nova Base
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {knowledgeBases.map((kb) => {
          const isSelected = selectedSources.includes(kb.id);
          
          return (
            <Card
              key={kb.id}
              className={`cursor-pointer border-2 p-4 transition-all duration-200 ${
                isSelected
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
              onClick={() => toggleSource(kb.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="mr-3 rounded-md bg-neutral-100 p-2">
                    {kb.type === 'documents' ? (
                      <File className="h-5 w-5 text-brand-500" />
                    ) : (
                      <Database className="h-5 w-5 text-brand-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">{kb.name}</h4>
                    <p className="text-sm text-neutral-500">
                      {kb.documentsCount} documentos
                    </p>
                  </div>
                </div>
                {isSelected && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white">
                    <X className="h-3 w-3" />
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}