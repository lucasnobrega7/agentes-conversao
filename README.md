# Agentes de Conversão

Uma plataforma inteligente para automação de interações e otimização de processos de conversão usando IA.

## Visão Geral

Agentes de Conversão é uma aplicação que combina uma API de processamento de IA com uma interface de chat interativa. A plataforma permite criar, gerenciar e implantar agentes inteligentes personalizados para melhorar as taxas de conversão e automatizar processos.

## Tecnologias

- **Backend**: Express.js, LangChain, OpenAI
- **Frontend**: Chainlit (interface de chat Python)
- **Implantação**: Railway

## Configuração Local

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/agentes-de-conversao.git
   cd agentes-de-conversao
   ```

2. Instale as dependências:
   ```
   npm install
   pip install -r requirements.txt
   ```

3. Configure as variáveis de ambiente:
   ```
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas credenciais.

4. Inicie a aplicação:
   ```
   npm run dev
   ```

5. Acesse a interface de chat em `http://localhost:8000`.

## Implantação no Railway

1. Acesse a [plataforma Railway](https://railway.app) e faça login na sua conta
2. Crie um novo projeto clicando em "New Project"
3. Selecione "Deploy from GitHub repo"
4. Conecte ao repositório GitHub dos Agentes de Conversão
5. Configure as variáveis de ambiente necessárias:
   - `OPENAI_API_KEY`: Sua chave da API OpenAI
   - `CHAINLIT_AUTH_SECRET`: Uma string aleatória para autenticação (ex: use `openssl rand -hex 32` para gerar)
   - `CHAINLIT_URL`: https://agentesdeconversao.com.br
   - `API_URL`: https://agentesdeconversao.com.br
   - `NODE_ENV`: production
   - `PORT`: 3000
   - `CHAINLIT_SERVER_PORT`: 8000
6. Configure um domínio personalizado em "Settings > Domains"
7. Alternativa via CLI (após login):
   ```
   cd agentes-conversao
   railway link # Para conectar ao projeto criado na plataforma web
   railway up # Para fazer o deploy
   ```

## Funcionalidades

- 💬 **Chat Interativo**: Interface de conversa elegante e responsiva
- 🤖 **Agentes Personalizados**: Crie agentes específicos para diferentes casos de uso
- 📊 **Análise de Conversão**: Visualize e analise métricas de desempenho
- 🔌 **Integrações**: Conecte-se a outras plataformas via API

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).