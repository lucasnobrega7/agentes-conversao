#!/bin/bash

# Script para deploy no Railway
echo "Iniciando deploy no Railway"

# Verificar se está logado no Railway
railway whoami
if [ $? -ne 0 ]; then
  echo "Falha ao verificar usuário do Railway. Tente fazer login com: railway login"
  exit 1
fi

# Verificar se o Railway CLI está instalado
if ! command -v railway &> /dev/null; then
  echo "Railway CLI não encontrado. Instale com: npm i -g @railway/cli"
  exit 1
fi

# Vincular ao projeto Railway
echo "Vinculando ao projeto Railway..."
railway link -p 7fcd408b-255a-4b4e-9ec1-0fe17fcd10a6 -e 5c57c3b8-b661-4b17-887d-31f596cd6fe0

# Enviar as alterações para o GitHub
echo "Enviando alterações para o GitHub..."
git add .
git commit -m "Update for Railway deployment"
git push origin main

echo "Deployment iniciado. O Railway irá fazer o build e deploy automaticamente a partir do GitHub."
echo "Acesse https://railway.app/dashboard para monitorar o progresso."
echo "O site estará disponível em https://agentesdeconversao.com.br após o deploy."