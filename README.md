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

1. Configure seu projeto no Railway
2. Adicione as variáveis de ambiente necessárias:
   - `OPENAI_API_KEY`
   - `CHAINLIT_AUTH_SECRET`
   - `CHAINLIT_API_KEY`
   - `CHAINLIT_URL`
3. Implante a aplicação usando:
   ```
   railway up
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