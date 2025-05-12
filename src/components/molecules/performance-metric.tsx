import { Card, CardContent } from '@/components/ui/card';

interface PerformanceMetricProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export function PerformanceMetric({
  title,
  value,
  change,
  icon,
}: PerformanceMetricProps) {
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