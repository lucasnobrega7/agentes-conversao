import { useState } from 'react';

interface DashboardChartProps {
  period: '7d' | '30d' | '90d';
}

export function DashboardChart({ period }: DashboardChartProps) {
  // Normalmente este componente usaria uma biblioteca como Recharts para renderizar gráficos

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">Performance dos Agentes</h3>
        <p className="text-sm text-neutral-500">
          Mostrando dados dos últimos {period === '7d' ? '7 dias' : period === '30d' ? '30 dias' : '90 dias'}
        </p>
      </div>
      <div className="mt-6 h-80 w-full bg-neutral-100 flex items-center justify-center">
        <p className="text-neutral-500">
          Visualização de dados para período: {period}
          <br />
          <span className="text-sm text-neutral-400">
            (Esta é uma versão simplificada. O componente real usaria Recharts para renderizar gráficos de linhas, barras, etc.)
          </span>
        </p>
      </div>
    </div>
  );
}