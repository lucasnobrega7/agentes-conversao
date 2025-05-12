import Link from 'next/link';

export function RecentAgentsTable() {
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