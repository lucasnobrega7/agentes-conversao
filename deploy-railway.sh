#!/bin/bash

echo "Script de Deploy do Agentes de Conversão para Railway"
echo "===================================================="
echo ""

# Verificar se o Railway CLI está instalado
if ! command -v railway &> /dev/null; then
    echo "Railway CLI não encontrado. Instalando..."
    npm i -g @railway/cli
fi

# Login no Railway (caso necessário)
echo "Verificando login no Railway..."
if ! railway whoami &> /dev/null; then
    echo "Por favor, faça login no Railway..."
    railway login
fi

# Listar projetos disponíveis
echo "Projetos disponíveis no Railway:"
railway list

# Solicitar projeto para link
echo ""
echo "Digite o nome exato do projeto para vincular (ex: agentesdeconversao):"
read project_name

# Vincular ao projeto
echo "Vinculando ao projeto $project_name..."
railway link

# Configurar variáveis de ambiente
echo ""
echo "Configurando variáveis de ambiente..."
echo "Digite sua OPENAI_API_KEY:"
read openai_key

# Gerar um segredo aleatório para autenticação
auth_secret=$(openssl rand -hex 16)
echo "CHAINLIT_AUTH_SECRET gerado automaticamente: $auth_secret"

# Configurar variáveis
railway variables set OPENAI_API_KEY="$openai_key"
railway variables set CHAINLIT_AUTH_SECRET="$auth_secret"
railway variables set CHAINLIT_URL="https://agentesdeconversao.com.br"
railway variables set API_URL="https://agentesdeconversao.com.br"
railway variables set NODE_ENV="production"
railway variables set PORT="3000"
railway variables set CHAINLIT_SERVER_PORT="8000"

# Fazer deploy
echo ""
echo "Iniciando deploy..."
railway up

echo ""
echo "Deploy concluído! Verifique o status no dashboard do Railway."
echo "Acesse: https://railway.app/dashboard"