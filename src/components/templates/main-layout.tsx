import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, Settings, BarChart3, PanelLeft, 
  Users, Database, MessagesSquare, Menu, X, LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const navigation = [
    { name: 'Visão Geral', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Meus Agentes', href: '/agentes', icon: Users },
    { name: 'Base de Conhecimento', href: '/conhecimento', icon: Database },
    { name: 'Integrações', href: '/integracoes', icon: PanelLeft },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Conversas', href: '/conversas', icon: MessagesSquare },
    { name: 'Configurações', href: '/configuracoes', icon: Settings },
  ];
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar para desktop */}
      <div className="hidden border-r border-neutral-200 bg-white md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <Link href="/dashboard" className="text-xl font-bold tracking-tight text-brand-600">
              Agentes de Conversão
            </Link>
          </div>
          <div className="mt-8 flex flex-1 flex-col px-2">
            <nav className="flex-1 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                      isActive
                        ? 'bg-brand-100 text-brand-700'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                    )}
                  >
                    <item.icon
                      className={cn(
                        'mr-3 h-5 w-5 flex-shrink-0',
                        isActive ? 'text-brand-600' : 'text-neutral-500 group-hover:text-neutral-700'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="border-t border-neutral-200 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-neutral-700"
              onClick={() => {/* Função de logout */}}
            >
              <LogOut className="mr-3 h-5 w-5 text-neutral-500" />
              Sair
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden',
          sidebarOpen ? 'block' : 'hidden'
        )}
      >
        <div className="fixed inset-0 bg-neutral-900/30" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-5">
            <Link href="/dashboard" className="text-xl font-bold tracking-tight text-brand-600">
              Agentes de Conversão
            </Link>
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-md"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-neutral-500" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-2 py-4">
            <nav className="flex-1 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                      isActive
                        ? 'bg-brand-100 text-brand-700'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={cn(
                        'mr-3 h-5 w-5 flex-shrink-0',
                        isActive ? 'text-brand-600' : 'text-neutral-500 group-hover:text-neutral-700'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="border-t border-neutral-200 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-neutral-700"
              onClick={() => {/* Função de logout */}}
            >
              <LogOut className="mr-3 h-5 w-5 text-neutral-500" />
              Sair
            </Button>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 border-b border-neutral-200 bg-white md:hidden">
          <button
            type="button"
            className="px-4 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 items-center justify-center">
            <Link href="/dashboard" className="text-lg font-bold tracking-tight text-brand-600">
              Agentes de Conversão
            </Link>
          </div>
        </div>
        
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}