import { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, BarChart2, ExternalLink, MoreHorizontal, MessageSquare } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

interface AgentCardProps {
  id: string;
  name: string;
  description: string;
  interactions: number;
  conversionRate: number;
  lastUpdated: string;
  status: 'online' | 'offline' | 'maintenance';
  image?: string;
}

export function AgentCard({
  id,
  name,
  description,
  interactions,
  conversionRate,
  lastUpdated,
  status,
  image,
}: AgentCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const statusColor = {
    online: 'bg-success',
    offline: 'bg-neutral-400',
    maintenance: 'bg-warning',
  };
  
  const statusText = {
    online: 'Online',
    offline: 'Offline',
    maintenance: 'Em manutenção',
  };
  
  return (
    <Card interactive className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <User className="h-5 w-5" />
              )}
            </div>
            <div>
              <CardTitle>{name}</CardTitle>
              <div className="mt-1 flex items-center">
                <span
                  className={`mr-2 inline-block h-2 w-2 rounded-full ${statusColor[status]}`}
                />
                <CardDescription className="m-0">
                  {statusText[status]}
                </CardDescription>
              </div>
            </div>
          </div>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Opções"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-neutral-200 bg-white py-1 shadow-lg">
                <Link
                  href={`/agentes/${id}/editar`}
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Editar agente
                </Link>
                <Link
                  href={`/agentes/${id}/analytics`}
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver analytics
                </Link>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-error hover:bg-neutral-100"
                  onClick={() => {
                    // Lógica para desativar o agente
                    setIsMenuOpen(false);
                  }}
                >
                  Desativar agente
                </button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-neutral-600">{description}</p>
        
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-500">Interações</span>
            <div className="mt-1 flex items-center">
              <MessageSquare className="mr-1.5 h-4 w-4 text-neutral-400" />
              <span className="text-lg font-semibold">{formatNumber(interactions)}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-500">Taxa de Conversão</span>
            <div className="mt-1 flex items-center">
              <BarChart2 className="mr-1.5 h-4 w-4 text-neutral-400" />
              <span className="text-lg font-semibold">{conversionRate}%</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-neutral-200 pt-4">
        <div className="text-xs text-neutral-500">
          Atualizado: {lastUpdated}
        </div>
        <Link href={`/agentes/${id}`}>
          <Button variant="ghost" size="sm" className="gap-1.5">
            Ver detalhes
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}