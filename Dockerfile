FROM python:3.10

# Instalar Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

WORKDIR /app

# Copiar os requisitos Python primeiro para aproveitar o cache
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar os arquivos package.json e package-lock.json e instalar dependências
COPY package*.json ./
RUN npm ci

# Copiar o resto do projeto
COPY . .

# Verificar se os arquivos críticos existem
RUN ls -la && \
    echo "====== PROJECT STRUCTURE ======" && \
    find . -type f -name "*.js" | sort && \
    echo "====== PACKAGE.JSON ======" && \
    cat package.json && \
    echo "====== SRC DIRECTORY ======" && \
    ls -la src/ && \
    echo "====== APP.PY ======" && \
    cat app.py

# Expor portas
EXPOSE 3000 8000

# Comando para iniciar
CMD ["npm", "run", "start"]