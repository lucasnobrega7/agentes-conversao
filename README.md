# Agentes de Conversão

Plataforma para criação de agentes de IA personalizados para aumento de conversões e automação de processos.

## Tecnologias Utilizadas

- **Frontend:** Next.js 14, React 18+, Tailwind CSS 3.4.0
- **UI/UX:** Design minimalista com foco em usabilidade
- **Estado:** Zustand + React Query
- **Linguagem:** TypeScript 5.3+
- **Deployment:** Railway com domínio personalizado (dash.agentesdeconversao.com.br)

## Primeiros Passos

### Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou pnpm

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/agentes-conversao.git
   cd agentes-conversao
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   # Edite o arquivo .env.local com suas configurações
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Deploy no Railway

### Pré-requisitos

- Conta no [Railway](https://railway.app/)
- CLI do Railway instalada (opcional)
- Domínio dash.agentesdeconversao.com.br configurado no provedor DNS

### Passos para Deploy

1. Faça login no Railway:
   ```bash
   railway login
   ```

2. Inicialize o projeto:
   ```bash
   railway init
   ```

3. Configure as variáveis de ambiente necessárias no dashboard do Railway ou via CLI:
   ```bash
   railway vars set NODE_ENV=production NEXT_PUBLIC_APP_URL=https://dash.agentesdeconversao.com.br NEXTAUTH_URL=https://dash.agentesdeconversao.com.br
   ```

4. Faça deploy da aplicação:
   ```bash
   railway up
   ```

5. Configure o domínio personalizado no painel do Railway:
   - No dashboard do Railway, vá para o seu projeto
   - Clique em "Settings" → "Domains"
   - Adicione dash.agentesdeconversao.com.br como domínio personalizado
   - Siga as instruções para configurar os registros DNS necessários (geralmente um registro CNAME)

6. Verifique o status do SSL/TLS e aguarde a propagação do DNS (pode levar até 48 horas)

7. (Alternativa) Configure deploy automático conectando o repositório GitHub no dashboard do Railway

## Estrutura do Projeto

```
agentes-conversao/
├── .github/                    # Configurações de CI/CD
├── .husky/                     # Hooks de pré-commit
├── public/                     # Ativos estáticos
├── src/
│   ├── app/                    # Rotas App Router do Next.js 
│   ├── components/             # Componentes React
│   │   ├── atoms/              # Componentes básicos
│   │   ├── molecules/          # Componentes compostos
│   │   ├── organisms/          # Componentes complexos
│   │   ├── templates/          # Layouts de página
│   │   └── ui/                 # Sistema de design
│   ├── hooks/                  # Hooks personalizados
│   ├── lib/                    # Funções utilitárias
│   ├── services/               # Serviços de API
│   ├── store/                  # Gerenciamento de estado
│   ├── styles/                 # Configurações CSS
│   └── types/                  # Definições de tipos
├── tailwind.config.js          # Configuração do Tailwind
├── next.config.js              # Configuração do Next.js
├── tsconfig.json               # Configuração TypeScript
└── package.json                # Dependências
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.