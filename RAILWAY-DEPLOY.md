# Deploy do Agentes de Conversão no Railway

## Instruções Passo a Passo

### Pré-requisitos
- Conta no Railway (https://railway.app)
- Repositório já enviado para o GitHub (https://github.com/lucasnobrega7/agentes-conversao)
- Railway CLI instalado (opcional, para deploy via linha de comando)

### 1. Deploy via Interface Web (Recomendado)

1. Acesse o [Dashboard do Railway](https://railway.app/dashboard)
2. Clique em **New Project**
3. Selecione **Deploy from GitHub repo**
4. Escolha o repositório **lucasnobrega7/agentes-conversao**
5. Configure as variáveis de ambiente:

   a. Vá até a aba **Variables**
   b. Adicione as seguintes variáveis:
   
   ```
   OPENAI_API_KEY=sua_chave_api_openai
   CHAINLIT_AUTH_SECRET=uma_chave_aleatoria_para_autenticacao (pode usar: openssl rand -hex 32)
   CHAINLIT_URL=https://agentesdeconversao.com.br
   API_URL=https://agentesdeconversao.com.br
   NODE_ENV=production
   PORT=3000
   CHAINLIT_SERVER_PORT=8000
   ```

6. Configure o domínio personalizado:
   a. Vá até **Settings > Domains**
   b. Adicione o domínio `agentesdeconversao.com.br`
   c. Configure os registros DNS conforme instruções fornecidas pelo Railway

### 2. Deploy via CLI (Opcional)

Se preferir usar a linha de comando:

1. Faça login no Railway CLI:
   ```
   railway login
   ```

2. Em um terminal, navegue até o diretório do projeto:
   ```
   cd /Users/lucasrnobrega/agentes-conversao
   ```

3. Vincule o diretório a um projeto existente ou crie um novo:
   ```
   railway link
   ```
   ou
   ```
   railway init
   ```

4. Configure as variáveis de ambiente:
   ```
   railway variables set OPENAI_API_KEY=sua_chave_api_openai
   railway variables set CHAINLIT_AUTH_SECRET=uma_chave_aleatoria_para_autenticacao
   railway variables set CHAINLIT_URL=https://agentesdeconversao.com.br
   railway variables set API_URL=https://agentesdeconversao.com.br
   railway variables set NODE_ENV=production
   railway variables set PORT=3000
   railway variables set CHAINLIT_SERVER_PORT=8000
   ```

5. Faça o deploy:
   ```
   railway up
   ```

### 3. Verificação do Deploy

1. Monitore o processo de build e deploy na interface do Railway
2. Teste a aplicação acessando o domínio configurado
3. Verifique os logs em caso de problemas:
   ```
   railway logs
   ```

### Dicas de Solução de Problemas

- Se encontrar erro "No TTY detected" no CLI, use a interface web para configuração
- Certifique-se de que o domínio tenha DNS configurado corretamente
- Os logs podem mostrar erros específicos durante a inicialização da aplicação
- Verifique se todas as variáveis de ambiente foram configuradas corretamente