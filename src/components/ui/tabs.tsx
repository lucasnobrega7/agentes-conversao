import { useId } from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  const instanceId = useId();
  
  return (
    <div className={cn('w-full', className)}>
      <div className="border-b border-neutral-200">
        <div className="flex space-x-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={`${instanceId}-${tab.id}`}
                onClick={() => onChange(tab.id)}
                className={cn(
                  'relative py-3 text-sm font-medium transition-colors',
                  isActive 
                    ? 'text-brand-600' 
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={`${instanceId}-content-${tab.id}`}
            className={cn(activeTab === tab.id ? 'block' : 'hidden')}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}