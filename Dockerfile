FROM node:18-slim

# Instalar Python e dependências necessárias
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar os arquivos de configuração do Node.js
COPY package*.json ./

# Instalar dependências do Node.js
RUN npm install

# Copiar os arquivos de configuração do Python
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# Copiar o restante dos arquivos do projeto
COPY . .

# Portas expostas
EXPOSE 3000 8000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]